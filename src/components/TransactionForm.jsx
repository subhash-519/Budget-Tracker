import React from 'react';
import { PlusCircle } from 'lucide-react';

const TransactionForm = ({ darkMode, formData, setFormData, handleSubmit, editingId, categories }) => {
    return (
        <div className={`p-6 rounded-xl shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {editingId ? 'Edit Transaction' : 'Add New Transaction'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Inputs */}
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                />
                <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                >
                    {categories.map(cat => <option key={cat}>{cat}</option>)}
                </select>
                <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
                <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                />
                <button
                    onClick={handleSubmit}
                    className="col-span-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                    <PlusCircle className="w-5 h-5" />
                    {editingId ? 'Update Transaction' : 'Add Transaction'}
                </button>
            </div>
        </div>
    );
};

export default TransactionForm;
