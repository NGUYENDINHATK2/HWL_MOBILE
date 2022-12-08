import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../color';
//?components
const QuickSelectionMenuSectionContainer = styled.View`
    padding: 20px 10px 0px;
`;
const StatusContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;
const StatusText = styled.Text`
    color: ${colors.white};
`;
const StatusItemContainer = styled.ScrollView`
    flex: 1;
    margin-left: 10px;
`;
const StatusItem = styled.TouchableOpacity`
    border-radius: 5px;
    border-width: 0.2px;
    border-color: ${colors.gray};
    padding: 10px;
    align-items: center;
    margin-right: 10px;
`;
const StatusItemText = styled.Text`
    color: ${colors.white};
    font-size: 12px;
`;

//?types 
import { QuickSelectionMenuProps } from './types';

const QuickSelectionMenuSection: FunctionComponent<QuickSelectionMenuProps> = (props) => {
    return (
        <QuickSelectionMenuSectionContainer>
            <StatusContainer>
                <StatusText>Status</StatusText>
                <StatusItemContainer horizontal={true} showsHorizontalScrollIndicator={false}>
                    <StatusItem>
                        <StatusItemText>Active</StatusItemText>
                    </StatusItem>
                    <StatusItem>
                        <StatusItemText>Completed</StatusItemText>
                    </StatusItem>
                </StatusItemContainer>
            </StatusContainer>

            <StatusContainer>
                <StatusText>Country</StatusText>
                <StatusItemContainer horizontal={true} showsHorizontalScrollIndicator={false}>
                    <StatusItem>
                        <StatusItemText>China</StatusItemText>
                    </StatusItem>
                    <StatusItem>
                        <StatusItemText>Japan</StatusItemText>
                    </StatusItem>
                    <StatusItem>
                        <StatusItemText>USA</StatusItemText>
                    </StatusItem>
                    <StatusItem>
                        <StatusItemText>Korean</StatusItemText>
                    </StatusItem>
                    <StatusItem>
                        <StatusItemText>Other</StatusItemText>
                    </StatusItem>
                </StatusItemContainer>
            </StatusContainer>
        </QuickSelectionMenuSectionContainer>
    );
}

export default QuickSelectionMenuSection;