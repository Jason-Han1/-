var chartData = [{
        name: '2012',
        value: 80
    },
    {
        name: '2013',
        value: 90
    },
    {
        name: '2014',
        value: 112
    },
    {
        name: '2015',
        value: 85
    },
    {
        name: '2016',
        value: 160
    },
    {
        name: '2017',
        value: 128
    },
    {
        name: '2018',
        value: 150
    }

];

option = {
    title: {
        text: '人数统计'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            console.log(params);
            return +params[0].name + '年<br/>' + params[0].seriesName + ': ' + params[0].value + '人';
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        name: '\n\n\n年',
        offset: 4.5,
        axisLabel: {
            show: true,
            //rotate: 30, //x轴文本倾斜角度
            textStyle: {
                color: '#666',
                fontSize: 16
            },
            formatter: '{value}'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(72, 81, 119, .5)'
            }
        },
        axisTick: {
            show: false //坐标轴小标记
        },
        data: (function(data) {
            var arr = [];
            data.forEach(function(items) {
                arr.push(items.name);
            });
            return arr;
        })(chartData) //载入横坐标数据
    },
    yAxis: {
        type: 'value',
        name: '人数\xa0\xa0\xa0\xa0\xa0\xa0', // \xa0 表示空格
        nameTextStyle: {
            color: '#666',
            fontFamily: 'Simsun',
            fontSize: 16
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#666',
                fontSize: 15
            },
            margin: 10,
            formatter: '{value}'
        },
        axisLine: { //y轴线
            lineStyle: {
                color: 'rgba(72, 81, 119, .4)',
                width: 1
            }
        },
        axisTick: {
            show: false //坐标轴小标记
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(72, 81, 119, .2)', //横向网格线颜色
                width: 1,
                type: 'dashed'
            }
        }
    },
    series: [{
        name: '统计人数',
        type: 'pictorialBar', //象形柱图
        barCategoryGap: '0%',
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#666',
                    fontSize: 15
                }
            }
        },
        //symbol图形类型, 'image://url', 'image://data:image/gif;base64, dataURI', 'path://'
        //symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        //symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        //symbol: 'path://M533,1923s28.173-25.55,47-116.03c12.244-58.84,30.312-47.59,42-3.55,23.118,87.12,32.66,107.68,57,119.58H533Z',
        symbol: 'path://M63.000,299.000 L109.000,299.000 C109.000,299.000 93.667,190.333 98.000,175.000 C102.333,159.667 171.000,98.000 171.000,98.000 L95.000,146.000 C95.000,146.000 84.333,8.667 81.000,-0.000 L72.000,181.000 L-0.000,117.000 C-0.000,117.000 63.667,191.667 69.000,203.000 C74.333,214.333 63.667,288.666 63.000,299.000 Z',
        itemStyle: {
            normal: {
                opacity: 0.8,
                color: function(params) { // 颜色定制显示（按顺序）
                    var colorList = ['#8a9ef3', '#80f1b0', '#4a5eea', '#00a0e9', '#8957a1', '#fffca4', '#ff6692', '#bdffb8', '#ff959f', '#52f1fa', '#00c0ff', '#f29b76'];
                    return colorList[params.dataIndex]
                },
            },
            emphasis: {
                opacity: 1
            }
        },
        data: chartData, //载入数据
        z: 10
    }]
};