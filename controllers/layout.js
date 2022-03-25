const { pool } = require('../utils/database');

/* Controller to render data shown in landing page */
exports.getLanding = (req, res, next) => {

    /* check for messages in order to show them when rendering the page */
    let messages = req.flash("messages");
    if (messages.length == 0) messages = [];

    let best_dribbling_grade, best_dribbler, best_shooting_grade, best_shooter;

    /* create the connection */
    pool.getConnection((err, conn) => {

        /* execute query to get best dribbler */
        let dribblingPromise = new Promise((resolve, reject) => {
            conn.promise()
            .query("SELECT g.grade, s.name, s.surname FROM students s INNER JOIN grades g ON g.student_id = s.id WHERE g.course_name = 'DRI' ORDER BY g.grade DESC LIMIT 1")
            .then(([rows, fields]) => {
                best_dribbling_grade = rows[0].grade;
                best_dribbler = rows[0].name + " " + rows[0].surname;
                resolve();
             })
            .then(() => pool.releaseConnection(conn))
            .catch(err => console.log(err))
        })

        /* execute query to get best shooter */
        let shootingPromise = new Promise((resolve, reject) => { 
            conn.promise()
            .query("SELECT g.grade, s.name, s.surname FROM students s INNER JOIN grades g ON g.student_id = s.id WHERE g.course_name = 'SHO' ORDER BY g.grade DESC LIMIT 1")
            .then(([rows, fields]) => {
                best_shooting_grade = rows[0].grade;
                best_shooter = rows[0].name + " " + rows[0].surname;
                resolve();
             })
            .then(() => pool.releaseConnection(conn))
            .catch(err => console.log(err))
        })

        /* when queries promises finish render respective data */
        Promise.all([dribblingPromise, shootingPromise]).then(() => {
            res.render('landing.ejs', {
                pageTitle: "Landing Page",
                best_dribbling_grade,
                best_dribbler,
                best_shooter,
                best_shooting_grade,
                messages
            })
        });

    })
}

/* Controller to render data shown in create student page */
exports.getCreateStudent = (req, res, next) => {
    res.render('create_student.ejs', {
        pageTitle: "Student Creation Page"
    })
}