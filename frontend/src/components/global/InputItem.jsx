import { Typography } from '@material-tailwind/react'
import React from 'react'

 // Functional component for rendering input fields with error messages
 export const InputItem = ({ name, data, inputName, handleChange, errors, type }) => {
    return (
      <div className="w-full">
        <Typography
          variant="small"
          color="black"
          className="mb-1 font-inter font-normal"
        >
          {name}
        </Typography>
        <input
          name={inputName}
          type={type}
          className="block rounded-md border-0 py-2 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 w-full"
          value={data[inputName]}
          onChange={(e) =>
            handleChange(inputName, e.target.value)
          }
        />
        {errors[inputName] && (
          <Typography className="text-red-500 font-inter font-medium text-xs pt-1">
            {errors[inputName]}
          </Typography>
        )}
      </div>
    )
  }

