var baifenbi = [0.1, 1.000, 1.000];
var grayBar = [1, 1, 1];
var city = ['供应链   ', '即时通讯   ', '综合管理平台   '];
option = {
    backgroundColor:['#FFFFFF'],
    color: ['#4CC970'],
    grid: {
        left: '30%',
        right: '50%',
        bottom: '50%',
        top: '30%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true, //让Y轴数据不显示
            interval: 0,
            color: '#3AC0FC',
            fontSize: 12,
            padding: [5, 5, 5, 5]
        },
        itemStyle: {

        },
        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },

        data: city,
    },
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '5px', //统计条宽度 
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: 'rgba(0,0,0,0.2)'
                },
            },
            z: 1,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#2AA2FF', //百分比颜色
                    },
                    position: 'right',
                    //百分比格式
                    formatter: function(data) {
                        return (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
                    },
                }
            },
            data: grayBar,
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '5px', //统计条宽度
            max: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
 
                },
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: baifenbi,
        },
    ]
};