/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Input } from '@material-tailwind/react'
import React from 'react'

export const FormInput = ({ placeholder, setData, data, inputName, errors, setErrors }) => {
  return (
    <div className=" flex flex-col">
      <Input size="lg"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        onChange={(e) => {
          setData({
            ...data,
            [inputName]: e.target.value
          })
          if (e.target.value !== "") {
            setErrors({ ...errors, [inputName]: "" });
          }
        }}
        value={data[inputName]}
      />

      {errors[inputName] && (
        <span className="font-inter text-[14px] text-red-500  ">
          {errors[inputName]}
        </span>
      )}
    </div>
  )
}
