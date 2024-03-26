function sleep(delay) {
    let start = Date.now();
    while (Date.now() < start + delay);
}

export default function HeavyUI({delay}) {
    sleep(delay);
    return <div>Heavy UI</div>;
}