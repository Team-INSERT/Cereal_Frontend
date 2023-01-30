import styled from 'styled-components'

export const ChatBoxWrap = styled.div`
	margin-left: auto;
	width: 440px;
	height: 100%;
	box-shadow: -4px 0px 5px -2px #ebebeb;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ChatBoxWarnWrap = styled.div`
	height: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ChatBoxTitle = styled.span`
	font-size: 22px;
	font-weight: 800;
	margin: 30px 0 20px 0;
	color: #007aff;
`

export const ChatBoxDescription = styled.span`
	font-size: 15px;
	font-weight: 400;
	text-align: left;
`

export const ChatBoxLine = styled.div`
	width: 80%;
	height: 2px;
	background-color: #ccc;
`

export const ChatRecommendWrap = styled.div`
	height: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ChatBox = styled.div`
	margin: 8px 0 8px 0;
	width: 280px;
	height: 46px;
	background-color: ${(props) => props.color};
	display: flex;
	align-items: center;
	border-radius: 8px;
`

export const ChatText = styled.span`
	margin-left: 14px;
	font-size: 14px;
	color: white;
	font-weight: 600;
	font-family: 'Open Sans', sans-serif;
`
