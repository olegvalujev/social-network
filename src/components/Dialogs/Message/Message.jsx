import s from "./Message.module.css"

const Message = (props) => {
    return <div className={s.message}><span className={s.messageBlob}>{ props.message }</span></div>
}

export default Message