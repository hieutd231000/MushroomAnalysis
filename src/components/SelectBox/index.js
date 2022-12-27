import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBox({ children, label }) {
    const [mushroom, setMushroom] = React.useState('');

    const handleChange = (event) => {
        setMushroom(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="mushroom-shape">{label}</InputLabel>
                <Select
                    labelId="mushroom-shape"
                    id="mushroom-shape-select"
                    value={mushroom}
                    label="Mushroom"
                    onChange={handleChange}
                >
                    {children}
                </Select>
            </FormControl>
        </Box>
    );
}