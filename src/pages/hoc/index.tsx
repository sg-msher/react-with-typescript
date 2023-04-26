import withLoading from "@/hocs/withLoading.hoc";
import { api } from "@/utils/api";
import {UseQueryOptions, useQuery} from '@tanstack/react-query';
import { AxiosError } from "axios";

type User = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type UserList = {
  data: User[]
}

export default function App() {
  const {data, isLoading} = useQuery({
    queryKey: ['UserData'],
    queryFn: async (): Promise<UserList> => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return api.get('https://jsonplaceholder.typicode.com/posts?userId=1')
    },
    select: (data) => data.data,
  });
  return(
      <section>
          <Data datas={data} isLoading={isLoading} />
      </section>
  );
}

const Data = withLoading(({ datas, isLoading }: {datas: User[] | undefined, isLoading: boolean}) => {
    return (<>
      {datas && 
        <ul>
          {datas.map((user: User) => <li key={user.id}>{user.id}. {user.title}</li>)}
        </ul>
      }
    </>);
});