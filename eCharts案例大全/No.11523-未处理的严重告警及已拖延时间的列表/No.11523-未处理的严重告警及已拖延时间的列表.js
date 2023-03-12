

option = {
    title: {
        text: '告警列表',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params){
            let result = params[0].name + '<br />' + 
                         '基站: xxx基站' + '<br />' +
                         params[1].seriesName + ': ' + params[1].data.name;
            return result;
        }
    },
    grid: [{
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
    }],
    xAxis: [{
        type: 'value',
        min: 0,
        max: 1.1,
        axisLabel: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {show: false},
        axisTick: {show: false},
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }],
    series: [
        {
            name: '告警',
            stack: '1',
            type: 'bar',
            label: {
                show: true,
                position: 'insideLeft',
                formatter: function(params){
                    return params.data.name
                }
            },
            data: [
                {value: 1, name: '射频单元维护链路异常告警'},
                {value: 1, name: '小区不可用告警'},
                {value: 1, name: 'BBU光模块收发异常告警'},
                {value: 1, name: '射频单元CPRI接口异常告警'},
                {value: 1, name: '小区服务能力下降告警'},
                {value: 1, name: '射频单元维护链路异常告警'},
                {value: 1, name: '小区不可用告警'},
                {value: 1, name: 'BBU光模块收发异常告警'},
                {value: 1, name: '射频单元CPRI接口异常告警'},
                {value: 1, name: '小区服务能力下降告警'},
            ]
        }, {
            name: '已拖延时间',
            stack: '1',
            type: 'bar',
            label: {
                show: true,
                position: 'inside',
                formatter: function(params){
                    return params.data.name
                }
            },
            data: [
                {value: .1, name: '1天'},
                {value: .1, name: '2天'},
                {value: .1, name: '3天'},
                {value: .1, name: '4天'},
                {value: .1, name: '5天'},
                {value: .1, name: '1天'},
                {value: .1, name: '2天'},
                {value: .1, name: '3天'},
                {value: .1, name: '4天'},
                {value: .1, name: '5天'}
            ]
        }
    ]
};
