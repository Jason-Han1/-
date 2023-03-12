var getname = ['学前教育', '初等教育', '语文教育', '英语教育'];
var getzrs = [1200, 1000, 1235, 1060];
var getxwsy = [800, 900, 500, 800];
var getbj = [1, 1, 1, 1];
var getbl = [];
for (let i = 0; i < getzrs.length; i++) {
    getbl[i]=getxwsy[i]/getzrs[i]
}

option = {
    backgroundColor: "#000",
    grid: {
        left: '15%',
        right: '5%',
        bottom: '5%',
        top: '5%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            for (var i = 0; i < params.length; i++) {
                    str = '<span>' + params[0].name + '</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#2472e3;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp总人数：</span><span style="display:block;width:100px;float:right;text-align:right">'+getzrs[params[i].dataIndex]+'人</span></br><span style="display:inline-block;float:left;width:12px;height:12px;margin-top:5px;background:#ED11AC;color:#fff;border-radius:30%;"></span><span>&nbsp&nbsp学位授予：</span><span style="display:block;width:100px;float:right;text-align:right">'+getxwsy[params[i].dataIndex]+'人</span>';
            }
            return str;
        }
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        min: 0,
        max: 1, 
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }, {
        type: 'value',
        axisLabel: {
            show: false,
        },
        min: 0,
        max: 1, 
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            textStyle: {
                color: '#6F84BD',
                fontSize: '13'
            },
            padding:[0,15,0,0],
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
        data: getname
    }],
    series: [{
            name: '数值',
            type: 'bar',
            zlevel: 1,
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 6, 6, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6569FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00C0F0' // 100% 处的颜色
                    }], false),
                },
            },
            barWidth: 15,
            data: getbl
        },
        {
            name: '条形背景颜色',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            xAxisIndex: 1,
            data: getbj,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6569FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00C0F0' // 100% 处的颜色
                    }], false),
                    opacity:0.2,
                    barBorderRadius: [0, 6, 6, 0],
                }
            },
        },
    ]
};