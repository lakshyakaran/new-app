import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { useHistory, matchPath } from 'react-router-dom'

initializeIcons();

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
          {
            name: 'Activity',
            url: '/combo',
            key: 'key1',
            // target: '_blank',
          },
          {
            name: 'MSN',
            url: '/choice',
            // disabled: true,
            key: 'key2',
            // target: '_blank',
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Dialog',
        url: './dialog',
        key: 'key3',
        // isExpanded: true,
        // target: '_blank',
      },
      {
        name: 'Pages',
        url: 'http://msn.com',
        key: 'key4',
        target: '_blank',
      },
      {
        name: 'Card',
        url: '/card',
        key: 'key5',
      },
      {
        name: 'List',
        url: '/list',
        key: 'key6',
      },
      {
        name: 'News',
        url: '/#',
        icon: 'News',
        key: 'key7',
        target: '_blank',
      },
      {
        name: 'Other',
        url: '',
        // icon: 'News',
        key: 'key8',
        target: '_blank',
      },
    ],
  },
];

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: '100%',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    // backgroundColor:'#FC8019'
  },
};


function NavBar() {
    let history = useHistory();
    const [ selectedNavKey, setSelectedNavKey ] = React.useState('')
    const _onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        setSelectedNavKey(item?.key || '');
    }
    // console.log(history);
    React.useEffect(() => {
      navLinkGroups[0].links.map(item => {
        if(item.links) {
          item.links.map(subItem => {
            if(matchPath(history.location.pathname, {
              path: subItem.url,
              exact: true
            })) {
              setSelectedNavKey(subItem?.key || '');
              return;
            }
          })
        } else {
          if(matchPath(history.location.pathname, {
            path: item.url,
            exact: true
          })) {
            setSelectedNavKey(item?.key || '');
            return;
          }
        }
      })
    }, [history.location.pathname])
    return (
      <Sticky
        stickyPosition={StickyPositionType.Both}
        // isScrollSynced={true}
        stickyBackgroundColor="transparent"
      >
        <Nav
          onLinkClick={_onLinkClick}
          selectedKey={selectedNavKey}
          ariaLabel="Nav basic example"
          styles={navStyles}
          groups={navLinkGroups}
        />
      </Sticky>
    )
}

export default NavBar