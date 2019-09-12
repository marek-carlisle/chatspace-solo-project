import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function TemplateFunction(props) {
    const [heading, setHeading] = useState('Functional Component');

    return (
        <div>
            <h3>{heading}</h3>
        </div>
    );
}

export default connect(mapStoreToProps)(TemplateFunction);
