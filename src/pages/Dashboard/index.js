import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  todoListAction
} from '../../redux/actions';
import './index.css';

const mapStateToProps = state => {
  return {
    data: state.todoList.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setData: (inputValue) => dispatch(todoListAction.setData(inputValue)),
    deleteData: (index) => dispatch(todoListAction.deleteData(index)),
  };
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      // arrayInputValue: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 13 && this.state.inputValue !== '') {
      this.handleOnClickAdd();
    }
  }

  handleOnClickAdd = () => {
    // let newArrayInputValue = this.state.arrayInputValue;
    // newArrayInputValue.push(this.state.inputValue);

    this.props.setData(this.state.inputValue);

    this.setState({
      // arrayInputValue: newArrayInputValue,
      inputValue: '',
    });
  }

  handleOnClickDelete = (i) => {
    // let newArrayInputValue = this.state.arrayInputValue;
    // newArrayInputValue.splice(i, 1);

    this.props.deleteData(i);

    this.setState({
      // arrayInputValue: newArrayInputValue,
      inputValue: '',
    });
  }

  renderSpan() {
    return this.props.data.map((inputValue, i) => {
      return (
        <div key={ i } className='content_span_div'>
          <span className='content_span'>{ inputValue }</span>
          <span className='content_span_close' onClick={ () => this.handleOnClickDelete(i) }>&times;</span>
        </div>
      );
    });
    // return null;
  }

  render() {
    return (
      <div className='App'>

        <div className='header'>
          <h1 className='header_title'>My To Do List</h1>

          <div className='header_input_container'>
            <input className='input' type='text' placeholder='Write something...' onChange={ this.handleChange } onKeyDown={ this.handleKeyDown } value={ this.state.inputValue }/>

            <button className='input_button' type='button' onClick={ this.handleOnClickAdd }>Add</button>
          </div>

          <span className='header_info'></span>
        </div>

        <div className='content'>
          { this.renderSpan() }
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
