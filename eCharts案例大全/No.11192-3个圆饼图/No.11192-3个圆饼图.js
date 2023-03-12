var ydata = [
    {name: '国家学生体质健康标准',value: 75},
    {name: '音乐成绩',value: 86},
    {name: '美术成绩',value: 73}
];

var fontColor = '#fff';
var totalScore = 100; // 总分
var colors = ['#E38DFF', '#C451EA', '#FEFF97', '#E7E906', '#FFAAAA', '#FF5252'];

var option = {
    backgroundColor: '#012A5C',
    legend: {
        show: false
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.marker + params.name + ' : ' + params.value;
        }
    },
    title: [
        titleFn(ydata[0].name, '7%'),
        titleFn(ydata[1].name, '45%'),
        titleFn(ydata[1].name, '75%')
    ],
    series: [
        seriesFn(['20%', '50%'], ydata[0].name, ydata[0].value, [colors[0], colors[1]]),
        seriesFn(['50%', '50%'], ydata[1].name, ydata[1].value, [colors[2], colors[3]]),
        seriesFn(['80%', '50%'], ydata[2].name, ydata[2].value, [colors[4], colors[5]])
    ]
};

function titleFn(text, left) {
    return {
        text: text,
        left: left,
        top: '68%',
        textStyle: {
            color: fontColor,
            fontSize: 25,
            fontWeight: 'normal'
        }
    }
}

/**
 * @param {Array} center
 * @param {String} dataName
 * @param {String} dataVal
 * @returns Object
 */
function seriesFn(center, dataName, dataVal, colors) {
    return {
        type: 'pie',
        radius: ['20%', '30%'],
        center: center || '',
        // 取消指示线
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            color: function(e) {
                return colors && colors[e.dataIndex]
            }
        },
        data: [{
            name: dataName || '',
            value: dataVal || '',
            label: {
                show: true,
                formatter: '{c}',
                position: 'center',
                fontSize: 50,
                fontWeight: 'bold',
                padding: [15, 0, 0, 0], // 没有完全居中, 固增加padding
                color: fontColor
            }
        }, {
            value: (totalScore - dataVal),
            name: '总分',
            tooltip: {
                // show: false
                formatter: function(params) {
                    return params.marker + params.name + ' : ' + totalScore;
                }
            },
            label: {
                show: false
            },
            // 是否开启鼠标hover放大效果
            // hoverAnimation: false
        }]
    }
}