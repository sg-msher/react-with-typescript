import Counter from "@/components/Counter";

function App() {
  return (
    <Counter>
        <Counter.Max />
        <Counter.Decrement icon={'-'} />
        <Counter.Count />
        <Counter.Increment icon={'+'} />
    </Counter>
  );
}

export default App;