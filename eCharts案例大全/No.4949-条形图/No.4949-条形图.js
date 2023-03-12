var getdata=['大米', '玉米', '蔬菜', '鸡蛋', '坚果'];
var getvalue=[50, 22, 18, 12, 1];
var getsum=[100, 100, 100, 100, 100];
var colorList = ['#8818F0', '#00D0BF', '#1875F0', '#797AFF'];
option = {
    backgroundColor:'#fff',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b}：数量{c}篇'
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: false,
            textStyle: {
                color: '#666666'
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
        data: getdata
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            shadowOffsetX: '-20px',
            color: ['#fff'],
            align: 'right+20',
            verticalAlign: 'center',
            lineHeight: 20,
            textStyle: {
                color: '#666666',
                fontSize: '14'
            },
            formatter: function(value) {
                    return value.toLocaleString() ;
            },
        },
        data: getvalue
    }],
    series: [{
            name: '新生报到比例',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color:function(params){
                        return colorList[params.dataIndex]
                    }
                },
            },
            barWidth: 10,
            data: getvalue
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: getsum,
            itemStyle: {
                normal: {
                    color: '#E9F2FD',
                    barBorderRadius: 0,
                }
            },
                    label: {
            normal: {
                color: '#666666',
                show: true,
                position: [0, '-20px'],
                textStyle: {
                    fontSize: 14
                },
                formatter: function(a, b) {
                    return a.name
                }
            }
        }
        },
    ]
};