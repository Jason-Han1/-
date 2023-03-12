var data = [{value:1,name:"sun",type:1},{value:2,name:"sun",type:0},{value:3,name:"sun",type:0},{value:4,name:"sun",type:1},{value:5,name:"sun",type:1},{value:6,name:"sun",type:1},{value:7,name:"sun",type:1},
]
var xData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          res.push(data[i].name);
        }
        return res;
      };
      var serData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          res.push(data[i].value);
        }
        return res;
      };
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: xData(data)
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data:serData(data),
        itemStyle: {
              normal: {
                barBorderRadius: [3,3,0,0],
                // color: "#FFD234",
                // color: data[i].type== 1 ? '#2DBCFF' : '#FFD234',
                color: function (params) {
                  if (data[params.dataIndex].type == 1) {//未讲评
                    return '#2DBCFF';
                  } else if (data[params.dataIndex].type === 0) {//已讲评
                    return '#FFD234';
                  } 
                }
              },
            },
    }]
};