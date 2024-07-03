import { useGetAllUsersQuery } from '../store/services/userApi';
export const Test: React.FC = () => {
  const { data, error, isLoading, isSuccess } = useGetAllUsersQuery();
  return (
    <div>
      <h1>hello</h1>
      {isSuccess && data?.map((user) => <div key={user.id}>{user.armyId}</div>)}
      {isLoading && <p>Loading users...</p>}
      {error && <p>Error</p>}
    </div>
  );
};
