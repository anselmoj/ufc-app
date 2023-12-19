/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import {SvgUri} from 'react-native-svg';

import ITeam from 'src/models/Team';

import {Container, ContainerTeam, Image, Label, TitleTeam} from './styles';

interface IItemProps {
  isLoading: boolean;
  team: ITeam;
}

const Item: React.FC<IItemProps> = ({team}) => {
  return (
    <>
      <Container>
        <ContainerTeam>
          <Label>Time</Label>
          <TitleTeam>
            {team.City} {team.Name}
          </TitleTeam>
          <Label>Conferência</Label>
          <TitleTeam>{team.Conference}</TitleTeam>
          <Label>Treinador</Label>
          <TitleTeam>{team.HeadCoach}</TitleTeam>
          {/*
          {team.WikipediaLogoUrl && (
            // <Image source={{uri: team.WikipediaLogoUrl}} />
          )} */}
        </ContainerTeam>
        <Image>
          <SvgUri uri={team.WikipediaLogoUrl} />
        </Image>
      </Container>
    </>
  );
};

export default Item;
