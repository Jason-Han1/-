let xLabel = ['3.26', '3.27', '3.28', '3.29', '3.30', '3.31']
let goToSchool = ["40", "60", "22", "85", "50", "40"]
let goOutSchool = ["33", "68", "12", "65", "30", "60"]

option = {
    backgroundColor:'#000237',
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
            show: false,
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#fff',
                fontSize: 12
            },
            formatter: function(data) {
                return data
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: xLabel
    }],
    yAxis: [{
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#233653'
            },
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '今日',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize:10,
        lineStyle: {
            normal: {
                width: 4,
                color: "#6c50f3", // 线条颜色
            },
        },
        itemStyle: {
            color: "#6c50f3",
            borderWidth:3,
            borderColor:"#fff"
        },
        label:{
            show:true,
        },
        data: goToSchool
    }, {
        name: '近7日',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize:10,
        lineStyle: {
            normal: {
                width: 4,
                color: "#00ffff", // 线条颜色
            },
        },
        itemStyle: {
            color: "#00ffff",
            borderWidth:3,
            borderColor:"#fff"
        },
         label:{
            show:true,
        },
        data: goOutSchool
    }]
};
