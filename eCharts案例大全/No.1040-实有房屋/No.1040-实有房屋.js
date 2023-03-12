var color = [
    'RGBA(247, 108, 65, 1)',
    'RGBA(127, 191, 253, 1)',
    'RGBA(255, 210, 0, 1)',
    'RGBA(92, 106, 235, 1)',
];
var seriesData = [
    { "name": "出租", "value": 8770 },
    { "name": "群租", "value": 5587 },
    { "name": "自住", "value": 3800 },
    { "name": "空关", "value": 19811 }
]
option={
        color: color,
        grid: {
            top: '15%',
            left: 0,
            right: '1%',
            bottom: 5,
            containLabel: true,
        },
        legend: [
          {
            type: "scroll",
            orient: 'vertical',
            left: '74%',
            align: 'auto',
            top: '45%',
            icon: "circle",
            itemWidth: 10,             // 图例图形宽度
            itemHeight: 10,
            itemGap: 20,
            textStyle: {
                align: 'left',
                verticalAlign: 'middle',
                rich: {
                    name: {
                        color: 'rgba(59, 61, 69, 1)',
                        fontSize: 16,
                    },
                    value: {
                        color: 'rgba(29, 145, 245, 1)',
                        fontSize: 18,
                        fontFamily: 'DIN',
                        fontWeight: 500
                    },
                },
            },
            data: seriesData.slice(0,2),
             formatter: (name) => {
                if (seriesData.length) {
                    const item = seriesData.filter((item) => item.name === name)[0];
                    return `{name|${name} }{value| ${item.value}}`;
                }
            },
            x: "left"
          },
          {
            type: "scroll",
            orient: 'vertical',
            left: '86%',
            align: 'auto',
            top: '45%',
            icon: "circle",
            itemWidth: 10,             // 图例图形宽度
            itemHeight: 10,
            itemGap: 20,
            textStyle: {
                align: 'left',
                verticalAlign: 'middle',
                rich: {
                    name: {
                        color: 'rgba(59, 61, 69, 1)',
                        fontSize: 16,
                    },
                    value: {
                        color: 'rgba(29, 145, 245, 1)',
                        fontSize: 18,
                        fontFamily: 'DIN',
                        fontWeight: 500
                    },
                },
            },
            data: seriesData.slice(2,4),
            formatter: (name) => {
                if (seriesData.length) {
                    const item = seriesData.filter((item) => item.name === name)[0];
                    return `{name|${name} }{value| ${item.value}}`;
                }
            },
            x: "right",
          }
        ],
        tooltip: {
          show: true
        },
        series: [
          {
            type: "pie",
            radius: ["30%", "45%"],
            center: ["50%", "50%"],
            hoverAnimation: true,
            z: 10,
            itemStyle: {
              normal: {
                borderWidth:0,
                shadowBlur: 15,
                shadowColor: 'rgba(29, 145, 245, 0.4)'
              }
            },
            label: {
              show: false
            },
            data: seriesData,
            labelLine: {
              show: false
            }
          }
        ]
      }