const { pool } = require('../utils/database');

exports.getLanding = (req, res, next) => {

    let best_dribbling_grade, best_dribbler, best_shooting_grade, best_shooter;

    pool.getConnection((err, conn) => {

        let dribblingPromise = new Promise((resolve, reject) => {
            conn.promise()
            .query("SELECT * FROM grades, students WHERE course_name = 'DRI' AND grades.student_id = students.id ORDER BY grade DESC LIMIT 1")
            .then(([rows, fields]) => {
                best_dribbling_grade = rows[0].grade;
                best_dribbler = rows[0].name + " " + rows[0].surname;
                resolve();
             })
            .then(() => pool.releaseConnection(conn))
            .catch(err => console.log(err))
        })

        let shootingPromise = new Promise((resolve, reject) => { 
            conn.promise()
            .query("SELECT * FROM grades, students WHERE course_name = 'SHO' AND grades.student_id = students.id ORDER BY grade DESC LIMIT 1")
            .then(([rows, fields]) => {
                best_shooting_grade = rows[0].grade;
                best_shooter = rows[0].name + " " + rows[0].surname;
                resolve();
             })
            .then(() => pool.releaseConnection(conn))
            .catch(err => console.log(err))
        })

        Promise.all([dribblingPromise, shootingPromise]).then(() => {
            res.render('landing.ejs', {
                pageTitle: "Landing Page",
                best_dribbling_grade,
                best_dribbler,
                best_shooter,
                best_shooting_grade
            })
        });

    })
}