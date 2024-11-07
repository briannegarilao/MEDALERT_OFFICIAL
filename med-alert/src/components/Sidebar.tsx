function Sidebar() {
  return (
    <div
      className="d-flex flex-column sidebar-text p-3 vh-100 shadow-lg"
      style={{
        width: "250px",
        backgroundColor: "#e9ebf8",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <div className="card-body">
        <div>
          <h2 className="card-title text-center">MedAlert</h2>
        </div>
        <div>
          <h3 className="card-title text-left">MENU</h3>
          <p className="text-center">Dashboard</p>
          <p className="text-center">Settings</p>
          <p className="text-center">History Logs</p>
        </div>
        <div className="plain-divider"></div>
        <div>
          <h3 className="card-title text-left">NEED HELP?</h3>
          <p className="text-center">FAQS</p>
          <p className="text-center">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
