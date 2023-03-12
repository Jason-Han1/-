var XData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
var YData = [10, 23, 65, 36, 85, 43, 60];
option = {
    backgroundColor: '#011c3a',
    /* 线条颜色，可设置多个颜色 */
    color: ['#69f1ff'],
    /* 图像四周边距设置 */
    grid: {
        left: 30,
        top: 30,
        right: 20,
        bottom: 30
    },
    /* 图例说明 */
    legend: {
        // 图例排项 vertical-"竖向"; horizontal-"横向"
        orient: 'horizontal',
        // 图例组件离容器左侧的距离
        right: 60,
        top: 0,
        //图例文字的样式
        textStyle: {
            color: '#6ab2ec',
        },
        // 与series中每个name一一对应
        data: ['车流量']
    },
    /* 鼠标悬浮时显示数据 */
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: XData,
        //设置轴线的属性
        axisLine: {
            lineStyle: {
                color: '#3d5269',
            }
        },
        //调整x轴的lable
        axisLabel: {
            textStyle: {
                fontSize: 10,// 让字体变小
                color: "#ffffff",
            }
        }
    },
    yAxis: {
        name: "单位:次",
        type: 'value',
        // 控制网格线是否显示
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#2d3d53']
            }
        },
        //设置轴线的属性
        axisLine: {
            lineStyle: {
                color: '#3d5269',
                
            }
        },
                //调整x轴的lable
        axisLabel: {
            textStyle: {
                fontSize: 10,// 让字体变小
                color: "#ffffff",
            }
        }
    },
    /* 数据配置，若有多条折线则在数组中追加{name: , data: } */
    series: [{
        name: '车流量',
        data: YData,
        type: 'line',
        symbol: 'emptycircle',
        // 设置折点大小
        symbolSize: 12,
        // 设置为光滑曲线
        smooth: false,
        areaStyle: {

            normal: {

                type: 'default',

                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

                    offset: 0,

                    color: '#1b374b' // 区域颜色

                }, {

                    offset: 1,

                    color: '#20465a' // 区域颜色

                }], false)

            }

        },

    }, ]
};