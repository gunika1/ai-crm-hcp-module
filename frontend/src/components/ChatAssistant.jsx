import { useState } from "react";
import axios from "axios";
import { Bot, SendHorizonal } from "lucide-react";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/interactionSlice";

function ChatAssistant() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post("https://ai-crm-hcp-module-r4l7.onrender.com", {
        message,
      });

      if (response.data.formData) {
        dispatch(setFormData(response.data.formData));
      }

      const aiMessage = {
        role: "assistant",
        content: response.data.response,
      };

      setChat((prev) => [...prev, aiMessage]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error connecting to backend.",
        },
      ]);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <section className="card chat-card">
      <div className="card-header">
        <h2>AI Assistant</h2>
        <p>Log interactions using conversational AI.</p>
      </div>

      <div className="chat-box">
        {chat.length === 0 && (
          <div className="empty-chat">
            <Bot size={40} />
            <p>
              Try:
              <br />
              “Met Dr. Sharma today and discussed Product X.”
            </p>
          </div>
        )}

        {chat.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}

        {loading && <div className="message assistant">Thinking...</div>}
      </div>

      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type interaction details..."
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />

        <button onClick={sendMessage}>
          <SendHorizonal size={18} />
        </button>
      </div>
    </section>
  );
}

export default ChatAssistant;