import React, { useRef } from "react";
import TreeBranch from "../TreeBranch/TreeBranch";
import TreeNode from "../TreeNode/TreeNode";

import './ProgressionTree.css';

export default function ProgressionTree({
    data,
    title,
    format, // linear, circular
    numberOfSkillPoints
}) {

    const progressionTreeRef = useRef(null);

    return (
        <div className='tree' id='progression-tree' ref={progressionTreeRef}>
            {/* <div>{title}</div> */}
            {
                data.map((item) => <TreeBranch key={item.id} item={item} level={0} parentRef={progressionTreeRef} />)
            }
        </div>
    );
}