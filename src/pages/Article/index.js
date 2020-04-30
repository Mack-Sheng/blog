import React, {Component} from 'react';
// import {observer, inject} from 'mobx-react';
import { Card,Button ,Table,Modal, message} from 'antd';
import {getArticles,deleteArticleById} from '../../requests'
import moment from 'moment'
import {Link,Route} from 'react-router-dom'
import {adminRouter} from '../menu'


// @inject('articleStore')
// @observer

const ButtonGroup = Button.Group

const titleDisplayMap = {
    id: 'id',
    title: '标题',
    author: '作者',
    createAt: '创建时间',
    amount: '阅读量',
  }

export default class Article extends Component {
    constructor() {
        super()
        this.state={
            dataSource : [],
                columns : [],
                  total:0,
                  offset:0,
                  limited:10

        }
    }


    createColums = (columnsKeys) =>{
        const columns =  columnsKeys.map(item=>{
            if(item==='createAt'){
             return {
                 title:titleDisplayMap[item],
                 key:item,
                 render:(text,record) => {
                     const {createAt} = record
                     return moment(createAt).format('YYYY年MM月DD日')
                 }
             }
            }
            return {
             title: titleDisplayMap[item],
             dataIndex: item,
             key: item,
            }
        })
        columns.push({
            title:'操作',
            key:'action',
            render:(text,record)=>{
                return (
                <ButtonGroup>
                    <Link to='/admin/article/edit'><Button size='small' type='primary' >编辑</Button></Link>
                    <Button size='small' type='danger' onClick={this.deleteArticle1.bind(this,record)}>删除</Button>
                </ButtonGroup>)
            }
        })
        return columns
    }


    getData = ()=>{
        getArticles(this.state.offset,this.state.limited).then(resp=>{
           const columnsKeys = Object.keys(resp.list[0])
          const columns = this.createColums(columnsKeys)
           this.setState({
               total:resp.total,
               columns,
               dataSource:resp.list
           })
        })
    }

  

    deleteArticle1 = (record) =>{
        const that = this
        Modal.confirm({
            title:`确定要删除这项吗？`,
            okText:'确定',
            cancelText:'取消',
            onOk() {
                deleteArticleById(record.id).then(resp=>{
                    message.success(resp.msg)
                }).finally(()=>{
                    that.getData()
                })
            }
        })
    }


    onPageChange=(page,pageSize)=> {
        this.setState({
            offset:(page-1)*pageSize,
            limited:pageSize
        },()=>{
            this.getData()
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return  <Card size="small" 
                    title="文章列表" 
                     extra={<Button>保存</Button>} >
        <Table 
        rowKey={record=>record.id}
        dataSource={this.state.dataSource} 
        columns={this.state.columns}
        pagination={{
            total:this.state.total,
            hideOnSinglePage:true,
            showQuickJumper:true,
            onChange:this.onPageChange,
            showSizeChanger:false
        }} />
      </Card>;
    }
}
