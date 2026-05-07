import InteractionForm from "./components/InteractionForm";
import ChatAssistant from "./components/ChatAssistant";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="eyebrow">AI-First CRM</p>
          <h1>Log HCP Interaction</h1>
          <p className="subtitle">
            Capture healthcare professional interactions using a structured form
            or AI-powered chat.
          </p>
        </div>
      </header>

      <main className="layout">
        <InteractionForm />
        <ChatAssistant />
      </main>
    </div>
  );
}

export default App;