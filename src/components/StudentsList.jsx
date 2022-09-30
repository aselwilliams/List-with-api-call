import { Component } from "react";
import SingleStudent from "./SingleStudent.jsx";
import Modals from "./Modals.jsx";
import NoDataView from "./NoDataView.jsx";
import LastTableRow from "./LastTableRow.jsx";

class StudentsList extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      modal: {
        type: "info",
        status: false,
      },
      id: null,
      isDeleted: false,
    };
  }

  fetchData = () => {
    const url = "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students";
    fetch(url)
      .then((res) => res.json())
      .then((d) => this.setState({ students: d }));
  };

  componentDidMount() {
    this.fetchData();
  }

  toggle = (id, type) => {
    this.setState({
      modal: { status: !this.state.modal.status, type: type },
      id: id,
    });
  };

  refetchData = () => {
    this.fetchData();
  };

  updateDelMessage = () => {
    this.setState((prevState) => ({ ...prevState, isDeleted: true }));
    setTimeout(() => {
      this.setState((prevState) => ({ ...prevState, isDeleted: false }));
    }, 2000);
  };

  render() {
    const { students, modal, id, isDeleted } = this.state;

    return (
      <>
        {isDeleted && <span id="del-message">User has been deleted</span>}
        <table className="border">
          <thead>
            <tr>
              <th>ID</th>
              <th className="border">Avatar</th>
              <th>Full Name</th>
              <th className="border">Age</th>
              <th>Phone #</th>
              <th className="border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <NoDataView toggle={this.toggle} />
            ) : (
              <>
                {students.map((student) => {
                  return (
                    <SingleStudent
                      key={student.id}
                      student={student}
                      toggle={this.toggle}
                      refetchData={this.refetchData}
                      updateDelMessage={this.updateDelMessage}
                    />
                  );
                })}
                <LastTableRow toggle={this.toggle} id={id} />
              </>
            )}
          </tbody>
        </table>
        <Modals
          modal={modal}
          toggle={this.toggle}
          id={id}
          refetchData={this.refetchData}
        />
      </>
    );
  }
}

export default StudentsList;
