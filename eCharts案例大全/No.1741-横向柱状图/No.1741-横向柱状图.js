let categorydata = ['2017', '2018', '2019', '2020', '2021'];
let chartdata = [411, 121, 222, 232, 533];
let borderdata = [];
chartdata.forEach(item=>{
    borderdata.push(0);
})
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            let str='';
            params.forEach(item=>{
                if(item.seriesName){
                    str=item.marker+item.seriesName+item.value
                }
            })
            return str
        },
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: categorydata,
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9aeced',
                    fontSize: '12',
                },
            },
            data: categorydata,
        },
    ],
    series: [
        {
            name: '金额',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#0042FF',
                        },
                        {
                            offset: 1,
                            color: '#09C8FF',
                        },
                    ]),
                    shadowBlur: 0,
                    shadowColor: 'rgba(87,220,222,0.7)',
                    borderWidth: 1,
                    borderColor: '#57dcde',
                },
            },
            label: {
                show: true,
                position: 'right',
                textStyle:{
                    color:'#fff'
                }
            },
            barWidth: 14,
            data: chartdata,
        },
        {
            type: 'bar',
            // 设置系列名为空，方便tooltip判断展示内容
            name:'',
            data: borderdata,
            yAxisIndex: 1,
            zlevel: 2,
            barWidth: 22,
            itemStyle: {
                color: 'transparent',
            },
            // 外边框使用showBackground实现
            showBackground: true,
            backgroundStyle: {
                color: 'transparent',
                borderColor: {
                        x: 0,
                        y: 0,
                        x1: 1,
                        y1: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#0078FF',
                            },
                            {
                                offset: 1,
                                color: '#09C8FF',
                            },
                        ],
                },
                borderWidth: 1,
                borderRadius: 4,
            },
            // 左侧圆使用label实现
            label: {
                show: true,
                backgroundColor: {
                        x: 0,
                        y: 0,
                        x1: 1,
                        y1: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#0042FF',
                            },
                            {
                                offset: 1,
                                color: '#09C8FF',
                            },
                        ],
                },
                formatter: '',
                width: 30,
                height: 30,
                borderRadius: 15,
                position: 'right',
                offset: [-15, 0],
            },
        },
    ],
};
