import Increment from "../components/Increment";
import { connect } from "react-redux";

import { actionIncrement } from "../actions";

function mapDispatchToProps(dispatch) {
  // translate redux state to reat props
  return {
    // propname seen by react: value-in-state
    handleClick: () => {
      dispatch(actionIncrement());
    },
  };
}

export default connect(null, mapDispatchToProps)(Increment);
