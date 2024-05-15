import React, {useState} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import actionFullLogin from "../helpers/helpers.js"

const initialValues = {
    login: "",
    password: ""
};

// const validationSchema = Yup.object({
//     login: Yup.string().login("Required"),
//     password: Yup.string().password("Required")
// })

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = () => {

    }

    return (
        <div className="login-form d-flex flex-column justify-content-around">
            <div className="text-center">
                <h1>
                    SIGN IN
                </h1> 
            </div>
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
            >
                <Form>
                    <Field
                        type="text"
                        name="login"
                        placeholder="login"
                    />
                    <Field
                        type="text"
                        name="password"
                        placeholder="password"
                    />
                </Form>
            </Formik>
           
        </div>
    )
}

export default LoginForm;