import React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {Redirect} from "react-router-dom";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login1=(props:any)=>{
    // const dispatch=useAppDispatch()
    // const isLoggedIn=useAppSelector<boolean>(state=>state.auth.isLoggedIn)



    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more';
            }
            return errors
        },
        onSubmit: values => {
            props.authLogin({
                email: values.email,
                password:values.password,
                rememberMe:values.rememberMe
            })
        },
    })
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    console.log({...formik.getFieldProps('email')})
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    {/*<FormLabel>*/}
                    {/*    <p>To log in get registered*/}
                    {/*        <a href={'https://social-network.samuraijs.com/'}*/}
                    {/*           target={'_blank'}> here*/}
                    {/*        </a>*/}
                    {/*    </p>*/}
                    {/*    <p>or use common test account credentials:</p>*/}
                    {/*    <p>Email: free@samuraijs.com</p>*/}
                    {/*    <p>Password: free</p>*/}
                    {/*</FormLabel>*/}
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email &&  formik.touched.email  && <div style={{color:'red'}}>{formik.errors.email}</div>}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password && <div style={{color:'red'}} >{formik.errors.password}</div>}
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                checked={formik.values.rememberMe}
                                {...formik.getFieldProps('rememberMe')}
                            />}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>

        </Grid>
    </Grid>
}
