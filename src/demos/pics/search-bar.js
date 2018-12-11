import React from 'react';

// uncontroller component
// class SearchBar extends React.Component {

//     onInputChange(event) {
//         console.log(event.target.value);
//     }

//     render() {
//         return (
//             <div  className="ui segment">
//                 <form className="ui form">
//                     <div className="field">
//                         <label>Image Search</label>
//                         <input type="text" onChange={this.onInputChange}></input>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// controlled component
class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    onInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
        // console.log(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state.inputValue);
        this.props.handleSearch(this.state.inputValue);
    }

    render() {
        return (
            <div  className="ui segment">
                <form className="ui form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.inputValue}
                            onChange={(e)=> this.onInputChange(e)}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;