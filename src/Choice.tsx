import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
];

export default function Choice() {
    const [ selected, setSelected ] = React.useState('#')
    const _onChange = (ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void => {
        // setSelected()
        console.log("selected ==>", option)
    }
    
    // const changedFun = (data) => {
    //     console.log("selected ==>")
    // }
    return (
        <ChoiceGroup
            defaultSelectedKey={selected}
            options={options}
            style={{margin:20}}
            // onChange={(option) => {
            //     // console.log("slected option==>", option)
            //     _onChange(option)
            // }
            // }
            onChange={(e)=>{console.log("event==>", e)}}
            label="Pick one"
            required={true}
        />
    )
}