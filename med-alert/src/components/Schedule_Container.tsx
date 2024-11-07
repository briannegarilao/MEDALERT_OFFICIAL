import { useState } from "react";

function ScrollableCardContainer() {
  const [notes, setNotes] = useState([
    { name: "Medicine Name", dose: "Dose" },
    { name: "Medicine Name", dose: "Dose" },
  ]);

  const addMedicine = () => {
    setNotes([...notes, { name: "New Medicine", dose: "New Dose" }]);
  };

  return (
    <div className="container d-flex flex-column align-items-left">
      <div
        className="card shadow mb-3"
        style={{ width: "100%", maxWidth: "350px", padding: "1rem" }}
      >
        <div className="card-body">
          <button onClick={addMedicine} className="btn btn-primary w-100">
            Add Medicine
          </button>
        </div>
      </div>

      <div
        className="card shadow"
        style={{ width: "100%", maxWidth: "350px", padding: "1rem" }}
      >
        <div className="card-body">
          <h2 className="card-title text-center">Today's Schedule</h2>
          <div className="scrollable-card-container shadow-lg p-3">
            {notes.map((note, index) => (
              <div key={index} className="note-card">
                <h4>{note.name}</h4>
                <p>{note.dose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollableCardContainer;
