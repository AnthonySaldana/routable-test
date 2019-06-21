import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../layouts/default';
import Issue from '../../components/issue';
import Repo from '../../components/repo';
import { fetchRepos, fetchIssues } from '../../actions/GitActions';
import './dashboard.scss';

class dashboard extends React.Component {
    componentDidMount () {
        const { fetchRepos } = this.props;
        fetchRepos();
    }

    updateIssues = (repo) => {
        const { fetchIssues } = this.props;
        const repoName = repo.name;
        const username = repo.owner.login;
        fetchIssues(repoName, username);
    }

    render () {
        const { repos, issues } = this.props;
        return (
            <Layout>
                <div className="repos">
                    <h2 className="reposHeader">Repos</h2>
                    { 
                        repos ? repos.map((repo) => {
                            return <Repo key={repo.id} repo={repo} handleClick={(repo) => this.updateIssues(repo)} />;
                        }) : null
                    }
                </div>
                <div className="issues active">
                    { issues.length > 0 ? <h2>Issues</h2> : <p>Select a Repo!</p> }
                    { issues ? issues.map((issue) => {
                        return <Issue key={issue.id} issue={issue} />
                    }) : null }
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      repos: state.git.repos,
      issues: state.git.issues
    }
};
  
//const mapDispatchToProps = { fetchRepos };
const mapDispatchToProps = dispatch => ({
    fetchRepos: () => dispatch(fetchRepos()),
    fetchIssues: (repo, user) => dispatch(fetchIssues(repo, user))
  });
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(dashboard);
