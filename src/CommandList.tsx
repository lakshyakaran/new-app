import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();


// initializeIcons('https://my.cdn.com/path/to/icons/');


const overflowButtonProps: IButtonProps = { ariaLabel: 'More commands' };

const CommandList: React.FunctionComponent = () => {
  return (
    <div>
      <CommandBar
        items={_items}
        overflowButtonProps={overflowButtonProps}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>
  );
};

export default CommandList

const _items: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: 'New',
    iconProps: { iconName: 'Add' },
    split: true,
    ariaLabel: 'New',
    subMenuProps: {
      items: [
        { key: 'emailMessage', text: 'Email message', iconProps: { iconName: 'Mail' } },
        { key: 'calendarEvent', text: 'Calendar event', iconProps: { iconName: 'Calendar' } },
      ],
    },
  },
  {
    key: 'upload',
    text: 'Upload',
    iconProps: { iconName: 'Upload' },
    split: true,
    disabled: true,
    href: 'https://developer.microsoft.com/en-us/fluentui',
    subMenuProps: {
      items: [
        { key: 'item1', text: 'Item One' },
        { key: 'item2', text: 'Item Two' },
      ],
    },
  },
  {
    key: 'share',
    text: 'Share',
    iconProps: { iconName: 'Share' },
    disabled: true,
  },
  {
    key: 'download',
    text: 'Download',
    ariaLabel: 'Download',
    iconProps: { iconName: 'Download' },
    iconOnly: true,
    disabled: true,
  },
];
