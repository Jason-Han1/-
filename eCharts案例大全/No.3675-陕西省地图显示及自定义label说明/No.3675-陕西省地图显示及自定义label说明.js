var uploadedDataURL = "/asset/get/s/data-1619083078195-CJlZQhLD4.json";


// myChart.showLoading();
$.get(uploadedDataURL, function(geoJson) {
    console.log(111, geoJson)
    echarts.registerMap('SHANXI', geoJson)
})

let mapData = [{
    name: '西安市',
    value: 22
}, {
    name: "咸阳市",
    value: 1.9
}, {
    name: "安康市",
    value: 13.9
}, {
    name: "榆林市",
    value: 231.9
}, {
    name: "咸阳市",
    value: 1.9
}]
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            let {
                name,
                value
            } = params.data
            let style1 = `<style>
                .tooltip_box{
                  padding:6px 20px 6px 10px;
                  margin:-10px;
                  border-radius:2px;
                  min-width:200px;
                }
                .tooltip_name{
                  color:'#fff';
                  padding-left:5px;
                  padding-top:6px;
                  padding-bottom:6px;
                  background:rgba('4,12,26,1')
                }
                .tooltip_value{
                  background:rgba(20,61,100,0.9);
                  color:'#fff';"
                  height:50px;
                  padding:15px 20px 20px 10px;
                  margin:0px -15px 0px -4px;
                }
                .font-size-18{
                  font-size:18px;
                }
                .bold{
                  font-weight:bold;
                }
                </style>`
            let nameBox =
                `<div class='tooltip_name font-size-18'>` + name + `</div>`
            let valueBox =
                `<div class="tooltip_value"">` +
                '' +
                `总量：<span class="font-size-18 bold">` +
                value +
                `</span>` +
                ` 亿 m³</div>`
            return (
                style1 +
                `<div class='tooltip_box'>` +
                nameBox +
                valueBox +
                `</div>`
            )
        }
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    visualMap: {
        // show: false,
        min: 0,
        max: 100,
        itemWidth: 10,
        align: 'left',
        bottom: 35,
        right: 120,
        formatter: function(value) {
            return value + ' 亿 m³' // 范围标签显示内容。
        },
        // text: [this.maxData + 'm³', this.minVal + 'm³'],
        textGap: 30,
        realtime: true,
        calculable: false,
        inRange: {
            color: ['#001a54', '#35cee5']
        },
        textStyle: {
            color: '#FFF'
        }
    },
    series: [{
        name: '',
        type: 'map',
        mapType: 'SHANXI', // 自定义扩展图表类型
        layoutCenter: ['40%', '55%'],
        // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
        layoutSize: 710,
        label: {
            show: true,
            color: '#ecf6ff',
            fontSize: '12',
            align: 'right',
            position: 'right',
            verticalAlign: 'middle',
            offset: [90, 80]
        },
        itemStyle: {
            borderWidth: '2',
            borderColor: '#35a2d3'
        },
        select: {
            itemStyle: {
                areaColor: 'rgba(249,206,57,1)',
                borderWidth: '3',
                borderColor: '#35a2d3'
            }
        },
        emphasis: {
            itemStyle: {
                areaColor: 'rgba(249,206,57,1)'
            }
        },
        data: mapData
    }]
}

// myChart.setOption(option)