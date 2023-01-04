import React from 'react';
import PropTypes from 'prop-types';

export interface VideoPlayProps {
    video: { uri?: string | undefined, headers?: { [key: string]: string } | undefined, type?: string | undefined } | number;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center' | undefined;
    repeat?: boolean | undefined;
    onEnd?: (() => void) | undefined;
    onReapet?: (() => void) | undefined;
    autoplay?: boolean | undefined;
    thumbnail?: { uri?: string | undefined, headers?: { [key: string]: string } | undefined, type?: string | undefined } | number;
    showDuration?: boolean | undefined;
    endThumbnail ?: { uri?: string | undefined, headers?: { [key: string]: string } | undefined, type?: string | undefined } | number;

}