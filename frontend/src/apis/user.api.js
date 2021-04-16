import apiConfig from '../config/api.config';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const userApis = {};

userApis.getUserId = async () => {
  const token = await SecureStore.getItemAsync('pms_token');
  const user_id = await axios
    .get(`${apiConfig['baseAuthURL']}${apiConfig['userApi']}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      return res['data']['data']['user_id'];
    })
    .catch((error) => {
      throw error;
    });
  return user_id;
};

export default userApis;
