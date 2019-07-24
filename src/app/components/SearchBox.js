/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

/**
 * Creates a Search Box.
 * @param {object} props The props object.
 * @return {JSX.Element} The element.
 */
const SearchBox = ({ children, customCss, icon, id, label, minWidth, onChange, placeholder, prepend, type = "text" }) => (
    <div id={id} css={css`
        ${customCss};
        background-color: #6200ee;
        display: flex;
        flex-wrap: wrap;
        border-radius: 5px;
        color: white;
        padding: 5px 10px;
        box-sizing: border-box;
    `}>
        <div css={css`
            display: flex;
            align-items: center;
        `}>
            <i className="material-icons">{icon}</i>
            <label htmlFor={label} css={css`
                text-transform: uppercase;
                letter-spacing: 2px;
                padding-left: 5px;
            `}>{label}</label>
        </div>
        <div css={css`
            display: flex;
            align-items: center;
            flex: 1;
        `}>
            {prepend ? <label>{prepend}</label> : ""}
            <input type={type} name={label} onChange={onChange} value={children || ""} placeholder={placeholder} css={css`
                border: 0;
                padding: 10px 0 10px 5px;
                background-color: transparent;
                color: white;
                letter-spacing: 2px;
                flex: 1;
                direction: rtl;
                min-width: ${minWidth};
                ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                :focus {
                    outline: none;
                }
                ::-webkit-input-placeholder {
                    color: white;
                    opacity: 0.7;
                }
            `} />
        </div>
    </div>
);

SearchBox.propTypes = {
    customCss: PropTypes.object,
    icon: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    minWidth: PropTypes.string,
    onChange: PropTypes.func,
    prepend: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

export default SearchBox;
