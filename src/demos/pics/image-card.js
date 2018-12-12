import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.imageRef);

        // you can't get height here because the actual image is not yet downloaded
        // following event listener is to set up the callback method after the image is loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const currHeight = this.imageRef.current.clientHeight;
        // console.log(currHeight);
        const spans = Math.ceil(currHeight / 10);
        this.setState({
            spans
        });
    }

    render() {
        const {urls, description} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;