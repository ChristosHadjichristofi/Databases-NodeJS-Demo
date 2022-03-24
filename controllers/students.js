const { pool } = require('../utils/database');

exports.getStudents = (req, res, next) => {

    pool.getConnection((err, conn) => {
        
        conn.promise().query('SELECT * FROM students')
        .then(([rows, fields]) => {
            res.render('students.ejs', {
                pageTitle: "Students Page",
                students: rows
            })
        })
        .then(() => pool.releaseConnection(conn))
        .catch(err => console.log(err))
    })

}

exports.postStudent = (req, res, next) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;

    pool.getConnection((err, conn) => {
        var sqlQuery = `INSERT INTO students(name, surname, email) VALUES(?, ?, ?)`;

        conn.promise().query(sqlQuery, [name, surname, email])
        .then(() => {
            pool.releaseConnection(conn);
            req.flash('messages', { type: 'success', value: "Successfully added a new Student!" })
            res.redirect('/');
        })
        .catch(err => {
            req.flash('messages', { type: 'error', value: "Something went wrong, Student could not be added." })
            res.redirect('/');
        })
    })
}