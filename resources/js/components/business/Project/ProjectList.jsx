import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import URLMapping from "../../../utils/routes";
import { startGettingProjects } from "../../redux/actions/projectsActions";
import Error from "../../ui/pages/Error";
import Title from "../../ui/parts/Title";
import Table from "../../ui/parts/Table";

function ProjectList(props) {
    const { projects, loading, error, getProjects } = props;

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Project list" loading={loading} />
            <Link to={URLMapping.CREATE_PROJECT} className="btn btn-primary mb-3">Create</Link>
            <Table
                type="crud"
                content={projects.slice().reverse()}
                onlyColumns={[
                    {
                        name: "name",
                        link: item => URLMapping.PROJECT_DETAIL.replace(":id", item.id)
                    },
                    {
                        name: "description"
                    }
                ]}
            />
        </>
    );
}

const mapStateToProps = state => ({
    projects: state.projectsReducer.projects || [],
    error: state.projectsReducer.error,
    loading: state.projectsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(startGettingProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
