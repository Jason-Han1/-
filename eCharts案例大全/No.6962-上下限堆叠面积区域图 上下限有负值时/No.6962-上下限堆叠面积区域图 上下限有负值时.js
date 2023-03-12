option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['上限', '下限']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,
        backgroundColor: "#fff",
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [

        {
            name: '上限',
            type: 'line',
            z: 0,
            areaStyle: {
                origin: 'start',
                //normal: {
                color: "olive",
                opacity: 1,
                width: 4
                //}
            },
            data: [220, 182, 191, 234, -60, 330, 310],
        },
        {
            name: '下限',
            z: 0,
            type: 'line',
            areaStyle: {
                origin: 'start',
                // normal: {
                color: "#fff",
                opacity: 1

                //}
            },
            data: [-120, 132, -101, -3, -90, -230, 210]
        },
    ]
};