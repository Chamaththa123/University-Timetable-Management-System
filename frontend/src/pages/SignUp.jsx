import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import logo from "../assets/images/logo-black.png";
import axiosClient from "../../axios-client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { branches } from "../utils/dataArrays";
import Select from "react-select";
import { InputItem } from "../components/global/InputItem";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
 const navigate = useNavigate()
  // Options for the branch selection dropdown
  const branchesOptions = branches.map((branch) => ({
    value: branch.id,
    label: branch.key,
  }));

  // State variables for form data and form errors
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
    // User_Name: "",
    Tp: "",
    Branch_idBranch: "",
  });

  const [formErrors, setFormErrors] = useState({
    // User_Name: "",
    Email: "",
    Password: "",
    Tp: "",
    Branch_idBranch: "",
  });

  // Function to handle changes in form inputs
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset error message when user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Function to handle branch selection
  const handleCustomerSelect = (selectedOption) => {
    setFormData({
      ...formData,
      Branch_idBranch: selectedOption.value
    });
    setFormErrors({
      ...formErrors,
      Branch_idBranch: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    const newFormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      // Convert value to string before calling trim()
      if (String(value).trim() === "") {
        newFormErrors[key] = `${key.replace('_', ' ')} is required`;
      }
    });
    // If there are errors, set the state and return
    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    try {
      const response = await axiosClient.post("/user/register", formData);
      if (response.status === 200) {
        toast.success("User registered successfully");
      
        // Clear form data after successful registration
        setFormData({
          // User_Name: "",
          Email: "",
          Password: "",
          Tp: "",
          Branch_idBranch: "",
        });
        navigate('/login')
      } else {
        toast.error("Registration failed");
        console.error("Registration failed");
      }
    } catch (error) {
      toast.error("Error registering user");
      console.error("Error registering user:", error);
    }
  };

  // Array of input items for rendering the form
  const inputItems = [
    // {
    //   name: 'User Name',
    //   inputName: 'User_Name',
    //   type: 'text',
    // },
    {
      name: 'Email',
      inputName: 'Email',
      type: 'email',
    },
    {
      name: 'Password',
      inputName: 'Password',
      type: 'Password',
    },
    {
      name: 'Telephone',
      inputName: 'Tp',
      type: 'text',
    },
  ];

  // JSX for rendering the component
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[480px]">
        <CardBody className="flex flex-col items-center gap-3">
          <div className=" my-5">
            <img src={logo} className="w-[200px]" alt="Logo" />
          </div>
          <div className="w-full flex justify-between">
            {inputItems.slice(0, 2).map((item, itemIndex) => {
              return (
                <div className="w-[49%]" key={itemIndex}>
                  <InputItem
                    data={formData}
                    type={item.type}
                    errors={formErrors}
                    handleChange={handleChange}
                    name={item.name}
                    setErrors={setFormErrors}
                    inputName={item.inputName}
                  />
                </div>
              )
            })}
          </div>
          <div className="w-full flex justify-between">
            {inputItems.slice(2, 4).map((item, itemIndex) => {
              return (
                <div className="w-[49%]" key={itemIndex}>
                  <InputItem
                    data={formData}
                    type={item.type}
                    errors={formErrors}
                    handleChange={handleChange}
                    setErrors={setFormErrors}
                    name={item.name}
                    inputName={item.inputName}
                  />
                </div>
              )
            })}
          </div>
          <div className=" w-full">
            <Typography
              variant="small"
              color="black"
              className="mb-1 font-inter font-normal"
            >
              Branch
            </Typography>
            <Select
              className="basic-single text-[14px]"
              classNamePrefix="select"
              defaultValue={branchesOptions[0]}
              isSearchable={true}
              name="color"
              options={branchesOptions}
              onChange={handleCustomerSelect}
            />
            {formErrors.Branch_idBranch && (
              <span className=" text-[#ff0000a1] px-1 font-inter font-bold text-xs">
                {" "}
                {formErrors.Branch_idBranch}{" "}
              </span>
            )}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="bg-[#10806f]" fullWidth onClick={handleSubmit}>
            Sign Up
          </Button>
          <Typography variant="small" className="mt-5 flex justify-center">
            Already have an account?
            <Typography
              as="a"
              href="/login"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Log in
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      <ToastContainer />
    </div>
  );
};

