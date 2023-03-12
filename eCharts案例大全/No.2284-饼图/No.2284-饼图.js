var colorList = [
    '#407AFB',
    '#1791FF',
    '#36B0FE',
    '#6635EF',
    '#73ACFF',
    '#41CBAB',
    '#7BDD43',
    '#FFC653',
    '#FF6519',
    '#EE3939',
    '#FFAFDA',
    '#00FFFF',
];
const colorArr = ['#49CCFFee', '#20D3ABee', '#FDD56Aee'];
const colorAlpha = ['#49CCFF88', '#20D3AB88', '#FDD56A88'];
var seriesdata1 = [
    {
        name: '在线',
        value: 1350,
        percent:77.01,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[0],
                shadowColor: colorArr[0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[0],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[0],
                    },
                ]),
            },
        },
    },
    {
        name: '离线',
        value: 265,
        percent:15.12,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[1],
                shadowColor: colorArr[1],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[1],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[1],
                    },
                ]),
            },
        },
    },
    {
        name: '未检测',
        value: 138,
        percent:7.87,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[2],
                shadowColor: colorArr[2],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[2],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[2],
                    },
                ]),
            },
        },
    },
];

var objData = array2obj(seriesdata1, 'name');

//将合计值转换为数组
var h = '1753';
arr = h.split('');
m = '';

for (i = 0; i < arr.length; i++) {
    m += '{a|' + arr[i] + '}';
    if (i != arr.length - 1) {
        m += '  ';
    }
}

option = {
    backgroundColor: '#051F54',
    grid: {
        x: '30%',
        y: '3',
        x2: '5%',
        y2: '5%',
        borderWidth: 1,
        borderColor: '#f0f0f0',
    },
    title: [
        {
            show: true,
            text: '{a|设备状态}{b|数量}{c|占比}',
            top: '45%',
            left: '60%',
            textStyle: {
                rich: {
                    a: {
                        align: 'center',
                        fontSize: 14,
                        color: 'rgba(255,255,255,1)',
                        width: 20,
                        padding: [0, 0, 0, 20],
                    },
                    b: {
                        align: 'center',
                        fontSize: 14,
                        color: 'rgba(255,255,255,1)',
                        width: 5,
                        padding: [0, 0, 0, 60],
                    },
                    c: {
                        align: 'center',
                        fontSize: 14,
                        color: 'rgba(255,255,255,1)',
                        width: 5,
                        padding: [0, 0, 0, 45],
                    },
                },
            },
        },
        {
            text: '{b|摄像头总数：}' + m,
            left: '70%',
            top: '20%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '15',
                color: '#FFFFFF',
                textAlign: 'center',
                rich: {
                    a: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(56,89,255,0.2)',
                        borderColor: 'rgba(56,211,255,1)',
                        borderWidth: 1,
                        padding: [6, 6, 6, 6],
                        shadowColor: 'rgba(56,211,255,1)',
                        shadowBlur: 3,
                        borderRadius: 3,
                    },
                    b: {
                        fontSize: '20',
                        fontWeight: 'bold',
                        padding: [6, 6, 6, 6],
                        color: '#FFFFFF',
                    },
                },
            },
        },
    ],
    legend: {
        show: true,
        //icon: 'circle',
        orient: 'vertical',
        top: '50%',
        left: '60%',
        itemGap: 15,
        itemWidth: 15,
        itemHeight: 10,
        data: seriesdata1,
        formatter: function (name) {
            console.log(objData[name])
            return '{a|' + name + '}{b|' + objData[name].value.toFixed(0) + '}{c|' + objData[name].percent + '%}';
        },
        textStyle: {
            rich: {
                a: {
                    align: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,1)',
                    width: 30,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 10],
                },
                b: {
                    align: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,1)',
                    width: 5,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 40],
                },
                c: {
                    align: 'center',
                    fontSize: 14,
                    color: 'rgba(255,255,255,1)',
                    width: 5,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 50],
                },
            },
        },
    },
    series: {
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['25%', '50%'],
        clockwise: true,
        //startAngle: 50,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function (params) {
                    return colorList[params.dataIndex];
                },
            },
        },
        label: {
            show: true,
            position: 'outside',
            formatter: function (data) {
                //console.log('data',data)
                return (
                    '{name|' +
                    data.name  + ':'+
                    '}' +
                    ' {value|' + 
                    data.percent.toFixed(0) +
                    '%}'
                );
            },
            rich: { 
                name: {
                    fontSize: 14, 
                    color: '#ffffff',
                },
                value: {
                    fontSize: 14, 
                    color: '#ffffff',
                },
            },
        },
        labelLine: {
            show: false,
            normal: {
                length: 10,
                length2: 20,
                align: 'right',
                lineStyle: {
                    width: 1,
                },
            },
        },
        data: seriesdata1,
        seriesIndex: 0,
    },
};

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
