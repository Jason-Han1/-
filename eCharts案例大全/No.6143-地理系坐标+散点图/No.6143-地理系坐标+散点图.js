option = {
    title: {
        text: "国内疫情"
    },
    tooltip: {
        trigger: 'item'
    },
    geo: {
        map: 'china',
        silent: 'true', //
        itemStyle: { // 定义样式
            normal: { // 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: { // 高亮状态下的样式
                areaColor: '#2a333d'
            }
        }
    },
    visualMap: {
        type: 'piecewise', // 连续型
        min: 0, // 值域最小值，必须参数
        max: 200, // 值域最大值，必须参数
        calculable: true, // 是否启用值域漫游
        inRange: {
            color: ['red', "blue"]
            // 指定数值从低到高时的颜色变化
        },
        textStyle: {
            color: '#fff' // 值域控件的文本颜色
        }

    },
    series: [{
        name: '确诊数量',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [{
            name: '海门',
            value: [121.15, 31.89, 100],
            visualMap:false,
            itemStyle:{
                normal:{
                    color:"#FF0000"
                }
            }

        }, {
            name: '鄂尔多斯',
            value: [109.781327, 39.608266, 120]
        }, {
            name: '招远',
            value: [120.38, 37.35, 130]
        }, {
            name: '舟山',
            value: [122.207216, 29.985295, 140]
        }]
    }]
};
