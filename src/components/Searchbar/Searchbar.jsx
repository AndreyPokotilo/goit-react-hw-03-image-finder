import PropTypes from 'prop-types';
import css from './Searchbar.module.css'
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState(()=>({value: e.target.value}))
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    const {value} = this.state
    const {onSubmit} = this.props
    if(value.trim() === '') {
      alert('Insert correct request')
      return
    }
    onSubmit(value);
    this.setState({ value: '' });
  }

  render() {

const {value} = this.state

    return (
      <header className={css.header} onSubmit={this.onSubmitForm}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            value={value}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};