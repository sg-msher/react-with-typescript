type RadioGroupProps = {
    name: string,
    items: {value: string, label: string}[],
    value: string | null,
    onChange: (value: string) => void
}

export const RadioGroup =({name, items, value, onChange}: RadioGroupProps) => {
    return(<>
        {items.map(item => (
            <div key={item.value}>
                <input 
                    type="radio"
                    name={name}
                    value={item.value}
                    id={name + item.value}
                    checked={value === item.value}
                    onChange={e => onChange(e.target.value)}
                />
                <label htmlFor={name + item.value}>{item.label}</label>
            </div>
        ))}
    </>);
}