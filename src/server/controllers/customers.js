import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllCustomers(req, res) {
  const sql = SqlString.format('SELECT * FROM customers WHERE active=?', [
    true,
  ]);
  console.log(sql);
  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    res.send(rows);
  });
}

export function createCustomer(req, res) {
  const jsonData = req.body;
  const sql = SqlString.format(`INSERT INTO customers SET ?`, jsonData);
  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    console.log(result);

    res.send('success');
  });
}

export function getCustomerById(req, res) {
  const customerId = req.params.id;
  const sql = SqlString.format(
    'SELECT * FROM customers WHERE id = ? AND active = ?',
    [customerId, true],
  );
  console.log(sql);

  db.execute(sql, (err, rows) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (rows.length === 0) {
      res.status(404).send('Not Found');
      return;
    }

    res.send(rows[0]);
  });
}

export function updateCustomer(req, res) {
  const customerId = req.params.id;
  const jsonData = req.body;

  const sql = SqlString.format(`UPDATE customers SET ? WHERE id = ?`, [
    jsonData,
    customerId,
  ]);
  
  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send('Not Found');
      return;
    }

    res.send('success');
  });
}

export function deleteCustomer(req, res) {
  const customerId = req.params.id;
  const sql = SqlString.format(`UPDATE customers SET ? WHERE id = ?`, [
    {
      active: false,
    },
    customerId,
  ]);

  console.log(sql);

  db.execute(sql, (err, result) => {
    if (err) {
      // throw err;
      res.status(500).send(err);
      return;
    }

    if (!result.affectedRows) {
      res.status(404).send('Not Found');
      return;
    }

    res.send('success');
  });
}