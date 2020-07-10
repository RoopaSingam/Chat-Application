import React from "react";
import { Picker } from "emoji-mart";

import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      chatText: "",
      emojiPickerState: "false"
    };
  }
  triggerPicker = event => {
    this.setState({
      emojiPickerState: !this.state.emojiPickerState
    });
  };
  componentDidMount() {
    this.setState({
      emojiPickerState: "false"
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder="Type your message.."
          onKeyUp={e => this.userTyping(e)}
          id="chattextbox"
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}
        />

        <AttachFileIcon
          onClick={this.triggerPicker}
          className={classes.sendBtn}
        />
        <EmojiEmotionsIcon
          onClick={this.triggerPicker}
          className={classes.sendBtn}
        />

        {this.state.emojiPickerState && (
          <Picker
            title="Pick your emoji…"
            emoji="point_up"
            // onSelect={emoji => SetMessage(message + emoji.native)}
          />
        )}
        <Send onClick={this.submitMessage} className={classes.sendBtn} />
      </div>
    );
  }
  userTyping = e =>
    e.keyCode === 13
      ? this.submitMessage()
      : this.setState({ chatText: e.target.value });
  messageValid = txt => txt && txt.replace(/\s/g, "").length;
  userClickedInput = () => this.props.userClickedInputFn();
  submitMessage = () => {
    if (this.messageValid(this.state.chatText)) {
      this.props.submitMessageFn(this.state.chatText);
      document.getElementById("chattextbox").value = "";
    }
  };
}

export default withStyles(styles)(ChatTextBoxComponent);
