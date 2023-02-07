import styled from 'styled-components'

export const ChatWrap = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #007aff;
`

export const ChatBackboardWrap = styled.div`
	width: 82vw;
	height: 86vh;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const ChattingWrap = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ChattingHeader = styled.div`
	width: 100%;
	height: 8%;
	display: flex;
	align-items: center;
`

export const ChattingBox = styled.div`
	width: 100%;
	height: 78%;
	overflow: scroll;
`

export const ChattingSendBox = styled.div`
	margin-top: 10px; 
	width: 100%;
	height: 14%;
	box-shadow: 0px -6px 5px -4px #ebebeb;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const ChattingSend = styled.textarea`
	width: 96%;
	height: 80%;
	resize: none;
	border: none;
	outline: none;
	font-size: 14px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 500;
	padding: 10px 18px 0 18px;
`

export const ChattingSendButton = styled.button`
	margin: 0 10px 8px auto;
	width: 60px;
	height: 48px;
	border: none;
	background-color: ${(props) => props.color};
	border-radius: 4px;
	color: white;
	font-weight: 600;
`

export const ChattingHeaderText = styled.span`
	font-size: 16px;
	font-weight: 700;
	margin: 2px 0 0 12px;
`

export const ChattingHeaderUserCounts = styled.span`
	font-size: 14px;
	font-weight: 600;
	margin: 2px 20px 0 auto;
`

export const ChattingProfileImage = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 999px;
	border: 1px solid #ccc;
	margin-left: 12px;
`

export const ChattingLine = styled.div`
	width: 100%;
	height: 2px;
	margin-bottom: 6px;
	background-color: #ccc;
`

export const ChatBox = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
`

export const MyChat = styled.div`
	width: fit-content;
	height: fit-content;
	max-width: 400px;
	background-color: #007aff;
	border-radius: 6px;
	margin: 4px 16px 4px 0;
	padding: 8px 12px 8px 12px;
	text-align: left;
	color: white;
	font-weight: 560;
	font-size: 14px;
`

export const YourChat = styled.div`
	width: fit-content;
	height: fit-content;
	max-width: 400px;
	background-color: #aaa;
	border-radius: 6px;
	margin: 4px 6px 4px 12px;
	padding: 8px 12px 8px 12px;
	text-align: left;
	color: white;
	font-weight: 560;
	font-size: 14px;
`

export const MyChatDate = styled.span`
	margin: auto 4px 4px auto;
	color: #ccc;
	font-size: 12px;
`

export const YourChatDate = styled.span`
	margin: auto 4px 4px 0;
	color: #ccc;
	font-size: 12px;
`
