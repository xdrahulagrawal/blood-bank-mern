import { TextField, Box } from '@mui/material'
import { DonarInterface } from './types'

const Textfield = ({ helperText, label, error, value, name, _onChangeHandler }: { helperText: string, label: string, error: boolean, value: DonarInterface, name: string, _onChangeHandler: any }) => {
    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
                '& .MuiInputBase-root': { height: '46px' },
            }}
            noValidate
            autoComplete="off">
            <TextField
                error={error}
                helperText={error && helperText}
                required
                id="outlined-required"
                label={label}
                InputLabelProps={{
                    shrink: true,
                    style: { color: 'black', fontWeight: 600 }
                }}
                value={value}
                name={name}
                onChange={_onChangeHandler}
            />
        </Box>
    )
}
export default Textfield