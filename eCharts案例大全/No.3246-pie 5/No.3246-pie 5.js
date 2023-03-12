var uploadedDataURL = "/asset/get/s/data-1600484669369-9Phqr8RSQ.png";

var seriesData = [{
    name: "大白",
    value: "40000"
}, {
    name: "长大",
    value: "53000"
}, {
    name: "杜洛克",
    value: "40000"
}, {
    name: "约克猪",
    value: "10000"
}, {
    name: "二元",
    value: "40000"
}, {
    name: "三元",
    value: "60000"
}, {
    name: "大长",
    value: "10000"
}, {
    name: "PIC",
    value: "20000"
}];
var legendData1 = ["大白", "长大", "杜洛克", "约克猪"]
var legendData2 = ["二元", "三元", "大长","PIC"]
var colorList = ['#0066FF', '#2E2EE6', '#4400CC', '#00AACC', '#9BBF30', '#E60000', '#92368D', '#BF9926'];
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#000F44' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#000B3B' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    // title: {
    //     text: '品种',
    //     x: '56%',
    //     y: 'center',
    //     textStyle: {
    //         fontSize:40,
    //         color: '#fff'
    //     }
    // },
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
    graphic: [
        {
            z:4,
            type: 'image',
            id: 'logo',
            left: '45%',
            top: '46.5%',
            z: -10,
            bounding: 'raw',
            rotation: 0 ,//旋转
            origin: [64.5, 32.5],//中心点
            scale: [1.0, 1.0],//缩放
            style: {
                image: uploadedDataURL,
                // width: 129,
                // height: 65,
                opacity: 1
            }
        }],
    series: [{
        type: 'pie',
        z: 3,
        center: ['50%', '50%'],
        radius: ['30%', '37%'],
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
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                // hr: {
                //     backgroundColor: 't',
                //     borderRadius: 3,
                //     width: 3,
                //     height: 3,
                //     padding: [3, 3, 0, -12]
                // },
                a: {
                    color:'#fff',
                    padding: [-10, -80, 0, -80]
                }
            }
        },
        labelLine: {
            normal: {
                length: 40,
                length2: 90,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: seriesData
    }]
};