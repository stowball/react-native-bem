// @flow
import kebabCase from '../helpers/kebabCase';

export default function bem (selector: string, props: Object, rules: Object) {
    const parentName = selector.indexOf('__') > -1 ? selector.split('__')[0] : null;

    const styles = Object.keys(props).reduce((arr: Array<any>, prop: string) => {
        if (props[prop] && (prop.indexOf('M') === 0 || prop.indexOf('S') === 0)) {
            const modifier = prop.indexOf('M') === 0 ? `--${kebabCase(prop, 1)}${props[prop] === true ? '' : `-${props[prop]}`}` : '';
            const state = prop.indexOf('S') === 0 ? `.${kebabCase(prop, 1)}` : '';

            arr.push(rules[`${selector}${state}${modifier}`]);

            if (parentName) {
                arr.push(rules[`${parentName}${modifier}${state} ${selector}`]);
            }
        }

        return arr;
    }, [rules[selector]]);

    return [...styles, !parentName && props.style].filter(Boolean);
}
