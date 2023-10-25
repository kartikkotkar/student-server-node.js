import Express from "express";


const app = Express();app.use(Express.json());

const PORT = 5000;






const students = [];

app.get('/health', (req, res) => {
    res.json({ satus: 'All god all set ' });
});
app.get('/students', (req, res) => {

    res.json({
        success: true,
        data: students,
        message: 'Successfully fetched all students',
    })
});

app.post('/student', (req, res) => {
    const { name, age, mobile, email } = req.body;

    if (!name) {
        return res.json({
            success: false,
            message: 'name is required',
        })
    }

    if (!age) {
        return res.json({
            success: false,
            message: 'Age is required',
        })
    }

    if (!mobile) {
        return res.json({
            success: false,
            message: 'Mobile is required',
        })
    }

    if (!email) {
        return res.json({
            success: false,
            message: 'Email is required',
        })
    }



    const id = Math.floor(Math.random() * 100000) + 1;

    const newStudent = {
        id: id,
        name: name,
        age: age,
        mobile: mobile,
        email: email,
    }

    students.push(newStudent);

    res.json({
        success: true,
        data: newStudent,
        message: 'Succseefully added new student',
    })
});

//get student //

app.get('/student', (req, res) => {
    const { id } = req.query;

    let student = null;

    students.forEach((stud) => {
        if (stud.id == id) {
            student = stud;
        }

    })

    if (student == null) {
        return res.json({
            success: false,
            message: 'Student not found',
        })
    }

    res.json({
        success: true,
        data: student,
        message: 'Successfully fetched student',
    })

});

app.listen(PORT, () => {
    console.log(` server is runinng on port ${PORT}  ,`);
});