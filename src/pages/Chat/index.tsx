import { ChatBox } from 'allFiles'
import React from 'react'
import * as S from './style'

const Chat = () => {
	return (
		<S.ChatWrap>
			<S.ChatBackboardWrap>
				<S.ChattingWrap>
					<S.ChattingHeader>
						<S.ChattingHeaderText>익명님과의 대화</S.ChattingHeaderText>
					</S.ChattingHeader>
					<S.ChattingBox></S.ChattingBox>
					<S.ChattingSend>
						<img src="" />
					</S.ChattingSend>
				</S.ChattingWrap>
				<ChatBox />
			</S.ChatBackboardWrap>
		</S.ChatWrap>
	)
}

export default Chat
