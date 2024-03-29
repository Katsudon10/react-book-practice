/** @jsxImportSourse @emotion/react */
import styled from "@emotion/styled";

const MyPanel = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
`;

export default function EmotionComp() {
    return (
        <MyPanel>
            <b>Emotion</b>はCSS in JSライブラリの一つ。
        </MyPanel>
    );
}
