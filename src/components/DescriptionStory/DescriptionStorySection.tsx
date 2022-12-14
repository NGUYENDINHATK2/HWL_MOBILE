import React,{FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {View,Text} from 'react-native';
import { colors } from '../../color';

//?component
const DescriptionStorySectionContainer = styled.View`
    width: 100%;
    padding: 5px 0px;
    margin-bottom: 10px;
    margin-top: 20px;
    background-color: ${colors.darkGalaxy1};
`;
const TextDescription = styled.Text`
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
`;
//?types
import {DetailsStorySectionProps} from './types';

const DescriptionStorySection:FunctionComponent<DetailsStorySectionProps> = (props) => {
  return (
    <DescriptionStorySectionContainer>
     <TextDescription>
        Bộ truyện được xem là huyền thoại của Nhật Bản. Nói về cuộc sống của một chú nhóc tên Nobita, tính tình hậu đậu và chú mèo máy Doremon đến từ thế kỉ 22 cùng những người bạn Xuka, Chaien, Xeko; để từ đó gây ra bao tiếng cười và rút ra những bài học ý nghĩa cho người xem !!
     </TextDescription>
    </DescriptionStorySectionContainer>
  );
}

export default DescriptionStorySection;