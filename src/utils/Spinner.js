import React from 'react';
import { Audio, CirclesWithBar } from 'react-loader-spinner'
import LoadingHooks from '../hooks/LoadingHooks';
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: "block",

    borderColor: "red",
    left: '50%',
  marginLeft: '-4em'
  };

const Spinner = () => {
    const {isLoading} = LoadingHooks();
    return (
        <div>
            {/* <CirclesWithBar
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                visible={isLoading}
                    /> */}
                    <ClipLoader
        color="blue"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    );
}

export default Spinner;
