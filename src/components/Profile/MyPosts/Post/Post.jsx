import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postBlock}>
            <div>
                <img
                    src="https://media.istockphoto.com/photos/close-up-cute-meerkat-animal-relaxing-in-the-dessert-picture-id585613602"
                    alt="avatar"/>
                    <span className={s.userName}>{props.name}</span>
            </div>

            <span className={s.message}>{props.message}</span>
        </div>
    )
}

export default Post;