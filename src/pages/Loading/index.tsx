import React from 'react'
import * as S from './style'

const Loading = () => {
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
