import React, { Fragment } from 'react';
import Layout from '../../layouts/default';
import './repo.scss';

export default function repo(props) {
    const { repo, handleClick } = props;
    return (
        <div className="repoCard">
            <p className="repoName" onClick={() => handleClick(repo)}>{ repo.name }</p>
            <p className="repoIssues" onClick={() => handleClick(repo)}>Open Issues: { repo.open_issues }</p>
        </div>
    );
}
