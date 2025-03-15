import React, { useState } from "react";
import Data from "./Data.json";

const Folder = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false) ; 
    return (
        <>
            <div className="">
                {
                    item.isFolder ?
                        <div className=""
                        onClick={() => setIsOpen(prev => !prev)}
                        >
                            📂 {item.name}
                        </div>
                        : <div className="">{item.name}</div>
                }
                {
                    item.children && (
                        <div className="">
                            <Folder item={item.children} />
                        </div>
                    )
                }
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
                        <Folder key={node.id} item={node}/>
                    ))
                }

            </div>
        </>
    )
}

export default NestedFolders ; 