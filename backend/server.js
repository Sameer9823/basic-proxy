import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Yet another joke',
            content: 'This is yet another joke'
        },
        {
            id: 4,
            title: 'Final joke',
            content: 'This is the final joke'
        },
        {
            id: 5,
            title: 'Bonus joke',
            content: 'This is a bonus joke'
        }
    ];

    res.send(jokes);
});

// Basic error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
