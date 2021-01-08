import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from '@uifabric/icons';
import { useHistory } from 'react-router-dom'
import Combo from './Combo'
import Choice from './Choice'

initializeIcons();

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
          {
            name: 'Activity',
            url: '/Combo',
            key: 'key1',
            // target: '_blank',
          },
          {
            name: 'MSN',
            url: '/Choice',
            // disabled: true,
            key: 'key2',
            // target: '_blank',
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Documents',
        url: 'http://example.com',
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
    const [ selectedNavKey, setSelectedNavKey ] = React.useState('key2')
    const _onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
        if (item && item.name === 'News') {
            console.log('News link clicked');
        }
    }
    React.useEffect(() => {
        window.addEventListener('hashchange', () => {
            setSelectedNavKey(document.location.hash || '#')
        })
    })
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