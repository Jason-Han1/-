var m2R2Data = [{
        value: 55,
        stNum: 200,
        legendname: '主观题',
        name: "主观题",
        itemStyle: {
            color: "#8d7fec"
        }
    },
    {
        value: 45,
        stNum: 300,
        legendname: '客观题',
        name: "客观题",
        itemStyle: {
            color: "#5085f2"
        }
    },
];


option = {
    title: [
       {
        text: '分值占比',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        x:'center',
        top:'5%'
    }
    ],
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.legendname + "</br>" +
                "数量：" + parms.data.stNum + "道</br>" +
                "分值占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '0',
        align: 'left',
        top: '0',
        textStyle: {
            color: '#8C8C8C'
        },
        height: 250
    },
    series: [{
        name: '',
        type: 'pie',
        bottom: '0',
        center: ['50%', '50%'],
        radius: ['0%', '65%'],
        clockwise: true, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'outter',
                formatter: function(parms) {
                    return parms.data.legendname
                }
            }
        },
        labelLine: {
            normal: {
                length: 10,
                length2: 10,
                smooth: true,
            }
        },
        data: m2R2Data
    }]
};