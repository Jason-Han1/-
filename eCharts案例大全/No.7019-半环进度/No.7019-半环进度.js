var data = [
    {name: "小黑", value: 88},
    {name: "小白", value: 250},
    {name: "小黄", value: 5438},
    {name: "小七", value: 8848},
    {name: "蜜桃", value: 9527}
];

option = {
    backgroundColor: "#000",
    color:[
        {
            type: 'linear',
            x: 0, 
            y: 0, 
            x2: 0, 
            y2: 1,
            colorStops: [
              {offset: 0, color: 'rgba(249, 155, 146,0.5)'},
              {offset: 1, color: "rgba(249, 155, 146,1)"}
            ]
        },
        {
            type: 'linear',
            x: 0, 
            y: 0, 
            x2: 0, 
            y2: 1,
            colorStops: [
              {offset: 0, color: 'rgba(251, 192, 131,0.5)'},
              {offset: 1, color: "rgba(251, 192, 131,1)"}
            ]
        },
        {
            type: 'linear',
            x: 0, 
            y: 0, 
            x2: 0, 
            y2: 1,
            colorStops: [
              {offset: 0, color: 'rgba(231, 250, 128,0.5)'},
              {offset: 1, color: "rgba(231, 250, 128,1)"}
            ]
        },
        {
            type: 'linear',
            x: 0, 
            y: 0, 
            x2: 0, 
            y2: 1,
            colorStops: [
              {offset: 0, color: 'rgba(7, 248, 164,0.5)'},
              {offset: 1, color: "rgba(7, 248, 164,1)"}
            ]
        },
        {
            type: 'linear',
            x: 0, 
            y: 0, 
            x2: 0, 
            y2: 1,
            colorStops: [
              {offset: 0, color: 'rgba(7, 255, 245,0.5)'},
              {offset: 1, color: "rgba(7, 255, 245,1)"}
            ]
        },
    ],
    polar: {},
    angleAxis: {
        show: false,
        startAngle: 180,
        clockwise: false,
        min: function(value) {
            return value.min >= 1 ? value.min - value.max / 3 : 0
        },
        max: function(value) {
            return value.max * 4;
        }
    },
    radiusAxis: {
        type: 'category',
        axisLabel: {
            show:false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(17, 51, 68, 0.8)"
            }
        },
        data: data.map(function(item){return item.name}),
    },
    series: [
        {
            type: 'bar',
            coordinateSystem: 'polar',
            barWidth: '20%',
            itemStyle: {
                color:  {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                      {offset: 0, color: 'rgba(7, 248, 164,0.5)'},
                      {offset: 1, color: "rgba(7, 248, 164,1)"}
                    ]
                }
            },
            emphasis: {
                itemStyle: {
                    shadowColor: "rgba(255, 255, 255, 1)",
                }
            },
            data: data
        },
        {
            type: "custom",
            coordinateSystem: 'polar',
            renderItem: function(params, api) {
                var values = [api.value(0), api.value(1)];
                var coord = api.coord(values);
                return {
                    type: 'text',
                    position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
                    rotation: coord[3] + Math.PI / 2,
                    origin: [coord[0], coord[1]],
                    style: {
                        text: api.value(1),
                        fill: "#ac6",
                        fontSize: 16,
                        textAlign: "center",
                        textVerticalAlign: "middle",
                        x: coord[0]+25,
                        y: coord[1]
                    }
                };
            },
            data: data
        }
    ]
};