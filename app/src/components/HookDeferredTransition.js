import { useState, useDeferredValue } from 'react';
import books from './books';
import commentList from './comments';
import { BookDetails, CommentList } from './HookTransitionChild';

export default function HookDeferredTransition() {
    const [isbn, setIsbn] = useState('');
    const [comments, setComments] = useState([]);
    const deferredComments = useDeferredValue(comments);
    const isPending = comments !== deferredComments;

    const handleSelect = (e) => {
        const isbn = e.target.value;
        setIsbn(isbn);
        setComments(commentList.filter(c => c.isbn === isbn));
    };

    return (
        <>
            <select onChange={handleSelect}>
                <option value="">選択してください</option>
                {books.map(book => (
                    <option key={book.isbn} value={book.isbn}>
                        {book.title}
                    </option>
                ))}
            </select>
            <BookDetails isbn={isbn} />
            <CommentList src={deferredComments} isPending={isPending}/>
        </>
    );
}