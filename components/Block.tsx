import React from 'react'
import styled from 'styled-components';

const SquareBtn = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 50px;
  width: 50px;
  padding: 0;
  text-align: center;
  margin-top: -1px;
  margin-right: -1px; 
`

function Block(props:any) {
  return (
    <SquareBtn 
      onClick={props.handleClick}
    >
      {props.value}
    </SquareBtn>
  )
}

export default Block