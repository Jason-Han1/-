app.title = '电影类型';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['动画片', '纪录影片','科教影片','特种影片','故事影片']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['2009','2010','2011','2012','2013','2014','2015','2016']
    },
    series: [
        {
            name: '动画片',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [27,16,24,33,29,40,51,49]
        },
        {
            name: '纪录影片',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [19,16,26,15,18,25,38,32]
        },
        {
            name: '科教影片',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                }
            },
            data: [52,54,76,74,121,52,96,67]
        },
        {
            name: '特种影片',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [4,9,5,26,18,23,17,24]
        },
        {
            name: '故事影片',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [456,526,558,745,638,618,686,772]
        }
    ]
};