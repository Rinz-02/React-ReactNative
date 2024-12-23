import React from "react";

export default class ParamEg extends React.Component{
    render (){
        const enable = true;
        const name = "William";

        return(
            <section>
                <button disabled={enable}>Click!</button>
            </section>
        )
    }
}