import React from "react";
import "./Buttons.scss";

import { Avatar, Button, IconButton } from "@material-ui/core";
import { Apps, Notifications, VideoCall, MoreVert } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";

import { userSelector, setUser } from "../../../redux/user/userSlice";
import { auth, provider } from "../../../firebase";
import { serializeUserData } from "../../../utils";

const Buttons = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  const signIn = async () => {
    const data = await auth.signInWithPopup(provider);
    if (data && data.user) {
      dispatch(setUser(serializeUserData(data.user)));
      // dispatch(setAccessToken(data.credential?.accessToken));
    }
  };

  return (
    <div className="header__buttons">
      {!user ? (
        <div>
          <IconButton className="header__icon">
            <Apps />
          </IconButton>
          <IconButton className="header__icon">
            <MoreVert />
          </IconButton>
          <Button className="header__signIn" onClick={signIn}>
            <Avatar className="button__avatar" />
            Sign In
          </Button>
        </div>
      ) : (
        <div>
          <IconButton className="header__icon">
            <VideoCall />
          </IconButton>
          <IconButton className="header__icon">
            <Apps />
          </IconButton>
          <IconButton className="header__icon">
            <Notifications />
          </IconButton>
          <Avatar
            classes={{ root: "avatar" }}
            src={user.photoURL ? user.photoURL : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Buttons;
