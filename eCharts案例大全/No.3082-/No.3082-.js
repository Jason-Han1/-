// var getnhname = <#=GRID27.A1$#>;
var getnhname = ['教师','学生'];
// var getnhvalue = <#=GRID27.B1$#>;
var getnhvalue = [60,20];
// var getflname = <#=GRID26.A1$#>;
var getflname = ['水费','电费','宿舍'];
// var getflvalue =<#=GRID26.B1$#>;
var getflvalue = [11,55,66];

// 圆环值

var data1 = [];
for (var i = 0; i < getflname.length; i++) {
    data1.push({ name: getflname[i], value: getflvalue[i] });
}

// 环内
var data2 = [];
for (var i = 0; i < getnhname.length; i++) {
    data2.push({ name: getnhname[i], value: getnhvalue[i] });
}

// 圆环颜色

var color = [
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#4A92FF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#75D0FF', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#7488FF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#7464F2', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#54C7C0', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#93FFF3', // 100% 处的颜色
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#EAC093', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#FDC48D', // 100% 处的颜色
            },
        ],
    },
];

// 内环边框
var innerColor = ['#AFD4FF', '#F1C191'];
var dataConsump = [];
var dataType = [];

for (var i = 0; i < data1.length; i++) {
    dataConsump.push({
        value: data1[i].value,
        name: data1[i].name,
        itemStyle: {
            normal: {
                borderWidth: 6,
                shadowBlur: 5,
                color: color[i],
                borderColor: color[i],
                shadowColor: color[i],
            },
        },
    });
}

for (let i = 0; i < data2.length; i++) {
    dataType.push({
        name: data2[i].name,
        value: data2[i].value,
        itemStyle: {
            shadowBlur: 7,
            borderWidth: 2,
            color: '#010818',
            borderColor: innerColor[i],
            shadowColor: innerColor[i],
        },
        // selected: i === 0
    });
}

var seriesOption = [
    {
        name: '分类',
        type: 'pie',
        radius: [0, 46],
        center: ['50%', '50%'],
        label: {
            position: 'inner',
            color: '#C1F6FF',
            formatter: function (params) {
                return params.percent + '%' + '\n' + '\n' + params.name;
            },
        },
        selectedMode: true,
        selectedOffset: 5,
        itemStyle: {
            borderColor: 'black',
            borderWidth: 2,
        },
        data: dataType,
    },

    {
        name: '',
        type: 'pie',
        radius: [62, 67],
        center: ['50%', '50%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#66799D',
                    padding: [-2, -4, 0, -4],
                    fontSize: 13,
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data1.length; i++) {
                            total += data1[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return '{percent|' + percent + '%}\n{hr|}\n{name|' + params.name + '}';
                        } else {
                            return '';
                        }
                    },

                    rich: {
                        name: {
                            color: '#656565',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'left',
                        },

                        hr: {
                            borderColor: 'rgba(102, 121, 157, 1)',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0,
                        },

                        percent: {
                            color: 'rgba(193, 246, 255, 1)',
                            fontSize: 14,
                            padding: [6, 5, 6, 0],
                            align: 'center',
                        },
                    },
                },
                labelLine: {
                    length: 40,
                    length2: 0,
                    show: true,
                    lineStyle: {
                        color: 'rgba(102, 121, 157, 1)',
                    },
                },
            },
        },
        data: dataConsump,
    },
];

option = {
    //backgroundColor: '#010818',
    color: color,
    tooltip: {
        show: false,
    },
    legend: {
        show: false,
        icon: 'circle',
        orient: 'horizontal',
        // x: 'left',
        data: getflname,
        right: 340,
        bottom: 150,
        align: 'right',
        textStyle: {
            color: '#C1F6FF',
        },
        itemGap: 20,
    },
    toolbox: {
        show: false,
    },
    series: seriesOption,
};

// let container3 = document.querySelector('#HHH177');

// let echartObj3 = echarts2.init(container3);

// echartObj3.setOption(option3)
