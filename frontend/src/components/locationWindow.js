const LocationWindowBox = {
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
  
  const LocationWindow = ({ restaurants, open }) => {
    return (
      open && (
        <div style={LocationWindowBox}>
          <p style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
            Close
          </p>
          {restaurants.map((restaurant, index) => {
            return (<>
            <h2>{restaurant.restaurantsName}</h2>
              <p>{restaurant.address}</p>
              </>)
            
          })}
          
        </div>
      )
    );
  };
  export default LocationWindow;
  