import {Component} from 'react'
import {
  Heading,
  BgContainer,
  LabelElement,
  InputElement,
  FormContainer,
  GenerateButton,
  MemeContainer,
  SecondMemeContainer,
  SelectElement,
  ParagraphText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    generate: false,
  }

  onChangeUrl = event => {
    this.setState({imageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState(prevState => ({
      generate: !prevState.generate,
    }))
  }

  render() {
    const {imageInput, topText, bottomText, fontSize, generate} = this.state
    return (
      <BgContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          {generate && (
            <MemeContainer imageUrl={imageInput}>
              <ParagraphText font={fontSize}>{topText}</ParagraphText>
              <ParagraphText font={fontSize}>{bottomText}</ParagraphText>
            </MemeContainer>
          )}
          <LabelElement htmlFor="imgUrl">Image URL</LabelElement>
          <InputElement
            type="text"
            id="imgUrl"
            placeholder="Enter the Image URL"
            onChange={this.onChangeUrl}
            value={imageInput}
          />
          <LabelElement htmlFor="topText">Top Text</LabelElement>
          <InputElement
            type="text"
            id="topText"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
            value={topText}
          />
          <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
          <InputElement
            type="text"
            id="bottomText"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
            value={bottomText}
          />
          <LabelElement htmlFor="fontSize">Font Size</LabelElement>
          <SelectElement id="fontSize" value={fontSize} onChange={this.onChangeFontSize}>
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </SelectElement>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
        {generate && (
          <SecondMemeContainer data-testid="meme" imageUrl={imageInput}>
            <ParagraphText font={fontSize}>{topText}</ParagraphText>
            <ParagraphText font={fontSize}>{bottomText}</ParagraphText>
          </SecondMemeContainer>
        )}
      </BgContainer>
    )
  }
}

export default MemeGenerator
