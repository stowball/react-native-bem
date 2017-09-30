// @flow
export default function generateChildProps (props: Object, style: Array<any>) {
    let childProps = Object.keys(props).reduce((obj: Object, prop: string) => {
        if (prop.indexOf('M') === 0 || prop.indexOf('S') === 0) {
            obj[prop] = props[prop];
        }

        return obj;
    }, {});

    if (style) {
        childProps.style = style;
    }

    return childProps;
}
