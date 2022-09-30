import { Component } from "react";
import { Button } from "reactstrap";
import noimg from "../images/noimg.jpg";

class SingleStudent extends Component {
  handleStudentDelete = (id) => {
    const url = `https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((s) => {
        this.props.updateDelMessage();
        this.props.refetchData();
      })
      .catch((err) => console.log("Something went wrong"));
  };

  render() {
    const {
      student: { id, fname, lname, age, phone, avatar },
      toggle,
    } = this.props;
    const imgContent = avatar.indexOf("http") === 0 ? avatar : noimg;
    return (
      <>
        <tr className="border">
          <td>{id}</td>
          <td className="avatar border">
            <img src={imgContent} alt="" />
          </td>
          <td className="full-name">
            {fname} {lname}
          </td>
          <td className="border">{age}</td>
          <td>{phone}</td>
          <td className="actions border">
            <Button color="secondary" onClick={() => toggle(id, "info")}>
              Info
            </Button>
            <Button onClick={() => toggle(id, "edit")} color="primary">
              Edit
            </Button>
            <Button onClick={() => this.handleStudentDelete(id)} color="danger">
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  }
}

export default SingleStudent;
