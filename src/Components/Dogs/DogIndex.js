import React, { Component } from 'react';

class DogIndex extends Component {
    constructor() {
        super()
        this.state = {
          dogPic : ""
        }
      }

    fetchDog() {
        console.log("fetching")
        let url="https://dog.ceo/api/breeds/image/random";
        fetch(url)
            .then((res) => res.json())
            .then(res => {
                this.setState( {
                    dogPic: res.message
                })
            })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.fetchDog();
    }

    render() {
        return (
            <div>
                <h2>What a good dog!</h2>
                <button onClick={() => this.fetchDog()}>See Another</button>
                <br/><br/>
                <img src={this.state.dogPic} alt="a cute dog" width="500px"></img>
            </div>
        )
    }
}

export default DogIndex;