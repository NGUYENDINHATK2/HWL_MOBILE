import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';
//?components
const AuthorItemContainer = styled.TouchableOpacity`
    flex-direction:row;
    margin:5px 0px;
    align-items:center;
    border:0.3px solid ${colors.pinkPastel};
    border-radius:10px;
    padding: 5px 10px;
`;
const AvatarContainer = styled.View`
    width:50px;
    height:50px;
    border-radius:25px;
    background-color:${colors.pinkPastel};
`;
const Avatar = styled.Image`
    width:50px;
    height:50px;
    border-radius:25px;
`;
const InfoContainer = styled.View`
    flex:1;
    height:50px;
    margin-left:10px;
    justify-content:center;
`;
const NameAuthor = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:${colors.white};
`;
const DescriptionContainer = styled.View`
    flex-direction:row;
`;
const Details = styled.Text`
    font-size:10px;
    color:${colors.white};
`;

//?types
import { AuthorItemProps } from './types';

const AuthorItem: FunctionComponent<AuthorItemProps> = (props) => {
    return (
        <AuthorItemContainer>
            <AvatarContainer >
                <Avatar source={{ uri: props.avatar }} />
            </AvatarContainer>
            <InfoContainer>
                <NameAuthor>{props.name}</NameAuthor>
                <DescriptionContainer>
                    <Details>{props.sum_story} Story - {props.sum_follower}Follower</Details>
                </DescriptionContainer>
            </InfoContainer>
        </AuthorItemContainer>
    );
}

export default AuthorItem;