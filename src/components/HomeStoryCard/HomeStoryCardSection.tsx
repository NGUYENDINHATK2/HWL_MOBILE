import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';
//?components
import NewStoryItem from './NewStoryItem';
const HomeStoryCardSectionContainer = styled.View`
    margin-top: 10px;
`;
const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 10px 0px ;
    color: ${colors.white};
`;
const NewStoryFlatList = styled.FlatList`
    margin-top: 10px;
`;
//?types
import { HomeStoryCardProps } from './types';

const HomeStoryCardSection: FunctionComponent<HomeStoryCardProps> = (props) => {
    const { data } = props;
    const flatListRef = React.useRef<any>(null);
    const [indexActive, setIndexActive] = React.useState<number>(0);
    // auto scroll
    React.useEffect(() => {
        const interval = setInterval(() => {
            if (indexActive < data.length - 1) {
                setIndexActive(indexActive + 1);
            } else {
                setIndexActive(0);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [indexActive]);
    React.useEffect(() => {
        flatListRef.current.scrollToIndex({ index: indexActive, animated: true });
    }, [indexActive]);

    return (
        <HomeStoryCardSectionContainer>
            <Title>New to day</Title>
            {/* flatlist */}
            <NewStoryFlatList
                ref={flatListRef}
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                renderItem={({ item }: any) => <NewStoryItem {...item} />}
                keyExtractor={({ id }: any) => id.toString()}
            />
        </HomeStoryCardSectionContainer>
    );
}

export default HomeStoryCardSection;