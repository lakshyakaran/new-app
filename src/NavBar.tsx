import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from '@uifabric/icons';
import { useHistory, matchPath } from 'react-router-dom'

initializeIcons();

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '',
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
        name: 'Documents',
        url: '',
        key: 'key3',
        isExpanded: true,
        target: '_blank',
      },
      {
        name: 'Pages',
        url: 'http://msn.com',
        key: 'key4',
        target: '_blank',
      },
      {
        name: 'Notebook',
        url: 'http://msn.com',
        key: 'key5',
        disabled: true,
      },
      {
        name: 'Communication and Media',
        url: 'http://msn.com',
        key: 'key6',
        target: '_blank',
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
        url: 'http://cnn.com',
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
  },
};


function NavBar() {
    let history = useHistory();
    const [ selectedNavKey, setSelectedNavKey ] = React.useState('')
    const _onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        setSelectedNavKey(item?.key || '');
    }
    console.log(history);
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
        <div>
            <Nav
                onLinkClick={_onLinkClick}
                selectedKey={selectedNavKey}
                ariaLabel="Nav basic example"
                styles={navStyles}
                groups={navLinkGroups}
            />
        </div>
    )
}

export default NavBar