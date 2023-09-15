import {Component} from 'react'

import {
  AppContainer,
  TextEditorCard,
  ImageCard,
  ButtonContainer,
  ButtonCard,
  Heading,
  Image,
  ListItem,
  TextArea,
  ButtonBold,
  ButtonItalic,
  ButtonUnderline,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from './StyledComponent'

class TextEditorPage extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  onClickBoldBtn = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalicBtn = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickUnderlineBtn = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    // const textStyle={
    //     fontWeight : bold ? "bold" : "normal"
    // }

    return (
      <AppContainer>
        <TextEditorCard>
          <ImageCard>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageCard>
          <ButtonContainer>
            <ButtonCard>
              <ListItem>
                <ButtonBold
                  type="button"
                  onClick={this.onClickBoldBtn}
                  bold={bold}
                  data-testid="bold"
                >
                  <BoldIcon />
                </ButtonBold>
              </ListItem>
              <ListItem>
                <ButtonItalic
                  type="button"
                  onClick={this.onClickItalicBtn}
                  italic={italic}
                  data-testid="italic"
                >
                  <ItalicIcon />
                </ButtonItalic>
              </ListItem>
              <ListItem>
                <ButtonUnderline
                  type="button"
                  onClick={this.onClickUnderlineBtn}
                  underline={underline}
                  data-testid="underline"
                >
                  <UnderlineIcon />
                </ButtonUnderline>
              </ListItem>
            </ButtonCard>
            <TextArea
              type="text"
              rows={22}
              cols={35}
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </ButtonContainer>
        </TextEditorCard>
      </AppContainer>
    )
  }
}

export default TextEditorPage
