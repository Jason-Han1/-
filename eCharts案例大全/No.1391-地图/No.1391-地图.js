var mapData = echarts.getMap('china').geoJson;
var data = [];
var cpdata = [];
mapData.features.forEach((item) => {
    var value = Math.floor(Math.random() * 100);
    data.push({
        name: item.properties.name,
        value: value,
    });
    cpdata.push({
        name: item.properties.name,
        value: [item.properties.cp[0], item.properties.cp[1], value],
    });
});
console.log(data);
option = {
    backgroundColor:"#222",
    title: {
        text: '地图',
    },

    geo: {
        map: 'china',
        itemStyle: {
            normal: {
                //设置无用 用色块会被map里面覆盖 除非纯色
                areaColor: '#0050af',
                borderWidth: 1,
                borderColor: '#82effc',
                // borderType:'dashed',
                shadowColor: '#82effc',
                shadowBlur: 4,
                // shadowOffsetX: 5,
                // shadowOffsetY: 15,
            },
        },
        emphasis: {
            itemStyle: {
                // areaColor: '#ff0000',
            },
            label: {
                // show:false,
                color: '#ffffff',
            },
        },
    },
    visualMap: {
        show: true,
        type: 'piecewise',
        min: 0,
        max: 100,
        splitNumber: 5,
        inRange: {
            color: ['#313695', '#4575b4', '#abd9e9', '#fdae61', '#a50026'],
        },
    },
    series: [
        {
            type: 'map',
            // map: 'china',
            data: data,
            itemStyle: {
                areaColor: '#A5DCF4', //无数据的颜色
            },
            label: {
                show: false,
                color: '#fff',
                formatter: function (para) {
                    if (para.data && para.data.name && para.data.value) {
                        return para.data.name + ':' + para.data.value;
                    }
                },
            },
        },
        {
            name: '散点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            // colorBy: 'data',
            data: cpdata,
            symbolSize: 10,
            symbol: 'circle',
            labelLine: {
                show: true,
            },
            label: {
                show: false,
                // offset: [0, -30],
                // formatter: function (params) {
                //     return [params.name, params.data.value[2]].join(':');
                // },
            },
            emphasis: {
                // show: true,
                itemStyle: {
                    opacity: 1,
                },
                symbolSize: 30,
                label: {
                    show: true,
                    offset: [0, -20],
                    formatter: function (params) {
                        return [params.name, params.data.value[2]].join(':');
                    },
                },
            },
            showEffectOn: 'emphasis', //高亮的时候
            itemStyle: {
                color: '#ff0000',
                // shadowColor: '#013C62',
                // shadowBlur: 1,
                // shadowOffsetX: 5,
                // shadowOffsetY: 15,
                opacity: 0.3,
            },
        },
    ],
};
let _t = -1;
setInterval(() => {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
        dataIndex: (_t - 3) % data.length,
    });
    _t++;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: _t % data.length,
    });
}, 2000);
