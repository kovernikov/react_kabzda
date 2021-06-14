import React, {useState} from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function RatingComponent(props: RatingPropsType) {
    console.log('Rating rendering')

    // let [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    );
}

type StarRatingType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

const Star = React.memo(StarSecret);

function StarSecret(props: StarRatingType) {
    console.log('Star rendering')

    return <span onClick={ () => {props.onClick(props.value)}}> {props.selected ? <span>&#9733; </span> : <span>&#9734; </span>} </span>

}

export const Rating = React.memo(RatingComponent)
