let colorList = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(255, 248, 193, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(255, 200, 103, 1)' // 100% 处的颜色
    }],
    global: false // 缺省为 false
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(20, 119, 189, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(0, 255, 255, 1)' // 100% 处的颜色
    }],
    global: false // 缺省为 false
}]

let dataX = ['严重告警', '主要告警', '次要告警', '警告告警']
let showData = [{
    value: 7,
    itemStyle: {
        color: '#f48383'
    }
}, {
    value: 8,
    itemStyle: {
        color: '#ffb414'
    }
}, {
    value: 26,
    itemStyle: {
        color: '#efdd48'
    }
}, {
    value: 4,
    itemStyle: {
        color: '#798bfa'
    }
}]
option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: '{b}<br>{a}：{c}'
    },
    toolbox: {
        show: false
    },
    xAxis: [{
        type: 'category',
        nameLocation: 'middle',
        nameGap: 0,
        data: dataX
    }],
    yAxis: [{
        type: 'value',
        show: true,
        splitLine: {
            show: true
        }
    }],
    series: [{
        name: '流入人员数',
        type: 'bar',
        fontSize: 20,
        /*itemStyle: {
            color: function(params) {
                if (params.data > 0) {
                    return colorList[0]
                } else {
                    return colorList[1]
                }
            }
        },*/
        barWidth: 30,
        // barGap: 1,
        // barCategoryGap: 20,
        data: showData
    }]
};