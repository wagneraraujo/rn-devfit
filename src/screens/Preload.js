//android resetar a rota
import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";

const Preload = props => {
  props.navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "StartedStack" })]
    })
  );
  //if (!props.name) {
  //  //mandar para a starterstack
  //  props.navigation.dispatch(
  //    StackActions.reset({
  //      index: 0,
  //      actions: [NavigationActions.navigation({ routeName: "StartedStack" })]
  //    })
  //  );
  //} else {
  //  //mandar para a starterstack
  //  props.navigation.dispatch(
  //    StackActions.reset({
  //      index: 0,
  //      actions: [NavigationActions.navigation({ routeName: "AppTab" })]
  //    })
  //  );
  //}

  return null;
};

const mapStateToProps = state => {
  return {
    name: state.useReducer.name
  };
};

export default connect(mapStateToProps)(Preload);
