const styles = theme => ({
  sendBtn: {
    color: " #887191",
    cursor: "pointer",
    "&:hover": {
      color: "black"
    },
    marginTop: "7px",
    marginLeft: "7px"
  },

  chatTextBoxContainer: {
    position: "absolute",
    bottom: "15px",
    left: "310px",
    boxSizing: "border-box",
    overflow: "auto",
    width: "calc(100% - 290px - 20px)",
    backgroundColor: "",
    height: "30px"
  },

  chatTextBox: {
    color: "White",
    // backgroundColor: "grey",
    width: "calc(100% - 110px )"
  }
});

export default styles;
