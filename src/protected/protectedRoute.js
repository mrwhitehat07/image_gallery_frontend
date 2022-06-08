import { Redirect } from "react-router-dom";

function ProtectedRoute({ children }) {
    var isAuth;
    if(localStorage.getItem('token')){
        isAuth= true
    }
    else{
        isAuth= false
    }
  return isAuth ? children : <Redirect to="/login" />;
}

export default ProtectedRoute;