import React from 'react';
import {Box} from './Box'
import * as css from './Form.styled';

export const Filter = ({value, onChange}) => {
    return(
        <Box display='flex'
        flexDirection='column'>
            <css.Label htmlFor="search">Find contacts by name</css.Label>
            <css.Input id="search" type="text" value={value} onChange={onChange} />
        </Box>
    )

}