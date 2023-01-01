import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Text, TouchableRipple } from 'react-native-paper';
import { colors } from '../../color';
//?components
const TouchableRippleBtnContainerActive = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.pinkPastel};
`;
const TouchableRippleBtnContainerInactive = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255, 255, 255, 0.2);
`;
//?types
import { Props } from './types';

const TouchableRippleBtn: FunctionComponent<Props> = (props) => {
    const { indexMenu, setIndexMenu,active,veiwActive,viewInactive,title } = props;
    return active ? (
        <TouchableRippleBtnContainerActive>
            <TouchableRipple
                onPress={() => setIndexMenu(indexMenu)}
                rippleColor={colors.pinkPastel}
                style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
               {veiwActive}
            </TouchableRipple>
        </TouchableRippleBtnContainerActive>
    ):(
        <TouchableRippleBtnContainerInactive>
            <TouchableRipple
                onPress={() => setIndexMenu(indexMenu)}
                rippleColor={colors.pinkPastel}
                style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {viewInactive? viewInactive : <Text>{title}</Text>}
                
            </TouchableRipple>
        </TouchableRippleBtnContainerInactive>
    )
}

export default TouchableRippleBtn;