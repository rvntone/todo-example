// export const asyncAction = id => dispatch => {
//   dispatch({
//     type: 'LOADING',
//   });
//   dispatch({
//     type: 'LOADING2',
//   });
//   return dispatch(
//     fetch(`url/user/${id}`)
//       .then(response => {
//         dispatch(otherAsycFunction());
//         response.json().then(data => {
//           return {
//             type: 'SUCCESS',
//             payload: response.data,
//           };
//         });
//       })
//       .catch(error => {
//         return {
//           type: 'FAILED',
//           payload: 'ERRROR',
//         };
//       }),
//   );
// // };
// const callToAPI = ({ url, method, action1, action2, action3 }) => {
//   return {
//       ['CALL_API']:{
//         url,
//         method,
//         action1,
//         action2,
//         action3,
//       }
//   };
// };

// export const getUser = id => dispatch => {
//   return callToAPI({
//     url: `url/user/${id}`,
//     method: 'GET',
//     isAuthenticated: true,
//     action1: 'LOADING',
//     action2: (data)=>{
//         return dispatch({})
//     },
//     action3: 'FAILED',
//   });
// };
// export const asyncAction2 = id => async dispatch => {
//   dispatch({
//     type: 'LOADING',
//   });
//   dispatch({
//     type: 'LOADING2',
//   });
//   let response;
//   try {
//     response = await fetch(`url/user/${id}`);
//   } catch (error) {
//     return dispatch({
//       type: 'FAILED',
//       payload: 'ERRROR',
//     });
//   }
//   let data;
//   const other = await otherAsycFunction();
//   dispatch(other);
//   try {
//     data = await response.json();
//   } catch (error) {
//     return dispatch({
//       type: 'FAILED',
//       payload: 'ERRROR',
//     });
//   }
//   return dispatch({
//     type: 'SUCCESS',
//     payload: data,
//   });
// };
