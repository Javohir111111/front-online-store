import { NavLink, useLocation } from "react-router-dom";
import { PicCenterOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Input, Button } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

import { Container } from "@containers";
import Links from "@router-files"
import logo from "../../assets/images/uzum_logo.png"; ``
import "./style.scss";
// import { ListItemIcon } from "@mui/material";


const { Search } = Input;

const index = () => {
  const { pathname } = useLocation();
  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
  const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <header className="bg-stone-100">
      <Container>
        <nav className="flex justify-between items-center h-[70px]">
          <NavLink to="/">
            <img className="w-[100px] " src={logo} alt="logo" />
          </NavLink>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Button className="h-[30px]" icon={<PicCenterOutlined />} iconPosition={'start'}>
                Каталог
              </Button>
            </a>
          </Dropdown>
          <Search placeholder="Искать товары и категории" onSearch={onSearch} className="custom-search" enterButton style={{ width: 400, padding: 10, color: "red" }} />
          <ul className="flex gap-2">

            {
              Links?.map((link: any) => {
                return (
                  <>
                    <li key={link.path}>
                      <NavLink className="transition-all duration-300 hover:text-black hover:bg-gray-200 hover:p-[8px] rounded-md" to={link.path}>{link.content}</NavLink>
                    </li>
                    <li key={link.path}>
                      {/* <ListItemIcon>
                        <span className={link.path === pathname ? "text-white" : ""}>{link.icon}</span>
                      </ListItemIcon> */}
                    </li>
                  </>
                )
              })
            }

          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default index;
