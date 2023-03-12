var data1 = [{
    name: '自然学科0',
    value: 1,
    text: '人文社科',
    number: 100
},{
    name: '自然学科1',
    value: 0.5,
    text: '人文社科',
    number: 100
},{
    name: '自然学科2',
    value: 0.4,
    text: '人文社科',
    number: 100
},{
    name: '自然学科3',
    value: 0.8,
    text: '人文社科',
    number: 100
},{
    name: '自然学科4',
    value: 0.3,
    text: '人文社科',
    number: 100
}]
option = {
    backgroundColor: '#fff',
    title: {
        text: "学生成绩实时跟踪分析",
        subtext: "全面把控复习进度和易错题型",
        textStyle: {
            color: '#666',
            fontSize: '14',
        },
        subtextStyle: {
            color: '#666',
            fontSize: '14',
        },
        left: 'center',
        bottom: '15'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "line",
            textStyle: {
                color: "#fff"
            },
            lineStyle: {
                color: '#ccc'
            }
        },
        formatter: function(params) {
            return '主题:&nbsp;'+params[0].data.name+'<br />主题平均测试系数:&nbsp;'+params[0].data.name+"<br />主题知识点个数:&nbsp;"+params[0].data.number+"<br />从属专题:&nbsp;"+params[0].data.text;
        }
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '4%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        data: ['1']
    },


    calculable: true,
    xAxis: [{
        name: '主题',
        type: "category",
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e7e7e7',
                type: 'dashed'
            }
        },
        axisTick: {
            "show": false
        },
        splitArea: {
            "show": false
        },
        axisLabel: {
            "interval": 0,
            show: true,
            rotate: '45'
        },
        data: [1, 2, 3, 4, 5]
    }],
    yAxis: [{
        name: '平均测试系数',
        type: "value",
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e6e6e6',
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            show: true,
        },
        splitArea: {
            show: false
        },
    }],
    series: [{
        name: "平均测试系数",
        type: "line",
        symbolSize: 12,
        symbol: 'circle',
        smooth: true, //关键点，为true是不支持虚线的，实线就用true
        color: ['#fff'], //折线条的颜色
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 3,
                    type: 'solid', //'dotted'虚线 'solid'实线
                    color: '#ffcd8e'
                },
                borderColor: '#ff9c00',
                borderWidth: '3'
            }
        },
        data: data1
    }]
}