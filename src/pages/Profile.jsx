import { useContext } from "react";
import { AuthContext } from "../shared/contexts/AuthContext";

const Profile = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <button
        onClick={() =>
          authContext.handleAuth(
            {
              id: 1,
              username: "sadasd",
              img: 'https://otvet.imgsmail.ru/download/33379414_dc462141a7e71af51b6a96be738ba759_800.jpg'
            },
            "token"
          )
        }
      >
        SetContext
      </button>
    </div>
  );
};

export default Profile;
