var resData = [{year:"2012",yearAmount:100},
            {year:"2013",yearAmount:200},
            {year:"2014",yearAmount:10},
            {year:"2015",yearAmount:90},
            {year:"2016",yearAmount:190}]
var data = {year:[],num:[]};
for(var i=0;i<resData.length;i++){
    data.year.push(resData[i].year);
    data.num.push(resData[i].yearAmount);
}
option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#dcdcdc' // 0% 处的颜色
                    },  {
                        offset: 1,
                        color: '#dcdcdc' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },

    },
    grid: {
        top: '12%',
        left: '8%',
        right: '5%',
        bottom: '5%',
        // containLabel: true
    },
    legend:{
        show:true,
        right:'5%',
        top:'3%',
        itemWidth:20,
        itemHeight:10,
        itemStyle: {
            color: "#fff",
            borderColor: "#427DF3",
            borderWidth: 2
        },
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#dcdcdc'
            },
        },
        splitLine:{
            show: false,
            lineStyle:{
                color: '#dcdcdc',
                type:'dashed',
            }
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#606266',
                margin: 15,
            },
            // formatter: function(data) {
            //     return data + "年"
            // }
        },
        axisTick: {
            show: false,
        },
        data: data.year
    }],
    yAxis: [{
        min: 0,
        minInterval: 1,
        splitLine:{
            show: true,
            lineStyle:{
                color: '#d9d9d9',
                type:'dashed',
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#cdcdcd',

            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '人员',
        type: 'line',
        smooth: true,
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 10,
        lineStyle: {
            normal: {
                color: "#427DF3", // 线条颜色
            }
        },
        itemStyle: {
            color: "#fff",
            borderColor: "#427DF3",
            borderWidth: 2
        },
        label: {
            normal: {
                show: false
            }
        },
        tooltip: {
            show: true
        },
        areaStyle: { //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#427DF3"
                    },
                    {
                        offset: 1,
                        color: "#fff"
                    }
                ], false)
            }
        },
        data: data.num
    }]
};