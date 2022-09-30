import { Component } from "react";
import { Button } from "reactstrap";

class NoDataView extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <tr>
        <td colSpan="5">No data</td>
        <td colSpan="5">
          <Button onClick={() => toggle(null, "add")} color="primary">
            Add New Student
          </Button>
        </td>
      </tr>
    );
  }
}

export default NoDataView;
