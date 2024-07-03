import { useGetAllUsersQuery } from '../store/services/userApi';
export const Test: React.FC = () => {
  const { data, error, isLoading, isSuccess } = useGetAllUsersQuery();
  return (
  <div>
    {isSuccess &&
    
   { data.map(user=>
   {
        return <div key={user.id}>
            <span>{user.armyId} </span>
            </div>}
   )}}
  </div>
);
}
