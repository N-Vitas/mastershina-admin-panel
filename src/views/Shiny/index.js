import React, { Component } from 'react';
import { Grid, Row, Col, Table, MenuItem, DropdownButton, Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
// // import config from '../../config';
import Card from '../../components/Card/Card.jsx';
import Loading from '../../components/Loading/Loading';
import Pitstop from '../../models/pitstop';
import { Checkbox, Table as MatTable, Tooltip,IconButton } from "material-ui";

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
            search: '',
            openAttr: false,
            activeLabes: [
                {key: 'photo', value: true },
                {key: 'code', value: true },
                {key: 'name_new', value: true },
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
            activeSearch: [
                {key: 'tire_brand', value: false, title: 'По бренду'},
                {key: '1c_code', value: false, title: 'По коду срм'},
                {key: 'tire_name_new', value: true, title: 'По названию'},
                {key: 'tire_load', value: false, title: 'По Индексу нагрузки'},
                {key: 'tire_speed', value: false, title: 'По индексу скорости'},
                {key: 'tire_time', value: false, title: 'По Сезонности'},
                {key: 'tire_ts', value: false, title: 'По типу кузова'},
                {key: 'tire_width', value: false, title: 'По Ширине/Высоте/Диаметру'},
                {key: 'tire_price', value: false, title: 'По цене'},
                {key: 'tire_price1', value: false, title: 'По старой цене'},
                {key: 'tire_kol', value: false, title: 'По количеству'},
                {key: 'tire_desc', value: false, title: 'По описанию'},
            ],
        }
        this.timer = null;
    }

    componentWillMount(){
        const { fetchSearch, token, shiny:{page,sort,limit} } = this.props;
        fetchSearch(token,page,{},sort,limit);
    }
    lineClick(prop){
        const { pushEdit } = this.props;
        pushEdit(prop);        
    }
    itemClick(prop,key){        
        console.log("itemClick",prop,key)
    }
         
    navigation(page){
        const { fetchSearch, token, shiny:{ sort, limit, search, total } } = this.props;
        console.log(search);
        if(page === 0 || page > Math.ceil(total/limit)+1) {
            return
        }
        fetchSearch(token,page,search,sort,limit);
    }
    getSorting(name){
        const { fetchSearch, token, shiny:{ sort, page, search, limit } } = this.props;
        const p = Pitstop.getAttribute(name);
        if(sort.indexOf('-'+p) !== -1){
            fetchSearch(token,page,search,p,limit);
            return;
        }
        if(sort.indexOf(p) !== -1){
            fetchSearch(token,page,{},'-'+p,limit);
            return;
        }
        fetchSearch(token,page,{},p,limit);
    }

    handleSearch(value){
        this.setState({search:value,openAttr:false});
    }
    onKeyDown(code){
        if(code === 13){
            this.submitSearch();        
        }
    }
    submitSearch(){
        const { activeSearch, search } = this.state;
        const { fetchSearch, token, shiny:{ sort, page, limit } } = this.props;
        let sendsearch = {};
        activeSearch.forEach((item,i)=>{
            if(item.value){
                sendsearch[item.key] = search;
            }
        });
        fetchSearch(token,page,sendsearch,sort,limit);
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
            if(item === label){
                activeLabes[i] = {...item,value:!item.value}
            }
        })
        this.setState({activeLabes});
    }
    togleSearch(label){
        let activeSearch = this.state.activeSearch;
        activeSearch.forEach((item,i)=>{
            if(item === label){
                activeSearch[i] = {...item,value:!item.value}
                return;
            }
            activeSearch[i] = {...item,value:false}
        })
        this.setState({activeSearch});
    }
    renderSearch(){
        const { activeSearch, openAttr, search } = this.state;
        return (
            <div className="input-group table-search">
                <FormGroup>
                    <InputGroup>
                    <InputGroup.Button>
                        <Button><i className="text-success fa fa-plus"></i>&nbsp;</Button>
                    </InputGroup.Button>
                    <FormControl placeholder="Поиск" type="text" onKeyDown={(e)=>this.onKeyDown(e.keyCode)} value={search} onChange={(e)=>this.handleSearch(e.target.value)} />
                    <InputGroup.Button>
                        <DropdownButton
                        title="&nbsp;"
                        open={openAttr}
                        onClick={()=>this.setState({openAttr:!openAttr})}
                        onToggle={()=>{}}
                        id={`dropdown-basic-search`}
                        >
                        {
                            activeSearch.map((item,key)=>{
                                return (
                                    <MenuItem key={`search-label-${key}`} onClick={()=>this.togleSearch(item)} eventKey={`search-label-${key}`}>
                                            <Checkbox
                                                checked={item.value}
                                                onClick={() => this.togleLabel(item)}
                                            />{item.title}
                                    </MenuItem>
                                );
                            })
                        }
                            <MenuItem divider />
                            <MenuItem><Button block bsStyle="success" onClick={()=>this.submitSearch()}>Поиск</Button></MenuItem>
                        </DropdownButton>
                        <Button onClick={()=>this.submitSearch()}><i className="fa fa-search"></i>&nbsp;</Button>
                    </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }
    render() {
        const { shiny: { list, loading }} = this.props;
        const { labels, activeLabes } = this.state;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={9}>                
                            <Card
                                title="Список шин"
                                category={this.renderSearch()}
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
                                                    <td colspan={3}></td>
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
                                                                                    if(item[label.key] === '')
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
                                                                    <td>
                                                                        <IconButton target="_blank" href={`https://mastershina.kz/produkt/${pit.url}`}><i className="text-info fa fa-eye"></i>
                                                                        </IconButton>
                                                                    </td>
                                                                    <td>
                                                                        <IconButton onClick={()=>this.lineClick(pit)}><i className="text-info fa fa-edit"></i>
                                                                        </IconButton>
                                                                    </td>
                                                                    <td>
                                                                        <IconButton><i className="text-danger fa fa-close"></i>
                                                                        </IconButton>
                                                                    </td>
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
