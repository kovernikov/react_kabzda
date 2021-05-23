import React from 'react';
import {UncontrolledRating} from './UncontrolledRating';

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
};

export const EmptyRating = () => <UncontrolledRating value={0}/>;
