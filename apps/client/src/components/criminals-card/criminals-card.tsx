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
        <Card.Header title={title ? title : ''} />
        <Card.Description desc={description ? description : ''} />
        <Card.Date date={date ? date : new Date()} />
      </Card.Root>
    </div>
  );
};
