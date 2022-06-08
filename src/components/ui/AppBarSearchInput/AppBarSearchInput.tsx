import React, { memo } from 'react';
import { InputBaseProps } from "@mui/material/InputBase";
import SearchIcon from '@mui/icons-material/Search';
import Wrapper from './components/Wrapper';
import IconWrapper from './components/IconWrapper';
import Input from './components/Input';

const AppBarSearchInput = (props: InputBaseProps): JSX.Element => (
  <Wrapper>
    <IconWrapper>
      <SearchIcon />
    </IconWrapper>
    <Input {...props} />
  </Wrapper>
)

export default memo(AppBarSearchInput)
