import React, { useState } from "react";
import Data from "./Data.json";
import { FaFolder, FaFolderOpen, FaFile, FaPlus, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Folder = ({ item, addNodeToList, deleteNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ml-4">
            <div
                className={`flex items-center justify-between gap-2 p-2 rounded-lg transition duration-300 cursor-pointer 
                ${item.isFolder ? "hover:bg-blue-100" : "hover:bg-gray-100"}`}
            >
                <div
                    className="flex items-center gap-2"
                    onClick={() => item.isFolder && setIsOpen(!isOpen)}
                >
                    {/* Folder / File Icon */}
                    {item.isFolder ? (
                        isOpen ? (
                            <FaFolderOpen className="text-yellow-500" />
                        ) : (
                            <FaFolder className="text-yellow-400" />
                        )
                    ) : (
                        <FaFile className="text-gray-500" />
                    )}
                    <span className="text-sm font-medium">{item.name}</span>
                </div>

                <div className="flex gap-2">
                    {/* Add Folder Button */}
                    {item.isFolder && (
                        <button
                            onClick={() => addNodeToList(item.id)}
                            className="text-green-500 hover:text-green-700 transition duration-300"
                            title="Add Folder Inside"
                        >
                            <FaPlus />
                        </button>
                    )}

                    {/* Delete Button */}
                    <button
                        onClick={() => deleteNode(item.id)}
                        className="text-red-500 hover:text-red-700 transition duration-300"
                        title="Delete"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>

            {isOpen && item.Children && (
                <div className="ml-6 border-l-2 border-blue-300 pl-3">
                    {item.Children.map((child) => (
                        <Folder
                            key={child.id}
                            item={child}
                            addNodeToList={addNodeToList}
                            deleteNode={deleteNode}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const NestedFolders = () => {
    const [data, setData] = useState(Data);

    const addFolderAtRoot = () => {
        const name = prompt("Enter New Folder Name:");
        if (!name) return;

        const newFolder = {
            id: uuidv4(),
            name,
            isFolder: true,
            Children: [],
        };

        setData((prev) => [newFolder, ...prev]);
    };

    const addNodeToList = (nodeId) => {
        const name = prompt("Enter Folder Name:");
        if (!name) return;

        const updatedTree = (list) => {
            return list.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        Children: [
                            ...(node.Children || []),
                            {
                                id: uuidv4(),
                                name,
                                isFolder: true,
                                Children: [],
                            },
                        ],
                    };
                }
                if (node.Children) {
                    return { ...node, Children: updatedTree(node.Children) };
                }
                return node;
            });
        };

        setData((prev) => updatedTree(prev));
    };

    const deleteNode = (nodeId) => {
        const updatedTree = (list) => {
            return list.filter((node) => {
                if (node.id === nodeId) {
                    return false; // Remove the node
                }
                if (node.Children) {
                    node.Children = updatedTree(node.Children);
                }
                return true;
            });
        };

        setData((prev) => updatedTree(prev));
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-700">📁 Folder Explorer</h1>

                <button
                    onClick={addFolderAtRoot}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                    + New Folder
                </button>
            </div>

            <div className="space-y-2">
                {data.map((node) => (
                    <Folder
                        key={node.id}
                        item={node}
                        addNodeToList={addNodeToList}
                        deleteNode={deleteNode}
                    />
                ))}
            </div>
        </div>
    );
};

export default NestedFolders;