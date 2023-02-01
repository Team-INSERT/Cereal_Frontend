import { ChatBox } from 'allFiles'
import React from 'react'
import * as S from './style'

const Chat = () => {
	return (
		<S.ChatWrap>
			<S.ChatBackboardWrap>
				<S.ChattingWrap>
					<S.ChattingHeader>
						<S.ChattingProfileImage src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75" />
						<S.ChattingHeaderText>익명님과의 대화</S.ChattingHeaderText>
					</S.ChattingHeader>
					<S.ChattingLine />
					<S.ChattingBox>
						<S.ChatBox>
							<S.MyChatDate>오후 2:48</S.MyChatDate>
							<S.MyChat>TEST TEST</S.MyChat>
						</S.ChatBox>
						<S.ChatBox>
							<S.MyChatDate>오후 2:48</S.MyChatDate>
							<S.MyChat>
								TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
							</S.MyChat>
						</S.ChatBox>
						<S.ChatBox>
							<S.YourChat>TEST TEST TEST TEST TEST TEST TEST </S.YourChat>
							<S.YourChatDate>오후 2:49</S.YourChatDate>
						</S.ChatBox>
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((index) => (
							<S.ChatBox key={index}>
								<S.YourChat>TEST</S.YourChat>
								<S.YourChatDate>오후 2:49</S.YourChatDate>
							</S.ChatBox>
						))}
					</S.ChattingBox>
					<S.ChattingSendBox>
						<S.ChattingSend />
						<S.ChattingSendButton>전송</S.ChattingSendButton>
					</S.ChattingSendBox>
				</S.ChattingWrap>
				<ChatBox />
			</S.ChatBackboardWrap>
		</S.ChatWrap>
	)
}

export default Chat
