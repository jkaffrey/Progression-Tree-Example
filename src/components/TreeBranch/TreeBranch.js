import React, { useState, useRef } from "react";
import TreeNode from "../TreeNode/TreeNode";

import './TreeBranch.css';

export default function TreeBranch({ item, level, parentNode, parentRef }) {

    const [childPosition, setChildPosition] = useState([0, 0])
    const [selected, setSelected] = useState(item.hasBeenSelected ?? false);
    const branchRef = useRef(null);

    const hasChildren = item.children && item.children.length !== 0;

    function renderBranches() {

        if (hasChildren) {

            const newLevel = level + 1;
            return item.children.map((child) => {
                return (
                    <>
                        <TreeBranch key={child.id} item={child} level={newLevel} parentNode={item} parentRef={parentRef} />
                    </>
                )
            })
        }
    }

    return (
        <span ref={branchRef} className='tree-branch'>
            <TreeNode
                item={item}
                selected={selected}
                hasChildren={hasChildren}
                level={level}
                parentNode={parentNode}
                parentRef={branchRef}
                setChildPosition={setChildPosition}
            />
            {
                renderBranches()
            }
        </span>
    );
}