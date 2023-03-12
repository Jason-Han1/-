app.title = '坐标轴刻度与标签对齐';

var data = [10, 52, 200, 334, 390, 330, 220];
var markLineData = [];


for (var i = 1; i < data.length; i++) {
    markLineData.push([{
        xAxis: i - 1,
        yAxis: data[i - 1],
        value: (data[i] / data[i - 1] * 100).toFixed(2)
    }, {
        xAxis: i,
        yAxis: data[i]
    }]);
}

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data: data,
            
            markLine: {
                label: {
                    normal: {
                        position: 'middle'
                    }
                },
                lineStyle: {
                    normal: {
                        type: 'solid'
                    }  
                },
                data: markLineData
            }
        }
    ]
};
