import React from 'react';

const __html = require('./landingmain.js');

const template = { __html: __html };
export default class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <span dangerouslySetInnerHTML={template} />
            </div>
        )
    }
}