import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
