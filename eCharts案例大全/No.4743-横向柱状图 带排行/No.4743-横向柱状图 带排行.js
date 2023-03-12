// 不好意思，不带排行

var index = 0;
var colorList = ['#6395f9', '#6395f9', '#6395f9', '#6395f9'];

let yData = ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市']
let yValue = [1234,868, 672, 491, 367, 251, 142, 103, 85, 34, 5]
option = {
    title:{
        text:'销量（百万）',
        left:'50%',
        bottom:'0%',
        textStyle:{
            color:'#a1a1a1',
            fontFamily:'Microsoft YaHei',
            fontWeight:400
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
        grid: {
          containLabel: true,
        },
    xAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color:'#ebebeb'
            }
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: yData,
        axisLabel: {
            fontSize: 14,
            align: 'right',
            color: '#333',
        }
    },
    series: [{
            z: 2,
            name: '学生',
            type: 'bar',
            data: yValue.map((item, i) => {
                return {
                    value: item,
                    itemStyle: {
                        color:'#6395f9'
                    }
                };
            }),
            label: {
                show: true,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        }

    ]
};