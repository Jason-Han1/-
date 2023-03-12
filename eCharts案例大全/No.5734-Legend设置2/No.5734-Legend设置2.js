option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['1号传感器', '2号传感器', '3号传感器', '4号传感器', '5号传感器'],
        show: true,
    },
    toolbox: {
      feature: {
          myClose: {
            show: true,
            title: "控制1号传感器",
            icon: "image://https://s1.ax1x.com/2020/09/27/0F42VI.png",
            onclick: handleClose
          }
      }
    },
    grid: {
        left: '8%',
        right: '8%',
        top: '10%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 1, 2, 3, 4, 5, 6]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '1号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '2号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '3号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '4号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '5号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
let instance = echarts.getInstanceByDom(document.getElementById("chart-panel"));
let sensor1 = {'1号传感器': true}
function handleClose() {
    sensor1['1号传感器'] = !sensor1['1号传感器'];
    instance.setOption({
    legend: {
        selected: sensor1
    }
})
}
