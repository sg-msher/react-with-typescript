type Props = {
    name: string,
    onClick: () => void
}

export default function Button({name, onClick}: Props){
    return (
        <button onClick={onClick} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">{name}</button>
    )
}