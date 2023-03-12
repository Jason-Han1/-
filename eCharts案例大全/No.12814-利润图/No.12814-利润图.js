var areaStyle = {
    silent: false,
    itemStyle: {
        normal: {
            color: '#E74C3C'
        }
    },

}
var option = {

    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'pie','funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true,
                pixelRatio: 5
            }
        }
    },

    title: {
        //text: '项目需要的堆叠图',
        //subtext: 'gogoogogogo',
        x: 'center',
        align: 'right'
    },

    backgroundColor: '#fff',
    color: ['#1322DB','#F7DC6F', '#E59866', '#E74C3C'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    
    legend: {
        x: '78%',
        top: '5%',
        data: ['研发\f(万元)', '采购\f(万元)', '开销\f(万元)','利润\f(万元)'],
        textStyle: {
            fontSize: 30,
            fontWeight: 600
        },
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },



    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: 'black',
                fontSize: '40',
                fontWeight: 600
            }
        },

        axisLine: {
            lineStyle: {
                color: 'black',
                width: 4, //这里是坐标轴的宽度,可以去掉
            }
        },
    }],
    xAxis: [{
        type: 'category',
        data: ['2021', '2022', '2023'],
        axisLabel: {
            show: true,
            textStyle: {
                color: 'black',
                fontSize: '40',
                fontWeight: 600
            }
        },

        axisLine: {
            lineStyle: {
                color: 'black',
                width: 4, //这里是坐标轴的宽度,可以去掉
            }
        },


    }],
    series: [{
            name: '研发\f(万元)',
            type: 'bar',
            stack: '总量',
            barWidth: '120px',
            data: [200, 600, 1000,],
            markArea: areaStyle
        },
        {
            name: '采购\f(万元)',
            type: 'bar',
            stack: '总量',
            data: [50, 450, 900],
            markArea: areaStyle
        },
        {
            name: '开销\f(万元)',
            type: 'bar',
            stack: '总量',
            data: [30, 420, 700],
            markArea: areaStyle
        },
        {
            name: '利润\f(万元)',
            type: 'bar',
            stack: '总量',
            data: [160, 630, 1520],
            markArea: areaStyle
        },
        {
            name: '研发',
            type: 'line',
            data: [200, 600,1000]
        },
        {
            name: '采购',
            type: 'line',
            data: [250, 1050,1900]
        },
        {
            name: '开销',
            type: 'line',
            data: [280, 1470,2600]
        },
        {
            name: '利润',
            type: 'line',
            data: [440, 2100,4100]
        }
        
    ]
};


















