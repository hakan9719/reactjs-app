import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };
    
    add = (e) => {
        e.preventDefault();
        if(this.state.email === "" || this.state.name === ""){
            alert("All fields are needed");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""})
        this.props.history.push("/");
    }

    render(){
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={ (e) => this.setState({name: e.target.value})}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                            type="Email" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={ (e) => this.setState({email: e.target.value})}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;