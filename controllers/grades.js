const { pool } = require('../utils/database');

exports.getGrades = (req, res, next) => {
    let messages = req.flash("messages");
    if (messages.length == 0) messages = [];

    pool.getConnection((err, conn) => {
        
        conn.promise().query('SELECT * FROM grades')
        .then(([rows, fields]) => {
            res.render('grades.ejs', {
                pageTitle: "Grades Page",
                grades: rows,
                messages: messages
            })
        })
        .then(() => pool.releaseConnection(conn))
        .catch(err => console.log(err))
    })

}

exports.postDeleteGrade = (req, res, next) => {
    const id = req.params.id;
    
    pool.getConnection((err, conn) => {
        var sqlQuery = `DELETE FROM grades WHERE id = ${id}`;

        conn.promise().query(sqlQuery)
        .then(() => {
            pool.releaseConnection(conn);
            req.flash('messages', { type: 'success', value: "Successfully deleted grade!" })
            res.redirect('/grades');
        })
        .catch(err => {
            req.flash('messages', { type: 'error', value: "Something went wrong, Grade could not be deleted." })
            res.redirect('/grades');
        })
    })

}