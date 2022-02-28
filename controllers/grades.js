const { pool } = require('../utils/database');

exports.getGrades = (req, res, next) => {

    pool.getConnection((err, conn) => {
        
        conn.promise().query('SELECT * FROM grades')
        .then(([rows, fields]) => {
            res.render('grades.ejs', {
                pageTitle: "Grades Page",
                grades: rows
            })
        })
        .then(() => pool.releaseConnection(conn))
        .catch(err => console.log(err))
    })

}