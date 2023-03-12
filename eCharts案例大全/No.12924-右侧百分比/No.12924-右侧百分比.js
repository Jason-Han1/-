// 数据
// 取最大值10000 
var baifenbi = [3331, 4441, 5551, 7771, 8881, 9212];

var grayBar = Array(6).fill(10000) // 等价于 [10000,10000,10000,10000,10000,10000]

var zongjine = Array(6).fill(0) // 固定 0 

var xingm = ['矮冬瓜', '酷我音乐', '狗过', '呵呵哒', '网易云', '百度云'];
var bgBarColor = 'rgba(102, 102, 102,0.5)' // 底部柱状图背景颜色
option = {
    backgroundColor: '#061A42',
    color: ['#61A8FF'], //进度条颜色
    legend: {
        data: ["百分比"],
        textStyle: {
            color: '#fff',
            textAlign: 'center'
        },
    },
    // grid:{
    //     right:0
    // },
    xAxis: [{
        show: false,
        inverse: true,
    }],
    yAxis: [{
        type: 'category',
        position: 'right',
        axisLabel: {
            show: false, //让Y轴数据不显示
        },

        axisTick: {
            show: false, //隐藏Y轴刻度
        },
        axisLine: {
            show: false, //隐藏Y轴线段
        },
        data: xingm,
    }],
    series: [
        //背景色--------------------我是分割线君------------------------------//
        {
            show: false,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度 

            itemStyle: {
                normal: {
                    color: bgBarColor
                },
            },
            z: 1,
            data: grayBar,
        },
        //蓝条--------------------我是分割线君------------------------------//
        {
            name: "百分比",
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '35%', //统计条宽度
            max: 1,
            xAxisIndex: 0,
            yAxisIndex: 0,
            inverse: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff', //百分比颜色
                    },
                    position: 'insideRight',
                    // position: ["80%", "25%"],
                    //百分比格式
                    formatter: function(data) {
                        return data.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
                    },
                }
            },
            labelLine: {
                show: false,
            },
            z: 2,
            data: baifenbi,
        },
        //数据条--------------------我是分割线君------------------------------//
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度!!!!!!!!!!!!!!!!!!!!!!!!
            barGap: '-100%',
            barWidth: '68%', //统计条宽度
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: bgBarColor
                },
            },
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    //label 的position位置可以是top bottom left,right,也可以是固定值
                    //在这里需要上下统一对齐,所以用固定值
                    position: 'insideBottomRight',

                    rich: { //富文本
                        white: {
                            //自定义颜色
                            color: '#ffffff'
                        },
                    },
                    formatter: function(data) {
                        //富文本固定格式{colorName|这里填你想要写的内容}
                        return '{white| ' + data.name + '}';

                    },
                }
            },
            data: zongjine
        }


    ]
};