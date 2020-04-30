import React, { Component } from 'react'
import { Tag } from 'antd'

export default class Lable extends Component {
   
    render() {
        return (
            <div>
    <h4 style={{ marginBottom: 16 }}>热门推荐</h4>
    <div>
      <Tag color="magenta" closable='true'>magenta</Tag>
      <Tag color="red">red</Tag>
      <Tag color="volcano">volcano</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="gold">gold</Tag>
      <Tag color="lime">lime</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <Tag color="purple">purple</Tag>
    </div>
    <h4 style={{ margin: '16px 0' }}>历史记录</h4>
    <div>
      <Tag color="#f50">搞笑</Tag>
      <Tag color="#2db7f5">今日头条</Tag>
      <Tag color="#87d068">体育</Tag>
    </div>
  </div>
        )
    }
}
