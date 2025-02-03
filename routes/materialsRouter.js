const express = require('express');
const router = express.Router();
const materialController = require('../controllers/MaterialController');

// Создать материал
router.post('/materials', materialController.createMaterial);

// Получить все материалы
router.get('/materials', materialController.getAllMaterials);

// Получить материал по ID
router.get('/materials/:id', materialController.getMaterialById);

// Обновить материал
router.put('/materials/:id', materialController.updateMaterial);

// Удалить материал
router.delete('/materials/:id', materialController.deleteMaterial);

module.exports = router;