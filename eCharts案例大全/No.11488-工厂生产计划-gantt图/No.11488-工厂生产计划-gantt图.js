let data = [{
        "list": [{
                "colorNum": 0,
                "endTime": '10',
                "name": "在线",
                "quantity": 10,
                "startTime": '0',
            },
            {
                "colorNum": 1,
                "endTime": "20",
                "name": "离线",
                "quantity": 10,
                "startTime": "12",
            },
            {
                "colorNum": 2,
                "endTime": "30",
                "name": "故障",
                "quantity": 10,
                "startTime": "25",
            },
            {
                "colorNum": 3,
                "endTime": '55',
                "name": "繁忙",
                "quantity": 10,
                "startTime": '50',
            },

        ],
        "plant": ""
    },
    



]
// let start_ = "0",
//     end_ = "60"; //自定义时间
let seriesData = [];
let yAxisData_plant = []; //工厂名

data.forEach((item, index) => {
    yAxisData_plant.push(item.plant);
    let bgColor;
    item.list.forEach((listItem, listIndex) => {
        switch (listItem.colorNum) {
            case 0:
                bgColor = 'rgba(0,187,255,.4)';
                break;
            case 1:
                bgColor = 'rgba(80,227,194,.4)';
                break;
            case 2:
                bgColor = 'rgba(255,115,115,.4)';
                break;
            case 3:
                bgColor = 'rgba(255,207,107,.4)';
                break;
            default:
                bgColor = 'rgba(0,187,255,.4)'
        }
        // let startTime = 0;
        // let endTime = 60;
        seriesData.push({
            name: listItem.name,
            value: [
                index,
                listItem.startTime,
                listItem.endTime,
                listItem.quantity,
            ],
            itemStyle: {
                normal: {
                    color: bgColor
                }
            }
        });
    })

});

option = {
    backgroundColor: '#26263C',
    tooltip: {
        formatter: function(params) {
            //console.log(params)
            return params.marker + params.name + params.value;
        }
    },

    legend: {
      show: true,
    //   icon: "circle",
      itemWidth: 16,
      itemHeight: 16,
      itemGap: 13,
      data: ['在线', '离线', '故障', '繁忙'],
      x: 'center',
      y: 'center',
      textStyle: {
        fontSize: 12,
        color: "#fff",
      },
    },
    grid: {
        top: 48,
        left: 100,
        right: 50,
        bottom: 50,
        height: 300,
    },

    xAxis: {
        type: '',
        min: 0,
        max: 60,
        scale: true,
        position: 'buttom',
        splitNumber: 6,
       axisLabel: {
            show: true,
            interval: 0,
            color: '#fff',
        },
        axisLine: {
            lineStyle: {
                color: '#38384d',
                width: 1, //这里是为了突出显示加上的
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(233,233,233,0.1)'
            }
        },

        axisTick: {
            lineStyle: {
                color: '#38384d'
            }
        }
    },
    yAxis: {
        axisLine: {
            onZero: false,
            show: false
        },
        
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ffffff'
            },
            fontSize: 14
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ''
            }
        },
        inverse: false,
        data: yAxisData_plant
    },
    series: [
                {
        type: 'custom',
        renderItem: function(params, api) {
            var categoryIndex = api.value(0);
            var start = api.coord([api.value(1), categoryIndex]);
            var end = api.coord([api.value(2), categoryIndex]);
            var height = api.size([0, 1])[1] * 0.6;
            var rectShape = echarts.graphic.clipRectByRect({
                x: start[0],
                y: start[1] - 5,
                width: end[0] - start[0],
                height: 10
            }, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            return rectShape && {
                type: 'rect',
                shape: rectShape,
                style: api.style()
            };

        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: seriesData
    },
        {
            show: false,
        type: 'radar',
        renderItem: function(params, api) {
            var categoryIndex = api.value(0);
            var start = api.coord([api.value(1), categoryIndex]);
            var end = api.coord([api.value(2), categoryIndex]);
            var height = api.size([0, 1])[1] * 0.6;
            var rectShape = echarts.graphic.clipRectByRect({
                x: start[0],
                y: start[1] - 5,
                width: end[0] - start[0],
                height: 10
            }, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            return rectShape && {
                type: 'rect',
                shape: rectShape,
                style: api.style()
            };

        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: seriesData
    },

    ]
}