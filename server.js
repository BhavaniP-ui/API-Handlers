const express = require('express');
const app = express();

// Sample data
const mrr = 700000;
const activeSubs = 230;
const churnRate = 4.5;
const transactions = [
  { id: 1, amount: 1000, date: '2023-02-01' },
  { id: 2, amount: 2000, date: '2023-02-02' },
  { id: 3, amount: 3000, date: '2023-02-03' },
  { id: 4, amount: 4000, date: '2023-02-04' },
  { id: 5, amount: 5000, date: '2023-02-05' },
  { id: 6, amount: 6000, date: '2023-02-06' },
  { id: 7, amount: 7000, date: '2023-02-07' },
  { id: 8, amount: 8000, date: '2023-02-08' },
  { id: 9, amount: 9000, date: '2023-02-09' },
  { id: 10, amount: 10000, date: '2023-02-10' },
];

// API Endpoints
app.get('/api/metrics/mrr', (req, res) => {
  res.json({ mrr });
});

app.get('/api/metrics/subs', (req, res) => {
  res.json({ active: activeSubs });
});

app.get('/api/metrics/churn', (req, res) => {
  res.json({ churn: churnRate });
});

app.get('/api/transactions', (req, res) => {
  const limit = req.query.limit;
  if (limit) {
    res.json(transactions.slice(0, parseInt(limit)));
  } else {
    res.json(transactions);
  }
});

// Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
