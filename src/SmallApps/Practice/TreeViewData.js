import { v4 as uuidv4 } from 'uuid';

export const DataMenues = [
  {
    id: uuidv4(),
    label: "Home",
    to: "/",
  },
  {
    id: uuidv4(),
    label: "Courses",
    to: "/profile",
    children: [
      {
        id: uuidv4(), // Add id here
        label: "Details",
        to: "details",
        children: [
          {
            id: uuidv4(), // Add id here
            label: "Location",
            to: "location",
            children: [
              {
                id: uuidv4(), // Add id here
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    label: "Settings",
    to: "/settings",
    children: [
      {
        id: uuidv4(), // Add id here
        label: "Account",
        to: "account",
      },
      {
        id: uuidv4(), // Add id here
        label: "Security",
        to: "security",
        children: [
          {
            id: uuidv4(), // Add id here
            label: "Login",
            to: "login",
          },
          {
            id: uuidv4(), // Add id here
            label: "Register",
            to: "register",
            children: [
              {
                id: uuidv4(), // Add id here
                label: "Random data",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DataMenues;