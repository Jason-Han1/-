var legend = ['合格率','排名'];
var qualified = [97,12,54,18,66,21,10,42];//合格率
var oriData = [1,4,8,2,6,5,7,5,3];//排名
var axisData = [
              '2009/6/12',
              '2009/6/13', 
              '2009/6/14', 
              '2009/6/15', 
              '2009/6/16', 
              '2009/6/17', 
              '2009/6/18', 
              '2009/6/19',
              '2009/6/20'              
            ];
option = {
    tooltip : {
        trigger: 'axis',
        formatter: function(params) {
            return params[0].name + '<br/>'
                   + params[0].seriesName + ' : ' + params[0].value + ' (m^3/s)<br/>'
                   + params[1].seriesName + ' : ' + -params[1].value + ' (mm)';
        }
    },
    xAxis : [
        {
            type : 'category',
            data : axisData
        }
    ],
    yAxis : [
        {
            name : legend[0],
            type : 'value',
            min:5
        },
        {
            name : legend[1],//排名,
            type : 'value',
            axisLabel : {
                formatter: function(v){
                    return - v;
                }
            }
        }
    ],
    series : [
        {
            name:legend[0],
            type:'bar',
            data:function(qualified){
                var data = [];
                qualified.forEach(function(item){
                   data.push(item + 5)
                });
                debugger;
                return data
            }(qualified)
        },
        {
            name:legend[1],//排名
            type:'line',
            yAxisIndex:1,
            data: (function(){
                var len = oriData.length;
                while(len--) {
                    oriData[len] *= -1;
                }
                return oriData;
            })()
        }
    ]
};
                    