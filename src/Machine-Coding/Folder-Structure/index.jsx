import React, { useState } from "react";
import Data from "./Data.json";

const Folder = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="">
                {
                    item.isFolder ?
                        <div className=""
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            📂 {item.name}
                        </div>
                        : <div className="">{item.name}</div>
                }
                {isOpen && item.Children && (
                    <div className="ml-4">
                        {item.Children.map((child) => (
                            <Folder key={child.id} item={child} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

const NestedFolders = () => {
    return (
        <>
            <div className="">
                {
                    Data.map((node) => (
                        <Folder key={node.id} item={node} />
                    ))
                }

            </div>
        </>
    )
}

export default NestedFolders; 