import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
})

const FooterForm = () => {

  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="">
          <div className="">

            <div className="">
              <div className="flex justify-center">
                <Field className="w-full sm:w-3/4 md:w-full focus:outline-none focus:ring-gray-500 focus:border-gray-500 pl-3 py-0 border border-gray-300"
                  type='text'
                  name="name"/>
              </div>
              <div className="text-red-600 capitalize font-thin flex py-2">
                <ErrorMessage name="name" component="div" />
              </div>
            </div>

            <button
              className="block m-auto w-full sm:w-3/4 bg-gold md:w-full text-sm uppercase hover:underline py-1"
              type="submit" 
              disabled={isSubmitting}
            >
              Sign up
            </button>

          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FooterForm