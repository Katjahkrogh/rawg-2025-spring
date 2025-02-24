import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const getColor = (score: number) => {
    if (score >= 75) return 'green';
    if (score >= 50) return 'yellow';
    return 'red';
  };

  return (
    <Badge
      border="1px solid"
      fontSize="13px"
      paddingX={1}
      colorScheme={getColor(score)}
      borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
