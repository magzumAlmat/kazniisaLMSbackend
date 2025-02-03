const { Material } = require('../models/Materials');


// Создать материал
exports.createMaterial = async (req, res) => {
  console.log('1 Create material req.body= ',req.body)
  try {
    const { title, type, file_path, courseId } = req.body;
    console.log('1.1 title, type, file_path, courseId',title, type, file_path, courseId)
    const material = await Material.create( {title, type, file_path, courseId });
    console.log('2 Material= ',material)

    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Получить все материалы
exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Получить материал по ID
exports.getMaterialById = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (!material) {
      return res.status(404).json({ error: 'Material not found' });
    }
    res.status(200).json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Обновить материал
exports.updateMaterial = async (req, res) => {
  try {
    const { title, type, file_path, courseId } = req.body;
    const [updated] = await Material.update(
      { title, type, file_path, courseId },
      { where: { id: req.params.id } }
    );
    if (updated) {
      const updatedMaterial = await Material.findByPk(req.params.id);
      return res.status(200).json(updatedMaterial);
    }
    res.status(404).json({ error: 'Material not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Удалить материал
exports.deleteMaterial = async (req, res) => {
  try {
    const deleted = await Material.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    res.status(404).json({ error: 'Material not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};