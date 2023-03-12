var data1 = [ 0,1,0,0,1,1];
var data2 = [ 1,0,1,1,0,0];
var seriesData1 = $.each(data1,function(index,value){
    if(value === 0){
        value = '-'
    }
});
var seriesData2 = $.each(data2,function(index,value){
    if(value === 0){
        value = '-'
    }
});
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar;
            if (params[1].value !== 0) {
                tar = params[1];
            }
            else {
                tar = params[0];
            }
           return tar.name + '<br/>' + tar.seriesName ;
        }
    },
    legend: {
        data: ['正常', '异常']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['2020-04-09 00','2020-04-09 01','2020-04-09 02','2020-04-09 03','2020-04-09 04','2020-04-09 05']
    },
    yAxis: {
        type: 'value'
    },
    series: [
       
        {
            name: '正常',
            type: 'bar',
            stack: '总量',
            barWidth:40,
            label: {
                show: false,
                position: 'top'
            },
            data: seriesData1
        },
        {
            name: '异常',
            type: 'bar',
            stack: '总量',
             barWidth:40,
            label: {
                show: false,
                position: 'top'
            },
           data: seriesData2
        }
    ]
};
