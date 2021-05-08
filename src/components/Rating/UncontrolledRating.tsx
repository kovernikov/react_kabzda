import React, {useState} from 'react';

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [bold, setBold] = useState(0);

    return (
        <div>

            <Star selected={bold > 0}/>
            <button onClick={() => {
                bold ? setBold(0) : setBold(1)
            }}>1
            </button>
            <Star selected={bold > 1}/>
            <button onClick={() => {
                bold ? setBold(0) : setBold(2)
            }}>2
            </button>
            <Star selected={bold > 2}/>
            <button onClick={() => {
                bold ? setBold(0) : setBold(3)
            }}>3
            </button>
            <Star selected={bold > 3}/>
            <button onClick={() => {
                bold ? setBold(0) : setBold(4)
            }}>4
            </button>
            <Star selected={bold > 4}/>
            <button onClick={() => {
                bold ? setBold(0) : setBold(5)
            }}>5
            </button>

        </div>
    );
}

type StarRatingType = {
    selected: boolean
}

function Star(props: StarRatingType) {
    console.log('Star rendering')

    return props.selected ? <span> &#9733; </span> : <span> &#9734; </span>

}
