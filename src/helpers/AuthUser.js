import GetTokenOnLocalStorage from "./AuthToken";

const IsAuthenticated = () =>{
    if (GetTokenOnLocalStorage() === null) {
        return false
    }
    else{
        //refresh token 
    }
    return true;
}

export default IsAuthenticated;