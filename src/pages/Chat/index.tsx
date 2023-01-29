import { ChatBox } from 'allFiles'
import React from 'react'
import * as S from './style'

const Chat = () => {
	return (
		<S.ChatWrap>
			<S.ChatBackboardWrap>
				<ChatBox />
			</S.ChatBackboardWrap>
		</S.ChatWrap>
	)
}

export default Chat
