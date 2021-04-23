import { ADD_PROVINCES } from './ConstantActionType';
import { ADD_TYPES } from './ConstantActionType';

export const addProvinces = provincesIndex => (
    {
      type: 'ADD_PROVINCES',
      payload: provincesIndex,
    }
  );

export const addTypes = typesIndex => (
    {
      types: 'ADD_TYPES',
      payload: typesIndex,
    }
);