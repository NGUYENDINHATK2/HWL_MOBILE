import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../color';


// ?components
const HeaderDrawerComponentContainer = styled.View`
    background-color: ${colors.darkGalaxy1};
    width: 100%;
    border-bottom-width: 0.5px;
    border-bottom-color: ${colors.gray};
    justify-content: center;
    padding: 40px 10px 20px;
    margin-bottom: 10px;
`;
const HeaderAvatarContainer = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    overflow: hidden;
    background-color: ${colors.darkGalaxy};
`;
const HeaderAvatar = styled.Image`
    overflow: hidden;
    width: 100%;
    height: 100%;
`;
const NameUserContainer = styled.View`
    margin-top: 10px;
    width: 100%;
`;
const NameUser = styled.Text`
    width: 80%;
    color: ${colors.white};
    font-size: 18px;
    font-weight: bold;
`;
const EmailUserContainer = styled.View`
    width: 100%;
    flex-direction: row;
`;
const EmailUser = styled.Text`
    width: 90%;
    color: ${colors.white};
`;
const IconDownContainer = styled.View`
    width: 10%;
    align-items: center;
    justify-content: center;
`;
const IconDown = styled.Image`
    width: 12px;
    height: 12px;
`;
//?types
import {IMAGE} from '../../constrain';
interface Props { }

const HeaderDrawerComponent: FunctionComponent<Props> = ({ }) => {
    return (
        <HeaderDrawerComponentContainer>
            <HeaderAvatarContainer>
                <HeaderAvatar
                    source={{
                        uri: 'https://i.pinimg.com/474x/3c/c6/47/3cc647a3a92754d8c035605cebd23d41.jpg'
                    }}
                />
            </HeaderAvatarContainer>
            <NameUserContainer>
                <NameUser numberOfLines={1}>
                    Thai HentaiSenpai
                </NameUser>
            </NameUserContainer>
            <EmailUserContainer>
                <EmailUser numberOfLines={1}>
                    dinhatnguyen81@gmail.com
                </EmailUser>
                <IconDownContainer>
                    <IconDown
                        source={IMAGE.Down}
                    />
                </IconDownContainer>
            </EmailUserContainer>
        </HeaderDrawerComponentContainer>
    );
}

export default HeaderDrawerComponent;