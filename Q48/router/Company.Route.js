const service = require('../service/Company.Service');
const router = require('express').Router();

router.get('/Employees', service.getAllEmployees);
router.get('/Employee/:id', service.getEmployeeById);
module.exports = router;