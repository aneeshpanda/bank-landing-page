import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AuthSuccess = () => {
  const [, setCookies] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const googleAuth = params.get("token");
    setCookies("token", googleAuth);
    if (googleAuth) {
      navigate("/helloWorld");
    } else {
      navigate("/");
    }
  }, [navigate, setCookies]);

  return <div>Successfully Authenticated</div>;
};

export default AuthSuccess;
