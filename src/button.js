import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button({showing,onClick}){
    return <button onClick={onClick} className={styles.btn}>{showing?"hide":"show"}</button>
}
Button.prototype={
    text:PropTypes.string.isRequired,
}
export default Button;