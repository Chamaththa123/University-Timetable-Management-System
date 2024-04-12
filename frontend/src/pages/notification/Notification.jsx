import { Card, CardBody, Typography } from '@material-tailwind/react'
import React, { useState, useEffect } from "react";
import axiosClient from "../../../axios-client";
import { useStateContext } from "../../contexts/NavigationContext";
import "../../assets/css/css.css";

export const Notifications = () => {
  const { user } = useStateContext();

  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const fetchNotification = () => {
      axiosClient
        .get(`/notifications/`)
        .then((res) => {
          setNotification(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchNotification();
  }, []);

  // Function to format timestamp to a user-friendly date and time
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust the format as needed
  };

  return (
    <>
      <Card className="h-fit  rounded-none mx-3 md:mx-5 md:ml-8 mr-3 font-inter">
        <CardBody className="flex flex-col min-h-[60vh] gap-5 p-3 pl-6 ">
          <div className=" flex justify-between w-full">
            <Typography
              variant="h4"
              className=" font-inter font-bold tracking-wide"
              color="blue-gray"
            >
              Notifications
            </Typography>
          </div>
          {notification.length === 0 ? (
            <div className='flex items-center justify-center flex-1'>
              <span className=' font-inter font-medium'>
                There are no notifications for this account
              </span>
            </div>
          ) : (
            <div>
              {notification.map((notif, index) => (
                <div key={index}>
                  <div class="timeline">
                    <div class="container right">
                      <div className="content  text-sm">
                        <div>
                          <span>{notif.message}</span>
                          <br/>
                          <span>{formatTimestamp(notif.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    </>
  )
}
