import React from 'react'
import './style'
import * as S from './style'
import Header from 'components/Header'

const Home = () => {
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
						<S.HomeLoginButton>
							<S.HomeButtonLogo src="/assets/BSM.png" />
							로그인하고 시작하기
						</S.HomeLoginButton>
						<S.HomeLoginButton color="#007aff">비로그인으로 시작하기</S.HomeLoginButton>
					</S.HomeTitleWrap>
					<S.HomeTitleImage src="/assets/home_title.png" />
				</S.HomeMainWrap>
			</S.HomeBackboardWrap>
		</S.HomeWrap>
	)
}

export default Home
