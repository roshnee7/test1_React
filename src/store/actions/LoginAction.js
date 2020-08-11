import axios from 'axios';

export  function LoginSubmit ( userName, password)  {
    let loginDto = {
        username : userName,
        password : password
    } ;console.log('loginDto',loginDto)
    return function (dispatch) {
      
        let getUrl = 'http://localhost:4000/api/user';
        let loginData = '';
        axios.post(getUrl, loginDto).then(res => {console.log('loginResponse>>',res)
            if (res.data.status ) {
               loginData = res.data;
               console.log('loginFFF',loginData)
            dispatch({
                    type: "LOGIN_SUBMIT",
                    payload: loginData
                });
            }else{
                dispatch({
                    type: "LOGIN_SUBMIT",
                    payload: "Error in Login"
                });
            }
        }).catch((error) => {
            console.log('loginError', error.message)
        });
    }

}



// export function logOut() {
//     return function (dispatch) {

//         dispatch({
//             type: "LOG_OUT",
//             payload: null
//         })
//         // window.location.reload(true);

//     }
// }
