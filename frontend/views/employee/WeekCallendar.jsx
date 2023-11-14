import React from "react";
import { Container, Table } from "react-bootstrap";

const jobs = ["Dance", "Yoga", "Music", "Art", "English"];
const instructors = ["Ivana Wong", "Marta Healy", "Kate Alley", "James Smith"];

const generateRandomAssignment = () => {
  const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
  const randomInstructor =
    instructors[Math.floor(Math.random() * instructors.length)];
  return { job: randomJob, instructor: randomInstructor };
};

const Timetable = () => {
  return (
    <Container>
      <div className="timetable-img text-center">
        <img src="img/content/timetable.png" alt="" />
      </div>
      <div className="table-responsive">
        <Table bordered className="text-center">
          <thead>
            <tr className="bg-light-gray">
              <th className="text-uppercase">Time</th>
              <th className="text-uppercase">Monday</th>
              <th className="text-uppercase">Tuesday</th>
              <th className="text-uppercase">Wednesday</th>
              <th className="text-uppercase">Thursday</th>
              <th className="text-uppercase">Friday</th>
              <th className="text-uppercase">Saturday</th>
            </tr>
          </thead>
          <tbody>
            {[9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => (
              <tr key={hour}>
                <td className="align-middle">{`${
                  hour < 10 ? "0" : ""
                }${hour}:00am`}</td>
                {[1, 2, 3, 4, 5, 6].map((day) => (
                  <td key={day}>
                    <div className="margin-10px-bottom">
                      {Array.from({ length: 2 }, (_, index) => {
                        const { job, instructor } = generateRandomAssignment();
                        return (
                          <React.Fragment key={index}>
                            <span
                              className={`bg-${job.toLowerCase()} padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13`}
                            >
                              {job}
                            </span>
                            <div className="margin-10px-top font-size14">{`${hour}:00-${
                              hour + 1
                            }:00`}</div>
                            <div className="font-size13 text-light-gray">
                              {instructor}
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Timetable;
