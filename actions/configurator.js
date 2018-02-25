import { createClient } from 'contentful';
import { IS_FETCHING, TOPPINGS_FETCH } from '../actiontypes/';

const client = createClient({
  space: 'ud3s73f14jbe',
  accessToken: '4875d8a5adc22e37b02e585947d57f03d8b56e78a2c68e101f88c62bbaeaa09f',
});

const fetchData = (requestedContent, callback) =>
  client.getEntries({ content_type: requestedContent })
    .then((response) => {
      callback(response);
    });

function toppingsFetch() {
  return (dispatch) => {
    dispatch({
      type: IS_FETCHING,
      payload: true,
    });
    return fetchData('toppings', (res) => {
      dispatch({
        type: TOPPINGS_FETCH,
        payload: res,
      });
      dispatch({
        type: IS_FETCHING,
        payload: false,
      });
    });
  };
}

export {
  toppingsFetch,
};
