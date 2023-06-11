import dotenv from "dotenv";
import express from "express";

dotenv.config();

const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "111617",
  database: "HR",
  port: 5432,
});

const app = express();

app.use(express.json());

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

app.get("/region", (req, res) => {
  pool.query("select * from regions", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from regions where region_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post("/region", (req, res) => {
  const { name } = req.body;
  pool.query(
    "insert into regions (region_name) values ($1)",
    [name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/region/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update regions set region_name=$2 where region_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/region/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `delete from regions where region_id = ${id}`,
    [],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

//countries
app.get("/countries", (req, res) => {
  pool.query("select * from countries", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/countries/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from countries where country_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post(`/countries`, (req, res) => {
  const { country_id, country_name, region_id } = req.body;
  pool.query(
    `INSERT INTO countries values($1, $2, $3)`,
    [country_id, country_name, region_id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/countries/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update countries set country_name=$2 where country_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/countries/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `delete from countries where country_id = ${id}`,
    [],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

//Department
app.get("/departement", (req, res) => {
  pool.query("select * from departements", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/departement/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from departements where departement_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post("/departement", (req, res) => {
  const { id, name, lid, mid } = req.body;
  pool.query(
    "INSERT INTO departements  VALUES ($1, $2, $3,$4)",
    [id, name, lid, mid],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/departement/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update departements set departement_name=$2 where departement_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/departement/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `delete from departements where departement_id = ${id}`,
    [],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

//Employess
app.get("/Employees", (req, res) => {
  pool.query("select * from Employees", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/Employees/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from Employees where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post("/Employees", (req, res) => {
  const { id, fn, ln, email, pn, hr, salary, cp, mid, dip, jid, xid } =
    req.body;
  pool.query(
    "INSERT INTO employees  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
    [id, fn, ln, email, pn, hr, salary, cp, mid, dip, jid, xid],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/Employees/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update employees set first_name=$2 where employee_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/Employees/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `delete from employees where employee_id = ${id}`,
    [],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

//Job_history
app.get("/history", (req, res) => {
  pool.query("select * from job_history", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/history/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from job_history where employee_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post("/history", (req, res) => {
  const { id, sd, ed, jid, did } = req.body;
  pool.query(
    "INSERT INTO job_history VALUES ($1,$2,$3,$4,$5)",
    [id, sd, ed, jid, did],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/history/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update job_history set job_id=$2 where employee_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/history/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `delete from job_history where employee_id = ${id}`,
    [],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

//Jobs
app.get("/Jobs", (req, res) => {
  pool.query("select * from jobs", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/Jobs/:id", (req, res) => {
  const { id } = req.params;
  pool.query("select * from jobs where job_id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.post("/jobs", (req, res) => {
  const { id, jt, ms, mxs } = req.body;
  pool.query(
    "INSERT INTO jobs VALUES ($1,$2,$3,$4)",
    [id, jt, ms, mxs],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/Jobs/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update jobs set job_title=$2 where job_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/Jobs/:id", (req, res) => {
  const { id } = req.params;
  pool.query(`delete from jobs where job_id = $1`, [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rowCount);
  });
});

//Location
app.get("/Location", (req, res) => {
  pool.query("select * from locations", [], (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result.rows);
  });
});

app.get("/Location/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "select * from locations where location_id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rows);
    }
  );
});

app.post("/Location", (req, res) => {
  const { id, sa, pc, city, sp, cid } = req.body;
  pool.query(
    "INSERT INTO locations VALUES ($1,$2,$3,$4,$5,$6)",
    [id, sa, pc, city, sp, cid],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.put("/Location/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  pool.query(
    "update locations set city=$2 where location_id=$1",
    [id, name],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});

app.delete("/Location/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `delete from locations where location_id = $1`,
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result.rowCount);
    }
  );
});
