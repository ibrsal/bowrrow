import SqlString from 'sqlstring';
import db from '../config/db';



// --------------------------
// Get rest modules for a class by class id
/*
export function getClientCustomres(req, res, next) {
    const sql = sqlString.format(
      `SELECT
      customers.*
      FROM
        customers
        JOIN clients_customres
          ON  clients_customres.customer_id = customers.id
          JOIN clients
          ON  clients.id= clients_customres.client_id
          where clients.id = ?
  )`,
      [id]
    )
    db.execute(sql, (err, rows) => {
      if (err) return next(err)
      if (rows.length === 0)
        return next({ message: 'all modules has been already added' })
      res.send(rows)
    })
  }
*/

  export function getClientCustomres(req, res) {
    const customerId = req.params.id;
    const sql = SqlString.format(
      `SELECT
      customers.*
      FROM
        customers
        JOIN clients_customres
          ON  clients_customres.customer_id = customers.id
          JOIN clients
          ON  clients.id= clients_customres.client_id
          where clients.id = ?`,
      [customerId],
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
  
      res.send(rows);
    });
  }











