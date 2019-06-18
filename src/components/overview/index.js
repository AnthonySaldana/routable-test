import React, { Fragment } from 'react';
import Layout from '../../layouts/default';
import './overview.scss';

export default function overview(props) {
    const { content } = props;
    return (
        <Fragment>
            <p>{ content }</p>
        </Fragment>
    );
}
