import React, { useRef } from "react";
import TreeNode from "../TreeNode/TreeNode";

import './ProgressionTree.css';

export default function ProgressionTree({
    data,
    title,
    format, // linear, circular
    numberOfSkillPoints
}) {

    const progressionTreeRef = useRef(null);

    function loopChildren(data, nodeLevel, parent, nodes) {

        nodeLevel += 1;

        data.forEach(itm => {
            if (itm.children) {
                nodes.push({
                    id: itm.id,
                    parentId: parent?.id,
                    content: itm.content,
                    level: nodeLevel,
                    hasBeenSelected: itm.hasBeenSelected
                })
                loopChildren(itm.children, nodeLevel, itm, nodes)
            } else {
                nodes.push({
                    id: itm.id,
                    parentId: parent?.id,
                    content: itm.content,
                    level: nodeLevel,
                    hasBeenSelected: itm.hasBeenSelected
                })
            }
        })

        return nodes;
    }

    function countLevelInstances(level) {

        return loopChildren(data, 0, null, []).filter(node => {
            return node.level === level;
        }).length;
    }

    function children() {

        let children = loopChildren(data, 0, null, []);
        console.log(children);
    }

    return (
        <div className='tree' id='progression-tree' ref={progressionTreeRef}>
            <div>{title}</div>
            {
                children()
            }
            {
                loopChildren(data, 0, null, []).map(node => {
                    return <TreeNode key={node.id} nodeInfo={node} levelSpacing={countLevelInstances(node.level)} treeRef={progressionTreeRef} />
                })
            }
        </div>
    );
}