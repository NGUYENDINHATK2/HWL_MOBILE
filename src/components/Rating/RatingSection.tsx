import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

// ?components
const RatingSectionContainer = styled.View`
    width: 100%;
    padding: 5px 0px;
    flex-direction: row;
`;
const StarIcon = styled.Image`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

//?types
import { RatingSectionProps } from './types';
import { IMAGE } from '../../constrain';
const RatingSection: FunctionComponent<RatingSectionProps> = (props) => {
    const { numberRating } = props;
    return (
        <RatingSectionContainer>
            {
                [1, 2, 3, 4, 5].map((item, index) => {
                    if (item <= numberRating) {
                        return <StarIcon key={index} source={IMAGE.StarRating} />
                    }
                    return <StarIcon key={index} source={IMAGE.Star} />
                })
            }
        </RatingSectionContainer>
    );
}

export default RatingSection;