import React from "react";

import { useHistory } from "react-router-dom";

const ContactUs = (props) => {
  // console.log(props)

  const history = useHistory();

  const handleChange = () => {
    // props.history.push("/about-us")
    history.push("/about-us");
  };

  return (
    <div>
      Contact us
      <button onClick={() => handleChange()} className="btn btn-success">
        Route to About us
      </button>
    </div>
  );
};

export default ContactUs;
