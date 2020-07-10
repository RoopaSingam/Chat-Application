const styles = theme => ({
  content: {
    height: "calc(100% - 100px)",
    overflow: "auto",
    padding: "25px",
    marginLeft: "290px",
    boxSizing: "border-box",
    overflowY: "scroll",
    top: "50px",
    width: "calc(100% - 300px)",
    position: "absolute",
    backgroundColor: "#1b2427"
  },
  userSent: {
    float: "right",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: " #1f6357",
    color: "white",
    width: "300px",
    borderRadius: "10px"
  },
  usertime: {
    float: "right",
    clear: "both",
    padding: "2px",
    marginTop: "0px",
    color: "black",
    width: "30px"
  },

  friendSent: {
    float: "left",
    clear: "both",
    padding: "20px",
    boxSizing: "border-box",
    wordWrap: "break-word",
    marginTop: "10px",
    backgroundColor: "#76424e ",
    color: "white",
    width: "300px",
    borderRadius: "10px"
  },

  chatHeader: {
    width: "calc(100% - 290px)",
    height: "50px",
    backgroundColor: "lightblue",
    position: "fixed",
    marginLeft: "290px",
    fontSize: "18px",
    textAlign: "center",
    color: "black",
    boxSizing: "border-box"
  }
});

export default styles;
