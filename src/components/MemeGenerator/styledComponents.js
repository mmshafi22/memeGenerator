import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: #35469c;
  font-weight: bold;
  letter-spacing: 1px;
  @media (min-width: 768px) {
    font-size: 35px;
  }
`
export const BgContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  padding: 20px;
  max-width: 500px;
  media (min-width: 768px) {
    margin-right: 20px;
  }
  height: 100vh;
`
export const LabelElement = styled.label`
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  color: #7e858e;
  letter-spacing: 1px;
  margin-bottom: 8px;
`
export const InputElement = styled.input`
  background-color: transparent;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  max-width: 400px;
  margin-bottom: 15px;
  outline: none;
  padding: 15px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #5a7184;
`
export const SelectElement = styled.select`
  background-color: transparent;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d7dfe9;
  max-width: 400px;
  margin-bottom: 15px;
  outline: none;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #1e293b;
  padding-left: 10px;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  border: 0;
  width: 110px;
  height: 40px;
  border-radius: 6px;
  font-family: Roboto;
  font-size: 13px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
`
export const MemeContainer = styled.div`
  height: 350px;
  width: 350px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`
export const SecondMemeContainer = styled.div`
  height: 350px;
  width: 350px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`
export const ParagraphText = styled.p`
  font-family: Roboto;
  font-size: ${props => props.font};
  color: #ffffff;
  font-weight: bold;
`
