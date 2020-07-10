// import { grey } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    backgroundColor: "#1b2431",
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "298px",
    boxShadow: "0px 0px 2px black"
  },
  list: {
    margintop: "20px"
  },
  ListItemAvatar: {},
  listItem: {
    cursor: "pointer",
    backgroundColor: "#006666",
    borderRadius: "45px"
  },
  newChatBtn: {
    borderRadius: "15px",
    marginTop: "20px"
  },
  unreadMessage: {
    color: "white",
    position: "absolute",
    top: "10px",
    right: "10px"
  },
  welcome: {
    fontWeight: "200",
    color: "white",
    position: "absolute",
    top: "10px",
    left: "75px",
    fontFamily: "Arial, Helvetica, sans-serif"
  },
  topImage: {
    marginLeft: "20px",
    marginTop: "20px"
  }
});

export default styles;
