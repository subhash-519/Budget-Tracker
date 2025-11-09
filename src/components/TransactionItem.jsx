import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const TransactionItem = ({ transaction, darkMode, handleEdit, handleDelete }) => {
    return (
        <div className={`p-4 rounded-lg border hover:shadow-md transition-all ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {transaction.title}
                        </h3>
                        <span className={`px-2 py-1 rounded text-xs ${transaction.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {transaction.type}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                            {transaction.category}
                        </span>
                    </div>
                    <p className={darkMode ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                        {new Date(transaction.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <span className={`text-xl font-bold ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleEdit(transaction)}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900 hover:bg-blue-800 text-blue-300' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'}`}
                        >
                            <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleDelete(transaction.id)}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-red-900 hover:bg-red-800 text-red-300' : 'bg-red-100 hover:bg-red-200 text-red-600'}`}
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionItem;
