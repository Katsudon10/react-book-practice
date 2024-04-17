import { useLocation } from "react-router-dom";

export default function BookStatePage() {
    const {state:isbn='978-4-8156-1336-5'} = useLocation();

    return (
        <p>ISBNコード「{isbn}」のページです</p>
    )
};