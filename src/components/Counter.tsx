import React, { Dispatch, createContext, useReducer } from "react";
import Decrement from "./counter/Decrement";
import Increment from "./counter/Increment";
import Count from "./counter/Count";
import Max from "./counter/Max";

type State = {
    count: number;
    max: number;
}

// enum을 쓰지 않고 Union type으로 정의하는 것을 추천합니다.
type Action = 
    | {type: 'increment'}
    | {type: 'decrement'}
    | {type: 'setMax', value: number}

const countReducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'increment':
            const {count, max} = state;
            if(count < max) {
                return {...state, count: count + 1 }
            } else {
                alert(`MAX ${max} 값에 도달했습니다.`);
                return {...state}
            }
        case 'decrement':
            return {...state, count: state.count - 1 }
        case 'setMax':
            if(action.value < state.count) {
                return {...state, max: action.value, count: action.value}
            } else {
                return {...state, max: action.value}
            }
        default:
            throw new Error("Unsupported action type");
    }
}

export type CounterContextType = {
    state: State;
    dispatch: Dispatch<Action>;
} 

export const CounterContext = createContext<CounterContextType | null>(null);

export default function Counter({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(countReducer, {count: 0, max: 0});
    return <CounterContext.Provider value={{state, dispatch}}>{children}</CounterContext.Provider>;
}

Counter.Max = Max;
Counter.Decrement = Decrement;
Counter.Increment = Increment;
Counter.Count = Count;