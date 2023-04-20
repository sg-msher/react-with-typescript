import { BadCounter, useBadCounter } from "@/hooks/useBadCounter";
import React from "react";

// https://ko.reactjs.org/docs/error-boundaries.html
type State = {hasError: boolean}
class ErrorBoundary extends React.Component<{ children: React.ReactNode, fallback: React.ReactNode }> {
    state: State = { hasError: false }
    static getDerivedStateFromError(error: Error): State {
        return {hasError: true};
    }
    render(): React.ReactNode {
        if(this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export default function App() {
    const first = useBadCounter();
    const second = useBadCounter();

    return (
        <>  
            <ErrorBoundary fallback={<div>Something went wrong!</div>}>
                <BadCounter {...first} />
            </ErrorBoundary>
            <ErrorBoundary fallback={<div>No!!!!!!!!!!!!!!</div>}>
                <BadCounter {...second} />
            </ErrorBoundary>
        </>
    )
}