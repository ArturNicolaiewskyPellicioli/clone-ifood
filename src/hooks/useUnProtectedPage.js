import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goTo } from "../routes/Coordinator";

const useUnProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
        goTo(history,"/Posts","")
    }
  }, [history]);
};
export default useUnProtectedPage