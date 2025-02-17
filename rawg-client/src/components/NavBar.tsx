import logo from '../assets/logo.png';
import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={2}>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
