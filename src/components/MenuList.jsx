import { Menu } from "antd";
import {
  HomeOutlined,
  FireOutlined,
  FileOutlined,
  LoadingOutlined,
  BarsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? "dark" : "light"} className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="activity" icon={<FireOutlined />}>
        INSPET
      </Menu.Item>
      <Menu.Item key="progres" icon={<FileOutlined />}>
        INSPET
      </Menu.Item>
      <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="task-1">Mentenanta Corectiva</Menu.Item>
        <Menu.Item key="task-2">Mentenanta Predeterminata</Menu.Item>
        <Menu.Item key="task-3">Mentenanta Anuala</Menu.Item>
        <Menu.Item key="task-4">Proces Verbal</Menu.Item>
        <Menu.Item key="task-5">Nota Constatare</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="inspet" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
