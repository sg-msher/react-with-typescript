import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <div className='font-black text-5xl p-10'>Typescript + React [교육용]</div>
      <div className="grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card title="props" contents="props 마스터하기" url="/props" />
        <Card title="state" contents="state를 효과적으로 사용하기" url="/useHook/state" />
        <Card title="chaining" contents="배열을 다루는 법" url="/chaining" />
        <Card title="memo" contents="memo를 효과적으로 사용하기" url="/useHook/memo" />
        <Card title="event" contents="효과적인 event handling" url="/eventHandling" />
        <Card title="error boundary" contents="에러 경계 사용법" url="/errorHandling" />
        <Card title="reducer" contents="reducer를 효과적으로 사용하기" url="/useHook/reducer" />
        <Card title="infinite scroll" contents="Example of infinite scroll" url="/ui/infinitScroll" />
        <Card title="jotai" contents="Example of jotai" url="/useHook/jotai" />
        <Card title="framer" contents="Example of framer" url="/animate/framer" />
      </div>
    </>
  )
}
