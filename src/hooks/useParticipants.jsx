import { useEffect, useState } from "react";
import axios from "axios";

const useParticipants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get("https://medical-camp-server-five.vercel.app/participants");
        setParticipants(response.data);
      } catch (error) {
        console.error("Error fetching participants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  return { participants, loading };
};

export default useParticipants;
