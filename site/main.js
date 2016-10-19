/*
This module bootstraps the application.
*/
let controller = require('./controller');
let model = require('./model').createModel();
let view = require('./view');

controller.init(model, view);
