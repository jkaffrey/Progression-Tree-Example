import React, { useRef } from "react";
import TreeBranch from "../TreeBranch/TreeBranch";

import './ProgressionTree.css';

export default function ProgressionTree({
    data,
    title,
    format, // linear, circular
    numberOfSkillPoints
}) {

    const progressionTreeRef = useRef(null);

    return (
        <div className='progression-tree' id='progression-tree' ref={progressionTreeRef}>
            <div className='progression-tree-title'>{title}</div>
            {
                data.map((item) => <TreeBranch key={item.id} item={item} level={0} parentRef={progressionTreeRef} />)
            }
        </div>
    );
}