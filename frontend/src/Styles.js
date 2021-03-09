import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#ff0000",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    //backgroundColor: "#00FF00",
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: "#000000",
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
  textbox: {
    color: "#000000",
    width: "100%",
    marginTop: 5,
    marginBottom: 0,
    height: 44,
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 1,
  },
  textboxerror: {
    color: "#000000",
    width: "100%",
    marginTop: 5,
    marginBottom: 0,
    height: 44,
    borderBottomColor: "#FF1111",
    borderBottomWidth: 1,
  },
  texterror: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 10,
    color: "#FF0000",
  },
  button: {
    borderWidth: 1,
    borderColor: "#404040",
    backgroundColor: "#404040",
    borderRadius: 4,
    width: "100%",
    marginTop: 10,
    height: 40,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonbdr: {
    borderWidth: 1,
    borderColor: "#404040",
    borderRadius: 4,
    width: "100%",
    marginTop: 10,
    height: 40,
    justifyContent: "center",
  },
  buttonbdrText: {
    color: "#404040",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonfilter: {
    borderWidth: 1,
    borderColor: "#404040",
    borderRadius: 4,
    width: "100%",
    marginTop: 10,
    height: 38,
    justifyContent: "center",
  },
  buttonbdrRed: {
    borderWidth: 1,
    borderColor: "#8C0000",
    borderRadius: 4,
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
    padding: 10,
  },
  buttonTextRed: {
    color: "#8C0000",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  textbold: {
    fontWeight: "600",
  },

  //AccessCard Page
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

  //Access page
  accessSearchItem1: {
    paddingRight: 10,
    width: "70%",
  },
  accessSearchItem2: {
    width: "30%",
  },
  accessCard: {
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFFFFF",
  },
  accessContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    //backgroundColor: "#00FF00",
  },

  //Other page
  otherAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: "stretch",
  },
  otherCenterBlock: {
    alignItems: "center",
  },
  otherTitle: {
    marginTop: 10,
    //fontSize: 18,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
  },
  otherDes: {
    fontSize: 12,
    fontWeight: "400",
    //color: "#444444",
    color: "#FFFFFF",
    textAlign: "center",
  },
  otherMenuBlock: {
    //marginTop: 15,
    //marginBottom: 15,
  },
  otherMenuTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000000",
  },
  otherMenuTitleRed: {
    fontSize: 15,
    fontWeight: "600",
    color: "#8C0000",
  },
  otherMenuTitleBlue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#003366",
  },
  otherMenuDes: {
    fontSize: 12,
    fontWeight: "400",
    color: "#444444",
  },
  otherMenu: {
    marginVertical: 15,
    //paddingHorizontal: 15,
  },
  otherMenuRed: {
    marginVertical: 15,
    //paddingHorizontal: 15,
  },
});

module.exports = styles;
