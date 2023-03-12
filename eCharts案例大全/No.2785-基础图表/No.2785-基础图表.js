//颜色按顺序排列，
//如果要确定每条夜色，可以在series.data中逐一添加itemStyle
const color= ["#dffaef","#1be8df","#fbd408"]
option = {
    
     legend: {
        top:"10%",
        textStyle:{
        }
    },
    tooltip: {
        trigger: 'item'
    },
    color,
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['40%', '70%'],//大小修改
            avoidLabelOverlap: false,
            label: {
                show: true
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            labelLine: {
                show: true
            },
            data: [
                {value: 580, name: '未开始',label:{color:"#dffaef"}},
                {value: 735, name: '已完成',label:{color:"#1be8df"}},
                {value: 1048, name: '进行中',label:{color:"#fbd408"}},
            ]
        }
    ]
};
myChart.on('legendselectchanged',()=>{
    alert(0)
})