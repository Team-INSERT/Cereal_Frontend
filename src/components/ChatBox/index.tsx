import React from 'react'
import recommendChat from 'utils/recommendChat'
import * as S from './style'

const ChatBox = () => {
	return (
		<S.ChatBoxWrap>
			<S.ChatBoxWarnWrap>
				<S.ChatBoxTitle>이런 점을 주의해주세요!</S.ChatBoxTitle>
				<S.ChatBoxDescription>
					대화할 때에, 통신매체이용음란죄 등의 법에
					<br /> 저촉되는 내용이나, 누군가를 비난하고 모욕
					<br />
					하는 등 부적절한 내용의 대화는 피해주세요.
					<br />
					<br />말 못할 고민이나, 하소연 등을 풀어보세요.
					<br /> 올바른 채팅 에티켓을 지키며 채팅합시다!
				</S.ChatBoxDescription>
			</S.ChatBoxWarnWrap>
			<S.ChatBoxLine />
			<S.ChatRecommendWrap>
				<S.ChatBoxTitle>이런 질문을 해봐요!</S.ChatBoxTitle>
				<S.ChatBox color="#007aff">
					<S.ChatText>{recommendChat[Math.trunc(Math.random() * 31)]}</S.ChatText>
				</S.ChatBox>
				<S.ChatBox color="#aaaaaa">
					<S.ChatText>{recommendChat[Math.trunc(Math.random() * 31)]}</S.ChatText>
				</S.ChatBox>
				<S.ChatBox color="#007aff">
					<S.ChatText>{recommendChat[Math.trunc(Math.random() * 31)]}</S.ChatText>
				</S.ChatBox>
				<S.ChatBox color="#aaaaaa">
					<S.ChatText>{recommendChat[Math.trunc(Math.random() * 31)]}</S.ChatText>
				</S.ChatBox>
			</S.ChatRecommendWrap>
		</S.ChatBoxWrap>
	)
}

export default ChatBox
