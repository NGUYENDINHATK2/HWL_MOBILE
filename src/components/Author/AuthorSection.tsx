import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
//?components
import AuthorItem from './AuthorItem';
const AuthorSectionContainer = styled.View`
    flex:1;
    margin-top:15px;
`;
const FlatListAuthor = styled.FlatList`
    flex:1;

`;

//?types
import { AuthorProps } from './types';
import ViewBottomTabBar from '../ViewBottomTabBar';

const AuthorSection: FunctionComponent<AuthorProps> = (props) => {
    const { data } = props;
    return (
        <AuthorSectionContainer>
            <FlatListAuthor
                data={data}
                ListFooterComponent={() => <ViewBottomTabBar/>}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }: any) => <AuthorItem {...item} />}
                keyExtractor={({ id }: any) => id.toString()}
            />
        </AuthorSectionContainer>
    );
}

export default AuthorSection;