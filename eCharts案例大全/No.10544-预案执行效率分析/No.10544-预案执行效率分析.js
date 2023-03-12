var xdata = ['0min', '2min', '4min', '6min', '8min','10min','12min','14min','16min','18min','20min'];
var dataArr = [48,58, 110, 180, 200,170,140,80,40,35];
var colorSet = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: 'rgba(3,149,180,.8)'
}, {
    offset: 1,
    color: 'rgba(0,28,111,.8)'
}]);
option = {
    backgroundColor: '#000',
    title: {
        // text: 'Sales Revenue of CAN-LAX 2016-2017',
        textStyle: {
            fontSize: 14
        }
    },

    tooltip: { // 提示框组件
        trigger: 'axis',
        show:true,
        formatter:function(params){
            return params[0].name + "<br>"  + params[0].data + '次'  ;
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true,
        show: false // 网格边框是否显示，上和右边框 
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: xdata
    },

    yAxis: [{
        // name: '水量（t）',
        type: 'value',
        max: 250,
        axisLabel: {
            formatter: '{value}次',
            color: '#65F5FD',
            fontSize: 14
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                // type: 'dashed',
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisTick: {
            show: false
        },
    }, ],

    series: [{
        // name: '水量',
        type: 'bar',
        barGap: 0.1,
        barCategoryGap: 0.01,
        color: '#00BFFF',
        //stack: '总量',
        itemStyle: {
            normal: {
                color: colorSet
                // barBorderRadius: 10,
            }
        },
        data: dataArr
    }, ]
};