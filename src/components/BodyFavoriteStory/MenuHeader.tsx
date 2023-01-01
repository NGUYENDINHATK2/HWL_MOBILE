import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import { colors } from '../../color';
//?components
import TouchableRippleBtn from '../TouchableRipple';
import IconMenu from './IconMenu';
const MenuHeaderContainer = styled.View`
    margin-left:10px;
    margin-right:10px;
    height:50px;
    margin-top:10px;
    flex-direction: row;
    align-items: center;
`;
const MenuItemContainer = styled.View`
    flex: 1;
    height:100%;
`;
//?types
import { IMAGE, GIFJSON } from '../../constrain';
interface Props {
    indexMenu: number;
    setIndexMenu: (index: number) => void;
}

const menu = [
    {
        id: 0,
        name: 'Premium',
        source: GIFJSON.MenuPremium,
        width: 30,
        height: 30,
    },
    {
        id: 1,
        name: 'Search',
        source: GIFJSON.Search,
        width: 80,
        height: 80,
    },
    {
        id: 2,
        name: 'Author',
        source: GIFJSON.Author,
        width: 35,
        height: 35,
    },
];

const MenuHeader: FunctionComponent<Props> = (props) => {
    const { indexMenu, setIndexMenu } = props;
    const isFocused = useIsFocused();
    React.useEffect(() => {
        setIndexMenu(0);
    }, [isFocused]);
    return (
        <MenuHeaderContainer>
            {menu.map((item, index) => {
                return (
                    <MenuItemContainer key={index}>
                        <TouchableRippleBtn
                            indexMenu={index}
                            setIndexMenu={setIndexMenu}
                            active={indexMenu === index ? true : false}
                            veiwActive={<IconMenu play={true}
                                source={item.source}
                                width={item.width} height={item.height}
                            />}
                            viewInactive={<IconMenu play={false}
                                source={item.source}
                                width={item.width} height={item.height}
                            />}
                        />
                    </MenuItemContainer>
                );
            })}
        </MenuHeaderContainer>
    );
}

export default MenuHeader;