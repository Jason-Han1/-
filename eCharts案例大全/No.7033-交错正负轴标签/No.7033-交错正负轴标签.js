var labelRight = {
    position: 'right'
};
option = {
    title: {
        text: '交错正负轴标签',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        position: 'bottom',
        // gridIndex: 0,
        // min: 0,
        minInterval:1,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLabel: {
            formatter: function(value) {
                return value + 2;
            }
        }
    },
    yAxis: [
        {
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: true},
        axisTick: {show: false},
        splitLine: {show: false},
        data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },{
        type: 'category',
        axisLine: {show: false},
        axisLabel: {show: true},
        axisTick: {show: false},
        splitLine: {show: false},
        data: ['1.1', '22', '33', '44', '55', '66', '77', '88', '99', '00']
    }],
    series: [
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                formatter: '{b}'
            },
            itemStyle: {
                     normal: {
                         barBorderRadius: [0, 30, 30, 0],
                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                             var colorList = ['#6bc0fb', '#7fec9d'];
                             return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: params.data.value < 0 ? 'rgb(255,255,255,1)': colorList[params.data.value > 0 ? 0 : 1]
                    }, {
                        offset: 1,
                        color: params.data.value < 0 ? colorList[params.data.value > 0 ? 0 : 1]: 'rgb(255,255,255,1)'
                    }])
                            //  return colorList[params.data.value > 0 ? 0 : 1];
                         },

                     }
                 },
            data: [
                {value: null, label: labelRight},
                {value: 0.5, label: labelRight},
                {value: 0.2, label: labelRight},
                {value: 1, label: labelRight},
                {value: null, label: labelRight},
                {value: 0.2, label: labelRight},
            ]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                formatter: '{b}'
            },
            itemStyle: {
                     normal: {
                         barBorderRadius: [30, 0, 0, 30],
                         color: function(params) {
                             // build a color map as your need.
                             //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);//随机生成颜色         
                             var colorList = ['#6bc0fb', '#7fec9d'];
                             return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: params.data.value < 0 ? 'rgb(255,255,255,1)': colorList[params.data.value > 0 ? 0 : 1]
                    }, {
                        offset: 1,
                        color: params.data.value < 0 ? colorList[params.data.value > 0 ? 0 : 1]: 'rgb(255,255,255,1)'
                    }])
                            //  return colorList[params.data.value > 0 ? 0 : 1];
                         },

                     }
                 },
            data: [
                {value: -0.2, label: labelRight},
                {value: null, label: labelRight},
                {value: null, label: labelRight},
                {value: null, label: labelRight},
                {value: -0.3, label: labelRight},
                {value: null, label: labelRight},
            ]
        }
    ]
};
