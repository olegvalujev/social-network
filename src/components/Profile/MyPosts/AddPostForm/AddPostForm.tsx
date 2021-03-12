import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {createField, GetStringKeys, Textarea} from "../../../common/FormsControls/FormsControls";
import React from "react";
import s from "../MyPosts.module.css";

const maxLength200 = maxLength(200)

type PropsType = {}
export type AddPostFormValuesType = {
    newPostBody: string
}
type PostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const PostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className={s.postsForm}>
            <div>
                {createField<PostFormValuesTypeKeys>('Text', 'newPostBody', [required, maxLength200], Textarea)}
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
export default reduxForm<AddPostFormValuesType, PropsType>({form: 'postForm'})(PostForm)