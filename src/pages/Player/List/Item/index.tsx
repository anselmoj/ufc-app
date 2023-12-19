/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import {Image} from 'react-native';

import IPlayer from 'src/models/Player';

import {Container, ContainerTeam, Label, TitleTeam} from './styles';

interface IItemProps {
  isLoading: boolean;
  player: IPlayer;
}

const Item: React.FC<IItemProps> = ({player}) => {
  return (
    <>
      <Container>
        <ContainerTeam>
          <Label>Nome</Label>
          <TitleTeam>
            {player.FirstName} {player.LastName}
          </TitleTeam>

          <Label>Time</Label>
          <TitleTeam>{player.Team}</TitleTeam>

          <Label>Posição</Label>
          <TitleTeam>{player.Position}</TitleTeam>

          <Label>Número</Label>
          <TitleTeam>{player.Jersey}</TitleTeam>

          {player.PhotoUrl && (
            <Image
              source={{uri: player.PhotoUrl}}
              style={{
                height: 56,
                width: 56,
                resizeMode: 'contain',
              }}
            />
          )}
        </ContainerTeam>
      </Container>
    </>
  );
};

export default Item;
