const express = require('express');
const router = express.Router();
// const courseController = require('../controllers/courseController');
const {getAllCourses,createCourse,getCourseById,updateCourse,deleteCourse} = require('../controllers/CourseController');
// Создать курс
router.post('/courses', createCourse);

// Получить все курсы
router.get('/courses', getAllCourses);

// Получить курс по ID
router.get('/courses/:id', getCourseById);

// Обновить курс
router.put('/courses/:id', updateCourse);

// Удалить курс
router.delete('/courses/:id', deleteCourse);

module.exports = router;