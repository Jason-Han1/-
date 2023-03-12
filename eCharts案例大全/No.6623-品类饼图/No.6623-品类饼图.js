var uploadedDataURL = "/asset/get/s/data-1596700628466-30OzUNFXj.png";

var seriesData = [{
    name: "内三元",
    value: "180000"
}, {
    name: "外三元",
    value: "70000"
}, {
    name: "土杂猪",
    value: "33000"
}, {
    name: "其他",
    value: "10000"
}];



var legendData = ["内三元", "外三元", "土杂猪", "其他", ]
var colorList = ['#FF4F4F', '#3375ED', '#129DFC', '#EDFE29'];
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#0f2c70' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#091732' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    title: {
      
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "数量：" + parms.data.value + "头</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        show: false,
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['30%', '70%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{b}{d}%',
            rich: {

            },
            backgroundColor: {
                
                image:uploadedDataURL

            },
            borderColor: '#1B2131',
            borderWidth:0.4,
            padding: [10, 10, 10, 10]
        },
        labelLine: {
            show:false,
        },

        data: seriesData
    }]
};