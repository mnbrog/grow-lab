import React from 'react';
import BackgroundGlow from './src/components/layout/BackgroundGlow';
import './src/styles/global.css';

export const wrapPageElement = ({ element }) => (
  <>
    <BackgroundGlow />
    {element}
  </>
);
