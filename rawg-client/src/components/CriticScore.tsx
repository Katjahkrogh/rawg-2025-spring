import { Badge } from '@chakra-ui/react';
import { c } from 'framer-motion/dist/types.d-6pKw1mTI';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const getColor = (score: number) => {
    if (score >= 75) return 'green';
    if (score >= 55) return 'yellow';
  };

  return (
    <Badge border="1px solid" fontSize="13px" paddingX={1} colorScheme={getColor(score)} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
