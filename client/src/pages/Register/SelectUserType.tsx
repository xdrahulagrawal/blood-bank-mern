import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface SelectUserTypeProps {
    setUserType: (e:string) => void;
}
const SelectUserType = ({ setUserType }: SelectUserTypeProps) => {
    const [radioType, setRadioType] = useState<string>('donar')

    useEffect(()=>{
        setUserType(radioType)
    },[radioType])
    
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => setRadioType(e.target.value)}
                value={radioType}
            >
                
                <FormControlLabel value="donar"    control={<Radio />} label="Donar" />
                <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                <FormControlLabel value="organization" control={<Radio />} label="Organization" />
            </RadioGroup>
        </FormControl>
    )
}

export default SelectUserType;
