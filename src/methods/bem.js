// @flow
import kebabCase from '../helpers/kebabCase';

export default function bem (blockName: string, props: Object, rules: Object) {
    let blockNames = [blockName];

    if (props.blockName) {
        blockNames.push(props.blockName);
    }

    let styles = blockNames.map((block: string) => {
        const parent = block.indexOf('__') > -1 ? block.split('__')[0] : null;
        let style = Object.assign({}, rules[block]);

        return Object.keys(props).reduce((obj: Object, prop: string) => {
            if (props[prop] && (prop.indexOf('M') === 0 || prop.indexOf('S') === 0)) {
                const modifier = prop.indexOf('M') === 0 ? `--${kebabCase(prop, 1)}${props[prop] === true ? '' : `-${props[prop]}`}` : '';
                const state = prop.indexOf('S') === 0 ? `.${kebabCase(prop, 1)}` : '';

                obj = Object.assign(style, rules[`${block}${state}${modifier}`]);

                if (parent && rules[`${parent}${modifier}${state} ${block}`]) {
                    obj = Object.assign(obj, rules[`${parent}${modifier}${state} ${block}`]);
                }
            }

            return obj;
        }, style);
    });

    return [...styles, props.style || {}];
}
