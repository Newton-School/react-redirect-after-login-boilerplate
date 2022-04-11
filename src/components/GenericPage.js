import React from "react";

export const GenericPage = ({content,pageId}) => {
    return(
        <div id={pageId}>{content}</div>
    )
}