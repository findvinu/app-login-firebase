import Container from "../components/container/Container";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigation("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigation("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigation]);

  return loader ? (
    <Container>
      <div className="flex items-center justify-center h-full">
        <h1>...Loading</h1>
      </div>
    </Container>
  ) : (
    children
  );
};

export default AuthLayout;
