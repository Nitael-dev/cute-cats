import { Button } from "@mui/material";
import React from "react";
import "./styles.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div>
        <Button
          onClick={() => {
            window.localStorage.clear();
            setTimeout(() => {
              window.location.replace("/");
            }, 200);
          }}
          variant="outlined"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Home;
