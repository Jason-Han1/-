var uploadedDataURL = "https://geo.datav.aliyun.com/areas_v2/bound/110000_full.json";

var seriesdata = [{
        type: 'map',
        map: 'bottomMap',
        aspectScale: 0.75, //长宽比
        left: 'center',
        // right: '35%',
        top: 30,
        width: '60%',
        height: '80%',
        roam: false,
        itemStyle: {
            normal: {
                areaColor: 'rgba(27,28,86,1)',
                borderColor: 'rgba(104,107,194,0.5)',
                borderWidth: 2,
                label: {
                    show: false,
                    color: '#fff',
                }
            }
        },
        silent: true,
    },
    {
        type: 'map',
        map: 'topMap',
        aspectScale: 0.75, //长宽比
        left: 'center',
        // right: '35%',
        top: 10,
        width: '60%',
        height: '80%',
        roam: false,
        itemStyle: {
            normal: {
                areaColor: 'rgba(57,85,245,0.3)',
                borderColor: 'rgba(98,110,255,1)',
                borderWidth: 2,
                label: {
                    show: true,
                    color: '#fff',
                }
            }
        },
        emphasis: {
            label: {
                show: true,
                color: '#fff',
            },
            itemStyle: {
                areaColor: 'rgba(107,155,245,0.3)',
                borderColor: 'rgba(98,110,255,1)',
            }
        },
        markPoint: {
            symbol: function(value, param){
                console.info('value',value);
                console.info('param',param)
            },
            symbolSize: 10,
            data: [{
                name: '丰台区',
                coord: [116.286968,39.863642],
                value: 10
            }],
            itemStyle:{
                color: '#fff'
            }
        },
        data: [{
            name: '怀柔区',
            value: 10
        }]
    }
];


//GDP
var optionMap = {
    backgroundColor: "#0D1B46",
    grid: {
        // left:'2%',
        right: '10%',
        bottom: '3%',
        width: '20%',
        height: '50%'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(data) {
            //console.log(data);
            if (!isNaN(data.value)) {
                return data.name + "：" + data.value;
            }
        },
    },

    series: seriesdata

};

$.get(uploadedDataURL, function(gdMap) {
    echarts.registerMap('topMap', gdMap);
    echarts.registerMap('bottomMap', gdMap);
    myChart.setOption(optionMap, true);
});