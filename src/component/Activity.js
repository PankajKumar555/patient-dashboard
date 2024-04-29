import React from "react";
import { FaFilter, FaCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import action from "../data/action.json";
import notification from "../data/notification.json";
import "./Activity.css";

function Activity() {
  return (
    <div className="activitysectiontop">
      <h2>Activity</h2>
      <div className="activitysection">
        <div className="filtersection">
          <h4>
            <FaFilter size={12} /> &nbsp; Filter Activity
          </h4>
          <h5>Sellect All</h5>
          <p>
            <FaCircle color="orange" size={10} />
            &nbsp; Appt Request
          </p>
          <p>
            <FaCircle color="green" size={10} />
            &nbsp; Appointment
          </p>
          <p>
            <FaCircle color="blue" size={10} />
            &nbsp; Form
          </p>
          <p>
            <FaCircle color="skyblue" size={10} />
            &nbsp; Payment
          </p>
          <p>
            <FaCircle color="lightred" size={10} />
            &nbsp; Feedback
          </p>
          <p>
            <FaCircle color="black" size={10} />
            &nbsp; Review
          </p>
        </div>

        <div className="actionsection">
          <div className="actionsection_heading">
            <h3>Action </h3>
            <p>Pending</p>
            <p>Ignored</p>
            <p>Completed</p>
            <p>All</p>
          </div>
          <div className="actionsection_overflow">
            {action.map((user, i) => (
              <div className="actioncard" key={i}>
                <div className="actioncard_logo">
                  <p>
                    {user.patient_first_name !== null
                      ? user.patient_first_name[0]
                      : "N"}
                    {user.patient_last_name !== null
                      ? user.patient_last_name[0]
                      : "A"}
                  </p>
                </div>
                <div className="actioncard_heading">
                  <p>Pending</p>
                  <p>
                    {user.patient_first_name !== null
                      ? user.patient_first_name
                      : "N"}{" "}
                    {user.patient_last_name !== null
                      ? user.patient_last_name
                      : "A"}
                  </p>
                </div>
                <div className="actioncard_txt">
                  <p>a year ago</p>
                  <p>
                    <span>
                      <TiTick size={20} />
                    </span>
                    <span>
                      <RxCross2 size={20} />
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="notificationsection">
          <div className="notificationsection_heading">
            <h3>Notifications</h3>
            <p>Unread</p>
            <p>All</p>
          </div>

          <div className="notificationsection_overflow">
            {notification.map((data, i) => (
              <div className="notificationcard" key={i}>
                <div className="notification_logo">
                  <p>
                    {data.patient_first_name !== null
                      ? data.patient_first_name[0]
                      : "N"}
                    {data.patient_last_name !== null
                      ? data.patient_last_name[0]
                      : "N"}
                  </p>
                </div>
                <div className="notification_heading">
                  <p>{data.status}</p>
                  <p>
                    {data.patient_first_name !== null
                      ? data.patient_first_name
                      : "N"}{" "}
                    {data.patient_last_name !== null
                      ? data.patient_last_name
                      : "A"}
                  </p>
                </div>
                <div className="notification_txt">
                  <p>2 months</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
