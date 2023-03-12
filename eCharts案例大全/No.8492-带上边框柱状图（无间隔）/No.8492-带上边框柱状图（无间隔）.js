var xdata = [1, 2, 3, 4, 5, 6];
var dataArr = [100, 200, 230, 158, 320, 210];
var ydata = [];
var scale = 2;
for (var i = 0; i < dataArr.length; i++) {
    var item = scale;
    ydata.push(item);
};
option = {
    title: {
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: { // 提示框组件
        trigger: 'axis',
        show: true,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return params[0].name + "号杆塔<br>谐振强度" + params[0].data + 'mm';
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '15%',
        containLabel: true,
        show: false // 网格边框是否显示，上和右边框 
    },
    xAxis: {
        name: "杆塔号",
        nameTextStyle: {
            fontSize: 14,
            color: '#bcbcbc'
        },
        nameGap: 30,
        nameLocation: 'middle',
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            color: '#bcbcbc',
            fontSize: 16,
            // margin: 15,
            // formatter: '{value}'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#bcbcbc',
            }
        },
        data: xdata
    },
    yAxis: [{
        name: '单位:mm',
        type: 'value',
        // min: min,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#bcbcbc',
            }
        },
        axisTick: {
            show: true,
            length: 5,
            lineStyle: {
                width: 2
            }
        },
        axisLabel: {
            color: '#bcbcbc',
            fontSize: 16,
            margin: 25,
            formatter: '{value}'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: '#f4f4f6'
            }
        },
    }, ],

    series: [{
        name: '杆塔号',
        type: 'bar',
        stack: '杆塔号',
        barGap: 0.1,
        barCategoryGap: 0.01,
        color: '#00BFFF',
        itemStyle: {
            normal: {
                color: "rgba(143, 216, 101,0.2)"
            }
        },
        data: dataArr
    }, {
        name: '杆塔号',
        type: 'bar',
        stack: '杆塔号',
        // barWidth: '15%',
        barGap: '40%',
        itemStyle: {
            normal: {
                color: 'rgba(143, 216, 101,1)',
            }
        },
        data: ydata
    }, ]
};