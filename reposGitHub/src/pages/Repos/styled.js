import styled from 'styled-components'
import { Link } from "react-router-dom"

export const Container = styled.div `
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`
export const Title = styled.h1 `
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`
export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color: #fff;
  padding: .5rem;
`
export const Button = styled(Link)`
  display: block;
  width: 50px;
  height: 30px;
  background: #000;
  color: #fff;
  border: black solid 1px;
  text-align: center;
  align-item: center;
  border-radius: 11px;


`