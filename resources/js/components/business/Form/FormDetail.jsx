import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import URLMapping from "../../../utils/routes";
import { startGettingForm } from "../../redux/actions/formsActions";
import Error from "../../ui/pages/Error";
import Title from "../../ui/parts/Title";
import Table from "../../ui/parts/Table";

function FormDetail(props) {
    const { form, loading, error, getForm } = props;
    const { id } = useParams();

    useEffect(() => {
        getForm(id);
    }, [id, getForm]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Form detail" backUrl={URLMapping.FORMS} loading={loading} />
            <Table
                content={form}
                onlyColumns={[
                    {
                        name: "name"
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
    form: state.formsReducer.form || {},
    error: state.formsReducer.error,
    loading: state.formsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getForm: id => dispatch(startGettingForm(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDetail);
