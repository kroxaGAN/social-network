import {useFormik} from "formik";
import {Redirect} from "react-router-dom";
import s from "./Login.module.css"


export const Login=(props:any)=>{
    const formik = useFormik({
        initialValues: {
            email: '',
            password:'',
            rememberMe:false
        },
        onSubmit: (values,submitProps) => {
            // alert(JSON.stringify(values, null, 2));
            props.authLogin({
                email: values.email,
                password:values.password,
                rememberMe:values.rememberMe
            },submitProps.setStatus)
        },
    });
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    if(formik.status){
        console.log(formik.status.error)
    }


    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}

                    />
                    <label htmlFor="email">Email Address</label>
                </div>

                <div>
                    <input
                        // id="email"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <div>
                    <input
                        name="rememberMe"
                        type="checkbox"
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}
                    />
                    <label>Remember me</label>
                </div>
                    <div className={s.error}>
                        {formik.status && formik.status.error.map((er:any, index:any) => <p key={index}>{er}</p>)}
                    </div>
            {/*    let apiErrors*/}
            {/*    if(formik.status) {*/}
            {/*    //console.log(formik.status.error)*/}
            {/*    apiErrors = formik.status.error.map((item, index) => <p key={index}>{item}</p>)*/}
            {/*}*/}
{/*//look at youtube in commentas after lesson*/}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
