
var categoryData = [];
var barData = [];
var dataCount = 100;
var startDate = +new Date(2017, 6, 1);

for (var i = 0; i < dataCount; i++) {
    var date = startDate + i * 3600 * 24 * 1000;
    categoryData.push(date);
    var val = Math.random() * 1000;
    barData.push([i, echarts.number.round(val, 2)]);
}

function renderItem(params, api) {
    var xValue = api.value(0);
    var bandWidth = api.size([1, 0])[0];
    var date = echarts.format.formatTime('dd', categoryData[xValue]);
    var fullDate = echarts.format.formatTime('MM/dd', categoryData[xValue]);
    if (+date === 1) {
        date = fullDate;
    }
    
    if (echarts.format.formatTime('MM/dd', new Date()) === fullDate) {
        date += '\n今天';
    }

    return {
        type: 'group',
        children: [{
            type: 'rect',
            shape: {
                x: api.coord([xValue, 0])[0] - bandWidth / 2, 
                y: params.coordSys.y + params.coordSys.height,
                width: bandWidth,
                height: 40
            },
            style: api.style({
                text: date,
                fill: '#ddd',
                stroke: '#ccc',
                lineWidth: 1
            })
        }]
    };
}

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['bar', 'error']
    },
    dataZoom: [{
        type: 'slider',
        showDetail: false,
        end: 20
    }, {
        type: 'inside',
        end: 20
    }],
    grid: {
        bottom: 150
    },
    xAxis: {
        data: categoryData,
        axisLabel: {show: false},
        axisTick: {show: false},
        axisLine: {show: false}
    },
    yAxis: {},
    series: [{
        type: 'bar',
        name: 'bar',
        data: barData,
        itemStyle: {
            normal: {
                color: '#77bef7'
            }
        }
    }, {
        type: 'custom',
        name: 'xLabel',
        renderItem: renderItem,
        data: barData,
        z: 100
    }]
};