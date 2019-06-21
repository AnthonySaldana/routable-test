import React, { Fragment } from 'react';
import Layout from '../../layouts/default';
import './issue.scss';

export default function repos(props) {
    const { issue } = props;
    return (
        <div className="issueCard">
            <p>{ issue.title }</p>
        </div>
    );
}
