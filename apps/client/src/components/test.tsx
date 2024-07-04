import {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from '../store/services/userApi';
import { User } from '../store/types/user-type';

export const Test: React.FC = () => {
  const {
    refetch,
    data: allUsers,
    error: allUsersError,
    isLoading: allUsersLoading,
    isSuccess: allUsersSuccess,
  } = useGetAllUsersQuery();

  const update: User = {
    id: '345fb670-95bc-46ec-8205-712bb90fa979',
    armyId: '1234567',
    fullName: 'letsgo',
    password: 'weihoelw',
    isAdmin: false,
  };
  const [updateUser, { isLoading: updateLoading, error: loadingError }] =
    useUpdateUserMutation();

  const handleUpdateUser = (user: User) => {
    updateUser(user);
    refetch();
  };

  const [deleteUser, { isLoading: deleteLoading, error: deleteError }] =
    useDeleteUserMutation();

  const [createUser, { isLoading, error }] = useCreateUserMutation();
  const handleNewUser = (userData: User) => {
    createUser(userData);
    refetch();
  };

  const handleDeleteUser = (id: string) => {
    deleteUser(id);
    refetch();
  };
  const {
    data: userById,
    error: userByIdError,
    isLoading: userByIdLoading,
    isSuccess: userByIdSuccess,
  } = useGetUserByIdQuery('13fcdde8-38cd-40ba-be47-4475693f123f');

  const newUser: User = {
    id: '13fcgde8-38cd-40ba-be47-4475693f123f',
    armyId: '1234567',
    fullName: 'John Doe',
    password: 'youjifIi7',
    isAdmin: false,
  };
  return (
    <>
      <div>
        <h1>hello</h1>
        {allUsersSuccess &&
          allUsers?.map((user) => <div key={user.id}>{user.fullName}</div>)}
        {allUsersLoading && <p>Loading users...</p>}
        {allUsersError && <p>Error</p>}
      </div>
      <div>
        {userByIdSuccess && <p>{userById.password}</p>}
        {userByIdLoading && <p>loading...</p>}
        {userByIdError && <p>error mate</p>}
      </div>
      <button onClick={async () => await handleNewUser(newUser)}>+</button>
      {isLoading && <p>loading...</p>}
      {error && <p>lol</p>}
      <button
        onClick={async () =>
          await handleDeleteUser('d29608e3-24f9-4965-9f9d-054af6ebd5fb')
        }
      >
        -
      </button>
      {deleteLoading && <p>loading...</p>}
      {deleteError && <p>lol</p>}

      <button onClick={async () => await handleUpdateUser(update)}>
        update
      </button>
      {updateLoading && <p>loading...</p>}
      {loadingError && <p>lol</p>}
    </>
  );
};
