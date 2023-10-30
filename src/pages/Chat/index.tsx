import { ChatBox } from 'allFiles'
import React, { useEffect, useState } from 'react'
import * as S from './style'
import io from 'socket.io-client'
import dateParser from 'utils/dateParser'

const socket = io('http://cereal.team-insert.com/api', {
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
	const [disable, setDisable] = useState(true)
	const [disconnect, setDisconnect] = useState(false)
	const [exit, setExit] = useState(false)
	const [clickExit, setClickExit] = useState(false)

	useEffect(() => {
		const objDiv = document.getElementById('chat') as HTMLElement
		objDiv.scrollTop = objDiv.scrollHeight
		socket.emit('join', 1)
		socket.on('count', (data) => setUserCount(data))

		socket.on('message', function (data) {
			setChat((chat) => {
				return [...chat, data] as never[]
			})
		})
		socket.on('logoff', (data) => {
			console.log(data)
			if (!exit) {
				setDisable(true)
				setDisconnect(true)
				setExit(true)
			}
		})

		socket.on('exit', (data) => {
			console.log(data)
			setExit(true)
			setDisable(true)
			setDisconnect(true)
		})
	}, [])

	const onClickExitRoom = () => {
		setClickExit(true)
		socket.emit('exit', roomId)
	}

	socket.on('join', (data) => {
		if (data.start) {
			setRoomId(data.roomId)
			console.log('연결 성공!')
			setDisable(false)
		}
	})

	const onSubmitMessage = () => {
		if (message.replace(/\n/gi, '').length === 0) return
		socket.emit('message', {
			roomId,
			message,
			socketId: socket.id,
		})

		setMessage(message.replace(/\n/gi, ''))
		setMessage('')
	}

	useEffect(() => {
		const objDiv = document.getElementById('chat') as HTMLElement
		objDiv.scrollTop = objDiv.scrollHeight
	}, [chat])

	useEffect(() => {
		if (message.replace(/\n/gi, '').length) setIsEmpty(false)
		else setIsEmpty(true)
	}, [message])

	return (
		<>
			<S.ChatWrap>
				<S.ChatBackboardWrap>
					<S.ChattingWrap>
						<S.ChattingHeader>
							{disable && !disconnect ? (
								''
							) : (
								<>
									<S.ChattingProfileImage src="https://bssm.kro.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile_default.99e93808.png&w=128&q=75" />
									<S.ChattingHeaderText>익명님과의 대화</S.ChattingHeaderText>
								</>
							)}
							<S.ChattingHeaderSubWrap>
								<S.ChattingHeaderUserCounts>현재 접속자 수 : {userCount}명</S.ChattingHeaderUserCounts>
								{disable && !disconnect ? (
									''
								) : (
									<S.ChattingHeaderExitButton disabled={exit} onClick={onClickExitRoom} color={exit ? '#ccc' : '#007aff'}>
										방 나가기
									</S.ChattingHeaderExitButton>
								)}
							</S.ChattingHeaderSubWrap>
						</S.ChattingHeader>
						<S.ChattingLine />
						<S.ChattingBox id="chat">
							{disable && !disconnect ? (
								<S.LoadingText>상대방을 기다리고 있어요...</S.LoadingText>
							) : (
								<S.LoadingText>
									연결 성공!
									<br />
								</S.LoadingText>
							)}
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
							{clickExit ? (
								<S.LoadingText>
									상대방과의 채팅을 종료했어요.
									<br />
									<S.LogoffButton onClick={() => window.location.reload()}>새 상대 연결하기</S.LogoffButton>
								</S.LoadingText>
							) : (
								<>
									{disconnect ? (
										<S.LoadingText>
											상대방이 채팅방을 나갔어요.
											<br />
											<S.LogoffButton onClick={() => window.location.reload()}>새 상대 연결하기</S.LogoffButton>
										</S.LoadingText>
									) : (
										''
									)}
								</>
							)}
						</S.ChattingBox>
						<S.ChattingSendBox onSubmit={(e) => e.preventDefault()}>
							<S.ChattingSend
								onKeyUp={(e) => (e.keyCode === 13 && !e.shiftKey ? onSubmitMessage() : null)}
								onChange={(e) => setMessage(e.target.value)}
								disabled={disable}
								value={message}
								placeholder={disable && !disconnect ? '상대방을 기다리고 있어요...' : ''}
							/>
							<S.ChattingSendButton onClick={onSubmitMessage} disabled={isEmpty} color={isEmpty ? '#ccc' : '#007aff'}>
								전송
							</S.ChattingSendButton>
						</S.ChattingSendBox>
					</S.ChattingWrap>
					<ChatBox />
				</S.ChatBackboardWrap>
			</S.ChatWrap>
		</>
	)
}

export default Chat
