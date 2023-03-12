var myChart = echarts.init(document.getElementById('chart-panel'));
var selected = {}; //存储选中的状态
var xdata = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var ydata = ['类别1', '类别2', '类别3', '类别4'];
var vdata = [
    [27.5, 28.0, 26.4, 25.1, 24.6, 22.8, 24.7, 24.0, 24.0, 23.6],
    [7.5, 7.5, 7.9, 7.2, 7.3, 6.7, 7.0, 6.7, 6.7, 6.3],
    [45.2, 44.0, 42.3, 46.8, 39.4, 42.3, 38.0, 52.3, 46.2, 47.4],
    [6.0, 6.7, 8.4, 7.7, 6.8, 6.4, 8.7, 5.8, 5.7, 9.7]
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
    lineStyle:{
        normal: {
            color: "none"
        }
    },
    markLine: {
        lineStyle: {
            normal: {
                color: '#fc97af'
            }
        },
        label: {
            normal: {
                position: 'start'
            }
        },
        data: [{
            name: '年平均',
            type: 'average'
        }]
    }
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
            if(params[0]){
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
        axisLabel: {
            formatter: function(value) {
                if (value >= 100000000) {
                    return value / 100000000 + ' 亿';
                } else if (value >= 1000000) {
                    return value / 10000 + ' 万';
                } else {
                    return value + '';
                }
            },
        }
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