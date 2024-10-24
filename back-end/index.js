const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const app = express();

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:3000', // React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json()); // To parse JSON request bodies

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'password', // Replace with your MySQL password
  database: 'ecommerce', // Replace with your MySQL database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API route to save/update user address
app.post('/api/address', (req, res) => {
    const { uid, name, email, phone_number, address1, address2, landmark, state, pincode } = req.body;

    // Check if 'uid' is provided, as it is necessary for inserting/updating the record
    if (!uid) {
        return res.status(400).json({ message: 'UID is required' });
    }

    // Array to store the SQL SET clause for fields to be updated
    let fieldsToInsert = [];
    let fieldsToUpdate = [];
    let values = [];

    // Dynamically build the fields and values for insertion/update
    if (name) {
        fieldsToInsert.push('name');
        fieldsToUpdate.push('name = VALUES(name)');
        values.push(name);
    }
    if (email) {
        fieldsToInsert.push('email');
        fieldsToUpdate.push('email = VALUES(email)');
        values.push(email);
    }
    if (phone_number) {
        fieldsToInsert.push('phone_number');
        fieldsToUpdate.push('phone_number = VALUES(phone_number)');
        values.push(phone_number);
    }
    if (address1) {
        fieldsToInsert.push('address1');
        fieldsToUpdate.push('address1 = VALUES(address1)');
        values.push(address1);
    }
    if (address2) {
        fieldsToInsert.push('address2');
        fieldsToUpdate.push('address2 = VALUES(address2)');
        values.push(address2);
    }
    if (landmark) {
        fieldsToInsert.push('landmark');
        fieldsToUpdate.push('landmark = VALUES(landmark)');
        values.push(landmark);
    }
    if (state) {
        fieldsToInsert.push('state');
        fieldsToUpdate.push('state = VALUES(state)');
        values.push(state);
    }
    if (pincode) {
        fieldsToInsert.push('pincode');
        fieldsToUpdate.push('pincode = VALUES(pincode)');
        values.push(pincode);
    }

    // Ensure at least one field is provided for the insert/update
    if (fieldsToInsert.length === 0) {
        return res.status(400).json({ message: 'At least one field is required for update' });
    }

    // Add 'uid' to the fields and values
    fieldsToInsert.unshift('uid');
    values.unshift(uid);

    // Build the dynamic SQL query
    const sql = `
    INSERT INTO address (${fieldsToInsert.join(', ')}) 
    VALUES (${fieldsToInsert.map(() => '?').join(', ')})
    ON DUPLICATE KEY UPDATE 
    ${fieldsToUpdate.join(', ')}`;

    // Execute the query
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.json({ message: 'Address saved successfully!' });
    });
});


// API route to fetch user address
app.get('/api/address/:uid', (req, res) => {
    const uid = req.params.uid;

    const sql = 'SELECT * FROM address WHERE uid = ?'; // Only fetch address for specific uid
    db.query(sql, [uid], (err, result) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length > 0) {
            res.json(result[0]); // Return the first result
        } else {
            res.status(404).json({ message: 'Address not found' });
        }
    });
});
// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
