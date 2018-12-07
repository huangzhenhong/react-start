import React from 'react';

const PlaceHolder = (props) => {
    return (
        <div className="ui placeholder segment">
            {props.children}
        </div>
    );
};

const TestComponent = () => {
    return (
        <div>
            <PlaceHolder>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
                <div className="ui primary button">Add Document</div>
            </PlaceHolder>
            <PlaceHolder>
                <h4 class="ui header">For Your Information</h4>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
            </PlaceHolder>
        </div>
    );
}

export default TestComponent;