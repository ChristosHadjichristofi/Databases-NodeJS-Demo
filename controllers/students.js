const { pool } = require('../utils/database');

exports.getStudents = (req, res, next) => {
    let messages = req.flash("messages");
    if (messages.length == 0) messages = [];

    pool.getConnection((err, conn) => {
        
        conn.promise().query('SELECT * FROM students')
        .then(([rows, fields]) => {
            res.render('students.ejs', {
                pageTitle: "Students Page",
                students: rows,
                messages: messages
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

exports.postUpdateStudent = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;

    pool.getConnection((err, conn) => {
        var sqlQuery = `UPDATE students SET name = ?, surname = ?, email = ? WHERE id = ${id}`;

        conn.promise().query(sqlQuery, [name, surname, email])
        .then(() => {
            pool.releaseConnection(conn);
            req.flash('messages', { type: 'success', value: "Successfully updated student!" })
            res.redirect('/students');
        })
        .catch(err => {
            req.flash('messages', { type: 'error', value: "Something went wrong, Student could not be updated." })
            res.redirect('/students');
        })
    })
}