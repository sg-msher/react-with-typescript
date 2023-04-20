import { Counter, useCounter } from "@/hooks/useCounter";

export default function App() {
    const first = useCounter();
    const second = useCounter();

    return (
        <>
            <Counter {...first} />
            <Counter {...second} />
            <div className="m-3">Result: {first.count + second.count}</div>
        </>
    );
}