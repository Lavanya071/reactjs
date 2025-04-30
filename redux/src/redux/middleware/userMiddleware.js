
import Userslice from "../userSlice";
const action = Userslice.actions;
export const fetchUserMiddleWare = async(dispatch)=>{
              try{
                    dispatch(action.userLoading());
                    const resp = await fetch("https://jsonplaceholder.typicode.com/users/4");
                    const user = await resp.json();
                    console.log(user);
                   dispatch(action.useData(user));
                }catch(err){
                  dispatch(action.useError());                
                }
};