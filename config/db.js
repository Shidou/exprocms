/**
 * Created with JetBrains WebStorm.
 * User: shidoudou
 * Date: 13-12-4
 * Time: 下午2:50
 * To change this template use File | Settings | File Templates.
 */
var settings = require('./config'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {safe: true});