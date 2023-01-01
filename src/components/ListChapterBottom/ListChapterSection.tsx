import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';

//?component
import ListChapterItem from './ListChapterItem';
const ListChapterSectionContainer = styled.View`
    width: 100%;
    background-color: ${colors.darkGalaxy1};
`;
const FlatListChapter = styled.FlatList`
    width: 100%;
`;
//?types
import { ListChapterSectionProps } from './types';
const ListChapterBottomSection: FunctionComponent<ListChapterSectionProps> = (props) => {
  const { data, listHeaderComponent } = props;
  return (
    <ListChapterSectionContainer>
      <FlatListChapter
        data={data}
        ListHeaderComponent={() => (
          <>
            {listHeaderComponent}
          </>
        )}
        // reverse
        ListFooterComponent={() => <View style={{ height: 100 }} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => <ListChapterItem {...item} />}
        keyExtractor={({ id }: any) => id.toString()}
      />
    </ListChapterSectionContainer>
  );
}

export default ListChapterBottomSection;