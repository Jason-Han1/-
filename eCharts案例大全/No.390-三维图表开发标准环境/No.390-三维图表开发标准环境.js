//readme
//作者Ceichaos

//调试器
var config = (app.config = {
    test1: '1',
    test2: '2',
    test3: '3',
});

//三维坐标
//////////////////////
myChart.setOption({
    //  grid3D
    grid3D: {
        axisLine: {
            lineStyle: {
                color: '#ffffff',
                opacity: 1,
            },
        },
      
        environment: '#333333',
    },

    // 三维坐标轴
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [],
});
