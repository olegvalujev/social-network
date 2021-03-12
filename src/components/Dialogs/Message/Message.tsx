import s from "./Message.module.css"

type PropsType = {
     message: string
}
const Message: React.FC<PropsType> = (props) => {
    return <div className={s.message}><span className={s.messageBlob}>{ props.message }</span></div>
}

export default Message