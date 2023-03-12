var datas=[{
        name: "大型0",
        value: "120",
        unit:'家'
    }, {
        name: "中型0",
        value: "30",
        unit:'家'
    }, {
        name: "小型0",
        value: "80",
        unit:'家'
    }]
var colorList = ['#0066FF', '#00CC66', '#BB33FF', '#3385FF','#FF3144','#BB33FF','#8D3EFA','#00CC66','#0066FF','#E55D69','#DD4171'];
option = {
    backgroundColor: "#050F2A",
    legend: {
        orient: 'horizontal',
        bottom: "5%",
        left:'center',
        align:'left',
        icon:'circle',
        width:'60%',
        // data: ['订货通', '企店版', '电商版',],
        itemGap:20,
        textStyle: {
            color: "#fff",
            fontSize: 12
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "数量：" + parms.data.value +parms.data.unit + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    series: [{
        name: '分类占比',
        type: 'pie',
        radius: ['24%', '60%'],
        center: ['50%', '45%'],
        roseType: 'radius',
        startAngle:90,
        clockwise:false,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: false,
        },
        labelLine: {
            show:false,
            length: 1,
            length2: 20,
            smooth: true
        },
        data: datas
    }]
};