import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';
//?component
const DetailsChapterSelectSectionContainer = styled.View`
    width: 100%;
    margin-top: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;
const ButtonSelect = styled.TouchableOpacity`
    padding: 0 10px;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;
const TextButton = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;
const ButtonNext = styled.TouchableOpacity`
    padding: 0 10px;
    height: 40px;
    background-color:${colors.darkGalaxy1} ;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;
const IconNext = styled.Image`
    width: 20px;
    height: 20px;
`;
//?types
import { DetailsChapterSelectSectionProps } from './types';
import { IMAGE } from '../../constrain';
const DetailsChapterSelectSection: FunctionComponent<DetailsChapterSelectSectionProps> = (props) => {
    const { setVisible } = props;
    return (
        <DetailsChapterSelectSectionContainer>
            <ButtonSelect
                onPress={() => setVisible(true)}
            >
                <TextButton>Select chapter</TextButton>
            </ButtonSelect>
            <ButtonNext>
                <IconNext source={IMAGE.RightArrow} />
            </ButtonNext>
        </DetailsChapterSelectSectionContainer>
    );
}

export default DetailsChapterSelectSection;