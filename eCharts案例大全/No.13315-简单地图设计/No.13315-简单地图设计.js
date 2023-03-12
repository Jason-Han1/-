var data = [{
        name: '河北',
        value: 5842304
    },
    {
        name: '广东',
        value: 2662852
    },
    {
        name: '江苏',
        value: 1828578
    },
    {
        name: '陕西',
        value: 938377
    },
    {
        name: '天津',
        value: 378337
    },
    {
        name: '湖南',
        value: 102810
    },
    {
        name: '北京',
        value: 35180
    },
    {
        name: '重庆',
        value: 11130
    }
]; //数据修改
option = {
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                backgroundColor: 'transparent'
            }
        }
    },
    title: {
        show: true, //是否显示标题
        text: '全国用户统计', //标题名称
        left: 'center',
        textStyle: {
            fontSize: 35,
            color: '#000'
        }
    },
    visualMap: {
        show: true, //是否显示图例说明
        min: 0, //图例最小值
        max: 6000000, //图例最大值
        text: ['高', '低'], // 图例文本，默认为数值文本
        color: ["#5b00f5", "#00f5dd"], //颜色区域范围
        left: 'left',
        top: 'bottom',
        calculable: true,
        textStyle: {
            fontSize: 10,
            color: '#000'
        }
    },
    series: [{
        name: '用户数',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                color: 'rgba(255,255,255,0)',
                areaColor: 'rgba(255,255,255,0)',
                borderColor: '#000', //线条颜色
                borderWidth: 1 //线条宽带
            }
        },
        data: data
    }]
}