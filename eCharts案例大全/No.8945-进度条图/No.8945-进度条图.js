var totalCost = [100, 100, 100, 100, 100]; //背景色比例
var visits = [9.3, 11.2, 14.1, 30, 35]; //数值
var barcolor = ["#3879d9", "#3879d9", "#bad040", "#59d1ca", "#e65151"]
var grade = ['江铃牌', '长安牌', '五十铃牌','五菱牌','丰田'];
var data = {
    grade: grade,
    totalCost: totalCost,
    visits: visits,
};
option = {
    grid: {
        top: "5%",
        left: "30%",
        right: "20%",
        bottom: "5%",
    },
    tooltip: {
        show: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        type: 'category',

        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                align: 'right',
                fontSize: 40,
                color: 'black'
            },
        },
        data: data.grade
    }, {
        type: 'category',

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 40,
                color: 'black',
            },
            formatter: function(data, index) {
                // console.log(data)
                return data +'%'
            },
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: data.visits
    }, ],
    series: [{

            type: 'bar',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#111233',
                    barBorderRadius: 5,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '35%',
            silent: true,
            data: data.totalCost
        },
        {

            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    // color:barcolor,
                    color: function(params) {
                        var num = barcolor.length;
                        return barcolor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            barWidth: '35%',

            data: data.visits
        }

    ]
};