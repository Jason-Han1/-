
var xAxisData =['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var data2 = [15,-2,-3,-10,-5,-6,-1];
var data3 = [10,10,10,10,10,10,10];
var MAX = 20;

option = {
    legend: {
        data: ['压力','预警下限'],
        align: 'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            return  params.seriesName+'</br>'+
            params.name+':'+  (params.data+MAX)+'</br>';
        }
    },
    
    //tooltip : {
    //    trigger: 'axis',
    //    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //        type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
    //    }, 
    //    formatter: function (params) {
    //        return  params[0].name+'</br>'+
    //        params[0].seriesName+':'+  (params[0].data+MAX)+'</br>'+
    //        params[1].seriesName+':'+  (params[1].data+MAX);
    //    }
    //},
    
    xAxis: {
        data: xAxisData,
        type :"category",
        position:"top",
        boundaryGap:true
    },
    yAxis: {
        interval:5,
        type:'value',
        max:0,
        min:-35,
        axisLabel: {
            formatter: function (value) { 
                return value + MAX;
            }
        }
    },
    series: [{
        name: '压力',
        type: 'bar',
        data: data2.map(function (val) {
            return val - MAX;
        }),
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return params.value + MAX;
                }
            }
        }
    },
    {
        name: '预警下限',
        type: 'line',
        data: data3.map(function (val) {
            return val - MAX;
        }),
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return params.value + MAX;
                }
            }
        }
    }
    ]
};

