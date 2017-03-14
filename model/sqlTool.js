
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
        let that = this;
        db.each("SELECT number,password,COUNT(*) as length FROM ofo WHERE number = ?",number,function (err, row) {
            if(row.length > 0 && row.password == password){
                fun({status:-2,info:'已经添加过此车号'});
                return;
            }else if(row.length>0 && row.password != password){
                that.change(number,password,function () {
                    fun({status:2,info:number+'密码修改成功'});
                })
            }else{
                db.run("INSERT INTO ofo VALUES (?,?)",number,password,function (err) {
                    if(err){
                        throw err;
                    }
                    fun({status:1,info:'添加成功'});
                });
            }
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
      db.each("SELECT number,password,COUNT(*) as status FROM ofo WHERE number = ?",number,function (err, row) {
          if(err){
              throw err;
          }
          fun({info:row});
      })

    },
    change:function (number, password,fun) {
        db.run('UPDATE ofo SET password=? WHERE number=?',password,number,function (err) {
            if(err){
                throw err;
            }
            fun({status:1,info:'修改成功'});
        })
    }
};
