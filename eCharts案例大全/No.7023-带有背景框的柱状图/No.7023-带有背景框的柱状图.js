var dataList = [50, 22, 10, 90, 100, 36];
var maxDataList = [100, 100, 100, 100, 100, 100];
var cityName = ['广东', '广西', '云南', '贵州', '海南','深圳'];

option = {
    backgroundColor: '#009efc',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        show: true,
        type: 'value',
        position:'top',
        splitNumber:2,
        splitLine: {
            show: true,
            lineStyle:{
                color:'#65ebff',
                width:2,
                type:'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            formatter: function(value) {
                return value.toLocaleString() + '%';
            },
           textStyle: {
                color: '#fff',
                fontSize:25
            },
        }
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            margin:30,
            textStyle: {
                color: '#fff',
                fontSize:25
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: cityName
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: 25
            },
            formatter: function(value) {
                return value.toLocaleString() + '%';
            },
        },
        data: dataList
    }],
    series: [{
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#34aeec'
                        }, {
                            offset: 1, color: '#c4fdfd'
                        }],
                        globalCoord: false
                    }
                },
            },
            barGap: '-100%',
            barWidth: '20%',
            data: dataList
        },
        {
            name: '背景',
            type: 'bar',
            barGap: '-125%',
            barWidth: '30%',
            data: maxDataList,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,0)',
                    borderWidth:2,
                    borderColor:'#00ffff',
                    barBorderRadius: 5,
                }
            },
        },
    ]
};