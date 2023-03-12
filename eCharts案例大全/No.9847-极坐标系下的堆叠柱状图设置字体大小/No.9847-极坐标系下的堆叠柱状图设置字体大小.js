option = {
    angleAxis: {
        splitLine: {
            show: false
        },
    },
    radiusAxis: {
        type: 'category',
        nameTextStyle:{
            fontSize: 1 //设置字体大小无效
        },
        data: ['周一', '周二', '周三', '周四'],
        z: 10,
       
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [94464, 914346, 3242346, 2342634],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#2378f7' },                  
                        { offset: 0.7, color: '#0be7cd' },                
                        { offset: 1, color: '#13dcca' }                   
                    ],
                ),
            },
        },
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }],
    textStyle: {
        color: "black",
    }
};