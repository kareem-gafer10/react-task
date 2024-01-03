import  * as Yup from 'yup';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from 'react';

const Contact = () => {

  const [displayData, setDisplayData] = useState({});

  const objectSchema=Yup.object({
    name:Yup.string().required("Name is Required").min(5).max(10),
    email:Yup.string().required("Email is  Required").email("Invalid Email"),
    subject:Yup.string().required("Subject is  Required"),
    message:Yup.string().required("Message is  Required")
 
  })


  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(objectSchema),
  })




  const onSubmit = (values) => {
    setDisplayData(values);

  }

  const renderData = (data) => {
    return (
      <ul>
        {Object.entries(data).map(([key, value], index) => (
          <li key={index}>{key}: {value}</li>
        ))}
      </ul>
    );
  };





  return (
    <div className="w-full max-w-lg mx-auto mt-32">
      <form onSubmit={handleSubmit(onSubmit)}
       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("name")}
            type="text"
            placeholder="Name"
            aria-invalid={errors.name ? "true" : "false"}
          />
      {errors.name && <p className=' text-red-600'>{errors.name.message}</p>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("email")}
            type="email"
            placeholder="Email"
            aria-invalid={errors.email ? "true" : "false"}
          />
            {errors.email && <p className=' text-red-600'>{errors.email.message}</p>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("subject")}
            type="text"
            placeholder="Subject"
            aria-invalid={errors.subject ? "true" : "false"}
          />
            {errors.subject && <p className=' text-red-600'>{errors.subject.message}</p>}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className=" resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("message")}
            type="text"
            placeholder="Message"
            cols="5"
            rows="7"
            aria-invalid={errors.message ? "true" : "false"}
          />
            {errors.message && <p className=' text-red-600'>{errors.message.message}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
  {displayData && (
    <div>
      <h2 className=' text-xl font-semibold'>{renderData(displayData)}</h2>
    </div>
  )}
</div>



    </div>
  );
};

export default Contact;
