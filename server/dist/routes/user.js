"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.post('/newUser', user_1.newUser);
router.post('/newPassword', user_1.newPassword);
router.post('/login', user_1.loginUser);
router.get('/getusers', user_1.getUsuarios);
router.get('/getAdmin', user_1.getNombreAdmin);
exports.default = router;
