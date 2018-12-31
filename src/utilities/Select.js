import React from 'react'
import styled from "styled-components"
import PropTypes from 'prop-types'

const SelectWrap = styled.div`
  vertical-align: middle !important;
  width: 180px;
  height: 50px !important;
  margin: auto 10px;
  font-size: 1rem;
`

const SelectBox = styled.select`
  height: auto !important;
  line-height: 50px;
  height: 48px !important;
  width: 180px;
`

const Select = ({options}) => <SelectWrap className="select is-rounded">
    <SelectBox>
        {options.map((item) => <option key={item}>{item.value}</option>)}
    </SelectBox>
</SelectWrap>

Select.propTypes = {
    options: PropTypes.array.isRequired,
  }

export default Select;