app.title = '堆叠柱状图';

option = {
    title: {
        text: "生产监控系统",
        subtext: "实时产能监控",
        left: "center"
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['等待中','生产中'],
        left: 'left'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
             data : ['分拣','清洗','抛光','研磨','脱膜','切割','压膜','压膜分配','光固化后处理','光固化']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    toolbox: {
        right: '5%',
        feature: {
            magicType: { show: true, type: ['tiled','stack','line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    series : [
        {
            name:'等待中',
            type:'bar',
            stack: '产量',
            data:[150, 232, 201, 154, 190, 330, 410, 210, 310, 300],
            label:{
                normal: {
                    show: true
                }
            }
        },
        {
            name:'生产中',
            type:'bar',
            stack: '产量',
            data:[620, 732, 701, 734, 1090, 1130, 1120, 800, 1020, 1024],
            label:{
                normal: {
                    show: true
                }
            }
        
        }
    ]
};
