import { useContext } from "react";
import { CounterContext, CounterContextType } from "../Counter";

const Decrement = ({icon}: {icon: string}) => {
    const {dispatch} = useContext(CounterContext) as CounterContextType;
    return <button onClick={() => dispatch({'type': 'decrement'})}>{icon}</button>;
}

export default Decrement;