import React, { useEffect, useRef, useState } from "react";

import './TreeNode.css';

export default function TreeNode({
    item,
    hasChildren,
    level,
    parentNode,
    parentRef,
}) {


    const nodeRef = useRef(null);
    const [nodePosition, setNodePosition] = useState(0);
    // const [nodeOffset, setNodeOffset] = useState(0);

    useEffect(() => {

        if (!parentRef) {
            console.log(item.content);
        } else {
            let {left, right} = parentRef.current?.getBoundingClientRect();
            const scrollX = window.scrollX;

            let position = (right - left) / 2 + left + scrollX;
            setNodePosition(position);
        }
    }, [parentRef, item.content])

    return (
        <div className='tree-node' ref={nodeRef} style={{ left: `${nodePosition}px`, top: `${level * 40}px` }}>
            {item.content}
        </div>
    )
}