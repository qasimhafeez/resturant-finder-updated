const locationInfoBox = {
    backgroundColor: "brown",
    padding: "2rem",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 10,
    opacity: 0.7,
    maxWidth: "300px",
    color: "white",
  };
  
  const LocationWindow = ({ result }) => {
    return (
      open && (
        <div style={LocationWindowBox}>
          <p style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
            Close
          </p>
          <h2>{restaurantsName}</h2>
          <p>{address}</p>
        </div>
      )
    );
  };
  export default LocationWindow;
  