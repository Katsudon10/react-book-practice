import { Link } from "react-router-dom";

export default function FirstPage(){
    return (
        <>
            <h2>First Page</h2>
            <hr />
            <p style={{height:800}}></p>
            <p><Link to="/second" preventScrollReset>Second Page</Link></p>
        </>
    )
}