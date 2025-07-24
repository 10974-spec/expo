//react cusiom hook file

import { useState } from "react";

const API_URL = "http://localhost:5001/api";

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  return {
    balance:0,
    income: 0,
    expense: 0,
  };
};

const [isLoading, setIsLoading] = useState(false);


const fetchTransactions = async () => {
    try{

        const response = await fetch(`${API_URL}/transactions/${userId}`);
    }catch(error){

    }
}