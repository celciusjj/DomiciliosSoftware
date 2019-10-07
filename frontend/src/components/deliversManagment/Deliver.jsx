import React, { Component } from 'react';
class Deliver extends Component {
    state = {  }
    render() { 
    return (
            <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf5T-YUu23vHPzSeqHhC0KXkLAj0aNhhSEbHPupQX689NSfa6" class="card-img" alt="..."></img>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                    
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
            </div>
            
        );
    }
}
 
export default Deliver;