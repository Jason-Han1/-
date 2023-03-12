let data = [{
    value:32,
    itemStyle:{
        color:"#F9374D"
    }
}, 24, 15, 12, 6];
let titlename = ['西安市', '威阳市', '延安市', '宝鸡市', '南洛市'];
let valdata = data;
console.log(data)
option = {
    backgroundColor: '#081534',
    title: {
        text: '本省外市TOP5',
        show: true,
        textStyle: {
            color: '#ffffff',
            fontSize: 18,
            fontWeight:"500"
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(c) {
            let d;
            for (let i = 0; i < c.length; i++) {
                if (c[i].axisIndex === 0) {
                    d = c[i].axisValue + ' : ' + c[i].data + '%';
                }
            }
            return d;
        },
        // axisPointer: {
        //     type: 'shadow'
        // }
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        max: 4,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }, {
        show: true,
        inverse: true,
        data: valdata,
        max: 4,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [
        {
            type: 'pictorialBar',
            yAxisIndex: 0,
            barWidth: 10,
            // symbol: 'path://d="M150 130 L130 50 L170 50 Z"',
            symbol: 'path://d="M70 90 L130 100 L130 80 Z"',
            itemStyle: {
                emphasis: {
                    opacity: 1
                }
            },
            data: data
        },
        {
            symbol: 'circle',
            symbolSize: 16,
            symbolOffset: ['50%', 0],
            symbolPosition: 'end',
            type: "pictorialBar",
            yAxisIndex: 1,
            data: data
        }
    ]
};