export const birthSave = params => ({
  type: 'BIRTH_SAVE',
  data: params
});

export const calculate = params => ({
  type: 'BMI_FETCH',
  data: params
});

export const genderSave = params => ({
  type: 'GENDER_SAVE',
  data: params
});

export const measuresSave = params => ({
  type: 'MEASURES_SAVE',
  data: params
});

export const range = () => ({
  type: 'RANGE_FETCH'
});
