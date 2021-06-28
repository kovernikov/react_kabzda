import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Rating',
    component: Rating,
};

const callback = action(' Rating mode change event fired');

export const EmptyRating = () => <Rating value={0} onClick={callback}/>;
export const Rating1 = () => <Rating value={1} onClick={callback}/>;
export const Rating2 = () => <Rating value={2} onClick={callback}/>;
export const Rating3 = () => <Rating value={3} onClick={callback}/>;
export const Rating4 = () => <Rating value={4} onClick={callback}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating value={rating} onClick={setRating}/>
};
