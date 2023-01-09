export default class Welcome extends Element {
    constructor(props, kids) {
        super();
        this.props = props;
        console.log(props)
    }

    render(props, kids) {
        return <h1>Welcome</h1>
    }
}
