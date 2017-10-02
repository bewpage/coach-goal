import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    handleAnyInputChange = (event, nameInState) => {
        this.setState({
            [nameInState]: event.target.value,
        })
    };

    submitGoal = (event) => {
        event.preventDefault();
        const { email } = this.props.user;
        const { title } = this.state;
        console.log('email in addGoal: ', email);
        console.log('title in addGoal: ', title);
        console.log('this.state in addGoal: ', this.state);
        goalRef.push({email, title});
    };


    render(){
        return (
            <div className='form-inline'>
                <div className='form-group'>
                    <input type="text"
                           className='form-control'
                           placeholder='Add a goal'
                           onChange={event => this.handleAnyInputChange(event, 'title')}
                    />
                    <button className='btn btn-success'
                            type='button'
                            onClick={this.submitGoal}

                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    // console.log('state in addGoal.jsx', state);
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddGoal);
