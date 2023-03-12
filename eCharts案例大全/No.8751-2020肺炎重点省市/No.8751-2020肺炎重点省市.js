var data = [
    [[278,391,'河南'],[277,219,'湖南'],
    [311,119,'广东'],[200,114,'安徽'],
    [165,111,'重庆'],[162,110,'江西'],
    [111,90,'北京'],[101,69,'上海'],
    [428,51,'浙江'],[142,46,'四川'],
    [88,44,'江苏'],[78,38,'福建'],
    [63,32,'陕西'],[80,21,'云南'],
    [27,10,'天津'],[78,10,'广西'],
    [65,10,'河北'],[12,5,'贵州'],
    [43,4,'黑龙江'],[145,2,'山东']],
];
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    backgroundColor:"#Fff",
    title: {
        // text: '1990 与 2015 年各国家人均寿命与 GDP'
    },
    legend: {
        // right: 10,
        // data: ['1990']
    },
    xAxis: {
        name:'累计检出确诊病例',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        nameTextStyle: {
            fontSize:16,
            padding: [70, 0, 0,-90 ]    // 四个数字分别为上右下左与原位置距离
        }
    },
    yAxis: {
         name:'从武汉流入的潜在感染者数量',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        nameTextStyle: {
            fontSize:16,
            padding: [0, 0, 0,70 ]    // 四个数字分别为上右下左与原位置距离
        },
        scale: true
    },
    series: [{
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            // return data[0]*data[1]/1000
            return Math.sqrt(data[0]*data[1]*30000) / 5e2;
        },
        label: {
            show:false,
            normal: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'inside'
            }
        },
        itemStyle: {
            show:true,
            shadowBlur: 100,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(251, 118, 123)'
            }, {
                offset: 1,
                color: 'rgb(204, 46, 72)'
            }])
        }
    }]
};