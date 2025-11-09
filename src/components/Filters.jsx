import React from 'react';
import { Search } from 'lucide-react';

const Filters = ({ darkMode, searchTerm, setSearchTerm, filterCategory, setFilterCategory, filterType, setFilterType, categories }) => {
    return (
        <div className={`p-6 rounded-xl shadow-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search box */}
                <div className="relative">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                    />
                </div>

                {/* Category Filter */}
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                >
                    <option value="all">All Categories</option>
                    {categories.map(cat => <option key={cat}>{cat}</option>)}
                </select>

                {/* Type Filter */}
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-800'}`}
                >
                    <option value="all">All Types</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
