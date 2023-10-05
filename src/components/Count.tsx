import * as React from "react";
import { connect } from "react-redux";
import { RootState, Dispatch } from "../store";

const mapState = (state: RootState) => ({
  count: state.count,
});

const mapDispatch = (dispatch: Dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

class Count extends React.Component<Props> {
  render() {
    return (
      <div>
        The count is {this.props.count}
        <button onClick={() => this.props.increment()}>increment</button>
        <button onClick={() => this.props.incrementAsync()}>incrementAsync</button>
      </div>
    );
  }
}

export const CountContainer = connect(mapState, mapDispatch)(Count);
