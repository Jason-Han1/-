app.title = '环形图';

var optionColor = ['#3AA1FF','#36CBCB','#4ECB73','#FBD437','#F2637B'];
function getData(color){
    return [
        {value:335, name:'Ailiaili',itemStyle:{color: color}},
        {value:310, name:'Bilibili',itemStyle:{color: color}},
        {value:234, name:'Cilicili',itemStyle:{color: color}},
        {value:135, name:'Dilidili',itemStyle:{color: color}},
        {value:1548, name:'Eilieili',itemStyle:{color: color}}
    ]
}
option = {
    color: optionColor,
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:getData().map(item=>item.name)
    },
    series: [
        {
            name:'外圈',
            type:'pie',
            radius: ['50%', '70%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
                 normal: {
                    borderWidth: 5, 
                    borderColor: '#fff',
                  }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:getData().map(item=>{return{value:item.value,name:item.name}})
        },    {
            name:'内圈',
            type:'pie',
            radius: ['48%', '49%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:getData('transparent')
        }
    ]
};

myChart.setOption(option);
myChart.on('mouseover',function(e){
    option.series[1].data[e.dataIndex].itemStyle.color = optionColor[e.dataIndex];
    myChart.setOption(option);
})
myChart.on('mouseout',function(e){
    option.series[1].data  = getData('transparent')
    myChart.setOption(option);
})