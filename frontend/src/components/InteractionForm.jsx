import { useDispatch, useSelector } from "react-redux";
import { Save } from "lucide-react";
import { updateFormField, saveInteraction } from "../redux/interactionSlice";

function InteractionForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.interaction.formData);

  const handleChange = (field, value) => {
    dispatch(updateFormField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveInteraction());
    alert("Interaction saved successfully!");
  };

  return (
    <section className="card form-card">
      <div className="card-header">
        <h2>Structured Interaction Form</h2>
        <p>Log meeting details manually.</p>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          HCP Name
          <input
            value={formData.hcpName}
            onChange={(e) => handleChange("hcpName", e.target.value)}
            placeholder="Dr. Ananya Sharma"
          />
        </label>

        <label>
          Interaction Type
          <select
            value={formData.interactionType}
            onChange={(e) => handleChange("interactionType", e.target.value)}
          >
            <option>Meeting</option>
            <option>Call</option>
            <option>Email</option>
            <option>Conference</option>
          </select>
        </label>

        <label>
          Date
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </label>

        <label>
          Time
          <input
            type="time"
            value={formData.time}
            onChange={(e) => handleChange("time", e.target.value)}
          />
        </label>

        <label className="full">
          Topics Discussed
          <textarea
            value={formData.topicsDiscussed}
            onChange={(e) => handleChange("topicsDiscussed", e.target.value)}
            placeholder="Product efficacy, samples, concerns..."
          />
        </label>

        <label>
          Materials Shared
          <input
            value={formData.materialsShared}
            onChange={(e) => handleChange("materialsShared", e.target.value)}
            placeholder="Brochure, clinical paper"
          />
        </label>

        <label>
          Sentiment
          <select
            value={formData.sentiment}
            onChange={(e) => handleChange("sentiment", e.target.value)}
          >
            <option>Positive</option>
            <option>Neutral</option>
            <option>Negative</option>
          </select>
        </label>

        <label className="full">
          Outcomes
          <textarea
            value={formData.outcomes}
            onChange={(e) => handleChange("outcomes", e.target.value)}
            placeholder="HCP showed interest, requested follow-up..."
          />
        </label>

        <label className="full">
          Follow-up Actions
          <textarea
            value={formData.followUpActions}
            onChange={(e) => handleChange("followUpActions", e.target.value)}
            placeholder="Schedule next visit, send samples..."
          />
        </label>

        <button className="primary-btn full" type="submit">
          <Save size={18} />
          Save Interaction
        </button>
      </form>
    </section>
  );
}

export default InteractionForm;