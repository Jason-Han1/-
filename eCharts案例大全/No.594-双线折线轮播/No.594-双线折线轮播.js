let name = '单位：万'
let dataArr = [
    {
        name: '流入',
        list: [
            {
                name: '3月',
                value: 40
            },
            {
                name: '4月',
                value: 60
            },
            {
                name: '5月',
                value: 20
            },
            {
                name: '6月',
                value: 85
            },
            {
                name: '7月',
                value: 50
            },
            {
                name: '8月',
                value: 30
            }
        ]
    },
    {
        name: '流出',
        list: [
            {
                name: '3月',
                value: 50
            },
            {
                name: '4月',
                value: 40
            },
            {
                name: '5月',
                value: 15
            },
            {
                name: '6月',
                value: 50
            },
            {
                name: '7月',
                value: 40
            },
            {
                name: '8月',
                value: 30
            }
        ]
    }
]
// x轴
let nameArr = dataArr[0].list.map(it => it.name)
// 颜色
let colors = ['rgba(11, 255, 177, 1)', 'rgba(45, 173, 255, 1)']
option = {
    backgroundColor: '#0e1c47',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(1, 13, 19, 0.5)',
        borderWidth: 0,
        axisPointer: {
            lineStyle: {
                color: 'rgba(11, 208, 241, 1)',
                type: 'slider',
            },
        },
         textStyle:{
            color:'rgba(212, 232, 254, 1)',
            fontSize:12,
        },
    },
    legend: {
        align: "left",
        right: '10%',
        top:'10%',
        type:'plain',
        textStyle:{
            color:'rgba(212, 232, 254, 1)',
            fontSize:14,
        },
        icon:'rect',
        itemGap:15,
        itemWidth:25,
        itemHeight:5,
        itemStyle: {
            borderWidth: 0
        },
        // icon:'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
        data: dataArr.map(it => it.name)
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '10%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(108, 166, 219, 1)'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: 'rgba(212, 232, 254, 1)',
                padding: 16,
                fontSize: 14
            },
            formatter: function(data) {
                return data
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#192a44'
            },
        },
        axisTick: {
            show: false,
        },
        data: nameArr
    }],
    yAxis: [{
        name: name,
        nameTextStyle: {
            color: "rgba(212, 232, 254, 1)",
            fontSize: 12,
        },
        // min: 0,
       splitLine: {
        lineStyle: {
          color: 'rgba(108, 166, 219, 0.5)',
          type: 'dashed'
        }
      },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#233653"
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'rgba(212, 232, 254, 1)',
                padding: 16
            },
            formatter: function(value) {
                if (value === 0) {
                    return value
                }
                return value
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: dataArr[0].name,
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 2,
                color: colors[0], // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: colors[0],
            borderColor: "#646ace",
            borderWidth: 0

        },
        tooltip: {
            show: true
        },
        data: dataArr[0].list.map(it => it.value)
    }, {
        name: dataArr[1].name,
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 0,
        smooth: true,
        lineStyle: {
            normal: {
                width: 2,
                color: colors[1], // 线条颜色
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: colors[1],
            borderColor: "#646ace",
            borderWidth: 0

        },
        tooltip: {
            show: true
        },
        data: dataArr[1].list.map(it => it.value)
    }]
};
let len = 0
setInterval(()=>{
    if(len === nameArr.length){
        len = 0
    }
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: len,
    })
    len ++
}, 2000)