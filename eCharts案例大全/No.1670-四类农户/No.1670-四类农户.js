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
const colorArr = ['#0265fe', '#20D3ABee', '#FDD56Aee','#ff7b23','#097b9a'];
const colorAlpha = ['#0265fe', '#20D3AB88', '#FDD56A88','#ff7b23','#097b9a'];
var seriesdata1 = [
    {
        name: '建档立卡贫困户',
        value: 1350,
        percent:5.01,
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
        name: '低保户',
        value: 265,
        percent:5.12,
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
        name: '贫困残疾人家庭',
        value: 138,
        percent:1.87,
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
    {
        name: '分散供养特困人员',
        value: 138,
        percent:0.87,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[3],
                shadowColor: colorArr[3],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[3],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[3],
                    },
                ]),
            },
        },
    },
     {
        name: '非四类农户',
        value: 1128,
        percent:87,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[4],
                shadowColor: colorArr[4],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[4],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[4],
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
    backgroundColor: '#09252e',
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
            show: false,
         //   text: '{a|四类对象}{b|数量}{c|占比}',
              text: '{a|四类对象}{c|占比}',
            top: '45%',
            left: '55%',
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
                        align: 'right',
                        fontSize: 14,
                        color: 'rgba(255,255,255,1)',
                        width: 5,
                        padding: [0, 0, 0, 185],
                    },
                },
            },
        },
        {
            text: '{b|总确认户数：}' + m,
            left: '70%',
            top: '35%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '15',
                color: '#FFFFFF',
                textAlign: 'center',
                rich: {
                    a: {
                        fontSize: '24',
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(15,70,54,0.2)',
                        borderColor: 'rgba(15,70,54,1)',
                        borderWidth: 1,
                        padding: [6, 6, 6, 6],
                        shadowColor:'rgba(15,70,54,1)',
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
        left: '55%',
        itemGap: 15,
        itemWidth: 15,
        itemHeight: 10,
        data: seriesdata1,
        formatter: function (name) {
            console.log(objData[name])
            return '{a|' + name+'(' + objData[name].value.toFixed(0)+')' + '}{b|' +  '}{c|' + objData[name].percent + '%}';
        },
        textStyle: {
            rich: {
                a: {
                    align: 'left',
                    fontSize: 12,
                    color: 'rgba(255,255,255,1)',
                    width: 30,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 10],
                },
                b: {
                    align: 'center',
                    fontSize: 12,
                    color: 'rgba(255,255,255,1)',
                    width: 5,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 40],
                },
                c: {
                    align: 'right',
                    fontSize: 12,
                    color: 'rgba(255,255,255,1)',
                    width: 5,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 120],
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
            show: false,
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
