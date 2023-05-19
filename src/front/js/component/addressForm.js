import React, { useState } from "react";

export const AddressForm = () => {
  const [addressInputByUser, setAddressInputByUser] = useState({
    street: "",
    apartment: "",
    city: "",
    state: "",
    postalCode: "",
    country: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressInputByUser((previousAddress) => ({ ...previousAddress, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateAddress();
    
  };


  const validateAddress = async () => {
    const apiKey = "";

    const apiURL = `https://addressvalidation.googleapis.com/v1:validateAddress?key=${apiKey}`;

    const countryCode = "GB";
    const transcribedAddress = {
      address: {
        regionCode: countryCode,
        locality: "London",
        postalCode: "NW1 6XE",
        addressLines: ["221B Baker Street", "NW1 6XE"]
      }
    };
  
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transcribedAddress)
    });
  
    const data = await response.json();
    console.log(data);
    return data;
  };
  

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Street</label>
          <input
            type="text"
            className="form-control"
            name="street"
            value={addressInputByUser.street}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apartment</label>
          <input
            type="text"
            className="form-control"
            name="apartment"
            value={addressInputByUser.apartment}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={addressInputByUser.city}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={addressInputByUser.state}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Postal Code</label>
          <input
            type="text"
            className="form-control"
            name="postalCode"
            value={addressInputByUser.postalCode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={addressInputByUser.country}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      <div>
        <h2>Address:</h2>
        <pre>{JSON.stringify(addressInputByUser, null, 2)}</pre>
      </div>
    </div>
  );

};



