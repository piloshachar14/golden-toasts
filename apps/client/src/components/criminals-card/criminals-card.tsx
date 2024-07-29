import { Card } from '..';

type Props = {
  date?: Date;
  title: string | undefined;
  description?: string;
  stringBorder?: string;
};

export const CriminalsCard: React.FC<Props> = ({
  date,
  title,
  description,
  stringBorder,
}) => {
  return (
    <div>
      <Card.Root stringBorder={stringBorder}>
        <Card.Header title={title || ''} />
        <Card.Description desc={description || ''} />
        <Card.Date date={date || new Date()} />
      </Card.Root>
    </div>
  );
};
