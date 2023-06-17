import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import { PostType} from "../../../redux/store";
import {useFormik} from "formik";

type MyPostsProps={
    posts:PostType[],
    addPost:()=>void,
    newPostText:string,
    updateNewPostText:(text:string)=>void
    addNewPostAC:(post:string)=>void
}
type FormikErrorType = {
    newPost?: string
}


export const MyPosts = (props:MyPostsProps) => {

    let postsElements=props.posts.map(p =>
         <Post
            key={p.id}
            message={p.message}
            countLikes={p.countLikes}
        />
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost=()=>{
            props.addPost()
    }
    const onPostChange=()=>{
        const text=newPostElement.current?.value
        if(text){
            props.updateNewPostText(text)
        }
    }
    const addNewPost=(post:string)=>{
        props.addNewPostAC(post)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostForm addNewPost={addNewPost}/>
            </div>
            {postsElements}
        </div>
    )
}

const AddNewPostForm=(props:{ addNewPost:(post:string)=>void})=>{
    const formik = useFormik({
        initialValues: {
            newPost: '',
        },
        validate: (values:any) => {
            const errors: FormikErrorType = {}
            if (!values.newPost) {
                errors.newPost = 'Required';
            } else if (values.newPost.length > 10) {
                errors.newPost = 'Must be 10 characters or less';
            }
            return errors
        },
        onSubmit: values => {
            props.addNewPost(values.newPost)
            formik.resetForm()
        },
    });
    console.log(formik.errors)
    return(
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    name="newPost"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPost}
                />
                {formik.errors.newPost &&  formik.touched.newPost  && <div style={{color:'red'}}>{formik.errors.newPost}</div>}
            </div>

            <div>
                <button type="submit" disabled={Object.keys(formik.errors).length !== 0}>Add new post</button>
            </div>
        </form>

    )
}
