import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "/projectActions";

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render() {
    const { error, loading, projects } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {projects.map(project =>
          <li key={project.id}>{project.name}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.projects.items,
  loading: state.projects.loading,
  error: state.projects.error
});

export default connect(mapStateToProps)(ProjectList);
