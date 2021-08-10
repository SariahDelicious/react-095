export default function TestRender() {
    console.log(new Date(), 'call TestRender/Parent');
    return <>
    <div>Parent</div>
    <ChildLevelOne />
    </>;
}

function ChildLevelOne() {
    console.log(new Date(), 'call TestRender/Child Level One');
    return <>
    <div>ChildLevelOne</div>
    <ChildLevelTwo />
    </>;
}

function ChildLevelTwo() {
    console.log(new Date(), 'call TestRender/Child Level Two');
    return <>
    <div>ChildLevelTwo</div>
    </>;
}