import React from 'react';
import Layout from '../../layouts/default';
import Issue from '../../components/issue';
import IssueOverview from '../../components/overview';
import './dashboard.scss';

class dashboard extends React.Component {
    render () {
        const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac aliquam quam, non ultrices orci. In pretium egestas imperdiet. Vivamus accumsan urna non magna mattis lobortis. Vivamus ut placerat nisi. In vestibulum, ipsum non vehicula dignissim, ligula ligula maximus lacus, in feugiat justo diam non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam hendrerit metus sed mauris vestibulum, at auctor erat cursus. Morbi purus sem, lobortis eget pretium in, condimentum vel augue.";
        return (
            <Layout>
                <div className="issues">
                    <p>Issue</p>
                    <p>Issue</p>
                    <p>Issue</p>
                    <p>Issue</p>
                </div>
                <div className="issue-description active">
                    <IssueOverview content={content} />
                </div>
            </Layout>
        );
    }
}

export default dashboard;