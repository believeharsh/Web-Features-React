import React, { useState } from "react";



const Interest = ({ data, setData, errors }) => {
    const { interest } = data;
  
    const handleDataChange = (e) => {
      setData((prevState) => ({
        ...prevState,
        interest: e.target.checked
          ? [...prevState.interest, e.target.name]
          : prevState.interest.filter((i) => i !== e.target.name),
      }));
    };
    //   console.log(interest);
    return (
      <div>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={interest.includes("Coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="DSA"
            checked={interest.includes("DSA")}
            onChange={handleDataChange}
          />
          DSA
        </label>
        <label>
          <input
            type="checkbox"
            name="JavaScript"
            checked={interest.includes("JavaScript")}
            onChange={handleDataChange}
          />
          JavaScript
        </label>
  
        {errors.interest && <span className="errors">{errors.interest}</span>}
      </div>
    );
  };

  // there will be two more components like Interest component
  

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});
  const [Data, setData] = useState({
    name: "Harsh Dahiya",
    age: "20",
    email: "believeharsh@gmail.com",
    theme: "dark",
    interest: ["Coding", "JavaScript", "DSA"],
    settings: "true",
  });

  const Tabs = [
    {
      tabName: "Profile",
      component: Profile,
    },
    {
      tabName: "Interest",
      component: Interest,
    },
    {
      tabName: "Settings",
      component: Settings,
    },
  ];

  const validateFields = () => {
    let err = {};

    if (activeTab === 0) {
      // Profile Validation
      if (!Data.name || Data.name.length < 2) {
        err.name = "Name must be at least 2 characters.";
      }
      if (!Data.age || Number(Data.age) < 18) {
        err.age = "You must be at least 18 years old.";
      }
      if (!Data.email || Data.email.length < 5) {
        err.email = "Enter a valid email.";
      }
    }

    if (activeTab === 1) {
      // Interest Validation
      if (!Data.interest || Data.interest.length === 0) {
        err.interest = "Please select at least one interest.";
      }
    }

    setErrors(err);
    return Object.keys(err).length === 0; // Returns true if no errors
  };

  const ActiveTabComponent = Tabs[activeTab].component;

  const handlenextClick = () => {
    if (!validateFields()) return;
    setActiveTab((prev) => prev + 1);
  };

  const handleprevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmitClick = () => {
    console.log(Data);
  };

  return (
    <>
      <div className="container">
        <div className="tabs-styles">
          {Tabs.map((t, index) => {
            return (
              <p
                className={`tab-style ${index === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                key={index}
              >
                {t.tabName}
              </p>
            );
          })}
        </div>
        <div>
          <ActiveTabComponent data={Data} setData={setData} errors={errors} />
        </div>
        <div>
          {activeTab < 2 && <button onClick={handlenextClick}>Next</button>}
          {activeTab === Tabs.length - 1 && (
            <button onClick={handleSubmitClick}>Submit</button>
          )}
          {activeTab > 0 && <button onClick={handleprevClick}>Prev</button>}
        </div>
      </div>
    </>
  );
};

export default TabForm;