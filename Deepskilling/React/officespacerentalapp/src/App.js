import officeImage from "./office.jpg";

function App() {

  const office = {
    Name: "Cognizant Office",
    Rent: 55000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "Cognizant Chennai",
      Rent: 55000,
      Address: "Chennai"
    },
    {
      Name: "Infosys Bangalore",
      Rent: 70000,
      Address: "Bangalore"
    },
    {
      Name: "TCS Hyderabad",
      Rent: 65000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="400"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h3>{item.Name}</h3>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              Rent : {item.Rent}
            </p>

            <p>Address : {item.Address}</p>

            <hr />

          </div>

        ))
      }

    </div>
  );

}

export default App;