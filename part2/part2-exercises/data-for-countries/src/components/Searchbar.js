import React from "react";

const Searchbar = props => (
    <div>
        Enter a country name: <input value={props.value} onChange={props.onChange}/>
    </div>
)

export default Searchbar