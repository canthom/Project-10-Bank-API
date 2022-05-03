export function firstNameSelector(state) {
  return state.user.firstName;
}

export function lastNameSelector(state) {
  return state.user.lastName;
}

export function isAuthSelector(state) {
  return state.user.isAuth;
}

export function tokenSelector(state) {
  return state.user.token;
}

export function isLoadingSelector(state) {
  return state.user.isLoading;
}
