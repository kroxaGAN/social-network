import {useFormik} from "formik";
import {Redirect} from "react-router-dom";


export const Login=(props:any)=>{
    const formik = useFormik({
        initialValues: {
            email: '',
            password:'',
            rememberMe:false
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.authLogin({
                email: values.email,
                password:values.password,
                rememberMe:values.rememberMe
            })
        },
    });
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
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

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
