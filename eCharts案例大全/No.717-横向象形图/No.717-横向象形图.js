
//渲染数据的时候计算一下 百分比
var data=[50, 60, 70,20,30,10];
var className=['服务器','交换机','路由器','防火墙','数据库','中间件'];
var defaultData=[100,100,100,100,100,100];
option = {
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
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                params[0].seriesName + ' : ' + params[0].value
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
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
        data: className
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function(value) {
                    return value + ' %';
            },
        },
        data: data
    }],
    series: [{
            name: '完成率',
            type: 'pictorialBar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: '#5CD6EE'
                    ,
                    
                },
            },
            symbol: 'rich', //图形类型，带圆角的矩形
            symbolMargin: '3', //图形垂直间隔
            symbolRepeat: true, //图形是否重复
            symbolSize: [5, 20], //图形元素的尺寸
            barWidth: 20,
            data: data
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: 0,
                }
            },
        },
    ]
};