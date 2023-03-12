option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', 'assist']
    },
    grid: {
        left: 0,
        right: 80,
        bottom: '3%',
        containLabel: true
        // containLabel 属性控制着 echats 图表 距离容器上下左右边距的时候 是否包含 标签。
        // false 的时候不包含标签，很容易理解
        // true 的时候 标签的宽度也是可以影响着 echats 图表距离容器的边距的，所以看着比较诡异
    },
    xAxis: {
        type: 'value',
        max: 'dataMax' // 设置这个属性之后， 当 grid.right: 0 的时候，组件右侧才能与容器相对齐
    },
    yAxis: [
        {
            type: 'category',
            axisLabel: {
                // margin 为0时，echarts图表默认距离左侧的宽度为 axisLabel.data 最大文字所占的宽度。当然，前提是 containLabel: true
                margin: 0,
                align: 'right',
                borderColor: 'red',
                borderWidth: 1
            },
            data: ['印尼', '美国', '印度', '中国', '世界人口总量'] // grid containLabel 为true的时候，标签的宽度影响着 刻度轴距离左侧的距离
            // 标签文字越多，刻度轴距离左侧距离越大
            // axisLabel 标签 align 属性， left, right, center 等是在 以 margin 为 0 的时候
            // 标签文字左侧中间右侧与 坐标轴相对齐
        },
        {
            type: 'category'
            // 为了让 《assist 背景辅助轴bar》与 《2011年》相重合而设置的
        }
    ],
    series: [
        {
            name: '2011年',
            yAxisIndex: 0,
            type: 'bar',
            data: [14, 78, 496, 22705, 31617]
        },
        {
            name: 'assist',
            yAxisIndex: 1, // 指定其坐标轴
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 255, 255, .3)'
                }
            },
            label: {
                normal: {
                    show: true,
                    color: '#1d58a1',
                    distance: 70, // 让数字右对齐，并让 grid.right 留出一定空间显示出来
                    align: 'right',
                    position: 'right',
                    formatter: function(v) {
                        let data = [14, 78, 496, 22705, 31617]
                        return data[v.dataIndex]
                    }
                }
            },
            data: [31617, 31617, 31617, 31617, 31617]
        }
    ]
}
