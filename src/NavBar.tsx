import * as React from "react";
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "office-ui-fabric-react/lib/Nav";
import {
  IIconProps,
  IIconStyles,
  Sticky,
  StickyPositionType,
} from "office-ui-fabric-react";
import { initializeIcons } from "@uifabric/icons";
import { useHistory, matchPath, Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuIcon from "@material-ui/icons/Menu";
import Header from "./Header";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import WorkIcon from "@material-ui/icons/Work";
import CachedIcon from "@material-ui/icons/Cached";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ListIcon from "@material-ui/icons/List";
import BarChartIcon from "@material-ui/icons/BarChart";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
initializeIcons();

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      // {
      //   name: 'Home',
      //   url: '/',
      //   expandAriaLabel: 'Expand Home section',
      //   collapseAriaLabel: 'Collapse Home section',
      //   links: [
      //     {
      //       name: 'Activity',
      //       url: '/combo',
      //       key: 'key1',
      //       icon: 'CreateMailRule'
      //     },
      //     {
      //       name: 'MSN',
      //       url: '/choice',
      //       // disabled: true,
      //       key: 'key2',
      //       // target: '_blank',
      //     },
      //   ],
      //   isExpanded: true,
      // },
      {
        name: "Home",
        url: "/combo",
        key: "key1",
        icon: "CreateMailRule",
      },
      {
        name: "Activity",
        url: "/choice",
        // icon: 'MiniLink',
        expandAriaLabel: "Expand Home section",
        collapseAriaLabel: "Collapse Home section",
        links: [
          {
            name: "Card",
            url: "/card",
            key: "key5",
            icon: "ContactCardSettings",
          },
          {
            name: "MSN",
            url: "/choice",
            icon: "MultiSelect",
            key: "key10",
          },
        ],
        isExpanded: true,
      },
      {
        name: "Pages",
        url: "",
        key: "key4",
        icon: "Page",
        // target: '_blank',
      },
      {
        name: "List",
        url: "/list",
        icon: "CheckList",
        key: "key6",
      },
      {
        name: "News",
        url: "",
        iconProps: { iconName: "News", styles: { root: {} } },
        key: "key7",
        // target: '_blank',
      },
      {
        name: "Other",
        url: "",
        icon: "CheckedOutByOther12",
        key: "key8",
        target: "_blank",
      },
    ],
  },
];

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: "100%",
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
    marginTop: 10,
    // backgroundColor:'#FC8019'
  },
};

function NavBar(props: any) {
  const menuData =
    // '<div onClick={handlemenuClick}><MenuIcon style={{ color: "#FFF" }} /></div>';
    '<i class="ti-settings"></i>';

  let history = useHistory();
  const [selectedNavKey, setSelectedNavKey] = React.useState("");
  const [collapsedMenu, setCollapsedMenu] = React.useState(false);
  const _onLinkClick = (
    ev?: React.MouseEvent<HTMLElement>,
    item?: INavLink
  ) => {
    setSelectedNavKey(item?.key || "");
  };
  // console.log(history);
  React.useEffect(() => {
    navLinkGroups[0].links.map((item) => {
      if (item.links) {
        item.links.map((subItem) => {
          if (
            matchPath(history.location.pathname, {
              path: subItem.url,
              exact: true,
            })
          ) {
            setSelectedNavKey(subItem?.key || "");
            return;
          }
        });
      } else {
        if (
          matchPath(history.location.pathname, {
            path: item.url,
            exact: true,
          })
        ) {
          setSelectedNavKey(item?.key || "");
          return;
        }
      }
    });
  }, [history.location.pathname]);

  const handlemenuClick = () => {
    if (collapsedMenu == false) {
      setCollapsedMenu(true);
    }
    if (collapsedMenu == true) {
      setCollapsedMenu(false);
    }
  };
  const iconMenu = () => {
    return <MenuIcon />;
  };

  const handleRoleMenu = (e: any, item: any) => {
    console.log("employee clicked==>", item);
  };
  return (
    // <Nav
    //   onLinkClick={_onLinkClick}
    //   selectedKey={selectedNavKey}
    //   ariaLabel="Nav basic example"
    //   styles={navStyles}
    //   groups={navLinkGroups}
    // />
    <div style={{ backgroundColor: "#006994 " }}>
      <Header>
        <div onClick={handlemenuClick}>
          <MenuIcon style={{ color: "#FFF" }} />
        </div>
      </Header>
      <ProSidebar breakPoint="md" collapsed={collapsedMenu}>
        <Menu popperArrow={true} iconShape="circle">
          {/* <MenuItem icon={<HomeIcon />}>
            Performance
            <Link to="/" />
          </MenuItem> */}
          <SidebarHeader
            onClick={(event) => {
              handleRoleMenu(event, "Employee");
            }}
          >
            Employee
          </SidebarHeader>
          <SubMenu title={`Appraisal`} icon={<BarChartIcon />}>
            <MenuItem icon={<SettingsIcon />}>
              Setup
              <Link to="/home " />
            </MenuItem>
            <SubMenu
              suffix={<ArrowRightIcon style={{ fontSize: "25px" }} />}
              title="Goal Settings"
              icon={<ListIcon />}
            >
              <Link to="/appraisal/goalsetting " />
              <SubMenu title="submenu 1" icon={<MenuOpenIcon />}>
                <MenuItem icon={<MenuOpenIcon />}>inside submenu 1</MenuItem>
              </SubMenu>
              <MenuItem icon={<MenuOpenIcon />}>submenu 2</MenuItem>
            </SubMenu>
            <MenuItem icon={<AssessmentIcon />}>Self Assessment </MenuItem>
          </SubMenu>
          <SubMenu title="Confirmation" icon={<AssignmentTurnedInIcon />}>
            <MenuItem icon={<CachedIcon />}>Confirmation Status</MenuItem>
            <MenuItem icon={<FileCopyIcon />}>Confirmation Letter</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <ProSidebar breakPoint="md" collapsed={collapsedMenu}>
        <Menu popperArrow={true} iconShape="circle">
          <SidebarHeader
            onClick={(event) => {
              handleRoleMenu(event, "Manager");
            }}
          >
            Manager
          </SidebarHeader>
          <SubMenu title={`Appraisal`} icon={<BarChartIcon />}>
            <MenuItem icon={<SettingsIcon />}>
              Goal Settings
              <Link to="/appraisal/goalsetting " />
            </MenuItem>
            <MenuItem icon={<AssessmentIcon />}>Self Assessment </MenuItem>
          </SubMenu>
          <SubMenu title="Confirmation" icon={<AssignmentTurnedInIcon />}>
            <MenuItem icon={<CachedIcon />}>Confirmation Status</MenuItem>
            <MenuItem icon={<FileCopyIcon />}>Confirmation Letter</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <ProSidebar breakPoint="md" collapsed={collapsedMenu}>
        <Menu popperArrow={true} iconShape="circle">
          <SidebarHeader
            onClick={(event) => {
              handleRoleMenu(event, "HR Contact");
            }}
          >
            HR Contact
          </SidebarHeader>
          <SubMenu title={`Appraisal`} icon={<BarChartIcon />}>
            <MenuItem icon={<SettingsIcon />}>
              Goal Settings
              <Link to="/appraisal/goalsetting " />
            </MenuItem>
            <MenuItem icon={<AssessmentIcon />}>Self Assessment </MenuItem>
          </SubMenu>
          <SubMenu title="Confirmation" icon={<AssignmentTurnedInIcon />}>
            <MenuItem icon={<CachedIcon />}>Confirmation Status</MenuItem>
            <MenuItem icon={<FileCopyIcon />}>Confirmation Letter</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default NavBar;
