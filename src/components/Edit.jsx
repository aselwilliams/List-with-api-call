import { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class Edit extends Component {
  constructor() {
    super();
    this.state = {
      student: {
        fname: "",
        lname: "",
        age: 0,
        phone: "215-333-4545",
        avatar: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      }
    };
  }

  componentDidMount() {
    const url = `https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/${this.props.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((s) => this.setState({ student: s }));
  }

  handleFormSubmit = (e, id) => {
    e.preventDefault();
    const url = `https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.student)
    })
      .then((res) => res.json())
      .then((s) => {
        this.props.toggle(null);
        this.props.refetchData();
      })
      .catch((err) => console.log("Something went wrong"));
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      student: { ...prevState.student, [name]: value }
    }));
  };

  render() {
    const {
      modal: { status },
      toggle
    } = this.props;
    const { fname, lname, age, phone, avatar } = this.state.student;
    return (
      <Modal isOpen={status}>
        <ModalHeader>Edit student with id: {this.props.id}</ModalHeader>
        <ModalBody>
          <Form
            inline
            onSubmit={(e) => this.handleFormSubmit(e, this.props.id)}
          >
            <FormGroup>
              <Input
                id="fname"
                name="fname"
                placeholder="First Name"
                type="text"
                value={fname}
                onChange={this.handleChange}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                id="lname"
                name="lname"
                placeholder="Last Name"
                type="text"
                onChange={this.handleChange}
                value={lname}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                id="age"
                name="age"
                placeholder="Age"
                type="text"
                onChange={this.handleChange}
                value={age}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                id="avatar"
                name="avatar"
                placeholder="Avatar"
                type="text"
                onChange={this.handleChange}
                value={avatar}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone #"
                type="text"
                onChange={this.handleChange}
                value={phone}
              />
            </FormGroup>{" "}
            <Button>Submit</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => toggle(null, "info")}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Edit;
