import React, { useState } from 'react'


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }
    const originalName = "Alex"
    const [name, setName] = useState(originalName)
    const [change, setChange] = useState(true)
    

   
    const changeName = () => {
        setName("Charlie")
        if (change){
            setName("Alex")
            setChange(false)
        }else{
            setName("Charlie")
            setChange(true)
        }


    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}