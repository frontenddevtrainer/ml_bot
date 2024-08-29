import { useState, useEffect } from "react";
import axios from "axios";

const useChatSendMessage = (id) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const send = (message) => {
    setLoading(true);
    axios
      .post(`http://localhost:3000/chats/${id}`, { message })
      .then((response) => {
        const { data } = response;
        const { message } = data;
        setData(message);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return { loading, data, error, send };
};

export default useChatSendMessage;
