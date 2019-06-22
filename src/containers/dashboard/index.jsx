import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../layouts/default';
import Issue from '../../components/issue';
import Repo from '../../components/repo';
import { fetchRepos, fetchIssues, reorderIssues } from '../../actions/GitActions';
import './dashboard.scss';

class dashboard extends React.Component {
    componentDidMount () {
        const { fetchRepos, repos } = this.props;
        if ( repos.length === 0 ){
            fetchRepos();
        }
    }

    updateIssues = (repo) => {
        const { fetchIssues } = this.props;
        const repoName = repo.name;
        const username = repo.owner.login;
        fetchIssues(repoName, username);
    }

    /**
     * id - id of element that is being moved
     * aid - id of the element we are inserting after.
     * 
     * We will always insert after in this case.
     * **/
    reorderIssues = (id, aid) => {
        const { reorderIssues } = this.props;
        reorderIssues(id, aid);
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
                        return <Issue key={issue.id} issue={issue} reorderIssues={(id, aid) => { this.reorderIssues(id, aid) }} />
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
    fetchIssues: (repo, user) => dispatch(fetchIssues(repo, user)),
    reorderIssues: (id, aid) => dispatch(reorderIssues(id, aid))
  });
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(dashboard);
