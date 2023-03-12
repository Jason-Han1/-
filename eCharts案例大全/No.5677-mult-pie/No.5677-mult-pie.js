let data = [0.05, 0.04, 0.1, 0.1, 0, 0, 0];
// 断点展示曲线，0时不显示
let newData = delZero(data);
function delZero (ary) {
            for (let i= 0; i<ary.length; i++) {
                if (parseFloat(ary[i]) === 0) {
                    ary[i] = null
                }
            }
            console.log(ary)
            return ary
        }

let xAxisData = ['1日', '2日', '3日', '4日', '5日', '6日', '7日'];
option = {
    backgroundColor: '#035',
    title: {
        text: "",
        textStyle: {
            align: 'center',
            color: '#fff'
        },
        left: 'center'
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params, ticket, callback) {
            for (var i = 0; i < params.length; i++) {
                if (parseFloat(params[i].value) > 0) {
                    return params[i].name + ': ' + params[i].value;
                } else {
                    return params[i].name + ': ' + 0;
                }
            }
        }
    },
    grid: {
      left: '20%'  
    },
    xAxis: {
        name: "日期",
        type: "category",
        nameLocation: 'center',
        axisTick: {
            show: true,
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            interval: 0,
            formatter: null,
            rotate: -50,
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        },
        splitLine: {
            show: false
        },
        bottom: '3%',
        boundaryGap: true,
        data: xAxisData
    },
    yAxis: {
        name: "不良率",
        type: "value",
        boundaryGap: true,
        left: '15%',
        axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            color: '#ffffff',
            formatter: null
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        }
    },
    series: [{
        name: "",
        type: "line",
        symbolSize: 8,
        label: {
            show: true,
            color: "#fff",
            position: "top",
            formatter: function(params) {
                if (params.value > 0) {
                    return params.value;
                } else {
                    return '';
                }
            }
        },
        barGap: '0',
        itemStyle: {
            normal: {
                color: '#248ff7', // 0% 处的颜色
                barBorderRadius: [30, 30, 30, 30]
            }
        },
        barMaxWidth: 20,
        data: newData
    }]
}