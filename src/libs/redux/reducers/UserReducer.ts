import { InitialStore } from "../stores/InitialStore";

export function UserReducer(state = InitialStore.users, action: any){
  switch(action.type){
    case '@USERLIST':
      return action.users;
    default:
      return state
  }
}