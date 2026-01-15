import { use } from "react"

export default function Friends({fetchPromise}){
    const friends = use(fetchPromise);
    console.log(friends);
    return(
        <div>
            <h3>Friends : </h3>
        </div>
    )
}