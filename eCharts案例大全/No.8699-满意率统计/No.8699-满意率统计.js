// 样式颜色定义，数据定义
let bgColor = "#3D649B";
let fillColor = '#27CCFC';
let emptyColor = '#EDDA04';
let fontColor = '#fff';
let scale = 1;

let echartData = [{
    title: '高压满意率',
    data: [{
            value: 2154,
            name: "满意"
        },
        {
            value: 3854,
            name: "不满意"
        }
    ]
}, {
    title: '低压满意率',
    data: [{
            value: 5102,
            name: "满意"
        },
        {
            value: 3854,
            name: "不满意"
        }
    ]
}, ]

// 整理图表series
let seriesData = [];
echartData.forEach((v, i) => {
    let dataList = v.data;
    dataList[0].label = {
        normal: {
            rich: {
                a: {
                    color: fontColor,
                    align: 'center',
                    fontSize: 24 * scale,
                    fontWeight: "bold"
                },
                b: {
                    color: fontColor,
                    align: 'center',
                    fontSize: 16 * scale
                },
                c: {
                    color: fontColor,
                    align: 'center',
                    fontSize: 16 * scale,
                    fontWeight: "bold",
                    padding: [0, 0, 4 * scale, 0]
                }
            },
            formatter: function(params) {
                let title = v.title || '';
                let percent = params.percent.toFixed(2).split('.');
                return "{b|" + title + "}\n\n" + "{a|" + percent[0] + "}" + "{c|." + percent[1] + "%}";
            },
            position: 'center',
            show: true,
            textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                color: '#fff'
            }
        }
    };
    let seriesItem = {
        type: 'pie',
        radius: [70, 80],
        center: [(i + 1) * 30 + '%', '50%'],
        clockWise: false,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 0,
                shadowColor: '#203665'
            }
        },
        hoverAnimation: false,
        data: dataList
    };
    seriesData.push(seriesItem)
})
// option
option = {
    backgroundColor: bgColor,
    color: [fillColor, emptyColor],
    legend: {
        show: true,
        top: 30,
        right: 30,
        icon: 'rect',
        itemWidth: 12 * scale,
        itemHeight: 12 * scale,
        textStyle: {
            color: fontColor
        },
        data: ['满意', '不满意']
    },
    series: seriesData
}