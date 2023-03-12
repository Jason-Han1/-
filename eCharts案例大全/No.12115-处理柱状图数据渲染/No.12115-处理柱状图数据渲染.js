var xdata = [];
var ydata = [];
var info = [];
var serieData = [];
var color = ["#BC8DEE",
    "#8693F3",
    "#89C3F8", "#89C3F8", "#89C3F8",
    "#F2A695", "#FCC667", "#AEB7F9",
    "#748BFA"
];
var datas = [{
        num: 24,
        yaoxing_name: "凉性",
        zcq_name: "北京"
    },
    {
        num: 34,
        yaoxing_name: "凉性",
        zcq_name: "河北"
    }, {
        num: 64,
        yaoxing_name: "凉性",
        zcq_name: "长春"
    },

    {
        num: 44,
        yaoxing_name: "温性",
        zcq_name: "北京"
    },
    {
        num: 24,
        yaoxing_name: "温性",
        zcq_name: "河北"
    }, {
        num: 64,
        yaoxing_name: "温性",
        zcq_name: "长春"
    },

    {
        num: 44,
        yaoxing_name: "花性",
        zcq_name: "北京"
    },
    {
        num: 24,
        yaoxing_name: "花性",
        zcq_name: "河北"
    }, {
        num: 64,
        yaoxing_name: "花性",
        zcq_name: "长春"
    }
];
var charsData = [];
var proName = [];

for (var i = 0; i < datas.length; i++) {
    xdata.push(datas[i].yaoxing_name);
    proName.push(datas[i].zcq_name)
}
xdata = [...new Set(xdata)];
proName = [...new Set(proName)];
for (var k = 0; k < proName.length; k++) {
    info[k] = []
}
    for (var l = 0; l<xdata.length; l++) {
        for (var j=0;j<datas.length;j++) {
            if (datas[j].yaoxing_name == xdata[l]){
                info[proName.indexOf(datas[j].zcq_name)][l] = datas[j].num
            }
        }
    }
    console.log(info, 8888)
for (var q = 0; q < info.length; q++) {
    serieData.push({
        type: 'bar',
        barGap: 0,
        name: proName[q],
        data: info[q]
    })
}
 //console.log(99,serieData)
option = {
    color: color,
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
            type: 'category',
            data: xdata
        },
        //辅助x轴
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: xdata
        }
    ],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} 分'
        }
    }],
    series: serieData
};