dataNew = {
    proneArea: [{
        title: '影响户数',
        value: [{
                name: '高易发区',
                value: 30
            },
            {
                name: '中易发区',
                value: 130
            },
            {
                name: '低易发区',
                value: 600
            }
        ]
    }, {
        title: '影响人口',
        value: [{
                name: '高易发区',
                value: 50
            },
            {
                name: '中易发区',
                value: 150
            },
            {
                name: '低易发区',
                value: 620
            }
        ]
    }, {
        title: '影响财产',
        value: [{
                name: '高易发区',
                value: 60
            },
            {
                name: '中易发区',
                value: 110
            },
            {
                name: '低易发区',
                value: 50
            }
        ]
    }]
}
let dataArray = []
dataNew.proneArea.map(item => {
    let datachild = []
    item.value.map(i => {
        datachild.push(i.value)
    })
    let obj = {
        name: item.title,
        type: 'bar',
        barWidth: '15%',
        itemStyle: {
            normal: {
                color: item.title === '影响户数' ? '#f5804d' : item.title === '影响人口' ? '#8bd46e' : item.title === '影响财产' ? '#3E78F5' : '',
                barBorderRadius: 12,
            },
        },
        data: datachild
    }

    dataArray.push(obj)
})

var option = {
    backgroundColor: '#323a5e',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'
        },
        formatter: function(params) {
            let XName
            let seriesName = ''
            params.map(item =>{
                XName = item.name
                seriesName += item.seriesName+item.value
                console.log(item)
            })

            return XName+'</br>'+seriesName
        },
        textStyle: {
            fontSize: 15
        },
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '0%',
        top: '10%',
        containLabel: true
    },
    legend: {
        right: 10,
        top: 12,
        textStyle: {
            fontSize: 14,
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
    xAxis: {
        type: 'category',
        data: ['高易发区', '中易发区', '低易发区'],
        axisLine: {
            lineStyle: {
                color: 'white'

            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei'
            }
        },
    },

    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        axisLabel: {}
    },
    series: dataArray
};