/** @jsx jsx */
import { connect } from "react-redux";
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { calcNI, setIncome } from "../store/actions";

import SearchBox from "../components/SearchBox";
import TextBox from "../components/TextBox";

/**
 * Creates a National Insurance container.
 * @param {object} props The props object.
 * @return {JSX.Element} The element.
 */
const NationalInsurance = ({ calcNI, income, ni, setIncome }) => {
    // Batch the actions. First, set the income and then calculate the NI.
    const onChange = (ev) => {
        setIncome(parseFloat(ev.target.value));
        calcNI();
    };

    return (
        <form id="ni-form" css={css`
            padding: 10px;
            display: grid;
            justify-content: center;
            text-align: center;
            grid-auto-columns: minmax(min-content, 600px);
            grid-gap: 20px;
            margin-top: 20px;
        `}>
            <h2 css={css`margin: 0;`}>National Insurance Contributions Calculator</h2>
            <p css={css`margin: 0;`}>Compare your contributions from this tax year to last tax year.</p>
            <main css={css`
                display: grid;
                grid-gap: 10px;
            `}>
                <SearchBox
                    icon="search"
                    id="income"
                    label="Annual Income"
                    minWidth="220px"
                    onChange={onChange}
                    placeholder="...Enter your income here"
                    type="number">{income}</SearchBox>
                <TextBox label="This Tax Year">{ni.value.curr.toFixed(2)}</TextBox>
                <TextBox label="Last Tax Year" >{ni.value.prev.toFixed(2)}</TextBox>
                <TextBox label="Difference">{(ni.value.curr - ni.value.prev).toFixed(2)}</TextBox>
            </main>
            {ni.err ? <p>{ni.err}</p> : ""}
        </form>
    );
};

// Pass in income and ni to component as props.
const mapStateToProps = ({ income, ni }) => ({
    ni,
    income,
});

// Pass in calcNI and setIncome actions as props.
const mapDispatchToProps = {
    calcNI,
    setIncome
}

NationalInsurance.propTypes = {
    calcNI: PropTypes.func.isRequired,
    ni: PropTypes.shape({
        err: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
        loading: PropTypes.bool.isRequired,
        value: PropTypes.shape({
            prev: PropTypes.number.isRequired,
            curr: PropTypes.number.isRequired
        }).isRequired,
    }).isRequired,
    income: PropTypes.number,
    setIncome: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NationalInsurance);
