import Button from "@/components/Button";
import React, { useCallback, useState } from "react";

const getLyrics = (): string[] => {
    return [
        "Love is a light, I'll show my love is right",
        "It's not a joke, so give it to me right now",
        "No more chance to you",
        "You know? Hey, d-d-d-dumb boy"
    ]
}

export default function App() {
    const [count, setCount] = useState<number>(0);
    const increment = useCallback(() => setCount(prev => prev + 1), []);
    const lyrics = getLyrics();
    return(
        <div>
            <Button onClick={increment} name={`+ ${count}`} />
            {lyrics.map((lyric, i) => <Lyric key={i} id={`Lyric${i}`} value={lyric} />)}
        </div>
    )
}

type LyricProps = {
    id: string, 
    value: string
};

const Lyric = React.memo((props: LyricProps) => {
    console.log('rendering')
    return(<div className="m-3">🎵{props.value}🎵</div>)
}, (prev, next) => {
    return prev.id === next.id;
});

Lyric.displayName = "Lyric";