import React, { Component } from 'react';
import { Grid, Row, Col, Table, Radio } from 'react-bootstrap';
import config from '../../config';
import Card from '../../components/Card/Card.jsx';
import Loading from '../../components/Loading/Loading';
import Pitstop from '../../models/pitstop';
import { Checkbox, Table as MatTable } from "material-ui";
// import { Edit, Close, Check } from "material-ui/icons";

class Shiny extends Component {

    constructor(props){
        super(props);
        const labels = Pitstop.attributeLabels().shiny;
        labels.id = Pitstop.attributeLabels().id;
        labels.url = Pitstop.attributeLabels().url;
        labels.price = Pitstop.attributeLabels().price;
        labels.price_old = Pitstop.attributeLabels().price_old;
        this.state = {
            labels,
            activeLabes: [
                {key: 'photo', value: true },
                {key: 'code', value: true },
                {key: 'name_new', value: true },
                {key: 'url', value: true },  
                {key: 'brand', value: false },
                {key: 'load', value: false },
                {key: 'speed', value: false },
                {key: 'time', value: false },
                {key: 'ts', value: false },
                {key: 'width', value: false },
                {key: 'rf', value: false },
                {key: 'thorn', value: false },
                {key: 'param', value: false },
                {key: 'price', value: false },
                {key: 'price1', value: false },
                {key: 'kol', value: false },
                {key: 'desc', value: false },                
            ],
        }
    }

    componentWillMount(){
        const { getImageList, fetchSearch, token, shiny:{page,sort,limit} } = this.props;
        fetchSearch(token,page,{},sort,limit);
    }
    lineClick(prop,key){
        const { shiny:{ list, newsite, page }, pushEdit, fetchSearch, token } = this.props;
        console.log(page)
        fetchSearch(token,(page+1));        
    }
    itemClick(prop,key){        
        console.log("itemClick",prop,key)
    }
    prediction(){
        const { shiny } = this.props;
        let array = [];
        if( shiny.list.length > 0){
            shiny.list.forEach((model) => {
                if(model.getShiny().code){
                    array.push([model.getShiny().code, model.getShiny().name_new ]);
                }
            });
        }
        return array;
    }
         
    navigation(page){
        const { fetchSearch, token, shiny:{ sort, limit, total } } = this.props;
        if(page === 0 || page !== 1 && page > Math.ceil(total/limit)+1) {
            return
        }
        fetchSearch(token,page,{},sort,limit);
    }
    getSorting(name){
        const { fetchSearch, token, shiny:{ sort, page, limit } } = this.props;
        const p = Pitstop.getAttribute(name);
        if(sort.indexOf('-'+p) !== -1){
            fetchSearch(token,page,{},p,limit);
            return;
        }
        if(sort.indexOf(p) !== -1){
            fetchSearch(token,page,{},'-'+p,limit);
            return;
        }
        fetchSearch(token,page,{},p,limit);
    }

    compareObjects(a,b) {
        if (a.last_nom < b.last_nom)
            return -1;
        if (a.last_nom > b.last_nom)
            return 1;
        return 0;
    }
    compareArray(a,b,key,sorting){
        if (!sorting && a[key] > b[key]) return -1;
        if (!sorting && a[key] < b[key]) return 1;
        if (sorting && a[key] < b[key]) return -1;
        if (sorting && a[key] > b[key]) return 1;
        return 0;
    }

    handleSearch(value){
        const { page, limit } = this.state;
        const t = this;
        if(t.timer != null){
            clearTimeout(t.timer);
        }
        t.timer = setTimeout(()=>{
            const v = this.filterSearch(value);
            const pages = Math.ceil(v.length/limit);
            const start = (page-1)*limit;
            const stop  = start + limit;
            t.setState({search:value, page:page, pages:pages, body:v.slice(start,stop)});            
        },250);
    }
    filterSearch(search){
        const { tdArray } = this.props   
        let newBody = tdArray;
        if(search.length > 0){
            newBody = tdArray.filter((item)=>{
                for(let i in item){
                    if(typeof item[i] === 'string'){
                        if(item,search,item[i].toLowerCase().indexOf(search.toLowerCase()) !== -1){ return true; }
                    }
                }
                return false;
            })

            
        }
        return newBody;
    }
    renderNavigation(){
        const { shiny: { page, limit, total }} = this.props;
        let array = [];
        array.push(<div key="table-start" className="table-navigation-key" onClick={()=>this.navigation(1)}>Первая</div>)
        array.push(<div key="table-d1" className="table-navigation-delimetr">|</div>)
        array.push(<div key="table-back" className="table-navigation-key" onClick={()=>this.navigation(page-1 || 1)}>Предыдущая</div>)
        array.push(<div key="table-page" className="table-navigation-key action">{page}</div>)
        array.push(<div key="table-next" className="table-navigation-key" onClick={()=>this.navigation(page+1)}>Следующая</div>)
        array.push(<div key="table-s2" className="table-navigation-delimetr">|</div>)
        array.push(<div key="table-finish" className="table-navigation-key" onClick={()=>this.navigation(Math.ceil(total/limit))}>Последняя</div>)
        return (
            <div className="table-navigation">
                {array}
                <div className="table-navigation-info">Показано {page*limit} из {total}</div>
            </div>
        );
    }
    sortingClass(key){
        const { shiny: { sort } } = this.props;
        console.log(key,sort);
        if(sort.indexOf(key) !== -1){
            if(sort.indexOf('-') !== -1){
                return "fa fa-sort-down";
            }
            return "fa fa-sort-up";
        }
        return "fa fa-sort"
    }
    togleLabel(label){
        let activeLabes = this.state.activeLabes;
        activeLabes.forEach((item,i)=>{
            if(item == label){
                activeLabes[i] = {...item,value:!item.value}
            }
        })
        this.setState({activeLabes});
    }
    render() {
        const { shiny: { list, newsite, page, loading }} = this.props;
        const { labels, activeLabes } = this.state;
        const dataset = this.prediction();
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={9}>                
                            <Card
                                title="Список шин"
                                category={<input className="form-control table-search" placeholder="Поиск" type="text" onChange={(e)=>this.handleSearch(e.target.value)}/>}
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <div className="over-x">
                                        <Loading show={ loading } />
                                        <Table hover striped>
                                            <thead>
                                                <tr>
                                                    {
                                                        activeLabes.map((label,key)=>{
                                                            if(label.value)
                                                                return <th key={`label${key}`} className="table-sort" onClick={()=>this.getSorting(label.key)}><i className={this.sortingClass(label.key)}></i>{labels[label.key]}</th>
                                                            return null;
                                                        })
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    {
                                                        list.map((pit,key)=>{
                                                            const item = pit.getShiny();
                                                            return (
                                                                <tr key={key}>
                                                                    {
                                                                        activeLabes.map((label,key)=>{
                                                                            if(label.value){
                                                                                if (label.key === 'photo'){
                                                                                    if(item[label.key] == '')
                                                                                        return <td key={`data${key}`}><img className="table-preview-mini" src={`https://mastershina.kz/upload/images/none_pic.jpg`} /></td>;
                                                                                    return <td key={`data${key}`}><img className="table-preview-mini" src={`https://mastershina.kz/upload/images/${item[label.key]}`} /></td>;
                                                                                }
                                                                                if (label.key === 'url'){
                                                                                    return <td key={`data${key}`}><a target="_blank" href={`https://mastershina.kz/produkt/${pit.url}`}>Проверить</a></td>;
                                                                                }
                                                                                if (label.key === 'desc'){
                                                                                    return <td key={`data${key}`} dangerouslySetInnerHTML={{__html:item[label.key]}}></td>;
                                                                                }
                                                                                return <td key={`data${key}`}>{item[label.key]}</td>
                                                                            }
                                                                                
                                                                            return null;
                                                                        })
                                                                    }
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                            </tbody>
                                        </Table>
                                        {this.renderNavigation()}
                                    </div>
                                }
                            />                
                        </Col>
                        <Col md={3}>                
                            <Card
                                title="Выбор полей"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <div className="over-y h-600">
                                        <MatTable>
                                            <tbody>
                                                {
                                                    activeLabes.map((item,key)=>{
                                                        return (
                                                            <tr key={`view-label-${key}`}>
                                                                <td>
                                                                    <Checkbox
                                                                        checked={item.value}
                                                                        onClick={() => this.togleLabel(item)}
                                                                    />
                                                                </td>
                                                                <td className="pointer" onClick={() => this.togleLabel(item)}>{labels[item.key]}</td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                            </tbody>
                                        </MatTable>
                                    </div>
                                }
                            />                
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Shiny;
