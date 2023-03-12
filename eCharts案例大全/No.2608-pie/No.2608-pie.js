//内层数据
function _dashed() {
    let dataArr = [];
    for (var i = 0; i < 200; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 3,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,118,239,0.5)',
                        opacity: 0,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 3,
                itemStyle: {
                    normal: {
                        color: '#027383',
                        // borderWidth: 1,
                        // borderColor: "rgb(0,118,239,1)"
                    },
                },
            });
        }
    }
    return dataArr;
}
var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
// 外层color
var color2 = [
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
        {
            offset: 0,
            color: 'rgba(0, 97, 226, 0.2)', // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(0, 213, 255, 0.9)', // 100% 处的颜色
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 0, [
        {
            offset: 0,
            color: 'rgba(0, 97, 226, 0.2)', // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(0, 213, 255, 0.9)', // 100% 处的颜色
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(0, 97, 226, 0.2)', // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(0, 213, 255, 0.9)', // 100% 处的颜色
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(0, 97, 226, 0.2)', // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(0, 213, 255, 0.9)', // 100% 处的颜色
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: 'rgba(0, 97, 226, 0.2)', // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(0, 213, 255, 0.9)', // 100% 处的颜色
        },
    ]),
];
var data = [];
var myData = [
    {
        name: '火车',
        value: 20,
    },
    {
        name: '飞机',
        value: 10,
    },
    {
        name: '客车',
        value: 30,
    },
    {
        name: '轮渡',
        value: 40,
    },
    {
        name: '轮渡',
        value: 40,
    },
    {
        name: '轮渡',
        value: 40,
    },
];
for (var i = 0; i < myData.length; i++) {
    data.push(
        {
            value: myData[i].value,
            // name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    // shadowBlur: 20,
                    borderColor: color[i],
                    shadowColor: color[i],
                    borderRadius: 0,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: color2[i],
                },
            },
        },
        {
            value: 2,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0,
                },
            },
        }
    );
}
var seriesOption = [
     {
            name: '访问来源',
            type: 'pie',
            radius: [90, 98],
            labelLine: {
                length: 30,
            },
            label:{
                show:false
            },
            itemStyle:{
                
            },
            data: _dashed()
        },
    {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [105, 125],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
            },
        },
        data: data,
    },
];
option = {
    backgroundColor: '#0A2E5D',
    color : color,
    tooltip: {
        show: false,
    },
    legend: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: seriesOption,
};
