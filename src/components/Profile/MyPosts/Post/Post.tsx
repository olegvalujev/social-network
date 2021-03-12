import s from './Post.module.css';
import React from "react";

type PropsType = {
    message: string
    id: number
}
const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.postBlock}>
            <div className={s.avatar}>
                <img
                    src="https://media.istockphoto.com/photos/close-up-cute-meerkat-animal-relaxing-in-the-dessert-picture-id585613602"
                    alt="avatar"/>
            </div>

            <span className={s.message}>{props.message}</span>
        </div>
    )
}

export default Post;