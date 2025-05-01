import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const Social = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div >
      <div className="flex  justify-center">
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default Social;
