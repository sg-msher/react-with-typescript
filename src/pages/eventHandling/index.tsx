import { ChangeEventHandler, useCallback, useState } from "react";

function useInputState(initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const handleValueChange: ChangeEventHandler<HTMLInputElement & { value: string }> = useCallback(
      ({ target: { value } }) => {
        setValue(value);
      },
      [value]
    );
    // as const = read-only
    return [value, handleValueChange] as const;
}

export default function App() {
    const [value, handleInputChange] = useInputState('');
    const onClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log({event}, {nativeEvent: event.nativeEvent});
    }
    
    const renderInputBox = () => <input className="border-solid border-gray-700 border-2 p-4 m-4" type="text" value={value} onChange={handleInputChange} />
    const rederButton = () => <button className="border-solid border-gray-700 border-2 p-4" onClick={onClick}>test</button>
    return (
        <>
            {renderInputBox()}
            {rederButton()}
        </>
    );
}