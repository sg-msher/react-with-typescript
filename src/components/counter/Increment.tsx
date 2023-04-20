import { useContext } from "react";
import { CounterContext, CounterContextType } from "../Counter";

const Increment = ({icon}: {icon: string}) => {
    const {dispatch} = useContext(CounterContext) as CounterContextType;
    return <button onClick={() => dispatch({'type': 'increment'})}>{icon}</button>;
}

export default Increment;