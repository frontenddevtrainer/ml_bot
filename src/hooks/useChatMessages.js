import { useState, useEffect } from "react";
import axios from "axios";

const useChatMessages = (id) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/chats/${id}`)
      .then((response) => {
        const { data } = response;
        const { messages } = data;
        setMessages(messages);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return { loading, messages, error };
};

export default useChatMessages;
