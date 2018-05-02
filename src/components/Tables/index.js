import React, { Component } from 'react';
import { Col, Table } from 'react-bootstrap';
import Card from '../Card/Card.jsx';
import Loading from '../Loading/Loading';

class Tables extends Component {
    constructor(props){
        super(props);
        const { thArray, tdArray, limit } = this.props
        this.state = {
            title: thArray,
            body: tdArray,
            search: '',
            pages: 1,
            page: 1,
            limit: limit || 10,
            sorting: this.getSortingDefault(),
            sortingName: "",
        }
        this.timer = null;
    }
    componentDidMount(){
        this.navigation(1);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.tdArray.length > 0 && this.state.body.length === 0){
            this.navigation(1);
        }
        return true;
    }
      
    navigation(page){
        const { search, limit, pages, sorting, sortingName } = this.state;
        if(page === 0 || page !== 1 && page > pages) {
            return
        }
        let v = this.filterSearch(search);
        const newpages = Math.ceil(v.length/limit);
        const start = (page-1)*limit;
        const stop  = start + limit;
        if(sortingName !== ''){
            v = v.sort((a,b) => this.compareArray(a,b,sorting[sortingName].key,sorting[sortingName].asc));
        }
        this.setState({page:page, pages:newpages, body:v.slice(start,stop)});
    }

    getSortingDefault(){
        const { thArray } = this.props
        let sorting = {}
        for(let i in thArray){            
            sorting[thArray[i]] = { asc:false, key:i, sort: false };
        }
        return sorting
    }
    getSorting(name){
        const { sorting, page, search, limit } = this.state;
        let body = this.filterSearch(search);
        const newpages = Math.ceil(body.length/limit);
        const start = (page-1)*limit;
        const stop  = start + limit;
        for(let n in sorting){
            if(n === name){
                sorting[n].sort = true;
                sorting[n].asc = !sorting[n].asc;
                continue;
            }

            sorting[n].sort = false;
        }
        const newBody = body.sort((a,b) => this.compareArray(a,b,sorting[name].key,sorting[name].asc))
        this.setState({ sorting, body:newBody.slice(start,stop), sortingName: name })
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
        const { pages, page, limit } = this.state;
        let array = [];
        array.push(<div key="table-start" className="table-navigation-key" onClick={()=>this.navigation(1)}>Первая</div>)
        array.push(<div key="table-d1" className="table-navigation-delimetr">|</div>)
        array.push(<div key="table-back" className="table-navigation-key" onClick={()=>this.navigation(page-1 || 1)}>Предыдущая</div>)
        array.push(<div key="table-page" className="table-navigation-key action">{page}</div>)
        array.push(<div key="table-next" className="table-navigation-key" onClick={()=>this.navigation(page+1)}>Следующая</div>)
        array.push(<div key="table-s2" className="table-navigation-delimetr">|</div>)
        array.push(<div key="table-finish" className="table-navigation-key" onClick={()=>this.navigation(pages)}>Последняя</div>)
        return (
            <div className="table-navigation">
                {array}
                <div className="table-navigation-info">Показано {page*limit} из {pages*limit}</div>
            </div>
        );
    }
    lineClick(prop,key){
        if(typeof this.props.lineClick === 'function'){
            this.props.lineClick(prop,key)
        }
    }
    itemClick(prop,key){
        if(typeof this.props.itemClick === 'function'){
            this.props.itemClick(prop,key)
        }
    }
    sortingClass(name){
        const { sorting } = this.state;
        if(sorting[name].sort){
            if(sorting[name].asc){
                return "fa fa-sort-up";
            }else{
                return "fa fa-sort-down";
            }
        }
        return "fa fa-sort"
    }
    render() {
        const { title, body } = this.state;
        return (
            <Col md={12}>                
                <Card
                    title={this.props.title}
                    category={<input className="form-control table-search" placeholder="Поиск" type="text" onChange={(e)=>this.handleSearch(e.target.value)}/>}
                    ctTableFullWidth ctTableResponsive
                    content={
                        <div>
                            <Loading show={ this.props.loading } />
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        {
                                            title.map((prop, key) => {
                                                return (
                                                    <th key={key} className="table-sort" onClick={() => this.getSorting(prop)}><i className={this.sortingClass(prop)}></i>{prop}</th>
                                                );
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        body.map((prop,key) => {
                                            return (
                                                <tr key={key} onClick={() => this.lineClick(prop,key)}>{
                                                    prop.map((prop,key)=> {
                                                        return (
                                                            <td onClick={() => this.itemClick(prop,key)} key={key}>{prop}</td>
                                                        );
                                                    })
                                                }</tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                            {this.renderNavigation()}
                        </div>
                    }
                />                
            </Col>
        );
    }
}

export default Tables;