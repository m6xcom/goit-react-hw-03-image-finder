import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: "",
  };
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  inputChange = (e) => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.onSubmitForm} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.inputChange}
            name="searchbar"
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
