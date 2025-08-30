import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/usersSlice";
const API_URL = import.meta.env.VITE_USERS_API_URL;

export const fetchData = async (dispatch) => {
  const data = await fetch(API_URL);
  const json = await data.json();
  dispatch(addUsers(json));
};

const useUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      fetchData(dispatch);
    } catch (err) {
      console.log("Error while fetching users : " + err.message);
    }
  }, []);
};

export default useUserData;
