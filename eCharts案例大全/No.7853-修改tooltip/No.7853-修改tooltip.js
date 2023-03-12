const bShow = true;
const toolTitleC = "font-size:12px; margin-bottom: 4px;";
const toolCricBg = "background: currentColor;display: inline-block;width: 6px;height: 6px;border-radius: 6px;margin-right: 4px;";
const toolLi= "list-style-type: none;line-height: 20px; height: 16px; width: 33.3%; float: left; border-radius: 0;";

option = {
    color: ['#45CCF9', '#FFA240', '#5572F9', '#FFC740', '#3FFA7E', ' #FF2800'],
    title: {
        show: false
    },
    tooltip: {
        show: bShow,
        trigger: 'axis',
        // renderMode: 'richText',
        position: [0, 0],
        confine: false,
        textStyle: {
            color: '#333',
            // fontSize: 9
        },
        backgroundColor: '#E7F3F6',

        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },

        extraCssText: 'width: 100%;word-wrap:break-word;box-shadow: 0px 2px 4px  rgba(0,0,0,0.12); background: linear-gradient(to bottom,#FFFFFF, #E7F3F6);',
        formatter: function(params) {
            //console.log(params);
            var list = '';
            // const toolH = '';
            for (let i = 0; i < params.length; i++) {

                let temps = '<li style=\" ' + toolLi + ' \" ><span  style=\" ' +
                    'color: ' + params[i].color + ';' + toolCricBg +
                    ' \" ></span>' +
                    params[i].seriesName + ': ' + params[i].data +
                    '</li>';
                list = list + temps;
            }
            toolH = '<div  style=\" ' + toolTitleC + ' \" >' + params[0].name + '</div>' +
                '<ul class=\" clearfix \">' + list + '</ul>';
            return toolH;
        },
    },
    legend: { //通过点击legend（图例）控制哪些系列不显示
        show: true,
        left: 14,
        top: 16,
        padding: [0, 8],
        itemGap: 8,
        itemWidth: 5, //图形宽度 默认25
        itemHeight: 5, //图形宽度 默认14
        textStyle: { //文字通用样式
            // fontSize: 9
        },
        icon: 'circle', //默认显示矩形
        data: ['客户指标', '行业最高值', '行业最低值', '行业均值', '行业中位数']
    },
    grid: {
        show: false,
        // left: 16,
        // right: 16,
        // bottom: 16,
        left: 8,
        right: 8,
        bottom: 4,
        top: 72,
        containLabel: true
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#DDDDDD'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#666',
                // fontSize: 10
            }
        },
        data: ["201901", "201801", "201701", "201601"]
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999',
                // fontSize: 9
            },
            formatter: function(value, index) {
                // 格式化成月/日，只在第一个刻度显示年份
                var texts = value / 1000;
                if (index === 0) {
                    texts = 0;
                } else {
                    texts = texts + 'k';
                }
                return texts;
            }
        },
        axisTick: {
            length: 8,
            lineStyle: {
                color: "transparent",
            }
        },
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: '#f0f0f0'
            }
        }
    },
    series: [{
            name: '客户指标',
            type: 'bar',
            barWidth: 4,
            barGap: '120%',
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                }
            },
            data: [5000, 20000, 36121, 10342]
        },
        {
            name: '行业最高值',
            type: 'bar',
            barWidth: 4,
            barGap: '120%',
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                }
            },
            data: [5134, 22100, 3563, 23225]
        },
        {
            name: '行业最低值',
            type: 'bar',
            barWidth: 4,
            barGap: '120%',
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                }
            },
            data: [12321, 42140, 54312, 8741]
        },
        {
            name: '行业均值',
            type: 'bar',
            barWidth: 4,
            barGap: '120%',
            itemStyle: {
                normal: {
                    barBorderRadius: 4,
                }
            },
            data: [2345, 7521, 9631, 53451]
        },
        {
            name: '行业中位数',
            type: 'bar',
            barWidth: 4,
            barGap: '120%',
            itemStyle: {
                normal: {
                    barBorderRadius: 4, // barBorderRadius: [30, 30, 0, 0],
                }
            },
            data: [4213, 7842, 13513, 68901]
        }
    ]
};