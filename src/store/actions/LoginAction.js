import axios from 'axios';

export  function LoginSubmit ( userName, password)  {
    let loginDto = {
        username : userName,
        password : password
    } ;
    return function (dispatch) {
      
        let getUrl = 'http://localhost:4000/api/user';
        let loginData = '';
        axios.post(getUrl, loginDto).then(res => {
            if (res.data.status ) {
               loginData = res.data;
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


