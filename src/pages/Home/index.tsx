import React from 'react'
import './style'
import * as S from './style'
import { Header } from 'allFiles'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	const navigateChat = () => {
		navigate('/chat')
	}

	return (
		<S.HomeWrap>
			<S.HomeBackboardWrap>
				<Header />
				<S.HomeMainWrap>
					<S.HomeTitleWrap>
						<S.HomeTitleText>Cereal.</S.HomeTitleText>
						<S.HomeDescriptionText>
							익명으로 마음 편하게 남들과 대화하는
							<br />
							교내 랜덤 채팅 어플
						</S.HomeDescriptionText>
						<S.HomeLoginButton onClick={navigateChat} color="#007aff">
							대화 시작하기
						</S.HomeLoginButton>
					</S.HomeTitleWrap>
					<S.HomeTitleImage src="/assets/home_title.png" />
				</S.HomeMainWrap>
			</S.HomeBackboardWrap>
		</S.HomeWrap>
	)
}

export default Home
