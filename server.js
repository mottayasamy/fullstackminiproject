const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Use the expense routes
const expenseRoutes = require('./routes/expenses');
app.use('/api/expenses', expenseRoutes);

app.get('/', (req, res) => {
    res.send('BudgetPal Server Running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
