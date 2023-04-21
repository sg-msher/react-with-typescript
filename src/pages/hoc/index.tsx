import { withLoading } from "@/hocs/withLoading.hoc";

function fetchData(userId: string) {
    let posts: any = null;
    const suspender = fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          posts = data;
        }, 3000);
      });
    return {
      read() {
        if (posts === null) {
          throw suspender;
        } else {
          return posts;
        }
      }
    };
}

export default function App() {
    return(
        <section>
            <Data resource={fetchData("1")} />
        </section>
    );
}

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Data = withLoading(({ resource }: {resource: any}) => {
    const posts = resource.read();
    return (
        <ul>
            {posts.map((post: Post) => <li key={post.id}>{post.id}. {post.title}</li>)}
        </ul>
    );
});