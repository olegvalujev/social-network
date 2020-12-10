import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={ s.item }>
            <img src="https://media.istockphoto.com/photos/close-up-cute-meerkat-animal-relaxing-in-the-dessert-picture-id585613602" alt="avatar"/>
            { props.message }
            <div>
                like
            </div>
        </div>
    )
}

export default Post;