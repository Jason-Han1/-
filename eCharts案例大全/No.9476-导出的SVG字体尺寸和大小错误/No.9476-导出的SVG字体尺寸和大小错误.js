<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="https://cdn.bootcss.com/echarts/4.2.1-rc1/echarts.min.js"></script>
    <!-- 引入主题 -->
    <script src="./dark.js"></script>
</head>

<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'), null, { renderer: 'svg' });
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            animation: false,
            xAxis: {
                min: -800,
                max: 800,
                axisLabel: {
                    fontSize: 18
                }
            },
            yAxis: {
                min: -800,
                max: 800,
                axisLabel: {
                    fontSize: 18
                }
            },
            toolbox: {
                show: true,
                itemSize: 25,
                orient: 'vertical',
                top: '25',
                right: '0',
                itemGap: 10,
                emphasis: {
                    iconStyle: {
                        borderColor: '#e20000', //选中某个工具的边框颜色
                        textPosition: 'left'
                    }
                },
                iconStyle: {
                    borderColor: '#ff2233',
                    borderWidth: 2
                },
                feature: {
                    saveAsImage: {
                        type: 'svg',
                        name: '截图',
                        title: "保存为SVG矢量图                            ",
                        icon: 'path://M285.216356 441.478571l199.164852 199.329005V105.03466a29.371715 29.371715 0 0 1 29.418616-29.430341 29.430341 29.430341 0 0 1 29.453791 29.430341v535.772916l199.106226-199.329005a29.38344 29.38344 0 0 1 41.612861 0 29.313089 29.313089 0 0 1 0 41.612861l-249.454387 249.466112a29.371715 29.371715 0 0 1-20.718491 8.535972 29.207562 29.207562 0 0 1-20.741942-8.535972l-249.407486-249.466112a29.277913 29.277913 0 0 1 0-41.612861 29.313089 29.313089 0 0 1 41.56596 0z M925.250066 650.316742a29.430341 29.430341 0 0 0-29.465517 29.430341v186.571949h-763.96945v-186.571949a29.430341 29.430341 0 0 0-29.465518-29.430341 29.38344 29.38344 0 0 0-29.430341 29.430341v215.873312a29.38344 29.38344 0 0 0 29.430341 29.430342h822.900485a29.38344 29.38344 0 0 0 29.418616-29.430342v-215.873312c0-16.298077-13.143989-29.430341-29.418616-29.430341z',
                        backgroundColor: "#FAFAFA"
                    }
                }
            },
            series: [{
                type: 'lines',
                id: 'a',
                name: '网络拓扑图',
                coordinateSystem: 'cartesian2d',
                label: { fontSize: 20 },
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                markLine: {
                    show: true,
                    label: {
                        fontSize: 18
                    },
                    symbolSize: 10,
                    lineStyle: {
                        width: 2
                    },
                    data: []
                },
                // 数据
                data: [
                    {
                        coords: [[0, 0], [300, 300]],
                        lineStyle: {
                            width: 2
                        }
                    },
                    {
                        coords: [[0, 0], [300, -300]],
                        lineStyle: {
                            width: 2
                        }
                    },
                    {
                        coords: [[0, 0], [-300, -300]],
                        lineStyle: {
                            width: 2
                        }
                    }
                ]
            }]
        };



        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
</body>

</html>