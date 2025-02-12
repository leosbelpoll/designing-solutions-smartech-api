import React, { useEffect } from "react";
import { connect } from "react-redux";

import URLMapping from "../../../utils/routes";
import { startGettingStandards } from "../../redux/actions/standardsActions";
import Error from "../../ui/pages/Error";
import Title from "../../ui/parts/Title";
import Table from "../../ui/parts/Table";
import { Link } from "react-router-dom";

function StandardList(props) {
    const { standards, loading, error, getStandards } = props;

    useEffect(() => {
        getStandards();
    }, [getStandards]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Standard list" loading={loading} />
            <Link to={URLMapping.CREATE_STANDARD} className="btn btn-primary mb-3">Create</Link>
            <Table
                type="crud"
                content={standards.slice().reverse()}
                onlyColumns={[
                    {
                        name: "name",
                        link: item => `${URLMapping.STANDARDS}/${item.id}`
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
    standards: state.standardsReducer.standards || [],
    error: state.standardsReducer.error,
    loading: state.standardsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getStandards: () => dispatch(startGettingStandards())
});

export default connect(mapStateToProps, mapDispatchToProps)(StandardList);
