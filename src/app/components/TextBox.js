/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/**
 * Creates a Text Box.
 * @param {object} props The props object.
 * @return {JSX.Element} The element.
 */
const TextBox = ({ children, label }) => (
    <div css={css`
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        text-transform: uppercase;
        letter-spacing: 2px;
        border: 1px solid #6200ee;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-between;
    `}>
        <label htmlFor={label}>{label}</label>
        <span>{children}</span>
    </div>
);

TextBox.propTypes = {
    label: PropTypes.string.isRequired
}

export default TextBox;
