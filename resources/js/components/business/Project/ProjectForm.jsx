import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import URLMapping from "../../../utils/routes";
import Title from "../../ui/parts/Title";
import { startCreatingProjects, startGettingProject } from "../../redux/actions/projectsActions";

function ProjectForm(props) {
    const [err, setErr] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const OPERATION = id ? "Update" : "Create";
    const COMPONENT = "project";
    const { project, loading, error, getProject, createProject } = props;

    useEffect(() => {
        setErr(error);
        if (id) {
            getProject(id);
            setName(project.name);
            setDescription(project.description);
        }
    }, [id, project.name, project.description, JSON.stringify(error), getProject]);

    const onSubmit = e => {
        e.preventDefault();
        createProject({
            name,
            description
        });
    };

    return (
        <>
            <Title title={ OPERATION + " " + COMPONENT} loading={loading} />
            {err && (
                    <div className="alert alert-danger">
                        <button type="button" className="close" onClick={() => setErr(null)}>
                            &times;
                        </button>
                        <strong>Error!</strong> Ups! Something was wrong. {JSON.stringify(err)}
                    </div>
                )}
            <form className="mt-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="description"
                        placeholder="Enter description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button onClick={onSubmit} className="btn btn-primary mb-4 mt-4">
                    {id ? "Update" : "Create"} {COMPONENT}
                </button>
                <Link to={URLMapping.PROJECTS} className="btn btn-outline-secondary mb-4 mt-4 ml-4">
                    Back to list
                </Link>
            </form>
        </>
    );
}

const mapStateToProps = state => ({
    project: state.projectsReducer.project || {},
    error: state.projectsReducer.error,
    loading: state.projectsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    createProject: data => dispatch(startCreatingProjects(data)),
    getProject: id => dispatch(startGettingProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
