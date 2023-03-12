
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    xAxis : [
        {
            type : 'value',
            axisLabel:{
                formatter:(val)=>{
                    return val+'%'
                }
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            itemStyle:{
                normal:{
                    color:(params)=>{
                        let color = ['rgb(47,114,205)','rgb(144,198,163)','rgb(230,194,183)','rgb(212,130,101)','rgb(235,179,79)','rgb(169,189,209)','rgb(127,195,204)']
                        return color[params.dataIndex]
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter:'{c}%'
                }
            },
            data:[(Math.random() * 100).toFixed(0), 
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0), 
            (Math.random() * 100).toFixed(0),
            (Math.random() * 100).toFixed(0)]
        }
    ]
};