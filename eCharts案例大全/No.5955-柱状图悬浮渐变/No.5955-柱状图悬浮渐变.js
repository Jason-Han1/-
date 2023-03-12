var xdata = ['0', '2', '4', '6', '8','10','12','14','16','18','20','22','24','26'];
var dataArr = [200,20,0,280,0,0,0,150,520,0,0,100,50,120];
var colorSet = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#08f01b'
}, {
    offset: 1,
    color: '#09eef5'
}]);
var hoverColor=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#EF081A'
}, {
    offset: 1,
    color: '#EBB215'
}])
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
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
          show: true,
         formatter: function(params) {
             return "a："+ params[0].name + "<br/>" + "b：" + params[0].data ;
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
            show: true,
            // alignWithLabel:false,
            // interval:'auto'
        },
        data: xdata
    },

    yAxis: [{
        name: '单位：次',
        type: 'value',
        max: 600,
        axisLabel: {
            formatter: '{value}',
            color: '#95a2aa',
            fontSize: 14
        },
        axisLine: {
            show: true,
            lineStyle: {
                // color: '#95a2aa',
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
        barWidth: 50,
        color: '#00BFFF',
        //stack: '总量',
        itemStyle: {
            normal: {
                color: colorSet
                // barBorderRadius: 10,
            },
            emphasis: {
                color: hoverColor
            }
        },
        data: dataArr
    }, ]
};