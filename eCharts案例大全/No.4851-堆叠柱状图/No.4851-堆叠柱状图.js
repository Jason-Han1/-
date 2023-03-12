var data1 = [20, 14, 20, 10, 20, 30, 20, 30, 20, 30, 8, 6]; //出租车
var data2 = [9, 20, 9, 10, 12, 20, 18, 20, 13, 20, 17, 9]; //地铁
var data3 = [9, 10, 9, 20, 30, 20, 19, 20, 19, 22, 15, 17]; //公交
var data4 = [9, 12, 9, 10, 20, 20, 29, 20, 19, 10, 10, 8]; //有轨电车
var datacity = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var option = {
    color: ['#083E6B', '#CCBD40', '#4EDABE', '#00A7FE'],
    backgroundColor: "#000",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    legend: {
        data: ["出租车", "地铁", "公交", "有轨电车"],
        top: "10%",
        itemGap: 30,
        textStyle: {
            color: "#ffffff",
            fontSize: 16
        }
    },
    yAxis: [{
        type: "value",
        name: "",
        nameTextStyle: {
            color: "#fff",
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
            fontSize: 14
        },
        axisLine: {
            lineStyle: {
                color: '#FFFFFF',
                fontSize: 14
            },
        },
    }],
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#FFFFFF',
                fontSize: 14
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#fff',
                fontSize: 16
            },
        },
        data: datacity,
    }],
    series: [{
            name: '出租车',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            data: data1
        },
        {
            name: '地铁',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data2,
        },
        {
            name: '公交',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data3,
        },
        {
            name: '有轨电车',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data4,
        }
    ]
};