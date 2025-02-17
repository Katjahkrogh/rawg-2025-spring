import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack paddingRight={10}>
      <Switch isChecked={colorMode === 'dark'} colorScheme="green" onChange={toggleColorMode} />
    </HStack>
  );
};

export default ColorModeSwitch;
