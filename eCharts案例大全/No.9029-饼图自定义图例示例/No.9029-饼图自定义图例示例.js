var data = [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 1548, name: '搜索引擎' }
],
    color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
option = null;
option = {
    color: color,
    title: {
        text: '饼图自定义图例示例',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    legend: {
        show:false
    },
    series: [
        {
            name: '访问来源',
            type: 'pie', hoverOffset: 50, hoverAnimation: true,
            radius: '55%',
            center: ['50%', '55%'],
            data: data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
app.currentIndex = -1;
if (!app.inNode) {
    setTimeout(function () {
        myChart.setOption({
            graphic: echarts.util.map(data, function (item, dataIndex) {
                return {
                    type: 'group',
                    bounding: 'raw',
                    left: 0,
                    top: 30 + dataIndex * 40,
                    z: 100,
                    dataIndex: dataIndex,
                    width: 200,
                    onclick: function () {
                        // 取消之前高亮的图形
                        myChart.dispatchAction({
                            type: 'downplay',
                            seriesIndex: 0,
                            dataIndex: app.currentIndex
                        });
                        app.currentIndex = this.dataIndex;
                        // 高亮当前图形
                        myChart.dispatchAction({
                            type: 'highlight',
                            seriesIndex: 0,
                            dataIndex: app.currentIndex
                        });
                        // 显示 tooltip
                        myChart.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 0,
                            dataIndex: app.currentIndex
                        });
                    },
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 30,
                                height: 25,
                                r:[10]
                            },
                            style: {
                                fill: color[dataIndex]
                            }
                        },
                        {
                            type: 'text',
                            left: 120,
                            top: 'center',
                            z: 100,
                            style: {
                                fill: color[dataIndex],
                                text: item.name,
                                font: 'bold 16px Microsoft YaHei'
                            }
                        }
                    ]
                };
            })
        });
    }, 0);
}