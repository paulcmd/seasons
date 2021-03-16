import React from 'react'

const Spinner = (props) => {
    return (

        <div class="ui active dimmer">
            <div class="ui big text loader">
                {props.spinnerMessage}
                    </div>
        </div>

    );
}

Spinner.defaultProps = {

    spinnerMessage : 'Loading...'
}

export default Spinner;

// defaultProps allows you to set default props eg default message in this case