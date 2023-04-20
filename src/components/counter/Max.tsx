import { useContext } from "react";
import { CounterContext, CounterContextType } from "../Counter";

const Max = () => {
    const {state, dispatch} = useContext(CounterContext) as CounterContextType;
    const handleMax = (value: number) => dispatch({type: 'setMax', value: value})
    return(
        <div>
            MAX: <input type="number" value={state.max} onChange={(e) => handleMax(Number(e.target.value))} />
        </div>
    )
}

export default Max;