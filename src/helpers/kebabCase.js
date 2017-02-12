// @flow
export default function kebabCase (prop: string, slice: number = 0) {
    return prop.slice(slice).replace(/([A-Z]|(\d{1})+)/g, '-$1').toLowerCase();
}
