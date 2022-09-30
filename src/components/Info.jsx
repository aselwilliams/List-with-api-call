import { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import noimg from "../images/noimg.jpg";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      student: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    const url = `https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/${this.props.id}`;

    fetch(url)
      .then((res) => res.json())
      .then((s) => this.setState({ student: s, isLoading: true }))
      .catch((err) => console.log(err));
  }

  render() {
    const {
      modal: { status },
      toggle,
    } = this.props;
    const { fname, lname, age, avatar, phone } = this.state.student;
    const { isLoading } = this.state;

    const imageContent = isLoading
      ? avatar.indexOf("http") === 0
        ? avatar
        : noimg
      : "";

    return isLoading ? (
      <Modal isOpen={status}>
        <ModalHeader>
          More info about{" "}
          <em>
            <b>
              <u>
                {fname} {lname}
              </u>
            </b>
          </em>
          .
        </ModalHeader>
        <ModalBody>
          <div className="modal-avatar">
            <img src={imageContent} alt="" />
          </div>
          <p>Age: {age}</p>
          <p>Phone: {phone}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => toggle(null, "info")}>Close</Button>
        </ModalFooter>
      </Modal>
    ) : (
      <Modal isOpen={!isLoading}>
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      </Modal>
    );
  }
}

export default Info;
