var category = ['服务器数（台）', '计算容量（核）', '内存容量（GB）', '存储容量（PB）'];
// var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];
var barData = [60, 30, 82, 9];
var lineData = [100, 100, 100, 100]

var option = {
    backgroundColor: '#0d073d',
    grid: [{ //控制显示位置的属性grid
        left: '20%',
        bottom: '',
        top: '',
        right: '10%' //在此图中可用于控制柱子的长度
    }],
    xAxis: {
        show: false
    },
    yAxis: {
        data: category,
        show: true,
        axisLabel: {
            verticalAlign: 'middle',
            color: '#4488bc',
            fontSize: '20'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{ // 外边框
            name: '',
            type: 'pictorialBar',
            symbol: 'reat',
            barWidth: '10%',
            symbolOffset: ['1%', 0], //位置
            symbolSize: ["10500%", '500%'], //大小
            itemStyle: {
                normal: {
                    color: '#3f559c'
                }
            },
            z: -180, //图层
            symbolRepeat: null,
            data: [1, 1, 1, 1], //数据
            barGap: 50,
            barCategoryGap: 0,
            animationEasing: 'elasticOut',

        },
        { // 内边框
            name: '',
            type: 'pictorialBar',
            symbol: 'reat',
            barWidth: '9%',
            barMaxWidth: '20%',
            symbolOffset: ['2.5%', 0],
            symbolSize: ['10200%', '500%'],
            itemStyle: {
                normal: {

                    color: '#0d073d'
                }
            },
            z: -20,
            symbolRepeat: null,
            data: [1, 1, 1, 1],
            barGap: 45,
            barCategoryGap: 0,
            animationEasing: 'elasticOut',

        },

        { // 蓝柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'roundRect',
            barWidth: '30%',
            symbolOffset: ['200%', '-30%'],
            itemStyle: {
                normal: {

                    color: '#1F4683'
                }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: ['20%', '120%'],
            data: lineData,
            barGap: 50,
            barCategoryGap: 0,
            animationEasing: 'elasticOut',

        },


        { // 蓝柱
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'roundRect',
            barWidth: '30%',
            symbolOffset: ['200%', '-30%'],
            itemStyle: {
                normal: {
                    barMaxWidth: '20%',
                    barBorderRadius: 100,
                    color: '#6DE8FA',
                }
            },
            symbolRepeat: true,
            symbolSize: ['20%', '120%'],
            // symbolClip: true,
            data: barData,
        },

    ],

}