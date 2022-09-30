import { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      student: {
        fname: "",
        lname: "",
        age: "",
        phone: "",
        avatar: ""
      }
    };
  }

  handleFormSubmit = (e, id) => {
    e.preventDefault();
    const url = "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students";

    // First check whether all input fields are filled up
    // if yes, then use fetch with POST method to create new student
    // if not, then alert about required fields
    if (Object.values(this.state.student).every((i) => i !== "")) {
      fetch(url, {
        method: "POST",
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
    } else {
      alert("All the fields are required");
    }
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
      <div>
        <Modal isOpen={status}>
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
      </div>
    );
  }
}

export default Add;
