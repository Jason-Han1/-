var dataAxis = ['南昌转运中心', '广州转运中心', '杭州转运中心', '宁夏转运中心', '兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']
var data = [220, 182, 191, 234, 290, 330, 310,330, 480, 490];
var yMax = 500;
var dataShadow = Array(data.length).fill(yMax);


var showNum = 8
var extraData = [['其他透析中心',260],]

option = {
    // title: {
    //     text: '特性示例：渐变色 阴影 点击缩放',
    //     subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    // },
    tooltip: {},
    grid: {
        width: '60%',
        height:'50%',
        left: '30%',
        // containLabel: true
    },
    xAxis: {
        type: 'value',
        show:false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type:'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            // rotate: 30,
            // align: 'left',
            width: 500,
            margin: 20,
            textStyle: {
                fontSize: 25,
                color: '#999'
            }
        },
        data: dataAxis.slice(0,showNum),
    },
    series: [
        { // For shadow
            type: 'bar',
            barMaxWidth: 50,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.05)',
                    barBorderRadius: 15,
                }
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow.slice(0,showNum),
            animation: false,
        },
        {
            type: 'bar',
            barMaxWidth: 50,
            label: {
                normal: {
                    color: '#53d9ff',
                    fontSize: 25,
                    fontWeight: 'bold',
                    offset: [0,2],
                    position: 'right',
                    show: true
                },
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#4364ea'},
                            {offset: 1, color: '#53d9ff'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data.slice(0,showNum)
        }
    ]
};



setInterval(function (){
    var da = data.shift()
    data.push(da)
    var daA = dataAxis.shift()
    dataAxis.push(daA)
    option.series[1].data = data.slice(0,showNum)
    option.yAxis.data = dataAxis.slice(0,showNum)
    myChart.setOption(option);
}, 2100);