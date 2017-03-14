

var sqlTool = require('./model/sqlTool');
// sqlTool.add('123456','1234',function (data) {
//     console.log(data);
// });
// sqlTool.change('123456','4321',function (data) {
//     console.log(data);
// });

sqlTool.select(4001001111,function (data) {
  console.log(data);
});
