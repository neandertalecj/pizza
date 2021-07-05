import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';

let schema = yup.object().shape({
  location: yup.string().required(),
  radius: yup.number().required().positive().integer(),
})

const radiuses = [{ id: 1, radius: 10 }, { id: 2, radius: 25 }, { id: 3, radius: 50 },  { id: 4, radius: 100 }, { id: 5, radius: 150 }, { id: 6, radius: 500 }]

const LocationForm = () => {

  return (
    <Formik
      initialValues={{ location: '', radius: '' }}
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
          <div className="container flex flex-col md:flex-row md:items-baseline justify-center px-6 py-8 text-xsm font-roboto font-medium text-gray-600 uppercase">

            <div className="">
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-center pb-2" htmlFor="location">START LOCATION</label>
                <Field className="mx-5 md:-mt-2 focus:outline-none focus:ring-gray-500 focus:border-gray-500 pl-3 py-2 border border-gray-300"
                  id="location"
                  type='text'
                  name="location"
                  placeholder="Fresno, CA" />
              </div>
              <div className="text-red-600 capitalize font-thin flex py-2">
                <ErrorMessage name="location" component="div" />
              </div>
            </div>

            <div className="">
              <div className="flex flex-col  md:flex-row md:items-center">
                <label className="text-center py-2" htmlFor="radius">Radius</label>
                <Field className="md:min-w-90px mx-6 focus:outline-none focus:ring-gray-500 focus:border-gray-500 hover:shadow-md bg-transparent border border-gray-300 py-2 pr-2"
                  id="radius" 
                  name="radius"
                  select
                  as="select">
                  {radiuses.map(({ id, radius}) => (
                    <option className="p-10" key={id} value={radius}>{radius} mi</option>
                  ))}
                </Field>
              </div>
              <div className="text-red-600 capitalize font-thin flex mt-2">
                <ErrorMessage name="radius" component="div" />
              </div>
            </div>

            <button
              className="p-3 mt-5 bg-black text-white uppercase hover:underline"
              type="submit" 
              disabled={isSubmitting}
            >
              Submit
            </button>

          </div>
        </Form>
      )}
    </Formik>
  )
}

export default LocationForm