var img = [{
    a: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/蓝1.png",
    b: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/蓝2.png",
}, {
    a: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/绿1.png",
    b: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/绿2.png",
}, {
    a: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/黄1.png",
    b: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/黄2.png",
}, {
    a: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/红1.png",
    b: "vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/红2.png",
}];

var value = 1; // >0
//var getname = <#=GRID67.A1$#> ;
//var getvalue = <#=GRID67.B1$#> ;
//var getvalue = [<#=GRID67.C1#>,<#=GRID67.D1#>,<#=GRID67.E1#>,<#=GRID67.F1#>];
var getname =['11','22','33'];
var getvalue =['0','5','6'];
var ydata1 = [];
var ydata2 = [];
for (var i = 0; i < getname.length; i++) {
    if (i <= 3) {
        ydata1.push({
            value: value,
            symbol: 'image://' + img[i].b
        });
        ydata2.push({
            value: getvalue[i],
            symbol: 'image://' + img[i].a
        });
    } else {
        ydata1.push({
            value: value,
            symbol: 'image://' + img[i % 4].b
        });
        ydata2.push({
            value: getvalue[i],
            symbol: 'image://' + img[i % 4].a
        });
    }
}
var txSize= [
    ['21', '25'],
    ['25', '23'],
    ['25', '25'],
    ['25', '20'],
];
option = {
    backgroundColor: "transparent",
    grid: {
        left: "20",
        top: "20",
        bottom: "10",
        right: "20",
        containLabel: true
    },
    tooltip: {
        trigger: "item",
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            inside: false
        },
        data: getname
    }, {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 15,
            textStyle: {
                color: "#888888",
                fontSize: 15,
            },
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: getvalue
    }],
    series: [{
            tooltip: {
                show: false
            },
            z: 4,
            type: "pictorialBar",
            symbolSize: ['20', '20'],
            barWidth: 20,
            symbolRepeat: "fixed",
            symbolMargin: 6,
             label: {
                normal: {
                    color: '#656565',
                    show: true,
                    position: [0, '-26px'],
                    textStyle: {
                        fontSize: 15
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
            },
            data: ydata1,
        },
        {
            z: 6,
            type: "pictorialBar",
            symbolSize: ['20', '20'],
            barWidth: 20,
            animation: true,
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbolClip: true,
            symbolPosition: "start",
            symbolOffset: [0, 0],
            data: ydata2,
        },
        {
            type: "bar"
        },

    ]
};
//return option;