import React from 'react';
import { observer } from 'mobx-react';

const Content = observer((props) => {

    return (
        <div>
            {props.children}

        </div>
    );

});


export default Content;