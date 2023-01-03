import React from 'react';
import PropTypes from 'prop-types';
export interface VideoPlayProps {
    video: { uri?: string | undefined, headers?: {[key: string]: string } | undefined, type?: string | undefined } | number; 
}