import * as React from 'react';
import { IContextualMenuItem, IContextualMenuProps, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { useConst } from '@uifabric/react-hooks';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();


const ContextMenu: React.FunctionComponent = () => {
  const menuItems: IContextualMenuItem[] = [
    {
        key: 'navigation',
        itemType: ContextualMenuItemType.Header,
        text: 'Navigation',
    },
    {
      key: 'newItem',
      iconProps: { iconName: 'Upload', style: {color: 'red'}},
      subMenuProps: {
        items: [
          { key: 'emailMessage', text: 'Email message', ariaDescription: 'Emails are fun' },
          {
            key: 'calendarEvent',
            text: 'Calendar event',
            ariaDescription: 'Calendar events are even more fun',
          },
        ],
      },
      href: 'https://bing.com',
      text: 'New',
      target: '_blank',
      ariaLabel: 'New. Press enter or right arrow keys to open submenu.',
      ariaDescription: 'Additional information about new item',
    },
      
    {
      key: 'share',
      subMenuProps: {
        items: [
          { key: 'sharetotwitter', text: 'Share to Twitter' },
          { key: 'sharetofacebook', text: 'Share to Facebook' },
          {
            key: 'sharetoemail',
            text: 'Share to Email',
            subMenuProps: {
              items: [
                { key: 'sharetooutlook_1', text: 'Share to Outlook', title: 'Share to Outlook' },
                    {
                        key: 'sharetogmail_1',
                        text: 'Share to Gmail', 
                        subMenuProps: {
                            items: [
                                { key: 'indboxShare', text: 'Share as inbox', title: 'Share as inbox' },
                                { key: 'spamShare', text: ' Share as spam', title: 'Share as spam' }
                            ]
                        }
                    },
              ],
            },
          },
        ],
      },
      text: 'Share',
      ariaLabel: 'Share. Press enter, space or right arrow keys to open submenu.',
      ariaDescription: 'Additional information about share item',
    },
    {
      key: 'shareSplit',
      split: true,
      'aria-roledescription': 'split button',
      subMenuProps: {
        items: [
          { key: 'sharetotwittersplit', text: 'Share to Twitter' },
          { key: 'sharetofacebooksplit', text: 'Share to Facebook' },
          {
            key: 'sharetoemailsplit',
            text: 'Share to Email',
            subMenuProps: {
              items: [
                { key: 'sharetooutlooksplit_1', text: 'Share to Outlook', title: 'Share to Outlook' },
                { key: 'sharetogmailsplit_1', text: 'Share to Gmail', title: 'Share to Gmail' },
              ],
            },
          },
        ],
      },
      text: 'Share w/ Split',
      ariaLabel: 'Share w/ Split. Press enter or space keys to trigger action. Press right arrow key to open submenu.',
      ariaDescription: 'Additional information about share split item',
    },
  ];
  const menuProps = useConst<IContextualMenuProps>(() => ({
    items: menuItems,
  }));

    return (
        <DefaultButton
            text="Click for ContextualMenu"
            persistMenu menuProps={menuProps}
            style={{ margin:30 }}
        />
    )  
};

export default ContextMenu