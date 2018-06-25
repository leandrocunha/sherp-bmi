const Bmi = (state = { measure: {}, range: { loading: true } }, action) => {
  switch (action.type) {
    case 'BIRTH_SAVE':
      return { ...state, birth: action.data };

    case 'GENDER_SAVE':
      return { ...state, gender: action.data };

    case 'MEASURES_SAVE':
      return {
        ...state,
        measures: Object.assign({ ...state.measures }, action.data)
      };

    case 'RANGE_FETCH_SUCCESS':
      return { ...state, range: { loading: false, data: action.data } };

    default:
      return state;
  }
};

export default Bmi;
