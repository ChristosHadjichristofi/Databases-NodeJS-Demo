const { pool } = require('../utils/database');

exports.getStudents = (req, res, next) => {

    pool.getConnection((err, conn) => {
        
        conn.promise().query('SELECT * FROM students')
        .then(([rows, fields]) => {
            console.log(rows)
            res.render('students.ejs', {
                pageTitle: "Students Page",
                students: rows
            })
        })
        .then(() => pool.releaseConnection(conn))
        .catch(err => console.log(err))
    })

}