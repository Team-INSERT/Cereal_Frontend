import React, { useEffect } from 'react'
import * as S from './style'
import io from 'socket.io-client'

const socket = io('http://localhost:8081', {
	path: '/socket.io',
})

const Loading = () => {

	useEffect(() => {
		socket.on('receive message', (message: { name: string; message: string }) => {
			console.log('complete connect')
		})
	}, [])

	return (
		<S.LoadingWrap>
			<S.LoadingBackboardWrap>
				<S.LoadingImage src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" />
				<S.LoadingText>상대를 기다리고 있어요..</S.LoadingText>
			</S.LoadingBackboardWrap>
		</S.LoadingWrap>
	)
}

export default Loading
