import React from "react";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import NotificationImportant from "@material-ui/icons/NotificationImportant";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

class ChatListComponent extends React.Component {
  render() {
    const { classes } = this.props;

    if (this.props.chats.length > 0) {
      return (
        <div className={classes.root}>
          <div style={{ height: "90px" }}>
            <Avatar alt="Remy Sharp" className={classes.topImage}>
              {this.props.userEmail[0].split("")[0].toUpperCase()}
            </Avatar>
            <div className={classes.welcome}>
              <h4>
                Welcome {this.props.userEmail.replace(/@[^@]+$/, "")}
                <span role="img" aria-label="">
                  😁
                </span>
              </h4>
            </div>
            <Button
              variant="contained"
              fullWidth
              color="grey"
              onClick={this.newChat}
              className={classes.newChatBtn}
            >
              Click for a new chat
            </Button>
          </div>
          <hr />
          <div>
            <List>
              {this.props.chats.map((_chat, _index) => {
                return (
                  <div key={_index}>
                    <ListItem
                      onClick={() => this.selectChat(_index)}
                      className={classes.listItem}
                      selected={this.props.selectedChatIndex === _index}
                      alignItems="flex-start"
                    >
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp">
                          {_chat.users
                            .filter(_user => _user !== this.props.userEmail)[0]
                            .split("")[0]
                            .toUpperCase()}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        style={{ color: "white" }}
                        primary={_chat.users
                          .filter(_user => _user !== this.props.userEmail)[0]
                          .replace(/@[^@]+$/, "")}
                        secondary={
                          <React.Fragment>
                            <Typography component="span" color="textPrimary">
                              {_chat.messages[
                                _chat.messages.length - 1
                              ].message.substring(0, 30) + " ..."}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                      {_chat.receiverHasRead === false &&
                      !this.userIsSender(_chat) ? (
                        <ListItemIcon>
                          <NotificationsNoneIcon
                            className={classes.unreadMessage}
                          />
                        </ListItemIcon>
                      ) : null}
                    </ListItem>
                    <Divider />
                  </div>
                );
              })}
            </List>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <div style={{ backgroundColor: "black", height: "90px" }}>
            <Avatar alt="Remy Sharp" className={classes.topImage}>
              {this.props.userEmail[0].split("")[0].toUpperCase()}
            </Avatar>
            <div className={classes.welcome}>
              <h4>Welcome {this.props.userEmail.replace(/@[^@]+$/, "")}</h4>
              <span role="img" aria-label="">
                😁
              </span>
            </div>
            <Button
              variant="contained"
              fullWidth
              color="grey"
              onClick={this.newChat}
              className={classes.newChatBtn}
            >
              Click for a new chat
            </Button>{" "}
          </div>

          <List />
        </div>
      );
    }
  }
  userIsSender = chat =>
    chat.messages[chat.messages.length - 1].sender === this.props.userEmail;
  newChat = () => this.props.newChatBtnFn();
  selectChat = index => this.props.selectChatFn(index);
}

export default withStyles(styles)(ChatListComponent);

// import React from 'react';
// import './chatList.css';

// class ChatListComponent extends React.Component {
//   render() {
//     if(this.props.chats.length > 0) {
//       return(
//         <div className='chat-list-container'>
//           <button onClick={this.newChat} className='add-new-chat-button'>New Message</button>
//           {
//             this.props.chats.map((_chat, _index) => {
//               return (
//                 <div onClick={() => this.selectChat(_index)} key={_index} className={`individual-chat-container ${this.props.selectedChatIndex === _index ? 'selected-chat' : ''}`}>
//                   <h5>{_chat.users.filter(_user => _user !== this.props.userEmail)[0]}</h5>
//                   <p>{_chat.messages[_chat.messages.length - 1].message.substring(0, 30) + ' ...'}</p>
//                 </div>
//               )
//             })
//           }
//         </div>
//       );
//     } else {
//       return(
//         <div className='chat-list-container'>
//           <button onClick={this.newChat} className='add-new-chat-button'>New Message</button>
//         </div>
//       );
//     }
//   }
//   newChat = () => this.props.newChatBtnFn();
//   selectChat = (index) => this.props.selectChatFn(index);
// }

// export default ChatListComponent;
