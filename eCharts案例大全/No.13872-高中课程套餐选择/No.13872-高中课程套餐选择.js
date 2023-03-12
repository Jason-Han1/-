var myChart = echarts.init(document.getElementById('chart-panel'));
var selected = {}; //存储选中的状态
var xdata = ['三人班学费', '一对一学费', '最大可提分值'];
var ydata = ['词汇', '阅读理解', '完形填空', '语法填空', '短文改错', '英语写作'];
var vdata = [
    [1500, 2000, 0],
    [3500, 4000, 40],
    [3500, 4000, 30],
    [1500, 2000, 15],
    [1500, 2000, 10],
    [2000, 2500, 25],

];
var series = [];
var legenddata = ydata;
var sumData = [];

//求每一列数据和
$.each(vdata[0], function(i, v) { //0-9
    var sum = 0;
    for (var j = 0; j < vdata.length; j++) { //0-2
        sum += vdata[j][i];
    }
    sumData[i] = parseFloat(toDecimal(sum));
});

$.each(vdata, function(i, v) {

    var bs = {
        name: ydata[i],
        type: 'bar',
        smooth: true,
        areaStyle: {
            normal: {}
        },
        data: v,
        barWidth: '40%',
        stack: '总量'
    };
    series.push(bs);

});

//总量&平均值
var bs2 = {
    name: '总量',
    type: 'line',
    data: sumData,
    label: {
        normal: {
            show: true,
            position: 'top'
        }
    },
    lineStyle: {
        normal: {
            color: "none"
        }
    },


};
series.push(bs2);

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            crossStyle: {
                color: '#999'
           }
        },
        formatter: function(params) {
            params.pop(); //删除最后一个
            if (params[0]) {
                var res = params[0].name + '<br/>';
                for (var i = 0; i < params.length; i++) {
                    res += (params[i].marker + params[i].seriesName + " : " + params[i].value + '<br/>');
                }
                return res;
            }
        }
    },
    legend: {
        data: legenddata,
        top: '6%',
        right: '3%'
    },
    
    
    
    
   
    
    
    xAxis: [{
        data: xdata,
    }],
    yAxis: [{
        name: '',
        type: 'value',
        
            
        
    }],
    
    
    grid: {
        top: '12%',
        left: '3%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    series: series
};








//保留一位小数
function toDecimal(num) {
    return parseFloat(num).toFixed(1);
}

//捕捉变化状态
myChart.on("legendselectchanged", function(params) {
    selected = params.selected;

    //重新计算sumData
    $.each(vdata[0], function(i, v) { //0-9
        var sum = 0;
        //遍历对象
        for (var key in selected) {
            if (selected[key]) { //获取被选中的元素
                var index = ydata.indexOf(key); //获取被选中key在ydata里的索引
                sum += vdata[index][i];
            }
        }
        sumData[i] = parseFloat(toDecimal(sum));

    });
    myChart.setOption(option); //重新绘图

});



myChart.setOption(option);