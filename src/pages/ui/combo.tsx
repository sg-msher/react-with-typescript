import { RadioGroup } from "@/components/RadioGroup";
import { Select } from "@/components/Select";
import { useState } from "react";

export default function App() {
    const [value, setValue] = useState('');
    const options: {value: string, label: string}[] = [
        {value: 'dog', label: 'Dog'},
        {value: 'cat', label: 'Cat'},
        {value: 'bear', label: 'Bear'},
        {value: '', label: '===선택해주세요!==='},
        {value: 'mouse', label: 'Mouse'},
    ]

    const [gender, setGender] = useState<string|null>(null);
    const items: {value: string, label: string}[] = [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'},
        {value: 'unknown', label: 'Unknown'},
    ]
    return (
        <>
            {/* select box */}
            <Select
                label='동물농장'
                value={value}
                onChange={setValue}
                options={options}
            />
            <div className="text-8xl m-10">
                {{
                    'bear': '🐻',
                    'cat': '🐱',
                    'dog': '🐶',
                    'mouse': '🐭',
                }[value]}
            </div>
            {/* Radio */}
            <div>
                <RadioGroup
                    name="gender"
                    items={items}
                    value={gender}
                    onChange={setGender}
                />
            </div>
        </>
    )
}