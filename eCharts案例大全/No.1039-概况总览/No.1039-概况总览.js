var color = [
    'RGBA(58, 157, 246, 1)',
    'RGBA(246, 186, 58, 1)',
    'RGBA(123, 226, 255, 1)',
    'RGBA(159, 101, 255, 1)',
];
var seriesData = [
    { "name": "区域级", "value": 43888 },
    { "name": "楼栋级", "value": 409811 },
    { "name": "户室级", "value": 9810 },
    { "name": "POI", "value": 108777 }
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
            // orient: 'vertical',
            left: '40%',
            align: 'auto',
            top: '45%',
            // icon: "circle",
            itemWidth: 12,             // 图例图形宽度
            itemHeight: 12,
            itemGap: 20,
            textStyle: {
                align: 'left',
                verticalAlign: 'middle',
                rich: {
                    name: {
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 16,
                        padding: [0,0,10,5]
                    },
                    value: {
                        color: 'rgba(29, 145, 245, 1)',
                        fontSize: 18,
                        fontFamily: 'DIN',
                        fontWeight: 500,
                        padding: [0,0,0,5]
                    },
                },
            },
            data: seriesData,
            //  formatter: (name) => {
            //     if (seriesData.length) {
            //         const item = seriesData.filter((item) => item.name === name)[0];
            //         return `{name|${name}\n}{value| ${item.value}}`;
            //     }
            // },
            formatter: params => {
              for (let a = 0; a < seriesData.length; a++) {
                // seriesData  这个数据中有名称和次数
                if (seriesData[a].name === params) {
                  //两个名称进行对比，取出对应的次数
                  let params1 = params + "\n" + seriesData[a].value; //然后return你需要的legend格式即可
                  let tmp = params1.split("\n");
                  let res = "" + params1;
                  for (let i in tmp) {
                    res = res.replace(tmp[i], "");
                  }
                  return `{name|${res}}{name|${params}}{value| ${"\n" + seriesData[a].value}}`;
                }
              }
            },
            x: "left"
          }
        ],
        tooltip: {
          show: true
        },
        series: [
          {
            type: "pie",
            radius: ["25%", "35%"],
            center: ["20%", "50%"],
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