import React from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

const SummaryCards = ({ darkMode, totalIncome, totalExpense, balance }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Total Income</span>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-3xl font-bold text-green-500">${totalIncome.toFixed(2)}</p>
            </div>

            <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Total Expense</span>
                    <TrendingDown className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-3xl font-bold text-red-500">${totalExpense.toFixed(2)}</p>
            </div>

            <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Balance</span>
                    <Wallet className={`w-5 h-5 ${balance >= 0 ? 'text-blue-500' : 'text-orange-500'}`} />
                </div>
                <p className={`text-3xl font-bold ${balance >= 0 ? 'text-blue-500' : 'text-orange-500'}`}>
                    ${balance.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default SummaryCards;
