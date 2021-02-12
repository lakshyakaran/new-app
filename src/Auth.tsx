import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';


function Auth() {
    const stackTokens = {};
    const iconProps = { iconName: 'Calendar' };
    const stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
    const [userId, setUserId] = React.useState('')
    const [password, setPassword] = React.useState('')
    // const handleChange = React.useCallback(
    //     (event?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
    //         if (!newValue || newValue.length <= 5) {
    //             console.log("id==>", newValue)
    //             setUserId(newValue || '');
    //         }
    //     },[]
    // );
    
    const handleChange = (event?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        console.log("id==>", newValue)
        setUserId(newValue || '');
        // if (!newValue || newValue.length <= 5) {
        // }
    }
    return (
        <div style={{padding:30}}>
            <Stack tokens={stackTokens} styles={stackStyles}>
                <TextField
                    label="User Id"
                    value={userId}
                    onChange={handleChange}
                />
                <TextField label="Password" type="password" canRevealPassword />
            </Stack>
        </div>
    )
}

export default Auth