import { useEffect, useState } from 'react';
import { Card } from '..';
import { Criminal, useGetUserByIdQuery } from '../../store';

type Props = {
  criminal: Criminal;
  stringBorder?: string;
  description: string;
};

export const CriminalsCard: React.FC<Props> = ({
  criminal,
  stringBorder,
  description,
}) => {
  const [title, setTitle] = useState<string>(criminal.user.fullName);
  const { data: userData } = useGetUserByIdQuery(criminal.userId);
  useEffect(() => {
    if (userData) {
      setTitle(userData.fullName);
    }
  }, [userData]);
  return (
    <div>
      <Card.Root stringBorder={stringBorder}>
        <Card.Header title={title || ''} />
        <Card.Description desc={description || ''} />
        <Card.Date date={criminal.createdAt || new Date()} />
      </Card.Root>
    </div>
  );
};
