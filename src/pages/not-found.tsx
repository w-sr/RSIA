import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)({
  textDecoration: "none",
  fontSize: 18,
  color: "black",
  marginLeft: 16,
});

const NotFound = () => {
  return (
    <div>
      <div
        style={{
          width: 500,
          height: 200,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Page Not Found</p>
        <div>
          <StyledLink to="/dashboard">Go back page</StyledLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
