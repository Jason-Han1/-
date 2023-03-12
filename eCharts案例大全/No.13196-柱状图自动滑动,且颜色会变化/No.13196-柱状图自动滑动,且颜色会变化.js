//myChart.showLoading();
var colorList = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#06DBF5' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#00d386' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
// var specialColor = {
//     type: 'linear',
//     x: 0,
//     y: 0,
//     x2: 0,
//     y2: 1,
//     colorStops: [{
//         offset: 0,
//         color: '#FEDD3D' // 0% 处的颜色
//     }, {
//         offset: 1,
//         color: '#F99901' // 100% 处的颜色
//     }],
//     globalCoord: false // 缺省为 false
// }
var option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['八矿回旋车场', '建许路口', '北汴路南站', '城南三路东站', '科技路南站',
            '六矿', '沁园小区', '伟太公司', '森林半岛', '凤鸣路站', '河南城建学院',
            '冬勤路北站', '豫美面粉公司', '平煤中心站', '建东站','济南站'
        ],
        // axisTick: {
        //     alignWithLabel: true
        // }
        axisLine: {
            lineStyle: {
                color: 'black'

            }
        },
        axisLabel: {
            interval: 0,
            rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei'
            }
        },
    },

    yAxis: {
        type: 'value',
        axisLine: {
            // show: false,
            lineStyle: {
                color: 'black'
            }

        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        axisLabel: {

        }
    },

    series: [{
        name: '',
        type: 'bar',
        barWidth: '40%',
        // label:{
        //     normal:{
        //         show:true,
        //         formatter: function(v) {
        //             var val = v.data;
        //             if (val === 0) {
        //                 return '';
        //             }
        //             return val;
        //         },
        //         color: '#fff'
        //     }
        // },
        itemStyle: {
            color: function(params) {
                // if (params.name == '建许路口') {
                //     return specialColor;
                // } else {
                //     return colorList;
                // }
                return colorList;
            },
            //barBorderRadius: 15,
        },
        emphasis:{
            itemStyle:{
                color:'#FBB419'
                
            }
            
        },
        data: [12000, 10000, 8000, 8000, 6000, 6000, 6000, 5377, 2000, 1760, 1325, 1200, 1000, 1000, 1000]
    }]
};

var app = {
    currentIndex: -1,
};
/*setInterval(function() {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    //console.log(app.currentIndex);
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });


}, 1000);*/