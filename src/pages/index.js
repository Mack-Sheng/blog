import React, {Component, Suspense} from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {Link, Switch, Route} from 'react-router-dom';
import {Spin} from 'antd';
import menus from './menu';
import {adminRouter} from './menu'



const {Header, Sider, Content} = Layout;

export default class extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    get menu() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {menus.map(({index, path, title, IconComponent}, i) => {
                    if (!index) {
                        return (
                            <Menu.Item key={String(i)} key={path}>
                                <IconComponent />
                                <Link to={path}>{title}</Link>
                            </Menu.Item>
                        );
                    }
                })}
            </Menu>
        );
    }

    get content() {
        return (
            <Suspense fallback={<Spin />}>
                <Switch>
                    {menus.map(({path, Component, index}) => {
                        return (
                            <Route
                                exact={index}
                                path={path} 
                                component={Component}
                                key={path}
                            />
                        );
                    })}
                    {/* <Route component={adminRouter.Component} path={adminRouter.path}/> */}
                </Switch>
            </Suspense>
        );
    }


    render() {
        return (
            <Layout className="self-menu">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    {this.state.collapsed ? (
                        <AppstoreOutlined className="logo"/>
                    ) : (
                        <div className="logo">博客后台</div>
                    )}
                    {this.menu}
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{padding: 0}}
                    >
                        {React.createElement(
                            this.state.collapsed
                                ? MenuUnfoldOutlined
                                : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: this.toggle,
                            }
                        )}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            // padding: 24,
                            // minHeight: 280,
                        }}
                    >
                        {this.content}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
