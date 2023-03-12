var color = ['#EDA328', '#DA6D1A', '#EDA328', '#FFFFFF', '#F16624']
var data = [
    ['建设银行', 8],
    ['工商银行', 28],
    ['农业银行', 14],
    ['兰州银行', 21],
    ['甘肃银行', 30],

];

option = {
    dataset: [{
        source: data
    }],
    title: {
        text: '贷款余额按银行分布',
        left: 'center',
        top: 16
    },
    grid: {
        show: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        type: 'category',
        position: "bottom",
        boundaryGap: ['20%', '20%'], // 两侧留白
        nameLocation: "end",
        axisLine: {
            lineStyle: {
                color: "#c4c4c4" // 坐标轴颜色
            }
        },
        axisLabel: {
            color: "#231a19", // x轴名称颜色
            fontWeight: "bolder",

        },
        splitLine: {

            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    yAxis: {

        max: 40,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [{
        name: 'scatter',
        type: 'scatter',
        symbolSize: function(data) {
            console.log(Math.sqrt(data[1]) / 5e2)
            return data[1] * 2
        },
        itemStyle: {
            color: function(param) {
                return color[param.dataIndex];
            }
        }
    }]
};