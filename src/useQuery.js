import { useEffect, useState } from "react";

const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2504-FTB-ET-WEB-FT";
const API = BASE + COHORT;

export default function useQuery(resource) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resource) return;

    const query = async () => {
      setError(null);
      try {
        const response = await fetch(API + resource);
        if (!response.ok) throw Error(`Could not query ${resource}.`);
        const result = await response.json();
        setData(result.data);
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    };
    query();
  }, [resource]);

  return { data, error };
}
