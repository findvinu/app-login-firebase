import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { logout } from "../slices/authSlice";
import Container from "../components/container/Container";

const Home = () => {
  const navigation = useNavigate();

  const logoutHandler = () => {
    try {
      logout(auth);
      navigation("/login");
      console.log("logout successfully");
    } catch (error) {
      console.log("Logout Failed", error);
    }
  };

  return (
    <Container>
      <div>Home</div>
    </Container>
  );
};

export default Home;
