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

  return (
    // <Nav
    //   onLinkClick={_onLinkClick}
    //   selectedKey={selectedNavKey}
    //   ariaLabel="Nav basic example"
    //   styles={navStyles}
    //   groups={navLinkGroups}
    // />
    <div style={{ height: "100vh", backgroundColor: "#006994 " }}>
      <Header>
        <div>
          <div onClick={handlemenuClick}>
            <MenuIcon style={{ color: "#FFF" }} />
          </div>
        </div>
      </Header>
      <ProSidebar
        style={{}}
        breakPoint="md"
        // width="260px"
        collapsed={collapsedMenu}
      >
        <Menu popperArrow={true} iconShape="circle">
          <MenuItem icon={<HomeIcon />}>
            Performance
            <Link to="/" />
          </MenuItem>
          <MenuItem>Employee</MenuItem>
          <SubMenu title={`Appraisal`} icon={<AssessmentIcon />}>
            <MenuItem>
              Goal Settings
              <SubMenu>
                <MenuItem>submenu 1</MenuItem>
                <MenuItem>submenu 2</MenuItem>
              </SubMenu>
            </MenuItem>
            <MenuItem icon={<AssessmentIcon />}>Self Assessment </MenuItem>
          </SubMenu>
          <SubMenu title="Confirmation" icon={<AssignmentTurnedInIcon />}>
            <MenuItem>Confirmation Status</MenuItem>
            <MenuItem>Confirmation Letter</MenuItem>
          </SubMenu>
          <MenuItem>Manager</MenuItem>
          <SubMenu title={`Appraisal`} icon={<AssessmentIcon />}>
            <MenuItem icon={<SettingsIcon />}>
              Goal Settings
              <Link to="/list" />
            </MenuItem>
            <MenuItem icon={<AssessmentIcon />}>Self Assessment </MenuItem>
          </SubMenu>
          <SubMenu title="Confirmation" icon={<AssignmentTurnedInIcon />}>
            <MenuItem>Confirmation Status</MenuItem>
            <MenuItem>Confirmation Letter</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default NavBar;
