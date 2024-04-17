import { useParams } from "react-router-dom";

export default function NotFoundPage() {
    const { '*': keywords } = useParams();
    return <p>検索ワード「{keywords}」のページは見つかりませんでした。</p>;
};