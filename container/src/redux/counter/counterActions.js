import { INCREASE_COUNTER } from './counterTypes';

export const increaseCounter = (number = 1) => {
  return {
    type: INCREASE_COUNTER,
  };
};
