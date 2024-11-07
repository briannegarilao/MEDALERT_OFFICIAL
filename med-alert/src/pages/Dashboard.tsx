import Sidebar from "../components/Sidebar";
import ScrollableCardContainer from "../components/Schedule_Container";
import Upcoming_Schedule from "../components/Upcoming_Schedule";
import "../App.css";

function Dashboard() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="container mx-auto d-flex justify-content-center align-items-center vh-100">
          <div className="row w-100 g-0">
            <div className="col-md-6">
              <ScrollableCardContainer />
            </div>
            <div className="col-md-6">
              <Upcoming_Schedule />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
