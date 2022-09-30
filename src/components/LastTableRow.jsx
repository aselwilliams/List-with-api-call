import { Component } from "react";
import { Button } from "reactstrap";

class LastTableRow extends Component {
  render() {
    const { toggle, id } = this.props;
    return (
      <tr>
        <td colSpan="6">
          <Button onClick={() => toggle(id, "add")} color="primary">
            Add New Student
          </Button>
        </td>
      </tr>
    );
  }
}

export default LastTableRow;
