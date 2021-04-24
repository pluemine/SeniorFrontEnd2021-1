import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const MyColor = {
  white: '#fff',
  black: '#000',
  gray1: '#444444',
  gray2: '#888888',
  gray3: '#cccccc',
  gray4: '#f1f1f1',
  red1: '#ff1111',
  red2: '#ff0000',
  red3: '#8c0000',
  button: '#5394b5',
  buttonred: '#8c0000',
  //blue: '#78aac3',
  blue: '#5893AF',
  pressedBlued: '#5893AF',
  orange: '#eeab73',
  pressedOrange: '#D99154',
  dark_orange: '#c2722f',
  disable: '#cccccc',
  tabBarUnFocus: '#c4c4c4',
};

export const Fonts = {
  TitleFont: 'NunitoBold',
  thaiFontLight: 'KanitLight',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    //backgroundColor: "#00FF00",
  },
  sectionContainerButton: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 48,
    //backgroundColor: "#00FF00",
  },
  sectionContainerHeader: {
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  sectionContainerScroll: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: MyColor.black,
    marginBottom: 20,
  },
  sectionTitlewoNav: {
    fontSize: 32,
    fontFamily: Fonts.TitleFont,
    fontWeight: '600',
    color: MyColor.black,
    marginBottom: 20,
    paddingTop: 40,
  },
  sectionSubTitleActivity: {
    fontSize: 24,
    fontWeight: '600',
    color: MyColor.black,
    marginBottom: 12,
  },
  sectionTitlewoNavWhite: {
    fontSize: 32,
    fontWeight: '600',
    color: MyColor.white,
    marginBottom: 20,
    paddingTop: 40,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: '800',
    color: MyColor.highlight,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: MyColor.gray1,
  },
  sectionOption: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '400',
    color: MyColor.gray1,
    textAlign: 'center',
  },

  //textbox
  textbox: {
    color: MyColor.black,
    width: '100%',
    marginTop: 5,
    marginBottom: 0,
    height: 44,
    borderBottomColor: MyColor.gray4,
    borderBottomWidth: 1,
  },
  textboxerror: {
    color: MyColor.black,
    width: '100%',
    marginTop: 5,
    marginBottom: 0,
    height: 44,
    borderBottomColor: MyColor.red1,
    borderBottomWidth: 1,
  },
  texterror: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 10,
    color: MyColor.red2,
  },

  //button
  button: {
    borderWidth: 1,
    borderColor: MyColor.button,
    backgroundColor: MyColor.button,
    borderRadius: 4,
    width: '100%',
    marginTop: 10,
    height: 44,
    justifyContent: 'center',
  },
  buttonDisable: {
    borderWidth: 1,
    borderColor: MyColor.gray3,
    backgroundColor: MyColor.gray3,
    borderRadius: 4,
    width: '100%',
    marginTop: 10,
    height: 44,
    justifyContent: 'center',
  },
  buttonText: {
    color: MyColor.white,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonbdr: {
    borderWidth: 1,
    borderColor: MyColor.button,
    borderRadius: 4,
    width: '100%',
    marginTop: 10,
    height: 44,
    justifyContent: 'center',
  },
  buttonbdrText: {
    color: MyColor.button,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonbdrRed: {
    borderWidth: 1,
    borderColor: MyColor.buttonred,
    borderRadius: 4,
    width: '100%',
    marginTop: 10,
    marginBottom: 0,
    padding: 10,
  },
  buttonTextRed: {
    color: MyColor.buttonred,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonPicker: {
    borderWidth: 1,
    borderColor: MyColor.gray4,
    backgroundColor: MyColor.gray4,
    borderRadius: 4,
    width: '22%',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPickerSelect: {
    borderWidth: 1,
    borderColor: MyColor.blue,
    backgroundColor: MyColor.blue,
    borderRadius: 4,
    width: '22%',
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonPicker: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.black,
  },
  textButtonPickerSelect: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.white,
  },

  //text
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10,
  },
  textHeaderBlue: {
    fontSize: 18,
    fontWeight: '600',
    color: MyColor.blue,
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: MyColor.black,
  },
  textTitleBlue: {
    fontSize: 32,
    fontWeight: '600',
    color: MyColor.blue,
  },
  textPreTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: MyColor.black,
  },
  textSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  textDes: {
    fontSize: 12,
    color: Colors.dark,
  },
  textSubtitleWhite: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
  },
  textDesWhite: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.white,
  },
  textMenuTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.black,
  },
  textMenuTitleRed: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.red1,
  },
  textMenuTitleBlue: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.blue,
  },
  textMenuTitleOrange: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.pressedOrange,
  },
  textMenuDes: {
    fontSize: 12,
    fontWeight: '400',
    color: MyColor.gray1,
  },
  textMenuDesBold: {
    fontSize: 12,
    fontWeight: '600',
    color: MyColor.black,
  },

  //tabbar
  tabBarStyle: {
    backgroundColor: '#fff',
    borderColor: 'rgba(255, 255, 255, 1)',
    borderTopColor: null,
    // shadowColor: MyColor.gray2,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 8,
    // elevation: 5,
  },
  tabBarTitle: {
    color: MyColor.gray3,
    fontSize: 12,
    fontFamily: Fonts.TitleFont,
  },
  tabBarTitleActive: {
    color: MyColor.blue,
    fontSize: 12,
    fontFamily: Fonts.TitleFont,
  },

  //card
  itemcard: {
    borderRadius: 10,
    backgroundColor: MyColor.white,
    shadowColor: MyColor.gray2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    height: 140,
    maxWidth: 500,
    width: '100%',
    margin: 'auto',
    marginTop: 20,
    // overflow: "hidden",
    // padding: 20,
  },
  cardShow: {
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: MyColor.white,
    shadowColor: MyColor.gray2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  cardShowBorder: {
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: MyColor.white,
    shadowColor: MyColor.blue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 8,
    elevation: 5,
  },
  card: {
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: MyColor.white,
    shadowColor: MyColor.gray2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTrans: {
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'rgba(250,250,250,0.9)',
    shadowColor: MyColor.gray2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  cardContainer: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  cardContainerHeaderOverlay: {
    paddingHorizontal: 24,
    paddingVertical: 0,
  },
  cardMenuBlock: {
    marginVertical: 15,
  },
  cardMenuBlockSpace: {
    marginVertical: 24,
  },
  cardMenuBlockSpaceTop: {
    marginVertical: 24,
    marginTop: 48,
  },
  cardMenuBlockButton: {
    marginBottom: 24,
  },
  cardShortcut: {
    height: 100,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: MyColor.white,
    shadowColor: MyColor.gray2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  cardShortcutData: {
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //icon
  iconHomeuser: {
    height: 50,
    width: 70,
  },
  iconLicensePlate: {
    height: 70,
    width: 98,
  },
  iconPayment: {
    height: 70,
    width: 70,
  },
  iconEdit: {
    height: 25,
    width: 25,
  },
  iconAvatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 20,
  },

  // pic
  picShareOuter: {
    marginRight: 20,
    shadowColor: MyColor.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  picShare: {
    borderRadius: 4,
    width: 100,
    height: 100,
  },
  picBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  picParkingBg: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover',
  },
  /* LicensePlateWaitingCard Style */
  licensePlateWaitingCardWrapper: {
    position: 'relative',
  },
  licensePlateWaitingCard: {
    // maxWidth: 500,
    // position: 'relative',
    // width: '100%',
    // margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: MyColor.white,
    shadowColor: MyColor.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  licensePlateWaitingCardBadge: {
    position: 'absolute',
    right: -18,
    top: 0,
  },
  licensePlateWaitingCardBadgeIcon: {
    height: 36,
    width: 36,
    borderRadius: 0,
  },
  licensePlateWaitingCardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  licensePlateWaitingCardInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  licensePlateWaitingCardInfoText: {
    flexDirection: 'column',
    // alignSelf: 'center',
    alignItems: 'center',
    fontSize: 20,
    // justifyContent: 'space-between',
    // marginLeft: 20,
  },
  licensePlateWaitingCardInfoLicenseNumber: {
    fontSize: 26,
    fontFamily: Fonts.thaiFontLight,
    fontWeight: '600',
    color: MyColor.black,
  },
  licensePlateWaitingCardInfoLicenseProvince: {
    fontSize: 16,
    fontWeight: '400',
    color: MyColor.gray2,
  },
  licensePlateWaitingCardButtonsWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  licensePlateWaitingCardButton: {
    padding: 5,
    width: '50%',
  },
  licensePlateWaitingCardClaimButton: {
    backgroundColor: MyColor.button,
    borderRadius: 5,
    padding: 10,
  },
  licensePlateWaitingCardClaimText: {
    color: MyColor.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  licensePlateWaitingCardRejectButton: {
    backgroundColor: MyColor.orange,
    borderRadius: 5,
    padding: 10,
  },
  /* Activity Style */
  activityWrapper: {
    height: '100%',
    width: '100%',
  },
  historyActivityFlatListContainer: {
    width: '100%',
    // height: '100%',
    // flex: 1,
    padding: 10,
  },
  waitingActivityFlatListContainer: {
    width: '100%',
    // height: '100%',
    flexDirection: 'column',
    padding: 20,
  },
  noDataImageWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  loadingImage: {
    width: '30%',
    height: '75%',
    resizeMode: 'contain',
  },
  /* ---------------- */

  /* Ongoing Activity Card */
  ongoingActivityCardWrapper: {
    position: 'relative',
  },
  ongoingActivityCard: {
    // maxWidth: 500,
    width: '100%',
    margin: 'auto',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: MyColor.white,
    shadowColor: MyColor.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
  ongoingActivityCardContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  ongoingActivityCardInfoWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  ongoingActivityCardLeftInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 5,
  },
  ongoingActivityCardRightInfoWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    // marginBottom: 5,
  },
  ongoingActivityCardInfoTextWrapper: {
    flexDirection: 'column',
    // alignSelf: 'center',
    alignItems: 'flex-start',
    // justifyContent: 'space-between',
    marginLeft: 20,
  },
  ongoingActivityCardInfoDateTime: {
    fontSize: 10,
    // fontFamily: 'KanitLight',
    fontWeight: '600',
    // marginBottom: 5,
    color: MyColor.gray1,
  },
  ongoingActivityCardInfoPropertyName: {
    fontSize: 20,
    // fontFamily: 'KanitLight',
    fontWeight: '600',
    marginBottom: 5,
    color: MyColor.blue,
  },
  ongoingActivityCardInfoLicenseNumber: {
    fontSize: 18,
    // fontFamily: 'KanitLight',
    // fontWeight: '600',
    color: MyColor.black,
  },
  ongoingActivityCardInfoLicenseProvince: {
    fontSize: 14,
    fontWeight: '400',
    color: MyColor.gray2,
  },
  ongoingActivityCardPropertyImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  historyActivityCardPropertyImage: {
    width: 55,
    height: 55,
    resizeMode: 'cover',
  },
  /*-----------------------*/

  //Modal
  modalCover: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalArea: {
    width: '100%',
    height: 350,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 25,
  },
  modalLicenseArea: {
    width: '100%',
    height: 520,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  modalPaymentArea: {
    width: '100%',
    height: 600,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  modalTimeArea: {
    width: '100%',
    height: 450,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  modalTimeLongerArea: {
    width: '100%',
    height: 520,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  modalProvinceArea: {
    width: '100%',
    height: 520,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  modalCancel: {
    width: '100%',
    height: 60,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 25,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: MyColor.black,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalTitleRed: {
    fontSize: 32,
    fontWeight: '600',
    color: MyColor.red2,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalTextTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.black,
  },
  modalTextTitleHighlight: {
    fontSize: 15,
    fontWeight: '600',
    color: MyColor.black,
  },
  modalTextDes: {
    fontSize: 12,
    fontWeight: '400',
    color: MyColor.gray1,
  },
  modalTextBlock: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  modalDesBlock: {
    marginTop: 15,
    marginHorizontal: 20,
  },

  //NoData Picture
  noDataPic: {
    width: 300,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  noDataDes: {
    //color: "#444444",
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 40,
  },

  //Background Pic Add
  bgCardPic: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default styles;
