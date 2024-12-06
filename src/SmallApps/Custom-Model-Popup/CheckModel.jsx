import React, { useState } from 'react'
import Model from './Model';

const CheckModel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="p-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>
  
        <Model isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4">Custom Modal</h2>
          <p>This is a custom modal popup example.</p>
        </Model>
      </div>
    );
}

export default CheckModel
