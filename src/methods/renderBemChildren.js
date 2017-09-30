// @flow
import React from 'react';
import generateChildProps from '../helpers/generateChildProps';

export function renderBemChild (props: Object, style: Array<any>, index: number = 0) {
    const childCount = React.Children.count(props.children);

    if (childCount === 0) {
        return null;
    }

    const child = childCount === 1 ? props.children : props.children[index];
    const bemProps = generateChildProps(props, style);

    return Object.keys(bemProps).length ? React.cloneElement(child, bemProps) : child;
}

export function renderBemChildren (props: Object, style: Array<any>) {
    return React.Children.map(props.children, (child: Object) => {
        const bemProps = generateChildProps(props, style);

        return Object.keys(bemProps).length ? React.cloneElement(child, bemProps) : child;
    });
}
