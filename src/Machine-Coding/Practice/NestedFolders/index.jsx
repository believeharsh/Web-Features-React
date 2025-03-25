import React, { useState } from "react";
import Data from "./Data.json";

const Folder = ({ item, addNodeToList, deleteNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-3 m-3 border border-gray-300 hover:bg-gray-200 transition-all duration-200">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center space-x-2">
                    <span>{item.isFolder ? "📁" : "🗃️"}</span>
                    <span className="text-gray-800 font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                    {item.isFolder && (
                        <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors duration-200"
                            onClick={() => addNodeToList(item.id)}
                        >
                            "➕"
                        </button>
                    )}

                    <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors duration-200"
                        onClick={() => deleteNode(item.id)}
                    >
                        ❌
                    </button>
                </div>
            </div>

            {item.children && isOpen && (
                <div className="ml-4 pl-2 border-l border-blue-500">
                    {item.children.map((node) => (
                        <Folder item={node} key={node.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

const PracticeNestedFolder = () => {
    const [data, setData] = useState(Data);

    const addNodeToList = (nodeId) => {
        const Name = prompt("Enter the Folder Name here");
        if (!Name) {
            return
        }
        const UpdatedList = (list) => {
            return list.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        children: [
                            ...(node.children || []),
                            {
                                id: Date.now(),
                                name: Name,
                                isFolder: true,
                                children: []
                            }
                        ]
                    }
                }
                if (node.children) {
                    return { ...node, children: UpdatedList(node.children) }
                }
                return node;
            })
        }

        setData((prev) => UpdatedList(prev))
    }


    const deleteNode = (nodeId) => {
        const updatedList = (list) => {
            return list.filter((node) => {
                if (node.id === nodeId) {
                    return false;
                }
                if (node.children) {
                    node.children = updatedList(node.children);
                }
                return true ; 
            })
        }

        setData((prev) => updatedList(prev));
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            {data.map((node) => (
                <Folder item={node} key={node.id} addNodeToList={addNodeToList}
                    deleteNode={deleteNode} />
            ))}
        </div>
    );
}

export default PracticeNestedFolder;





