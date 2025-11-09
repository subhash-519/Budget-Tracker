import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ darkMode, transactions, handleEdit, handleDelete }) => {
    return (
        <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Transactions ({transactions.length})
            </h2>
            {transactions.length === 0 ? (
                <p className={darkMode ? 'text-gray-400 text-center py-8' : 'text-gray-500 text-center py-8'}>
                    No transactions found. Add your first transaction above!
                </p>
            ) : (
                <div className="space-y-3">
                    {transactions
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map(transaction => (
                            <TransactionItem
                                key={transaction.id}
                                transaction={transaction}
                                darkMode={darkMode}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default TransactionList;
