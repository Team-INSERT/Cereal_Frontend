import styled from 'styled-components'

export const LoadingWrap = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #007aff;
`

export const LoadingBackboardWrap = styled.div`
	width: 82vw;
	height: 86vh;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const LoadingText = styled.span`
	margin-top: 10px;
	font-size: 18px;
	font-weight: 700;
	color: #007aff;
`

export const LoadingImage = styled.img`
	width: 60px;
	height: 60px;
`
