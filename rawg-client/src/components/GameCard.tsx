import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconsList from './PlatformIconsList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)}/>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
