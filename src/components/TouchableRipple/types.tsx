import React from 'react';
import {
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

export interface Props {
    indexMenu: number;
    setIndexMenu: (index: number) => void;
    active: boolean;
    veiwActive: React.ReactNode;
    viewInactive: React.ReactNode;
    title?: string;
}