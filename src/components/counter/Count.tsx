import { useContext } from "react";
import { CounterContext, CounterContextType } from "../Counter";

const Count = () => {
    const {state} = useContext(CounterContext) as CounterContextType;
    return <div>{state.count}</div>
}

export default Count;