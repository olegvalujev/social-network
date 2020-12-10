import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/01/04/14/11/viburnum-3060769_1280.jpg" alt="viburum"/>
            </div>
            <div className={s.descriptionBlock}>
                {/*<div>*/}
                {/*    <img src="https://media.istockphoto.com/photos/close-up-cute-meerkat-animal-relaxing-in-the-dessert-picture-id585613602"/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    description*/}
                {/*</div>*/}
            </div>

        </div>
    )
}

export default ProfileInfo;