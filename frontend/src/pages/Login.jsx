import React, { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/NavigationContext";
import { GoogleIcon } from "../utils/icons";

export const Login = () => {
  const { setUser, setToken } = useStateContext();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate()
  const emailRef = useRef();
  const passwordRef = useRef();

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const validate = (loginData) => {
    const errors = {};
    if (!loginData.email) {
      errors.email = "Email is required";
    }
    if (!loginData.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return errors;
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Extract login data from input references
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Validate the login data
    const validationErrors = validate(loginData);

    if (Object.keys(validationErrors).length === 0) {
      setErrors("");
      axiosClient
        .post("/users/login", loginData)
        .then(({ data }) => {
          setUser(data.user);
          setToken(data.token);
        })
        .catch(({ response }) => {
          if (response && response.status === 401) {
            setAlertMessage(
              response?.data.error || "Invalid email or password"
            );
            setShowAlert(true);
          } else {
            setAlertMessage(response?.data.error);
            setShowAlert(true);
          }
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <CardHeader className="mb-4 grid h-28 place-items-center">
          <img src={logo} className="w-[35%]" alt="Logo" />
        </CardHeader>
        <form onSubmit={(e) => handleLogin(e)}>
          <CardBody className="flex flex-col gap-4">
            {showAlert && (
              <div className="bg-red-500 text-white px-4 py-2 mb-4 rounded">
                {alertMessage}
              </div>
            )}

            <Input
              label="Email"
              name="email"
              size="lg"
              className="custom-input-focus"
              defaultValue="admin@gmail.com"
              inputRef={emailRef}
            />
            {formErrors.email && (
              <span className=" text-red-500 font-inter font-medium text-xs">
                {formErrors.email}
              </span>
            )}
            <Input
              label="Password"
              name="password"
              type="password"
              size="lg"
              defaultValue="test1@"
              className="custom-input-focus"
              inputRef={passwordRef}
            />
            {formErrors.password && (
              <span className=" text-red-500 font-inter font-medium text-xs">
                {formErrors.password}
              </span>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <>
              <Button type="submit" className="bg-[#000C54]" fullWidth>
                Sign In
              </Button>
             
            </>
            {/* <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="/signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography> */}
          </CardFooter>
        </form>

      </Card>
    </div>
  );
};
