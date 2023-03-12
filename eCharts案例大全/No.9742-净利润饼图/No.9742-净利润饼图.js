var dataX = ['数据采集分析',
'供应商模块',
'进货模块',
'制程模块',
'研发模块',
'检测模块',
'实验模块',
'售后模块',
'质量改进',
'BI   模块',
'客户模块',
'系统模块'
];
var dataY = ['685',
'465',
'410',
'356',
'270',
'180',
'150',
'120',
'115',
'100',
'85',
'40'
];
var dataZ = [];
var dataU = ['2976'];
var dataV = ['23.02',
'15.63',
'13.78',
'11.96',
'9.07',
'6.05',
'5.04',
'4.03',
'3.86',
'3.36',
'2.86',
'1.34',
];
var dataW = [];
/*dataX.push('炼化板块');
dataY.push('160.20');
dataU.push('401.98');
dataV.push('64.71');
dataX.push('能源板块');
dataY.push('120.43');
dataU.push('14,560.13');
dataV.push('29.96');
dataX.push('连锁板块');
dataY.push('12.04');
dataU.push('14,560.13');
dataV.push('3');
dataX.push('物流板块');
dataY.push('7.10');
dataU.push('14,560.13');
dataV.push('1.77');
dataX.push('地产板块');
dataY.push('0.5');
dataU.push('14,560.13');
dataV.push('0.37');
dataX.push('其他板块');
dataY.push('2.78');
dataU.push('14,560.13');
dataV.push('0.19');*/



let conver = function(a, b, c) {
    var data = [];

    for (var i = 0; i < a.length; i++) {

        data.push({
            value: b[i],
            name:a[i]+"     "+b[i]+"   ("+c[i]+"%)",
            ln:a[i]
        });

    }
    return data;
};
var dataZ = conver(dataX, dataY,dataV);



var option = {
    title: [{
            text: '总人天',
            subtext: dataU[0] + '人',
           // subtext:{formatter: '{c1}'},
            textStyle: {
                fontSize: 20,
                color: "black"
            },
            subtextStyle: {
                fontSize: 20,
                color: 'black'
            },

            textAlign: "center",
            x: '25.5%',
            y: '45%',
        },

    ],
    backgroundColor:'white',
    tooltip: {
        trigger: 'item',
        textStyle: {
            align: 'left'
        },

       formatter: function(parms) {
            var str = parms.marker + "" + parms.data.ln + "</br>" + "人天：" + parms.value + '人' + "</br>" + "占比：" + parms.percent + "%";
            return str;
        },
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '55%',
        align: 'left',
        top: 'middle',
    },
    series: [{
        name: '人天',
        type: 'pie',
        /*color: function(params) {
            var colorList = [
                '#61A5E8', '#7ECF51', '#FCCE10', '#EECB5F', '#E3935D',
                '#E16757', '#9570E5', '#605FF0', '#F3A43B', '#60C0DD',
                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
            ];
            return colorList[params.dataIndex];
        },*/
        color:['#61A5E8', '#7ECF51', '#FCCE10', '#EECB5F', '#E3935D',
                '#E16757', '#9570E5', '#605FF0', '#F3A43B', '#60C0DD',
                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'],
        radius: ['35%', '60%'],
        center: ['26%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'left'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: dataZ
    }],
}