import Button from "@/components/Button";
import { useState } from "react";

export default function App() {
    const [messages, setMessages] = useState<string[]>(['message 0']);
    const addMessages = () => setMessages([...messages, `message ${messages.length}`])
    const removeMessages = () => setMessages(messages.slice(0, messages.length - 1))
    return (
        <div>
            <div className="m-3 flex col">
                <Button onClick={addMessages} name="Add" />
                <Button onClick={removeMessages} name="Remove" />
            </div>
            {/* 
                Double exclamation marks(!! operator): 확실한 논리 결과를 가져오기 위해 사용 
                let a = undefined
                console.log(!!a) // false
            */}
            {!!messages.length 
                ? (<ul>{messages.map((message, i) => <li key={`message${i}`}>{message}</li>)}</ul>)
                : (<div>None</div>)
            }
        </div>
    );
}