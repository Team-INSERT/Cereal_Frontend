import { ChatBox } from 'allFiles'
import React, { useEffect, useState } from 'react'
import * as S from './style'
import io from 'socket.io-client'

const Chat = () => {
	const socket = io('http://localhost:8081')
	const [message, setMessage] = useState('')
	const [isEmpty, setIsEmpty] = useState(true)

	useEffect(() => {
		const objDiv = document.getElementById('chat') as HTMLElement
		objDiv.scrollTop = objDiv.scrollHeight

	}, [])

	const onSubmitMessage = () => {
		if (message.replace(/\n/gi, '').length === 0) return
		const msgobj = { room: 1, name: 'sk', message: message }

		socket.on('connect', () => {
			console.log(socket.id)
			socket.emit('message', msgobj)
		})
		setMessage('')
	}

	useEffect(() => {
		if (message.replace(/\n/gi, '').length) setIsEmpty(false)
		else setIsEmpty(true)
	}, [message])

	return (
		<S.ChatWrap>
			<S.ChatBackboardWrap>
				<S.ChattingWrap>
					<S.ChattingHeader>
						<S.ChattingProfileImage
							src='https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75' />
						<S.ChattingHeaderText>익명님과의 대화</S.ChattingHeaderText>
					</S.ChattingHeader>
					<S.ChattingLine />
					<S.ChattingBox id='chat'>
						<S.ChatBox>
							<S.MyChatDate>오후 2:48</S.MyChatDate>
							<S.MyChat>TEST TEST</S.MyChat>
						</S.ChatBox>
						<S.ChatBox>
							<S.MyChatDate>오후 2:48</S.MyChatDate>
							<S.MyChat>
								TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
								TEST TEST TEST TEST TEST TEST
							</S.MyChat>
						</S.ChatBox>
						<S.ChatBox>
							<S.YourChat>TEST TEST TEST TEST TEST TEST TEST </S.YourChat>
							<S.YourChatDate>오후 2:49</S.YourChatDate>
						</S.ChatBox>
						{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
							<S.ChatBox key={index}>
								<S.YourChat>TEST</S.YourChat>
								<S.YourChatDate>오후 2:49</S.YourChatDate>
							</S.ChatBox>
						))}
					</S.ChattingBox>
					<S.ChattingSendBox onSubmit={(e) => e.preventDefault()}>
						<S.ChattingSend
							onKeyUp={(e) => (e.keyCode === 13 && !e.shiftKey ? onSubmitMessage() : null)}
							onChange={(e) => setMessage(e.target.value)}
							value={message}
						/>
						<S.ChattingSendButton onClick={onSubmitMessage} disabled={isEmpty} color={isEmpty ? '#ccc' : '#007aff'}>
							전송
						</S.ChattingSendButton>
					</S.ChattingSendBox>
				</S.ChattingWrap>
				<ChatBox />
			</S.ChatBackboardWrap>
		</S.ChatWrap>
	)
}

export default Chat
