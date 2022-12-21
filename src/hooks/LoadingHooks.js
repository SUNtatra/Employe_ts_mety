import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

const LoadingHooks = () => {
    return useContext(LoadingContext);
}

export default LoadingHooks;