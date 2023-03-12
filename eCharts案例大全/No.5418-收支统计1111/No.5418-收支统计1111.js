var data = {
 
        area: ['赛乌素镇',
            '团结乡', 
            '大同夭乡',
            '城关镇',
            '五股泉乡',
            '大库联乡',
            '张皋镇',
            '店子镇',
            '鄂尔栋镇',
            '驻县委办纪检组',
            '驻政府办纪检组',
            '驻县人大机关纪检组',
            '驻县政协机关纪检组',
            '驻发改局纪检组',
            '驻财政局纪检组',
            '驻住建局纪检组',
            '驻教育局纪检组',
            '驻人社局纪检组',
            '驻公安局纪检组',
            '驻人民法院纪检组',
            '驻检察院纪检组'],
        legend: ['未审核', '复核退回', '已审核'],
        data: [
            [1320, 1302, 901,750,212,451,129,181,129,181,129,181,129,181,129,181,129,181,129,181,129],
            [320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301],
            [320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301,320, 302, 301]
        ]
    

}
var colors = ['#F56679',  '#FBD657', '#8CDF6C', '#FBD657', '#F56679', '#E07BCE', '#9D50E0', '#634FDA']
var option = {
    backgroundColor: '#00265f',
    title: {
        text: '分单位督查统计',
        left: '35%',
        top: 15,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(0, 255, 233,0)',
            },
        },
    },
    color: colors,
    legend: {
        top: 50,
        left: 200,
        itemWidth: 10,
        itemHeight: 10,
        // padding: [5, 10],
        textStyle: {
            fontSize: 14,
            color: '#96A4F4',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        top: '13%',
        containLabel: true
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        data: data.area
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: [

    ]
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '45%',
        label: {
            show: false,
            position: 'insideRight'
        },
        data: data.data[i]
    })
}
myChart.setOption(option);