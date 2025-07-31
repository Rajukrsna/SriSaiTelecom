"use client";
import React from "react";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    rate?: string;
    details?: string;
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ open, onClose, product }) => {
  if (!open || !product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border border-gray-200 dark:border-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-cover rounded-lg shadow mb-4 border border-gray-200 dark:border-gray-800"
          />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">{product.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-4">{product.description}</p>
          {product.details && (
            <div className="text-gray-600 dark:text-gray-400 text-sm mb-2 text-center">{product.details}</div>
          )}
          {product.rate && (
            <div className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Price: {product.rate}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
