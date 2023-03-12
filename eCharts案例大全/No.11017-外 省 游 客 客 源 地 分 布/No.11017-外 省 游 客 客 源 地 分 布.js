var uploadedDataURL = "/asset/get/s/data-1561110751057-WrN0XK8Os.csv";
$.get(uploadedDataURL, function(data) {
    var str = new String(data);
    var lines = str.split('\n');
    var points_data = [];
    for (var i = 0; i < lines.length - 1; i++) {
        points_data.push({
            value: [parseFloat(lines[i].split(',')[0]), parseFloat(lines[i].split(',')[1])],
            symbolSize: 1
        })
    }
    myChart.setOption({
        backgroundColor: '#404a59',
        title: {
            text: '外 省 游 客 客 源 地 分 布',
            top: '10%',
            left: 'center',
            textStyle: {
                color: '#B0E0E6',
                fontSize: 30
            }
        },
        tooltip: {
            trigger: 'item'
        },

        geo: { // 地理坐标系组件
            map: 'china', // 地图类型
            label: { // 地图上的标签
                emphasis: {
                    show: false
                }
            },
            roam: true, // 是否开启鼠标缩放和平移漫游
            itemStyle: { // 地图区域的多边形 图形样式。
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)', // 图形的描边颜色
                    borderWidth: 1, // 描边宽度 0表示无描边
                    areaColor: { // 地图区域的颜色
                        type: 'radial', // 径向渐变
                        x: 0.5, // 圆心 x,y
                        y: 0.5,
                        r: 0.8, // 半径
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)', // 阴影颜色
                    shadowOffsetX: -2, //阴影水平方向上的偏移距离。
                    shadowOffsetY: 2, //阴影垂直方向上的偏移距离。
                    shadowBlur: 10 // 图形阴影的模糊大小
                },
                emphasis: { // 鼠标移动到时
                    areaColor: 'rgb(255,182,193,0.7)',
                    borderWidth: 0
                }
            }
        },
        series: [{
            name: 'foreign',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: points_data,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#CD6090'
                }
            }
        }]
    })

})