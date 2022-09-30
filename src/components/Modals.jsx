import { Component } from "react";
import Info from "./Info.jsx";
import Edit from "./Edit.jsx";
import Add from "./Add.jsx";

class Modals extends Component {
  render() {
    const { modal, toggle, id, refetchData } = this.props;
    return (
      <>
        {modal.status && modal.type === "info" && (
          <Info toggle={toggle} modal={modal} id={id} />
        )}
        {modal.status && modal.type === "edit" && (
          <Edit
            toggle={toggle}
            modal={modal}
            id={id}
            refetchData={refetchData}
          />
        )}
        {modal.status && modal.type === "add" && (
          <Add toggle={toggle} modal={modal} refetchData={refetchData} />
        )}
      </>
    );
  }
}

export default Modals;
