import React from "react";

const FacetcherSelectComponent = (props) => {
     return (
          <div className={`w-${props.width}`}>
               {props.label && <h1 className=" text-grey fs-6">{props.label}</h1>}
               <select
                    defaultValue={props.defaultValue && props.defaultValue}
                    className="bg-transparent grey-border fs-6 rounded-pill text-light-grey w-100 p-3"
               >
                    {props.options.map((option, index) => (
                         <option
                              key={index}
                              value={`${option}`.toLowerCase()}
                              className=" bg-dark-grey"
                         >
                              {option}
                         </option>
                    ))}
               </select>
          </div>
     );
};
export default FacetcherSelectComponent;
