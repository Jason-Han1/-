function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                    }
                }
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                    }
                }
            });
        }

    }
    return dataArr;
}
option = {
  title: {
    text: '费用占比',
    left: 0,
  },
  graphic: {
    elements: [
      {
        type: 'text',
        top: 'center',
        left: 'center',
        style: {
          text: '19999',
          textAlign: 'center',
          fill: '#333333',
          fontSize: 36,
        },
      },
      {
        type: 'text',
        top: '40%',
        left: 'center',
        style: {
          text: '费用',
          textAlign: 'center',
          fill: '#000000',
          fontSize: 16,
          fontWeight: 'normal',
        },
      },
    ],
  },
  series: [
    {
      name: 'Email',
      type: 'pie',
      radius: ['60%', '70%'],
      avoidLabelOverlap: true,
      emphasis: {
        scale: true,
        scaleSize: 10,
        label: {
          show: true,
          fontSize: 16,
          fontWeight: 600,
        },
        labelLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      label: {
        show: false,
      },
      labelLine: {
        length: 20,
        length2: 40,
        show: true,
        lineStyle: {
          type: 'dashed',
        },
      },
      z: 3,
      data: [
        {
          value: 1048,
          name: 'Email',
          itemStyle: {
            color: '#7893F2',
          },
          label: {
            formatter: '{hr|}{space|}{a|{b}}{space|}{c}{space|}{d}%',
            rich: {
              hr: {
                backgroundColor: '#ffffff',
                width: 11,
                height: 11,
                borderColor: '#7893F2',
                borderWidth: 3,
              },
              space: {
                padding: [0, 8, 0, 0],
              },
              a: {
                color: '#666666',
                fontSize: 12,
              },
            },
          },
          emphasis: {
            labelLine: {
              show: true,
              lineStyle: {
                color: '#7893F2',
              },
            },
          },
        },
        {
          value: 735,
          name: 'Video',
          itemStyle: {
            color: '#32C8F5',
          },
          label: {
            formatter: '{hr|}{space|}{a|{b}}{space|}{c}{space|}{d}%',
            rich: {
              hr: {
                backgroundColor: '#ffffff',
                width: 11,
                height: 11,
                borderColor: '#32C8F5',
                borderWidth: 3,
              },
              space: {
                padding: [0, 8, 0, 0],
              },
              a: {
                color: '#666666',
                fontSize: 12,
              },
            },
          },
          emphasis: {
            labelLine: {
              show: true,
              lineStyle: {
                color: '#32C8F5',
              },
            },
          },
        },
        {
          value: 580,
          name: 'music',
          itemStyle: {
            color: '#3DC6BD',
          },
          label: {
            formatter: '{hr|}{space|}{a|{b}}{space|}{c}{space|}{d}%',
            rich: {
              hr: {
                backgroundColor: '#ffffff',
                width: 11,
                height: 11,
                borderColor: '#3DC6BD',
                borderWidth: 3,
              },
              space: {
                padding: [0, 8, 0, 0],
              },
              a: {
                color: '#666666',
                fontSize: 12,
              },
            },
          },
          emphasis: {
            labelLine: {
              show: true,
              lineStyle: {
                color: '#3DC6BD',
              },
            },
          },
        },
        {
          value: 484,
          name: 'high',
          itemStyle: {
            color: '#5D7092',
          },
          label: {
            formatter: '{hr|}{space|}{a|{b}}{space|}{c}{space|}{d}%',
            rich: {
              hr: {
                backgroundColor: '#ffffff',
                width: 11,
                height: 11,
                borderColor: '#5D7092',
                borderWidth: 3,
              },
              space: {
                padding: [0, 8, 0, 0],
              },
              a: {
                color: '#666666',
                fontSize: 12,
              },
            },
          },
          emphasis: {
            labelLine: {
              show: true,
              lineStyle: {
                color: '#5D7092',
              },
            },
          },
        },
      ],
    },
    {
      name: '不动外圆',
      type: 'pie',
      zlevel: 4,
      silent: true,
      radius: ['80%', '79%'],
      label: {
        show: false,
      },
      data: generateData(100, 25, 20, '#E6E6E6'),
    },
  ],
};
