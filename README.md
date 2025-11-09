# 💰 BudgetWise – Smart Budget Tracker

**BudgetWise** is a responsive and interactive **Budget Tracker App** built using **React**, **Tailwind CSS**, and **LocalStorage**.  
It helps users efficiently manage their income and expenses by adding, editing, and deleting transactions.  
The app also provides real-time summaries for **total income**, **total expenses**, and **remaining balance**, all stored persistently in the browser.

---

## 🚀 Tech Stack

- ⚛️ **React.js** – Component-based frontend library  
- 🎨 **Tailwind CSS** – For modern, responsive UI design  
- 💾 **LocalStorage** – Data persistence across sessions  
- 🧩 **react-icons** – For icons and UI visuals  
- 🆔 **uuid** – For generating unique transaction IDs  

---

## ✨ Features

✅ **Add Transactions** – Add income or expense with title, amount, category, type, and date  
✅ **Edit Transactions** – Update existing transaction details easily  
✅ **Delete Transactions** – Remove any unwanted record  
✅ **Transaction Summary** – View total income, expenses, and remaining balance  
✅ **Persistent Data** – Saves data using LocalStorage (no backend required)  
✅ **Responsive Design** – Works seamlessly across mobile and desktop  
✅ **Light/Dark Mode Toggle** – Theme preference stored in LocalStorage  
✅ **Filter & Search** – Filter by category/type or search by title/description  
✅ **Smooth Animations** – Tailwind transitions and hover effects  

---

## 📁 Project Structure

budge-tracker/
├── public/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── TransactionForm.jsx
│ │ ├── TransactionList.jsx
│ │ ├── SummaryCard.jsx
│ │ ├── ThemeToggle.jsx
│ │ └── Loader.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

Follow these steps to run the project locally 👇  

```bash
# Clone the repository
git clone https://github.com/subhash-519/Budget-Tracker.git

# Navigate to the project directory
cd budge-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
