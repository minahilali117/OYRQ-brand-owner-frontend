import React from 'react'

interface DeleteProductModalProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-2xl p-6 w-[460px] mx-4 shadow-xl">
        <h2 className="text-xl font-inter font-bold mb-4">Delete Product</h2>
        <p className="text-gray-700 mb-2 font-inter text-base">You are attempting to delete this product.</p>
        <p className="text-gray-700 mb-6 font-inter text-base">Are you sure?</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-10 py-3 bg-white text-gray-400 rounded-lg font-inter font-bold border border-[#8C8C8C] hover:bg-gray-100 transition-colors text-base"
          >
            NO
          </button>
          <button
            onClick={onConfirm}
            className="px-10 py-3 bg-[#351C75] text-white rounded-lg font-inter font-bold hover:bg-[#2a1660] transition-colors text-base"
          >
            YES
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteProductModal
