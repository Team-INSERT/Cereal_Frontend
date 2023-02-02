import React, { useEffect } from 'react'
import * as S from './style'
import * as io from 'socket.io-client'

const Loading = () => {
	useEffect(() => {
		const socket = io.connect('http://localhost:8000')
		socket.on('message', ({ name, message }) => {
			console.log(name, message)
		})
	}, [])

	const onMessageSubmit = () => {
		const socket = io.connect('http://localhost:8000')
		const name = 'ubin'
		const message = 'hello'
		socket.emit('message', { name, message })
	}

	return (
		<S.LoadingWrap>
			<S.LoadingBackboardWrap>
				<S.LoadingImage src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" />
				<S.LoadingText>상대를 기다리고 있어요..</S.LoadingText>
				<button onClick={onMessageSubmit}>메시지 전송</button>
			</S.LoadingBackboardWrap>
		</S.LoadingWrap>
	)
}

export default Loading
