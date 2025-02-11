import React from "react";
import PropTypes from "prop-types";

MyComponent.propTypes = { 
    label: PropTypes.any, value: PropTypes.any, max: PropTypes.any
};

export default function MyComponent(props){
    const{label,value,max} = props; 
    return (
<section>
<h5>{label}</h5>
<progress {...{ max, value }} />
</section>
);



}

