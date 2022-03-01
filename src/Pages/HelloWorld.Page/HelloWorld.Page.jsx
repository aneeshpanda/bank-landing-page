import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const HelloWorld = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const token = cookies.get("token");
  useEffect(() => {
    axios
      .get("https://login-auth-jwt.herokuapp.com/api/authenticated", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.status);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err.response.status === 401) {
          cookies.remove("token");
          navigate("/");
        }
      });
  });
  const handleLogout = () => {
    axios
      .get("https://login-auth-jwt.herokuapp.com/api/auth/google/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          cookies.remove("token");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        if (err.response.status === 401) {
          cookies.remove("token");
          alert(err.response.data.message);
          navigate("/");
        }
      });
  };
  return (
    <div>
      <h1>Hello World</h1>
      <div>Token: {token}</div>
      <button
        onClick={handleLogout}
        className="bg-[#ED017F] hover:bg-[#F13499] font-bold text-white py-2 px-4 border-[#ED017F] border-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default HelloWorld;
