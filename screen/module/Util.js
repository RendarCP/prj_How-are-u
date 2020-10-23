import * as React from 'react';
import { StackActions, NavigationActions } from 'react-navigation'

stackNavigationRef = React.createRef

setRef = (ref) => {
  stackNavigationRef = ref
}

navigate = (routeName ,param) => {
  const action = NavigationActions.navigate({
    routeName: routeName, 
    param:param});

  stackNavigationRef.cureent?.navigate(action)
  //this.props.navigation.dispatch(action);
}



export default{
  setRef: setRef,
  navigate: navigate
}