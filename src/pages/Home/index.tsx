import React, {useCallback} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PublicStackParamList} from '@routes/public.routes';
import colors from '@styles/colors';
import Containers from '@styles/containers';

import LogoUfc from '@assets/logo.png';

import {
  Card,
  Content,
  InnerContentContainer,
  Logo,
  LogoHomeContainer,
  TextCard,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>();

  const handleNavigation = useCallback(
    (pageName: any) => {
      navigation.navigate(pageName);
    },
    [navigation],
  );

  return (
    <Containers.SafeArea backgroundColor={colors.mainBackground}>
      <Containers.Content
        justifyContent="space-evenly"
        paddingBottom={32}
        paddingLeft={16}
        paddingRight={16}
        paddingTop={8}>
        <LogoHomeContainer>
          <Logo resizeMode="contain" source={LogoUfc} />
        </LogoHomeContainer>
        <Content>
          <InnerContentContainer>
            <Card
              onPress={() => handleNavigation('Team')}
              style={{elevation: 8}}>
              <TextCard>Times</TextCard>
            </Card>
            <Card
              onPress={() => handleNavigation('Player')}
              style={{elevation: 8}}>
              <TextCard>Jogadores</TextCard>
            </Card>
          </InnerContentContainer>
          <InnerContentContainer>
            <Card
              onPress={() => handleNavigation('Fighter')}
              style={{elevation: 8}}>
              <TextCard>Lutadores</TextCard>
            </Card>
            <Card style={{elevation: 8}}>
              <TextCard>Consultar Ranking</TextCard>
            </Card>
          </InnerContentContainer>
        </Content>
      </Containers.Content>
    </Containers.SafeArea>
  );
};

export default Home;
