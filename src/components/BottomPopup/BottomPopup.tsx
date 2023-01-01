import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import {
    View, Text, TouchableNativeFeedback, TouchableOpacity, GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
//?component
const BottomPopupModal = styled.Modal``;
const BottomPopupModalContainer = styled.View`
    flex: 1;
    background-color:#5e5d5daa;
    justify-content: flex-end;
`;
const IconMinus = styled.Image`
    width: 20px;
    height: 20px;
    margin: 10px;
`;
const RenderContainer = styled.View`
    width: 100%;
    max-height: 60%;
    background-color: #000528;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
const TitleContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
`;
const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
//?types
interface Props {
    visible: boolean;
    setVisible: (value: boolean) => void;
    children: React.ReactNode;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    iconMinus?: React.ReactNode;
}
import ImageMinus from './minus.png'

const BottomPopup: FunctionComponent<Props> = (props) => {
    const { visible, setVisible, children, title, titleStyle, containerStyle,iconMinus } = props;

    const renderOutsideTocuhable = (onTocuh: any) => {
        const view = <View style={{ flex: 1 }} />
        if (!onTocuh) return view;
        return (
            <TouchableNativeFeedback onPress={onTocuh} style={{ flex: 1 }}>
                {view}
            </TouchableNativeFeedback>
        )
    }
    const renderContainer = (children: React.ReactNode) => {
        return (
            <RenderContainer style={containerStyle} >
                <TouchableOpacity style={{
                    width: '100%',
                    alignItems: 'center',
                    marginBottom: 5,
                }}
                    onPress={() => setVisible(false)}
                >
                    {iconMinus ? iconMinus : <IconMinus source={ImageMinus} />}
                </TouchableOpacity>
                <TitleContainer>
                    <Title style={titleStyle}>{title}</Title>
                </TitleContainer>
                {children}
            </RenderContainer>
        )
    }

    return (
        <BottomPopupModal
            animationType={'slide'}
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false);
            }}
        >
            <BottomPopupModalContainer>
                {renderOutsideTocuhable(() => setVisible(false))}
                {renderContainer(children)}
            </BottomPopupModalContainer>
        </BottomPopupModal>
    );
}

export default BottomPopup;