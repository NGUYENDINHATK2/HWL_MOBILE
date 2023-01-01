import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View, Text, Dimensions, TouchableOpacity, Image, PermissionsAndroid, Platform } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
        return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
}
//?component
import ImageZoom from '../ImageZoom/ImageZoom';
const ListImageStorySectionContainer = styled.View`
    width: 100%;
    flex: 1;
    margin-top: 30px;
`;
const ImageStoryItem = styled.View`
    width: 100%;
    flex: 1;
    padding: 10px;
`;

//?types
import { ListImageStorySectionProps } from './types';

const ListImageStorySection: FunctionComponent<ListImageStorySectionProps> = (props) => {
    const { listImageChapterStory } = props;
    React.useEffect(() => {
        hasAndroidPermission();
    }, [])
    return (
        <ListImageStorySectionContainer>
            <ImageStoryItem >
                <ImageViewer
                    enablePreload={true}
                    enableSwipeDown={true}
                    saveToLocalByLongPress={true}
                    imageUrls={listImageChapterStory} />
            </ImageStoryItem>
        </ListImageStorySectionContainer>
    );
}

export default ListImageStorySection;