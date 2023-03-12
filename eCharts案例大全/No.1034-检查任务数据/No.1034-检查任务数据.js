var color = [
    'rgba(220, 145, 255, 1)',
    'rgba(245, 154, 108, 1)',
    'rgba(139, 111, 255, 1)',
    'rgba(120, 187, 255, 1)',
    'rgba(124, 168, 255, 1)',
];
var seriesData = [
    { "name": "治安单位", "value": 1243 },
    { "name": "内保单位", "value": 629 },
    { "name": "人管单位", "value": 1629 },
    { "name": "国保单位", "value": 3425 },
    { "name": "禁毒单位", "value": 2824 }
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
            // type: "scroll",
            orient: 'vertical',
            left: '74%',
            align: 'auto',
            top: '35%',
            itemWidth: 12,             // 图例图形宽度
            itemHeight: 12,
            itemGap: 20,
            textStyle: {
                align: 'left',
                verticalAlign: 'middle',
                rich: {
                    name: {
                        color: 'rgba(59, 61, 69, 1)',
                        fontSize: 16,
                        width: 100,
                        padding: [0,0,0,10]
                    },
                    value: {
                        color: 'rgba(29, 145, 245, 1)',
                        fontSize: 18,
                        fontFamily: 'DIN',
                        fontWeight: 500
                    },
                },
            },
            data: seriesData,
             formatter: (name) => {
                if (seriesData.length) {
                    const item = seriesData.filter((item) => item.name === name)[0];
                    return `{name|${name} }{value| ${item.value}}`;
                }
            },
            x: "left"
          },
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
                borderWidth: 5,
                borderColor: '#fff'
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