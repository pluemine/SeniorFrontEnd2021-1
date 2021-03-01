import { StyleSheet } from "react-native";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 20,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#f49608",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.dark,
  },
  sectionOption: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.dark,
    textAlign: "center",
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#f49608",
  },
  cardDes: {
    fontSize: 12,
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
  maincard: {
    maxWidth: 500,
    width: "100%",
    margin: "auto",
    marginTop: 15,
    /*marginTop: -160,*/
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mainarea: {
    margin: 20,
  },
  textbox: {
    //backgroundColor: "#F1F1F1",
    color: "#000000",
    borderRadius: 6,
    width: "100%",
    marginTop: 15,
    marginBottom: 0,
    height: 40,
    //paddingLeft: 20,
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 2,
  },
  button: {
    backgroundColor: "#444444",
    borderRadius: 6,
    width: "100%",
    marginBottom: 0,
    height: 40,
  },
  buttonhome: {
    backgroundColor: "#444444",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 6,
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
    height: 40,
  },
  buttonhomebdr: {
    //backgroundColor: "#444444",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 6,
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
    height: 40,
  },
  filter: {
    //backgroundColor: "#444444",
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 6,
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
    height: 40,
  },
  itemcard: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 150,
    maxWidth: 500,
    width: "100%",
    margin: "auto",
    marginTop: 20,
    padding: 20,
  },
  space10: {
    margin: 10,
  },
});

module.exports = styles;
