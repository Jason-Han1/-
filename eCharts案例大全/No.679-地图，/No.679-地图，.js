var uploadedDataURLimg = "/asset/get/s/data-1637820203780-7oCCfhe-9.png";

var uploadedDataURL = '/asset/get/s/data-1637808978789-sO0f8mm6S.json';
var img2 = 'image:/' + uploadedDataURLimg;
var domImg = document.createElement('img');
domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px';
domImg.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MTE0OTgyQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MTE0OTgzQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgxMTQ5ODBBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgxMTQ5ODFBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v4trwAAAAVklEQVR42mL0D225cu0hAzWAjpY8C9CsL19/wIV4uDnI5gKNYmKgKhjcxrFAggBZiBIuyDhqRQWQOxoVo1ExGhWjUTEaFYMiKoB1LVq1TXZUAI0CCDAAcAlaxCt7dtQAAAAASUVORK5CYII=';

let lableData = [
      {
        name: '宝安区',
        value: [113.87, 22.66],
      },
      {
        name: '光明区',
        value: [113.93, 22.77],
      },
      {
        name: '龙华区',
        value: [114.03, 22.71],
      },
      {
        name: '南山区',
        value: [113.96, 22.58],
      },
      {
        name: '福田区',
        value: [114.05, 22.55],
      },
      {
        name: '罗湖区',
        value: [114.15, 22.57],
      },
      {
        name: '盐田区',
        value: [114.28, 22.61],
      },
      {
        name: '坪山区',
        value: [114.37, 22.69],
      },
      {
        name: '龙岗区',
        value: [114.25, 22.73],
      },
      {
        name: '大鹏新区',
        value: [114.48, 22.61],
      },
    ];
    var mapDate = [
      {
        name: '宝安区',
        value: [113.87, 22.66],
        datas: 1354,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '光明区',
        value: [113.93, 22.77],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '龙华区',
        value: [114.03, 22.71],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '南山区',
        value: [113.96, 22.58],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '福田区',
        value: [114.05, 22.55],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '罗湖区',
        value: [114.15, 22.57],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '盐田区',
        value: [114.28, 22.61],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '坪山区',
        value: [114.37, 22.69],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '龙岗区',
        value: [114.25, 22.73],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },
      {
        name: '大鹏新区',
        value: [114.48, 22.61],
        datas: 1402,
        symbol: img2,
        symbolSize:[0,0],
        itemStyle: {
          opacity: 0,
        },
      },


    ];
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('my', geoJson);
    option = {
        backgroundColor: '#57007b',
        grid: {
            left: '0', // 与容器左侧的距离
            right: '0', // 与容器右侧的距离
            top: '0', // 与容器顶部的距离
            bottom: '0', // 与容器底部的距离
        },
        geo: {
            map: 'my',
            aspectScale: 0.85,
            layoutCenter: ['50%', '51.5%'], //地图位置
            layoutSize: '108%',
            itemStyle: {
                normal: {
                    borderColor: '#490091',
                    borderWidth: 2,
                    color: '#23007e',
                    opacity: 1,
                },
            },
            emphasis: {
                itemStyle: {
                    color: '#23007e',
                    areaColor: '#36008d',
                },
            },
        },
        series: [
            {
                type: 'map',
                mapType: 'my',
                aspectScale: 0.85,
                layoutCenter: ['50%', '50%'], //地图位置
                layoutSize: '108%',
                zoom: 1, //当前视角的缩放比例
                // roam: true, //是否开启平游或缩放
                scaleLimit: {
                    //滚轮缩放的极限控制
                    min: 1,
                    max: 2,
                },
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        areaColor: {
                            image: domImg,
                            repeat: 'repeat',
                        },
                        borderColor: '#a98dfb',
                        borderWidth: 1.5,
                    },
                    emphasis: {
                        areaColor: '#36008d',
                        label: {
                            show: false,
                            color: '#fff',
                        },
                    },
                },
            },
            {
                name: 'lable',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: [60, 60],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                        },
                        formatter(value) {
                            return value.data.name;
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#3c00fb', //标志颜色
                    },
                },
                data: lableData,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                hoverAnimation: true,
                zlevel: 1,
            },

            {
                name: 'lable-top',
                type: 'scatter',
                coordinateSystem: 'geo',
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            var name = params.name;
                            var value = params.data.datas;
                            var text = `{fline|${value}}\n{tline|${name}}`;
                            return "";
                        },
                        color: '#fff',
                        rich: {
                            fline: {
                                padding: [0, 25],
                                color: '#fff',
                                textShadowColor: '#030615',
                                textShadowBlur: '0',
                                textShadowOffsetX: 1,
                                textShadowOffsetY: 1,
                                fontSize: 14,
                                fontWeight: 400,
                            },
                            tline: {
                                padding: [0, 27],
                                color: '#ABF8FF',
                                fontSize: 12,
                            },
                        },
                    },
                    emphasis: {
                        show: true,
                    },
                },
                itemStyle: {
                    color: '#00FFF6',
                },
                symbolOffset: [0, -50],
                zlevel: 2,
                data: mapDate,
            },
        ],
    };
    myChart.setOption(option);
});
myChart.on('click', (params) => {
    if (params.seriesName == 'lable') {
        let _option = myChart.getOption();
        _option.series[2].data.map(i=>{
            if(i.name === params.name){
                i.itemStyle.opacity = 1;
                i.symbolSize = [70,70];
            }else{
                i.itemStyle.opacity = 0;
                i.symbolSize = [0,0];
            }
        });
        myChart.setOption(_option)
    }
    if (params.seriesName == 'lable-top') {
        console.log(params)
    }
});
