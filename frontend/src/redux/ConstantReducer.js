import { combineReducers } from 'redux';
import { ADD_PROVINCES } from './ConstantActionType';

const INITIAL_STATE = {
  current: {
    idToProvinces : {
    1:'กรุงเทพมหานคร',
    2:'สมุทรปราการ',
    3:'นนทบุรี',
    4:'ปทุมธานี',
    5:'พระนครศรีอยุธยา',
    6:'อ่างทอง',
    7:'ลพบุรี',
    8:'สิงห์บุรี',
    9:'ชัยนาท',
    10:'สระบุรี',
    11:'ชลบุรี',
    12:'ระยอง',
    13:'จันทบุรี',
    14:'ตราด',
    15:'ฉะเชิงเทรา',
    16:'ปราจีนบุรี',
    17:'นครนายก',
    18:'สระแก้ว',
    19:'นครราชสีมา',
    20:'บุรีรัมย์',
    21:'สุรินทร์',
    22:'ศรีสะเกษ',
    23:'อุบลราขธานี',
    24:'ยโสธร',
    25:'ชัยภูมิ',
    26:'อำนาจเจริญ',
    27:'หนองบัวลำภู',
    28:'ขอนแก่น',
    29:'อุดรธานี',
    30:'เลย',
    31:'หนองคาย',
    32:'มหาสารคาม',
    33:'ร้อยเอ็ด',
    34:'กาฬสินธ์ุ',
    35:'สกลนคร',
    36:'นครพนม',
    37:'มุกดาหาร',
    38:'เชียงใหม่',
    39:'ลำพูน',
    40:'ลำปาง',
    41:'อุตรดิตถ์',
    42:'แพร่',
    43:'น่าน',
    44:'พะเยา',
    45:'เชียงราย',
    46:'แม่ฮ่องสอน',
    47:'นครสวรรค์',
    48:'อุทัยธานี',
    49:'กำแพงเพชร',
    50:'ตาก',
    51:'สุโขทัย',
    52:'พิษณุโลก',
    53:'พิจิตร',
    54:'เพชรบูรณ์',
    55:'ราชบุรี',
    56:'กาญจนบุรี',
    57:'สุพรรณบุรี',
    58:'นครปฐม',
    59:'สมุทรสาคร',
    60:'สมุทรสงคราม',
    61:'เพชรบุรี',
    62:'ประจวบคีรีขันธ์',
    63:'นครศรีธรรมราช',
    64:'กระบี่',
    65:'พังงา',
    66:'ภูเก็ต',
    67:'สุราษฏร์ธานี',
    68:'ระนอง',
    69:'ชุมพร',
    70:'สงขลา',
    71:'สตูล',
    72:'ตรัง',
    73:'พัทลุง',
    74:'ปัตตานี',
    75:'ยะลา',
    76:'นราธิวาส',
    77:'บึงกาฬ',
  }
  ,provincesToId : {
    'กรุงเทพมหานคร':1,
    'สมุทรปราการ':2,
    'นนทบุรี':3,
    'ปทุมธานี':4,
    'พระนครศรีอยุธยา':5,
    'อ่างทอง':6,
    'ลพบุรี':7,
    'สิงห์บุรี':8,
    'ชัยนาท':9,
    'สระบุรี':10,
    'ชลบุรี':11,
    'ระยอง':12,
    'จันทบุรี':13,
    'ตราด':14,
    'ฉะเชิงเทรา':15,
    'ปราจีนบุรี':16,
    'นครนายก':17,
    'สระแก้ว':18,
    'นครราชสีมา':19,
    'บุรีรัมย์':20,
    'สุรินทร์':21,
    'ศรีสะเกษ':22,
    'อุบลราขธานี':23,
    'ยโสธร':24,
    'ชัยภูมิ':25,
    'อำนาจเจริญ':26,
    'หนองบัวลำภู':27,
    'ขอนแก่น':28,
    'อุดรธานี':29,
    'เลย':30,
    'หนองคาย':31,
    'มหาสารคาม':32,
    'ร้อยเอ็ด':33,
    'กาฬสินธ์ุ':34,
    'สกลนคร':35,
    'นครพนม':36,
    'มุกดาหาร':37,
    'เชียงใหม่':38,
    'ลำพูน':39,
    'ลำปาง':40,
    'อุตรดิตถ์':41,
    'แพร่':42,
    'น่าน':43,
    'พะเยา':44,
    'เชียงราย':45,
    'แม่ฮ่องสอน':46,
    'นครสวรรค์':47,
    'อุทัยธานี':48,
    'กำแพงเพชร':49,
    'ตาก':50,
    'สุโขทัย':51,
    'พิษณุโลก':52,
    'พิจิตร':53,
    'เพชรบูรณ์':54,
    'ราชบุรี':55,
    'กาญจนบุรี':56,
    'สุพรรณบุรี':57,
    'นครปฐม':58,
    'สมุทรสาคร':59,
    'สมุทรสงคราม':60,
    'เพชรบุรี':61,
    'ประจวบคีรีขันธ์':62,
    'นครศรีธรรมราช':63,
    'กระบี่':64,
    'พังงา':65,
    'ภูเก็ต':66,
    'สุราษฏร์ธานี':67,
    'ระนอง':68,
    'ชุมพร':69,
    'สงขลา':70,
    'สตูล':71,
    'ตรัง':72,
    'พัทลุง':73,
    'ปัตตานี':74,
    'ยะลา':75,
    'นราธิวาส':76,
    'บึงกาฬ':77,
  }
  ,
  types : [
    'Resident',
    'Department Store',
    'Offices',
    'Mix-used',
  ]
  ,
  provinces : [
    'กรุงเทพมหานคร',
    'สมุทรปราการ',
    'นนทบุรี',
    'ปทุมธานี',
    'พระนครศรีอยุธยา',
    'อ่างทอง',
    'ลพบุรี',
    'สิงห์บุรี',
    'ชัยนาท',
    'สระบุรี',
    'ชลบุรี',
    'ระยอง',
    'จันทบุรี',
    'ตราด',
    'ฉะเชิงเทรา',
    'ปราจีนบุรี',
    'นครนายก',
    'สระแก้ว',
    'นครราชสีมา',
    'บุรีรัมย์',
    'สุรินทร์',
    'ศรีสะเกษ',
    'อุบลราขธานี',
    'ยโสธร',
    'ชัยภูมิ',
    'อำนาจเจริญ',
    'หนองบัวลำภู',
    'ขอนแก่น',
    'อุดรธานี',
    'เลย',
    'หนองคาย',
    'มหาสารคาม',
    'ร้อยเอ็ด',
    'กาฬสินธ์ุ',
    'สกลนคร',
    'นครพนม',
    'มุกดาหาร',
    'เชียงใหม่',
    'ลำพูน',
    'ลำปาง',
    'อุตรดิตถ์',
    'แพร่',
    'น่าน',
    'พะเยา',
    'เชียงราย',
    'แม่ฮ่องสอน',
    'นครสวรรค์',
    'อุทัยธานี',
    'กำแพงเพชร',
    'ตาก',
    'สุโขทัย',
    'พิษณุโลก',
    'พิจิตร',
    'เพชรบูรณ์',
    'ราชบุรี',
    'กาญจนบุรี',
    'สุพรรณบุรี',
    'นครปฐม',
    'สมุทรสาคร',
    'สมุทรสงคราม',
    'เพชรบุรี',
    'ประจวบคีรีขันธ์',
    'นครศรีธรรมราช',
    'กระบี่',
    'พังงา',
    'ภูเก็ต',
    'สุราษฏร์ธานี',
    'ระนอง',
    'ชุมพร',
    'สงขลา',
    'สตูล',
    'ตรัง',
    'พัทลุง',
    'ปัตตานี',
    'ยะลา',
    'นราธิวาส',
    'บึงกาฬ',
  ]

},

  possible: {}
     ,
};

const ConstantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PROVINCES':
      const {
        current,
        possible,
      } = state;

      const addProvinces = possible.splice(action.payload, 1);

      current.push(addProvinces);

      const newState = { current, possible };

      return newState;
    
    case 'ADD_TYPES':
      const {
        types
      } = state;
  
       const addTypes = possible.splice(action.payload, 1);
  
       current.push(addTypes);
  
       const newState1 = { types };
  
       return newState1;

    default:
      return state
  }
};

export default combineReducers({
  constantValue: ConstantReducer
});