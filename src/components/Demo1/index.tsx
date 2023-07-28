
interface IProps {
    name: string
}

const Demo1 = (props: IProps) => {
    const { name } = props;

    return (<>
        <h1>Welcome</h1>
        <h1>{name ? name : 'Guest User'}</h1>
    </>)
}

export default Demo1