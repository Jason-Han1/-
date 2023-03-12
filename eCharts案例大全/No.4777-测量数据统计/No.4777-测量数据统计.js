const mock = [{
        k: '测量总次数',
        v: [{
            k: '测量总次数',
            v: 120
        }],
    },
    {
        k: '自动上传次数',
        v: [{
            k: '自动上传次数',
            v: 80
        }],
    },
    {
        k: '手动上传次数',
        v: [{
            k: '手动上传次数',
            v: 80
        }],
    },
    {
        k: '测量人数',
        v: [{
            k: '测量人数',
            v: 80
        }],
    }
]
var colorList=['#6227E6','#0D6DD8','#E449B3','#0C7E38'];
var colorList2=['#6995F0','#63E6EF','#FC7CDC','#1BC85E'];
// 横轴数据
const xAxis = mock.map(item => item.k)
// 系列 1 数据 (类目1)
const seriesData1 = mock.map(item => item.v[0].v)
// 最大值 (额外拉高多少根据数据数量级决定)
const max = Math.max(...seriesData1) + 10
// 构造柱最大值数组
const maxList = []
for (let i = 0; i < mock.length; i += 1) {
    maxList.push(max)
}

option = {
    backgroundColor: '#081d5f',
    title: {
	    text: '测量数据统计',
	    textStyle: {
	        fontSize: 22,
	        fontWeight: 400,
	        color:'#fff'
	    },
	    left: '0%',
	    top: '0%'
	},
    series: [
        {
            // 该系列为背景深蓝色半胶囊
            data: maxList,
            type: 'bar',
            xAxisIndex: 0,
            silent: true,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter:function(params){
                       return seriesData1[params.dataIndex]
                    },
                    fontSize: 20,
                    color: "#688DEF"
                }
            },
            itemStyle: {
                color: '#334fba',
                barBorderRadius: [20, 20, 20, 20],
            },
            barWidth: 30,
            tooltip: {
                show: false,
            },
        },
        {
            data: seriesData1,
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                barBorderRadius: 25,
                color: function(params){
                    console.log(colorList[params.dataIndex])
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1,
                    color: colorList[params.dataIndex] // 100% 处的颜色
                }, {
                    offset: 0.3,
                    color:  colorList2[params.dataIndex]// 0% 处的颜色
                }], false)}
            },
            barWidth: 30,
        },
    ],
    dataZoom: {
        type: 'inside',
        xAxisIndex: [0, 1],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    xAxis: [{
            data: maxList,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
        },
        {
            data: xAxis,
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            position: 'bottom',
        },
    ],
    yAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#fff',
        },
        axisTick: {
            show: false,
        },
        splitLine: {
           show: false,
        },
    },
}