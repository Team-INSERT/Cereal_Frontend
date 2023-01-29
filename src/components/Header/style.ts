import styled from 'styled-components'

export const HeaderWrap = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
`

export const HeaderNav = styled.a`
	font-size: 18px;
	font-weight: 600;
	margin: 0 36px 0 36px;
	text-decoration: none;
	color: black;
	cursor: pointer;

	&:first-child {
		margin-left: 100px;
	}
`
