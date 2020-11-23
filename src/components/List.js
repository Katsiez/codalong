import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Item} from './Item'
import styled from 'styled-components'
import {todos} from 'reducers/todos'

const ListContainer = styled.ul`
displa:flex;
width:100%;
flex-direction:column;
`;

const ListActionButton = styled.button`
align-self:center;
padding:4px;
margin:2px;
font-size:22px;
color:#000;
;`

export const List = () => {
	const dispatch = useDispatch()
	const items = useSelector((store) => store.todos.items)

return (
	<ListContainer>
	{items.map((item, index)=> (
	<Item key={index} item={item}></Item>
	))}
	<ListActionButton onClick={() => dispatch(todos.actions.removeOne())}>Remove one</ListActionButton>
	</ListContainer>
)
}