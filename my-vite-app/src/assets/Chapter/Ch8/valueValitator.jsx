import React from "react";
import PropTypes from "prop-types";

MyComponentValid.propTypes = {
myHeader: PropTypes.element.isRequired,
myContent: PropTypes.node.isRequired
};

export function MyComponentValid({myHeader,myContent}){
    return<>
   <section>
     <header>{myHeader}</header>
     <main>{myContent}</main>
  </section>
    </>
}