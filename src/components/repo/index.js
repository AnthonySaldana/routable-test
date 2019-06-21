import React, { Fragment } from 'react';
import Layout from '../../layouts/default';
import './repo.scss';

export default function repo(props) {
    const { repo, handleClick } = props;
    return (
        <div className="repoCard" onClick={() => handleClick(repo)}>
            <p className="repoName">{ repo.name }</p>
            <p className="repoIssues">Open Issues: { repo.open_issues }</p>
        </div>
    );
}
