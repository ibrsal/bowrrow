import SqlString from 'sqlstring';
import db from '../config/db';

export function listAllClients(req, res) {
    const sql = SqlString.format('SELECT * FROM clients WHERE active=?', [
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
  
  export function createClient(req, res) {
    const jsonData = req.body;
    const sql = SqlString.format(`INSERT INTO clients SET ?`, jsonData);
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
  
  export function getClientById(req, res) {
    const clientId = req.params.id;
    const sql = SqlString.format(
      'SELECT * FROM clients WHERE id = ? AND active = ?',
      [clientId, true],
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
  
  export function updateClient(req, res) {
    const clientId = req.params.id;
    const jsonData = req.body;
  
    const sql = SqlString.format(`UPDATE clients SET ? WHERE id = ?`, [
      jsonData,
      clientId,
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
  
  export function deleteClient(req, res) {
    const clientId = req.params.id;
    const sql = SqlString.format(`UPDATE clients SET ? WHERE id = ?`, [
      {
        active: false,
      },
      clientId,
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