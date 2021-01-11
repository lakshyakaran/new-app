import * as React from 'react';
import {
  ComboBox,
  IComboBox,
  IComboBoxOption,
  PrimaryButton,
  SelectableOptionMenuItemType,
} from 'office-ui-fabric-react/lib/index';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean, useId } from '@uifabric/react-hooks';
import DatePicker from './DatePicker'
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import {
  TooltipHost,
  TooltipDelay,
  DirectionalHint,
  ITooltipProps,
  ITooltipHostStyles,
} from 'office-ui-fabric-react/lib/Tooltip';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Icon, IIconStyles } from 'office-ui-fabric-react/lib/Icon';

const comboBoxBasicOptions: IComboBoxOption[] = [
  { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D', disabled: true },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F' },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' },
];

// icon styling
const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: '0 35px' ,
});

const tooltipProps: ITooltipProps = {
  onRenderContent: () => (
    <ul style={{ margin: 10, padding: 0 }}>
      <li>1. One</li>
      <li>2. Two</li>
    </ul>
  ),
};
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

const comboBoxMultiStyle = {
  maxWidth: 300,
  display: 'block',
  marginTop: '10px',
  backgroundColor: '#ADD8E6'
};
const barStyle = {width: 400 };

//spactator==>
const iconStyles: IIconStyles = {
  root: {
    fontSize: '24px',
    height: '24px',
    width: '24px',
  },
};
const stackTokens: IStackTokens = { childrenGap: 12 };


export default function Combo() {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  const comboBoxRef = React.useRef<IComboBox>(null);
  const onOpenClick = React.useCallback(() => comboBoxRef.current?.focus(true), []);
  const tooltipId = useId('tooltip');
  return (
    <div style={{padding:20}}>
      <Panel
        headerText="Sample panel"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        {/* <DatePicker /> */}
        <FontIcon iconName="CompassNW" className={iconClass} />
        <FontIcon iconName="AmazonWebServicesLogoIcon" className={iconClass} />
      </Panel>
      <ComboBox
        componentRef={comboBoxRef}
        style={barStyle}
        defaultSelectedKey="C"
        label="Basic ComboBox"
        allowFreeform
        autoComplete="on"
        options={comboBoxBasicOptions}
      />
      {/* <PrimaryButton text="Open ComboBox" style={comboBoxMultiStyle} onClick={onOpenClick} /> */}
      <PrimaryButton text="Open ComboBox" style={comboBoxMultiStyle} onClick={openPanel} />
      <Separator>
        Today
      </Separator>
      <TooltipHost
        tooltipProps={tooltipProps}
        delay={TooltipDelay.zero}
        id={tooltipId}
        directionalHint={DirectionalHint.bottomCenter}
        styles={hostStyles}
      >
        <DefaultButton aria-describedby={tooltipId} text="Hover over me" />
      </TooltipHost>
    </div>
  )
}
