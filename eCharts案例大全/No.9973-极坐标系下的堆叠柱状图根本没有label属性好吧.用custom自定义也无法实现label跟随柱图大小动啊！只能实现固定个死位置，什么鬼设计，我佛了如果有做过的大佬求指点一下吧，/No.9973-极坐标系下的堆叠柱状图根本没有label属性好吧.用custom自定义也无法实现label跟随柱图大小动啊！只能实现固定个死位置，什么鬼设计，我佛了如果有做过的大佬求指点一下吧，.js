app.title = '极坐标系下的堆叠柱状图根本没有label属性好吧.'+
'用custom自定义也无法实现label跟随柱图大小动啊！只能实现固定个死位置，什么鬼设计，我佛了'+
'如果有做过的大佬求指点一下吧，';

option = {
    title:{
        text:app.title,
    
    },
    angleAxis: {},
    radiusAxis: {
        type: 'category',
        data: ['2017', '2018', '2019'],
        z: 10
    },
    polar: {},
    series: [{
            type: 'bar',
            data: [1, 1, 3],
            coordinateSystem: 'polar',
            name: '增加5%以上',
            stack: 'a',
            barWidth: '65%',
            itemStyle: {
                normal: {
                    color: {
                        //type: 'bar',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#4E6692'
                        }, {
                            offset: 1,
                            color: '#5F7EB4'
                        }],
                    },
                }
            }
        },
        {
            type: "custom",
            z: 100,
            stack: 'b',
            coordinateSystem: 'polar',
            renderItem: function(params, api) {
                var values = [api.value(0), api.value(0)];
                var coord = api.coord(values);
                return {
                    type: 'text',
                  
                    style: {
                        text: api.value(1),
                        fill: "white",
                        fontSize: 16,
                      
                        x: coord[0],
                        y: coord[1]
                    }
                };
            },
            data: [1, 1, 3],
        },

        {
            type: 'bar',
            data: [6, 4, 6],
            coordinateSystem: 'polar',

            name: '基本持平',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: {
                        //type: 'bar',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#F2AE41'
                        }, {
                            offset: 1,
                            color: '#E59A18'
                        }],
                    },
                },
                emphasis: {
                    color: '#E59A18'
                }
            }
        },
        {
            type: "custom",
            z: 100,
            stack: 'b',
            coordinateSystem: 'polar',
            renderItem: function(params, api) {
                var values = [api.value(0), api.value(1)];

                var coord = api.coord(values);
                return {
                    type: 'text',
                  
                    origin: [coord[1], coord[1]],
                    style: {
                        text: api.value(1),
                        fill: "yellow",
                        fontSize: 16,
                        textAlign: "top",
                        textVerticalAlign: "middle",
                        x: coord[0],
                        y: coord[1]
                    }
                };
            },
            data: [6, 4, 6],
        },

        {
            type: 'bar',
            data: [5, 7, 3],
            coordinateSystem: 'polar',

            name: '减少5%以上',
            stack: 'a',
            itemStyle: {
                normal: {
                    color: {
                        //type: 'bar',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#668FFB'
                        }, {
                            offset: 1,
                            color: '#799DFD'
                        }],
                    },
                },
                emphasis: {
                    color: '#668FFB'
                }
            }
        },
        {
            type: "custom",
            z: 100,
            stack: 'b',
            coordinateSystem: 'polar',
            renderItem: function(params, api) {
                var values = [api.value(0), api.value(1)];

                var coord = api.coord(values);
                return {
                    type: 'text',
                  
                    style: {
                        text: api.value(1),
                        fill: "blue",
                        fontSize: 16,
                        textAlign: "top",
                        textVerticalAlign: "middle",
                        x: coord[0],
                        y: coord[1]
                    }
                };
            },
            data: [5, 7, 3],
        }
    ],
    legend: {
        show: true,
        data: ['增加5%以上', '基本持平', '减少5%以上'],
        y:50
        
    }
};