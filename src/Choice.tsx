import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { useId } from '@uifabric/react-hooks';

const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
];

const Choice: React.FunctionComponent = () => {
  const labelId = useId('labelElement');
  const [selectedOption, setSelected] = React.useState('')
  function _onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption): void {
    setSelected(option?.key || '');
  }
  // console.log("selected option==>", selectedOption);
  return (
    <div style={{justifyContent:'center'}}>
      <Label id={labelId}>
        <Stack horizontal verticalAlign="center">
          <span>Custom label&nbsp;&nbsp;</span>
          <Icon iconName="Filter" />
        </Stack>
      </Label>
      <ChoiceGroup
        defaultSelectedKey={selectedOption}
        options={options}
        onChange={_onChange}
        ariaLabelledBy={labelId}
      />
    </div>
  );
};


export default Choice;