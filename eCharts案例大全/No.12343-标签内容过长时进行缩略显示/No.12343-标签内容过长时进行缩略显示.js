option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            // type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisLabel: {
                formatter: function(val) {
                    if(val.length > 5) {
                        return val.substring(0,5) + '...'
                    }
                    return val
                }
            },
            triggerEvent: true,
            boundaryGap : false,
            data : ['周一啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                '周二啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                '周三啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                '周四啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                '周五啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                '周六啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                '周日']
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

myChart.on('mouseover', function(val) {
    // console.log(val)
    if (val.componentType === 'yAxis' && val.value.length > 5) {
        if (val.value.length <= 5) return
        let obj = document.createElement('div')
        obj.id = 'axisInfo'
        obj.innerText = val.value
        let cssText = 'position:fixed;background-color: rgba(50, 50, 50, 0.7);font-size: 16px;'
            + 'color: rgb(255, 255, 255);padding: 2px 5px;border-radius: 3px;'
        obj.style.cssText = cssText + 'left:'
            + (val.event.event.clientX+25) + 'px;top:'
            + (val.event.event.clientY-50) + 'px;'
        let chartNode = myChart.getDom()
        if (chartNode) {
            chartNode.append(obj)
        }
    }
})

myChart.on('mouseout', function(val){
    if (val.componentType === 'yAxis' && val.value.length > 5) {
       let axisInfo = document.getElementById('axisInfo')
       if(axisInfo) {
           axisInfo.remove()
       }
    }
})