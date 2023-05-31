
import { AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, MenuProps } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Link, Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const LayOutAdmin = () => {
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type
        } as MenuItem;
    }
    const items: MenuItem[] = [
        getItem(' Dasboarch', '1'),
        getItem('Product', 'sub1', <AppstoreOutlined />, [
            getItem('List Product', '2'),
            getItem('Add Product', '3'),
        ]),
        getItem('Category', 'sub2', <AppstoreOutlined />, [
            getItem('List Category', '4'),
            getItem('Add Category', '5'),
        ]),
        getItem('Bank', 'sub3', <AppstoreOutlined />, [
            getItem('List Bank', '8'),
            getItem('Add Bank', '9'),
        ]),
        getItem('List Acount', '6'),
        getItem('Client', '7'),
    ]
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        console.log(e.key)
        if (e.key == "1") {
            navigate(`/admin`)
        }
        if (e.key == "2") {
            navigate("/admin/product")
        }
        if (e.key == "3") {
            navigate("/admin/product/add")
        }
        if (e.key == "4") {
            navigate("/admin/category")
        }
        if (e.key == "5") {
            navigate("/admin/category/add")
        }
        if (e.key == "6") {
            navigate("/admin/acount")
        }
        if (e.key == "7") {
            navigate("/")
        }
        if (e.key == "8") {
            navigate("/admin/bank")
        }
        if (e.key == "9") {
            navigate("/admin/bank/add")
        }

    };
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={onClick}
                    defaultSelectedKeys={['9']}
                    items={items} // có cái này thì có menu con nhưng lại k nhấn chuyển đc đường dẫn bên dưới tôi mới tạo 1 số đường dẫnthooi chưa tạo hết
                >
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>{<Outlet />}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default LayOutAdmin