import styled from 'styled-components'

export const HomeWrap = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #007aff;
`

export const HomeBackboardWrap = styled.div`
	width: 82vw;
	height: 86vh;
	background-color: white;
`

export const HomeMainWrap = styled.div`
	display: flex;
	height: 70vh;
	align-items: center;
`

export const HomeTitleWrap = styled.div`
	display: flex;
	height: 70vh;
	justify-content: center;
	flex-direction: column;
`

export const HomeTitleText = styled.span`
	margin: -80px 0 0 92px;
	font-size: 96px;
	color: #007aff;
	font-family: 'Noto Sans', sans-serif;
`

export const HomeDescriptionText = styled.span`
	margin: 0 0 60px 100px;
	font-size: 26px;
	font-weight: 700;
`

export const HomeTitleImage = styled.img`
	margin: 0 100px 0 auto;
	width: 34vw;
`

export const HomeLoginButton = styled.button`
	margin: 14px 0 0 100px;
	width: 200px;
	height: 36px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	border: 2.2px solid #007aff;
	border-radius: 4px;
	background-color: ${(props) => props.color || 'white'};
	font-weight: 800;
	color: ${(props) => (props.color ? 'white' : '#0061ca')};
	cursor: pointer;
`

export const HomeButtonLogo = styled.img`
	width: 32px;
	margin-right: 8px;
	margin-top: -1px;
`
