import React, {useCallback, useMemo, useState} from 'react';

export default {
	title: 'LikeUseCallback'
}

export const LikeUseCallback = () => {
	console.log('LikeUseCallback')
	const [counter, setCounter] = useState(0)
	const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

	const memoizedAddBook = useMemo(() => {
		return () => {
			console.log(books)
			const newBooks = [...books, 'Angular' + new Date().getTime()]
			setBooks(newBooks)
		}
	}, [books])

	const memoizedAddBook2 = useCallback(() => {
		console.log(books)
		const newBooks = [...books, 'Angular' + new Date().getTime()]
		setBooks(newBooks)
	}, [books])

	return <>
	<button onClick={() => setCounter(counter + 1)}>+</button>
		{counter}
		<Book addBook={memoizedAddBook2}/>
	</>


}

type BookSecretPropsType = {
	addBook: () => void
}

const BooksSecret = (props: BookSecretPropsType) => {
	console.log('BooksSecret')
	return <div>
		<button onClick={() => props.addBook()}>add book</button>
	</div>
}

const Book = React.memo(BooksSecret)
