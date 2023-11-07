import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase_init";
import { useNavigate } from "react-router-dom";
import secret_key from "../utils/secret_key";
const MainBody = (props) => {
  const navigate = useNavigate();

  const handleDecrypt = async () => {
    const password = secret_key();
    let encrypted_images = [];
    let dates_of_images = [];
    try {
      const querySnapshot = await getDocs(collection(db, props.uid));
      querySnapshot.forEach((doc) => {
        encrypted_images.push(doc.data().enc_data);
        dates_of_images.push(doc.data().date_added);
      });
      navigate("/decrypted_image", {
        state: {
          images: encrypted_images,
          dates: dates_of_images,
          key: password,
        },
      });
    } catch (err) {
      alert(`Error -> ${err}`);
    }
  };
  return (
    <>
      <button id="retr-btn" onClick={handleDecrypt}>
        Retrieve from dB
      </button>
    </>
  );
};

export default MainBody;
