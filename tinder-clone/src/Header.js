import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();

  return (
    // BEM naming convention
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" style={{ fontSize: 30 }} />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" style={{ fontSize: 30 }} />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
          alt="Tinder Logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon
            className="header__icon"
            style={{ fontSize: 30 }}
          />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
