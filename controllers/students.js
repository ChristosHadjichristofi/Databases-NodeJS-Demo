const { pool } = require('../utils/database');

/* Controller to retrieve students from database */
exports.getStudents = (req, res, next) => {

    /* check for messages in order to show them when rendering the page */
    let messages = req.flash("messages");
    if (messages.length == 0) messages = [];

    /* create the connection, execute query, render data */
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

/* Controller to create a new student in the database */
exports.postStudent = (req, res, next) => {

    /* get necessary data sent */
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;

    /* create the connection, execute query, flash respective message and redirect to grades route */
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

/* Controller to update a student in the database */
exports.postUpdateStudent = (req, res, next) => {

    /* get necessary data sent */
    const id = req.body.id;
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;

    /* create the connection, execute query, flash respective message and redirect to grades route */
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