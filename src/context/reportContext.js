import { createContext, useContext, useState, useEffect } from "react";

import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { async } from "@firebase/util";

export const ReportContext = createContext({});

export const useReportContext = () => {
  return useContext(ReportContext);
};

export const ReportContextProvider = ({ children }) => {

  async function addRepotDoc(ind1, ind2, ind3) {
    await setDoc(doc(db, "reports", "test"), {
      ind1,
      ind2,
      ind3,
    });


    

  }

  const contextValue = {
    addRepotDoc,
  };
  return (
    <ReportContext.Provider value={contextValue}>{children}</ReportContext.Provider>
  );
};
