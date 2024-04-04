import MyButton from "./MyButton";

export default {
    title : 'app/MyButton',
    component : MyButton,
};

export const Index = {
    render:() => <MyButton primary size="medium" label="ボタン" onClick={() => console.log("hello storybook!")}/>
}

export const White = {
    render: () => <MyButton size="small" label="ボタン" backgroundColor={"#fff"}/>
}