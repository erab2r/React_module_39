import { use } from "react"
import Friend from "./Friend..jsx";

export default function Friends({fetchPromise}){
    const friends = use(fetchPromise);
    console.log(friends);
    return(  
        <div>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}