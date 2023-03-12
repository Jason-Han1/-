var getData = [
    {"month":"2017-07","count":6},{"month":"2017-08","count":2},{"month":"2017-09","count":0},
    {"month":"2017-10","count":0},{"month":"2017-11","count":6},{"month":"2017-12","count":1},
    {"month":"2018-01","count":4},{"month":"2018-02","count":5},{"month":"2018-03","count":2},
    {"month":"2018-04","count":2},{"month":"2018-05","count":0},{"month":"2018-06","count":3},
    {"month":"2018-07","count":3},{"month":"2018-08","count":2},{"month":"2018-09","count":4},
    {"month":"2018-10","count":5},{"month":"2018-11","count":5},{"month":"2018-12","count":3},
    {"month":"2019-01","count":3},{"month":"2019-02","count":0},{"month":"2019-03","count":0}]
index = 7;
option = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [{
        type : 'category',
        boundaryGap : false,
        data : function (){
            var list = [];
                for (var i = 0; i < index; i++) {
                    list.push(getData[i].month);
                }
                return list;
        }()
    }],
    yAxis : [{
        type : 'value'
    }],
    series : [{
        name:'',
        type:'line',
        smooth: true,
        data:function (){
            var list = [];
            for (var i = 0; i < index; i++) {
                list.push(getData[i].count);
            }
            return list;
        }()
    }]
};     
setInterval(function (){
    if (index == getData.length) {
        index = 0;
    }
    var data = option.series[0].data;
    data.shift();
    data.push(getData[index].count);
    option.xAxis[0].data.shift();
    option.xAxis[0].data.push(getData[index++].month);
    myChart.setOption(option);
}, 2000);