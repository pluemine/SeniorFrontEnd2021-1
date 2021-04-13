import apiConfig from '../config/api.config';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const activityApi = {};

activityApi.claimLicensePlate = async (usage_log_id, usage_log_uid) => {
  const token = await SecureStore.getItemAsync('pms_token');
  const response = await axios
    .put(
      `${apiConfig.baseAuthURL}${apiConfig.parkingApi}/claimByLogId`,
      {
        usage_log_id: parseInt(usage_log_id),
        usage_log_uid: usage_log_uid,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      return res['data']['data']['license_plate_in_use'];
    })
    .catch((error) => {
      throw error;
    });
  return response;
};

export default activityApi;
