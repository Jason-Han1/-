data = {
    number: [3, 4, 5, 4, 6],
    data: [5900, 3500, 4500, 4000, 7000]
}

//对轴间隔
totalInterval = 5;

numberMax = Math.max.apply(Math, data.number);
datarMax = Math.max.apply(Math, data.data);

option = {
    color: ['#FFB300', '#33adff'],
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontFamily:'Arial'
        },
        position: function(pos, params, dom, rect, size) {
            dom.style.transform = 'rotate(90deg)';
            dom.style['-ms-transform'] = 'rotate(90deg)'; 	/* IE 9 */
            dom.style['-moz-transform'] = 'rotate(90deg)'; 	/* Firefox */
            dom.style['-webkit-transform'] = 'rotate(90deg)'; /* Safari 和 Chrome */
            dom.style['-o-transform'] = 'rotate(90deg)'; 
        }
    },
    xAxis: [{
        type: 'value',
        name: '推送次数',
        nameRotate: -90,
        position: 'top',
        splitNumber: totalInterval,
        axisLabel: {
            show: true,
            rotate: 90
        },
        max: function(value) {
            return (Math.floor(value.max / totalInterval) + 1) * totalInterval;
        },
        interval: ((Math.floor(numberMax / totalInterval) + 1) * totalInterval) / totalInterval,
    }, {
        type: 'value',
        name: '推送数据量',
        nameRotate: -90,
        position: 'bottom',
        splitNumber: totalInterval,
        axisLabel: {
            show: true,
            rotate: -90
        },
        max: function(value) {
            return (Math.floor(value.max / totalInterval) + 1) * totalInterval;
        },
        interval: numberMax > datarMax ? ((Math.floor(numberMax / totalInterval) + 1) * totalInterval) / totalInterval : ((Math.floor(datarMax / totalInterval) + 1) * totalInterval) / totalInterval,
    }],
    yAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: true,
            rotate: -90
        },
        inverse: true,
        data: ['综合治税', '联合奖惩', '信用审查', '文明交通', '红黑名单']
    }],
    series: [{
        name: '推送次数',
        type: 'line',
        smooth: true,
        data: data.number
    }, {
        name: '推送数据量',
        type: 'line',
        smooth: true,
        xAxisIndex: 1,
        data: data.data
    }]
};