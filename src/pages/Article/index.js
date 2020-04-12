import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('articleStore')
@observer
export default class Article extends Component {
    componentDidMount() {
        console.log('article did mount', this.props);
    }
    render() {
        return <div>文章列表页面</div>;
    }
}
