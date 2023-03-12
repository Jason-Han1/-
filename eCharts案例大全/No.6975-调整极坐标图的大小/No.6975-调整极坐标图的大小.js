option = {
    textStyle: { //图例文字的样式
        color: '#000',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
    grid: {
        top: "20%",
        left: "20%",
        right: "20%",
        bottom: "20%",
        containLabel: true,
    },
    angleAxis: {},
    radiusAxis: {
        type: 'category',
        data: ['a', 'b', 'c', 'd', ],
        z: 2,
        nameTextStyle: {
            fontSize: 12
        }
    },
    polar: {},
    series: [{
        type: 'bar',
        barWidth: 20,
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: '在线',
        stack: 'a',
        itemStyle: {
            normal: {
                color: '#5b9bd5'
            }
        },
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: '离线',
        stack: 'a',
        itemStyle: {
            normal: {
                color: '#c6382a'
            }
        },
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: '告警',
        stack: 'a',
        itemStyle: {
            normal: {
                color: '#24272e'
            }
        },
    }],
    legend: {
        show: true,
        data: ['i', 'o', 'p'],
        textStyle: { //图例文字的样式
            color: '#fff',
        },
    }

};