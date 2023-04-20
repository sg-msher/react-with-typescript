import Button from "@/components/Button";
import { useState } from "react"

type CounterProps = {
    count: number,
    increment: () => void
}

export function useCounter(): CounterProps {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count => count + 1);
    return {count, increment}
}

export function Counter({count, increment}: CounterProps) {
    return (
        <>
            <div className="w-full flex items-center justify-center m-3">
                <p className="pr-10">Count: {count}</p>
                <Button name="+" onClick={increment} />
            </div>
        </>
    )
}