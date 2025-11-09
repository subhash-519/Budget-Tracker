import React, { useState, useEffect } from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import TransactionForm from './TransactionForm';
import Filters from './Filters';
import TransactionList from './TransactionList';
import Footer from './Footer';

const BudgetTracker = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem('transactions');
        return saved ? JSON.parse(saved) : [];
    });

    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: 'Food',
        type: 'expense',
        date: new Date().toISOString().split('T')[0]
    });

    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterType, setFilterType] = useState('all');

    const categories = ['Food', 'Travel', 'Bills', 'Entertainment', 'Shopping', 'Healthcare', 'Education', 'Salary', 'Other'];

    // Save to localStorage whenever darkMode changes
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    // Save to localStorage whenever transactions change
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.title.trim() || !formData.amount || parseFloat(formData.amount) <= 0) {
            alert('Please enter valid title and amount');
            return;
        }

        if (editingId) {
            setTransactions(transactions.map(t =>
                t.id === editingId ? { ...formData, id: editingId, amount: parseFloat(formData.amount) } : t
            ));
            setEditingId(null);
        } else {
            setTransactions([...transactions, {
                ...formData,
                id: Date.now().toString(),
                amount: parseFloat(formData.amount)
            }]);
        }

        setFormData({
            title: '',
            amount: '',
            category: 'Food',
            type: 'expense',
            date: new Date().toISOString().split('T')[0]
        });
    };

    const handleEdit = (transaction) => {
        setFormData(transaction);
        setEditingId(transaction.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this transaction?');
        if (confirmed) {
            setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
            if (editingId === id) {
                setEditingId(null);
                setFormData({
                    title: '',
                    amount: '',
                    category: 'Food',
                    type: 'expense',
                    date: new Date().toISOString().split('T')[0]
                });
            }
        }
    };

    const filteredTransactions = transactions.filter(t => {
        const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || t.category === filterCategory;
        const matchesType = filterType === 'all' || t.type === filterType;
        return matchesSearch && matchesCategory && matchesType;
    });

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />

                <SummaryCards
                    darkMode={darkMode}
                    totalIncome={totalIncome}
                    totalExpense={totalExpense}
                    balance={balance}
                />

                <TransactionForm
                    darkMode={darkMode}
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                    editingId={editingId}
                    categories={categories}
                />

                <Filters
                    darkMode={darkMode}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                    filterType={filterType}
                    setFilterType={setFilterType}
                    categories={categories}
                />

                <TransactionList
                    darkMode={darkMode}
                    transactions={filteredTransactions}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />

                <Footer darkMode={darkMode} />
            </div>
        </div>
    );
};

export default BudgetTracker;