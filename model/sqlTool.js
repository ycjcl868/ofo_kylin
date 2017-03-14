
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');

// db.serialize(function() {
//     db.run("INSERT INTO ofo VALUES (4001001111,6850)");
//     // db.each("SELECT * FROM ofo", function(err, row) {
//     //     console.log(row.id + ": " + row.info);
//     // });
// });

module.exports = {
    add:function (number, password,fun) {
        db.run("INSERT INTO ofo VALUES (?,?)",number,password,function (err) {
            if(err){
                throw err;
            }
            fun('添加成功');
            
        });
    },
    delete:function (number, fun) {
      db.run('DELETE FROM ofo WHERE number = ?',number,function (err) {
          if(err){
              throw err;
          }
          fun('删除成功');
      })  
    },
    select:function (number, fun) {
        db.each("SELECT * FROM ofo WHERE number = ?",number,function (err, row) {
            if(err){
                throw err;
            }
            fun(row);
        })
    },
    change:function (number, password,fun) {
        db.run('UPDATE ofo SET password=? WHERE number=?',password,number,function (err) {
            if(err){
                throw err;
            }
            fun('修改成功');
        })
    }
};