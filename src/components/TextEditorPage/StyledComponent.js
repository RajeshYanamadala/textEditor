import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #25262c;
`
export const TextEditorCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: #1b1c22;
`
export const ImageCard = styled.div`
  margin-right: 10px;
`
export const ButtonContainer = styled.div`
  border: solid 1px #334155;
  margin-bottom: 20px;
  background-color: #25262c;
  margin-top: 20px;
  border-radius: 8px;
`
export const ButtonCard = styled.ul`
  padding-left: 10px;
  display: flex;
`
export const ListItem = styled.li`
  list-style: none;
`
export const Heading = styled.h1`
  font-size: 28px;
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
`
export const Image = styled.img`
  height: 250px;
`
export const TextArea = styled.textarea`
  border: solid 1px #334155;
  background-color: #25262c;
  border-left: none;
  border-right: none;
  border-bottom: none;
  outline: none;
  color: #ffffff;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
export const ButtonBold = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.bold ? '#faff00' : ' #f1f5f9')};
  cursor: pointer;
`
export const ButtonItalic = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.italic ? '#faff00' : ' #f1f5f9')};
  cursor: pointer;
`
export const ButtonUnderline = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.underline ? '#faff00' : ' #f1f5f9')};
  cursor: pointer;
`
export const BoldIcon = styled(VscBold)`
  font-size: 20px;
`
export const ItalicIcon = styled(GoItalic)`
  font-size: 20px;
`
export const UnderlineIcon = styled(AiOutlineUnderline)`
  font-size: 20px;
`
