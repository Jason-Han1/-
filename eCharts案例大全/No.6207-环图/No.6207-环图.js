var seriesData = [{
    name: "专业一",
    value: "2154"
}, {
    name: "专业二",
    value: "3854"
}, {
    name: "专业三",
    value: "3515"
}, {
    name: "专业四",
    value: "3515"
}, {
    name: "专业五",
    value: "3854"
}, {
    name: "专业六",
    value: "2154"
}];
var legendData = ["专业一", "专业二", "专业三", "专业四", "专业五", "专业六"]
var colorList = ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'];
option = {
    title: {
        text: '19046',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#ffc72b'
        }
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
        show: false
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['35%', '45%'],
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
            formatter: (params) => {
                console.log(params);
                return '{b| ' + params.value + '}  ' + '\n{c|' + params.percent.toFixed(0) + '%}'
            },
            rich: {
                b: {
                    padding: [-60, -70, -20, -60],
                    fontSize: 23,
                    color: "#ffb400"
                },
                c:{
                    padding: [-90, -55, -20, -45],
                    fontSize: 18,
                    color: "#49dff0"
                }
            }
        },
        labelLine: {
            normal: {
                length: 50,
                length2: 60,
                lineStyle: {
                    width: 1,
                    color: '#0b5263'
                }
            }
        },
        data: seriesData
    }]
};