import React, {Component} from "react"
import "./note.css"
// import PropTypes from "prop-types"

class Note extends Component {
  handleClickDelete = () => {
    this.props.delete(this.props.index)
  }
  
  handleClickEdit =()=>{
    const {editing , index , title , content} = this.props
     this.props.edit(index ,editing , title , content);
  
  }


  handleEditSubmit = ()=>{
    this.props.toggle(this.props.editing)
    
  }


  render() {
    const {title, content , editing} = this.props
    
    if(editing){
      return(
        <div className='Note col s12 m4 l3'>
        <div className='DeleteBtn'>
          <div className='DeleteBtn btn-floating btn-large'>
            <i onClick={this.handleClickDelete} id='Icon' className='material-icons'>
              delete
            </i>
          </div>
        </div>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text' onClick={this.handleClickEdit}>
            <input type='text'name='title' value={title} onChange={this.handleChange}/>
            <input type='text'name='content' value={content}/>
            <button onClick={this.handleEditSubmit}>수정</button>
            
          </div>
        </div>
      </div>
      )
    }

    return (
      //아래 내용들은 materialize에 있는 라이브러리와 클래스를 활용한 것 입니다.
      //materialize 의 grid부분을 참고해 주세요.
      <div className='Note col s12 m4 l3'>
        <div className='DeleteBtn'>
          <div className='DeleteBtn btn-floating btn-large'>
            <i onClick={this.handleClickDelete} id='Icon' className='material-icons'>
              delete
            </i>
          </div>
        </div>
        <div className='card yellow lighten-4'>
          <div className='card-content black-text' onClick={this.handleClickEdit}>
            <span className='card-title'>{title}</span>
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}
//propTypes를 응용해, props가 존재하지 않을 경우 Error로그를 띄우는 예제 입니다.
//교육자료의 propTypes 부분을 참고해 주세요.
function inputIsRequired(props, propName, componentName) {
  if (!props[propName]) {
    return new Error(`${propName} is required`)
  }
  return null
}

Note.propTypes = {
  title: inputIsRequired,
  content: inputIsRequired
}

export default Note
