import { ChatBox } from 'allFiles'
import React, { useEffect, useState } from 'react'
import * as S from './style'
import io from 'socket.io-client'
import dateParser from 'utils/dateParset'

const socket = io('http://localhost:8081', {
	path: '/socket.io',
})

interface Chat {
	message: string
	socketId: string
	date: string
}

const Chat = () => {
	const [chat, setChat] = useState([])
	const [userCount, setUserCount] = useState(0)
	const [message, setMessage] = useState('')
	const [isEmpty, setIsEmpty] = useState(true)
	const [roomId, setRoomId] = useState(0)
	useEffect(() => {
		const objDiv = document.getElementById('chat') as HTMLElement
		objDiv.scrollTop = objDiv.scrollHeight
		socket.emit('join', 1)
		socket.on('join', (data) => {
			setRoomId(data.roomId)

		})
		socket.on('message', function (data) {
			setChat((chat) => {
				return [...chat, data] as never[]
			})
		})

		socket.on('count', (data) => setUserCount(data))
	}, [])

	const onSubmitMessage = () => {
		if (message.replace(/\n/gi, '').length === 0) return
		socket.emit('message', {
			roomId,
			message: message,
			socketId: socket.id,
		})

		setMessage(message.replace(/\n/gi, ''))
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
						<S.ChattingProfileImage src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75" />
						<S.ChattingHeaderText>익명님과의 대화</S.ChattingHeaderText>
						<S.ChattingHeaderUserCounts>현재 접속자 수 : {userCount}명</S.ChattingHeaderUserCounts>
					</S.ChattingHeader>
					<S.ChattingLine />
					<S.ChattingBox id="chat">
						{chat.map((chat: Chat, index: number) => (
							<S.ChatBox key={index}>
								{chat.socketId === socket.id ? (
									<>
										<S.MyChatDate>{dateParser(chat.date)}</S.MyChatDate>
										<S.MyChat>{chat?.message}</S.MyChat>
									</>
								) : (
									<>
										<S.YourChat>{chat?.message}</S.YourChat>
										<S.YourChatDate>{dateParser(chat.date)}</S.YourChatDate>
									</>
								)}
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
