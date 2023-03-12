var barData = [{
        "count": 25788,
        "type": "厢式车"
    },
    {
        "count": 13650,
        "type": "高栏车"
    },
    {
        "count": 5980,
        "type": "平板车"
    },
    {
        "count": 1695,
        "type": "冷藏车"
    },
    {
        "count": 1066,
        "type": "专用车"
    }
];
var dataArr = [],
    countTotal = 0,
    dataPerArr = [];
// 区分车辆种类，并给相应柱条添加颜色
$.each(barData, function(i, v) {
    if (i === 0) {
        v.color = '#0A53E9';
    } else if (i === 1) {
        v.color = '#0875EE';
    } else if (i === 2) {
        v.color = '#069CF2';
    } else if (i === 3) {
        v.color = "#02C7EA";
    } else {
        v.color = "#1AB8E6";
    }
    dataArr.push({
        name: v.type,
        type: 'bar',
        stack: '总数',
        barMinHeight: 10,
        itemStyle: {
            normal: {
                color: v.color
            }
        },
        data: [v.count]
    });
    countTotal += v.count;
});
for (var j = 0; j < dataArr.length; j++) {
    dataPerArr.push(((dataArr[j].data / countTotal) * 100).toFixed(2) + '%');
}
option = {
    backgroundColor: '#010F57',
    tooltip: {
        trigger: 'item',
        position: 'top',
        formatter: function(param) {
            return '<div>'
                    +    '<p style="vertical-align:middle;width:10px;margin-right:10px;display:inline-block;height:10px;background:' + param.color + ';"></p>'
                    +    '<p style="vertical-align:middle;display:inline-block;margin-right:10px">' + param.seriesName + '</p>'
                    +    '<p style="vertical-align:middle;display:inline-block;">' + dataPerArr[param.componentIndex] + '</p>'
                    +'</div>';
        }
    },
    grid: {
        left: 50,
        top: '20%',
        right: 20,
        bottom: '20%',
        containLabel: false
    },
    xAxis: {
        show: false
    },
    yAxis: {
        type: 'category',
        data: ['车型'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    series: dataArr
};