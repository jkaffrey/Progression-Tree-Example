import React, { useEffect, useRef, useState } from "react";

import './TreeNode.css';


export default function TreeNode({
    treeRef,
    nodeInfo,
    levelSpacing
}) {


    const nodeRef = useRef(null);
    const [nodePosition, setNodePosition] = useState(0);
    const [nodeOffset, setNodeOffset] = useState(0);

    useEffect(() => {

        let { width } = nodeRef.current?.getBoundingClientRect();
        setNodeOffset(width / 2);
    }, [nodeRef])

    useEffect(() => {
        let { left, width } = treeRef.current?.getBoundingClientRect();
        console.log(width)
        // let { nodeLeft, nodeWidth } = nodeRef.current?.getBoundingClientRect();
        const scrollX = window.scrollX;

        if (levelSpacing === 1) {
            setNodePosition( left + width / 2 + scrollX );
        } else {
            setNodePosition( left + width / levelSpacing + scrollX );
        }
        
    }, [treeRef])

    return (
        <div className="tree-node" id={nodeInfo.id} ref={nodeRef} style={{ position: 'relative', top: (nodeInfo.level - 1) * 50, left: nodePosition - nodeOffset }}>
            {nodeInfo.content}
        </div>
    )
}