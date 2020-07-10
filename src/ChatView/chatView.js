import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import Avatar from "@material-ui/core/Avatar";

class ChatViewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      hrs: new Date().getHours(),
      minutes: new Date().getMinutes(),
      delete: true
    };
  }
  componentDidMount = () => {
    const container = document.getElementById("chatview-container");
    if (container) container.scrollTo(0, container.scrollHeight);
  };
  componentDidUpdate = () => {
    const container = document.getElementById("chatview-container");
    if (container) container.scrollTo(0, container.scrollHeight);
  };

  setTime = () => {
    this.setState({
      hrs: new Date().getHours(),
      sec: new Date().getSeconds()
    });
  };
  render() {
    const { classes } = this.props;

    if (this.props.chat === undefined) {
      return <main className={classes.content} />;
    } else if (this.props.chat !== undefined) {
      return (
        <div>
          <div>
            <div className={classes.chatHeader}>
              <pre>
                <Avatar alt="Remy Sharp" className={classes.topImage}>
                  {this.props.userEmail[0].split("")[0].toUpperCase()}
                </Avatar>
                Chat with{" "}
                {this.props.chat.users
                  .filter(_usr => _usr !== this.props.user)[0]
                  .replace(/@[^@]+$/, "")}{" "}
                <DeleteOutlineIcon />
              </pre>
            </div>
          </div>
          {this.state.delete ? (
            <main id="chatview-container" className={classes.content}>
              {this.props.chat.messages.map((_msg, _index) => {
                return (
                  <div>
                    {" "}
                    <div
                      key={_index}
                      className={
                        _msg.sender === this.props.user
                          ? classes.userSent
                          : classes.friendSent
                      }
                    >
                      {_msg.message}
                      {/* <div className={classes.usertime}>
                      {this.state.hrs}:{this.state.minutes}
                    </div> */}
                    </div>
                  </div>
                );
              })}
            </main>
          ) : null}
        </div>
      );
    } else {
      return <div className="chatview-container">Loading...</div>;
    }
  }
}

export default withStyles(styles)(ChatViewComponent);
