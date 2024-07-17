import { Field, Form, Formik } from "formik";

export function UserForm({user,onUserFormSubmit}){
    return <div className="user-creation-form">
        <Formik
            enableReinitialize={true}
            initialValues = {{
                firstName:user?.firstName ||'',
                lastName:user?.lastName ||'',
                email:user?.email||'',
                mobile:user?.mobile||''
            }}
            onSubmit={(values,{resetForm})=>{
                console.log("Submitted Values",values)
                onUserFormSubmit(values, user?.id)
                resetForm({firstName:'',lastName:'', email:'',mobile:''})
            }}

        >
            <Form>
                {/* <label htmlFor='firstName'></label> */}
                <Field id="firstName" name="firstName" placeholder="First Name" />

                
                {/* <label htmlFor='lastName'></label> */}
                <Field id="lastName" name="lastName" placeholder="Last Name" />


                {/* <label htmlFor='email'></label> */}
                <Field 
                id="email"
                name="email"
                placeholder="Email"
                type="email" />


                {/* <label htmlFor='mobile'></label> */}
                <Field
                id="mobile"
                name="mobile"
                placeholder="mobile"
                type="text"/>

                



                <button type='submit'>Submit</button>
            </Form>


        </Formik>
    </div>
    
}