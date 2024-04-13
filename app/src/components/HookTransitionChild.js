import { memo } from "react";
import books from "./books";

const sleep = (delay) => {
    const start = Date.now();
    while (Date.now() < start + delay);
}

export function BookDetails({ isbn }) {
    const book = books.find(book => book.isbn === isbn);
    return (
        <ul>
            <li>ISBN:{book?.isbn}</li>
            <li>書名:{book?.title}</li>
            <li>価格:{book?.price}円</li>
            <li>概要:{book?.summary}</li>
            <li>配布サンプル:{(books?.download) ? 'あり' : 'なし'}</li>
        </ul>
    );
}

export const CommentList = memo(function({src,isPending}) {
    if (isPending){
        return <p>読み込み中...</p>;
    }
    return (
        <ol>
            {src.map(c => <CommentItem key={c.id} src={c} />)}
        </ol>
    )
});

function CommentItem({ src }) {
    sleep(1000);
    return (
        <li>{src.body}({src.rank})</li>
    )
}