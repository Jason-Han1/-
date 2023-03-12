option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
   
    tooltip: {
        trigger: 'axis'
    },
    legend: {
 
        data: ['A商品', 'B商品', 'C商品']
    },
    grid: {
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {

        x: 'center',
        type: 'value',

    },
    series: [{
        name: 'A商品',
        type: 'line',
        smooth: true,
        data: [18, 36, 65, 70, 78, 40, 33]
    }, {
        name: 'B商品',
        type: 'line',
        smooth: true,
        data: [12, 50, 51, 55, 70, 30, 20]
    }, {
        name: 'C商品',
        type: 'line',
        smooth: true,
        data: [10, 30, 31, 50, 40, 20, 10]
    }]
};