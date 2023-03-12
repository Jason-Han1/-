let activateBar;
let dataA = [
    { 'name': 'a','value': 8 },
    { 'name': 'a','value': 6 },
    { 'name': 'a','value': 5 },
    { 'name': 'a','value': 4 },
    { 'name': 'a','value': 3 },
    { 'name': 'a','value': 2 }
    ];
let __chartName__ = 'bar';
let categories = [];
let datas = [];
if (dataA) {
    dataA.forEach(item => {
        categories.push(item.name || '');
        datas.push({
            name: item.name,
            value: item.value || 0
            // info: item.info,
            // dataObj: item,
            // group: 'noGroup'
        });
    });
}
let seriesObj = {
    type: __chartName__,
    label: {
        normal: {
            show: true,
            position: 'right',
            textStyle: {
                color: 'white' // color of value
            },
            formatter: '{b} ({c})'
        }
    },
    itemStyle: {
        normal: {
            color: function (params) {
                let key = params.dataIndex
                if (key === activateBar) {
                    return 'rgba(0,255,191,1)';
                } else {
                    return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(0,196,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,118,255,1)'
                    }], false)
                }
            },
            barBorderRadius: 15
        }
    },
    barWidth: '50%',
    z: 3,
    zlevel: 3
}
seriesObj.data = datas;
let nameColor = '#00d8f1'
option = {
    backgroundColor: '#000',
    series: seriesObj,
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: '{b}:{c}'
    },
    grid: {
        left: '1%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        width: '90%',
        height: '85%',
        containLabel: false
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#344755',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: false,
        boundaryGap: ['0%', '5%']
    },
    yAxis: [
        {
            nameTextStyle: {
                color: nameColor
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#344755',
                    width: 2
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                show: false,
                textStyle: {
                    color: '#344755'
                }
            },
            data: categories
        }
    ]
};

