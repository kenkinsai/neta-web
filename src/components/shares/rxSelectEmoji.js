import React, { Component } from 'react'

global.isclient && require('./rxSelectEmoji.css')
const { subString } = global.rootRequire('classes/ulti')
const { checkNameUser } = global.rootRequire('classes/chat')


class RxSelectEmoji extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {    
      arrTabs:{img: 'emoji.png', type: 'EmojiIcon', data: ['๐', '๐', '๐', '๐', '๐', '๐', '๐คฃ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฅฐ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐คช', '๐คจ', '๐ง', '๐ค', '๐', '๐คฉ', '๐ฅณ', '๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ฃ', '๐', '๐ซ', '๐ฉ', '๐ฅบ', '๐ข', '๐ญ', '๐ค', '๐ ', '๐ก', '๐คฌ', '๐คฏ', '๐ณ', '๐ฅต', '๐ฅถ', '๐ฑ', '๐จ', '๐ฐ', '๐ฅ', '๐', '๐ค', '๐ค', '๐คญ', '๐คซ', '๐คฅ', '๐ถ', '๐', '๐', '๐ฌ', '๐', '๐ฏ', '๐ฆ', '๐ง', '๐ฎ', '๐ฒ', '๐ฅฑ', '๐ด', '๐คค', '๐ช', '๐ต', '๐ค', '๐ฅด', '๐คข', '๐คฎ', '๐คง', '๐ท', '๐ค', '๐ค', '๐ค','๐', '๐', '๐ค', '๐', 'โ', '๐', '๐', '๐ค', 'โ๏ธ', '๐ค', '๐ค', '๐ค', '๐ค', '๐', '๐', '๐', '๐', '๐', 'โ๏ธ', '๐', '๐', 'โ', '๐', '๐ค', '๐ค', '๐', '๐', '๐', '๐คฒ', '๐ค', '๐', 'โ๏ธ', '๐ช', '๐ฆต', '๐ฆถ', '๐','๐ฉ']},
      
    }
  }

  tagName_SelectUser(ele) {  
    ele.name_contact = subString(checkNameUser(ele), 20)
    this.props.onClick(ele)              
  }
  addEmoji(e, index) {
    e.stopPropagation()
    let arrTabs = this.state.arrTabs
    //let tabIndex = this.state.tabIndex
    let value = arrTabs['data'][index] || ''
    this.props.onClick(value, 'EmojiIcon')
  }

  render() {

    let arrTabs = this.state.arrTabs || {data: []}    
    return (
      <div className='box-emojiTag--wrap'>       
        <div className='box-emojiTag'>
          <div className='emojiTag_List'>           
            <div className='box-emoji-content'>
              {arrTabs['data'].map((vEmoji, index) => (
                <div key={'emoji-' + index} className='icon-emoji' onClick={e => this.addEmoji(e, index)}>{vEmoji}</div>
              ))}
            </div>
          </div> 
          <div className='emojiTag-box-tail'><i className='icon-emojiTag-tail'></i></div>
        </div>
      </div>
    )
  }
}

RxSelectEmoji.defaultProps = {onChange: () => { }, onClick: () => { } 
}

// Options : {key: , text: }
export default RxSelectEmoji
