var oData = {
    thisyear: [30, 20, 10, 40, 20, 10, 30, 40],
    lastyear: [90, 60, 60, 80, 70, 50, 60, 70],
    yz: ["二氧化硫", "氮氧化物", "烟尘", "总磷", "总氮", "化学需氧量", "VOCS", "氨氮"],
    legend:['2020', '2021']
};
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color: ['#1EB88D', '#B4DF8E'],
    legend: {
        data: oData.legend,
        right: '18',
    },
    grid: {
        top: '3%',
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        type: 'category',
        data: oData.yz,
        inverse: true,
        axisLabel: {
            color: '#4E4E4E',
            fontSize: 18
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        name: oData.legend[0],
        data: oData.lastyear,
        type: 'bar',
        barWidth: 15,
        itemStyle: {
            barBorderRadius: 9,
        }
    }, {
        name: oData.legend[1],
        data: oData.thisyear,
        type: 'bar',
        barWidth: 15,
        itemStyle: {
            barBorderRadius: 9,
        },
        label: {
            show: true,
            offset: [10, 0],
            position: 'right',
            textStyle: {
                color: '#686868',
                fontSize: 16
            },
            formatter: function(oItem) {
                var nIdx = oItem.dataIndex; //获取索引求各项的百分比
                return (oItem.value / oData.lastyear[nIdx] * 100).toFixed(2) + '%';
            }
        }
    }]
};