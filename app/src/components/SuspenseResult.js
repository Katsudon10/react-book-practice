import { Suspense } from "react";
import ThrowResult from "./ThrowResult";

export default function SuspenseSimple() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ThrowResult />
        </Suspense>
    );
}