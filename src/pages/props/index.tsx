// ReactNode
type ReactNodeProps = {
    message: React.ReactNode
}
const ReactNodeExample = (props: ReactNodeProps) => {
    return <div className="m-3">message: {props.message}</div>
}

// children
type ChildProps = {
    children?: React.ReactNode;
}
const ChildExample = (props: ChildProps) => {
    return <div className="m-3">children: {props.children}</div>
}

// PropsWithChildren
type PropsWithChildrenProps = React.PropsWithChildren<{
    message: string
}>
const PropsWithChildrenExample = (props: PropsWithChildrenProps) => {
    return (
        <div className="m-3">
            <p>message: {props.message}</p>
            <p>children: {props.children}</p>
        </div>
    )
}


export default function App() {
    return (
        <>
            <ReactNodeExample message={<b>강조의 메세지</b>} />
            <ChildExample>아이들</ChildExample>
            <ChildExample></ChildExample>
            <PropsWithChildrenExample message="메세지">아이들</PropsWithChildrenExample>
        </>
    );
}