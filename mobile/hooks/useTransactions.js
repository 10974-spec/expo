//react cusiom hook file

import { useCallback, useState } from "react";

const API_URL = "http://localhost:5001/api";

export const useTransactions = (userId) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance:0,
    income: 0,
    expense: 0,
  });


const [isLoading, setIsLoading] = useState(false);


const fetchTransactions = useCallback(async () => {
    try{

        const response = await fetch(`${API_URL}/transactions/${userId}`);
        const data = await response.json();
        setTransactions(data);
    }catch(error){
      console.log("Error fetching transactions",error);
    }
  },[userId]);

  const fetchSummary = useCallback(async () => {
    try{
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    }catch(error){
      console.log("Error fetching summary",error);
    }
  },[userId]);

  const loadData = useCallback(async () => {

    if (!userId) return;
        
    setIsLoading(true);
    try {
      await Promise.all([fetchTransactions(),fetchSummary()]);
    }catch(error){
      console.log("Error loading data",error);
    }finally{
      setIsLoading(false);
    }
  },[fetchTransactions, fetchSummary,userId]);

}