
option = {
    title: {
        text: '受理分布（申报类）',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        left: "2%"
    },
    legend: {
        right: "3%",
        data: ['生产未申报', '外贸未申报']
    },
    grid: {
        top:30,
        left: '3%',
        right: '3%',
        bottom: 20,
        containLabel: true
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:function(parms){
            console.log(parms)
            var str="专管员："+parms[0].name+"</br>"
            +parms[0].marker+parms[0].seriesName+"："+ Math.abs(parms[0].data)+"</br>"
            +parms[1].marker+parms[1].seriesName+"："+ Math.abs(parms[1].data)+"</br>"
            +parms[2].marker+parms[2].seriesName+"："+ Math.abs(parms[2].data)+"</br>"
            return str;
        }
    },
    xAxis: [{
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E']
    },{
        show:false,
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: function(value, index) {
                var val = Math.abs(value)
                return val;
            }
        }
    }],
    series: [{
        id:"topchart",
            name:"人员未申报",
            type: 'bar',
            stack: '合并',
            itemStyle: {
                normal: {
                    color: "red"
                }
            },
             xAxisIndex: 0,
            barWidth: 30,
            data: [1, 2, 3, 4, 5],
        },
        {
            id:"leftchart",
            name:"生产未申报",
            type: 'bar',
            stack: '合并',
            barGap: "-100%",
            itemStyle: {
                normal: {
                    color: "#FFAFE0"
                }
            },
             xAxisIndex: 1,
            barWidth: 15,
            data: [-5, -4, -3, -2, -1],
        },
        {
              id:"rightchart",
            name:"外贸未申报",
            type: 'bar',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: "#F685C5"
                }
            },
            xAxisIndex: 1,
            barWidth: 15,
            data: [-2, -2, -2, -2, -2],
        }
    ]
};