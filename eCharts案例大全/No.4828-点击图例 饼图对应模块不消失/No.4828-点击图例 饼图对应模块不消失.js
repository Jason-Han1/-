var colorList = ['#ffdb35','#f96d2a','#007eff','#00ffff','#16dd9e','#6d00ff','#d0359d']
var dataList = [
    {value:335, name:'图例A'},
    {value:310, name:'图例B'},
    {value:234, name:'图例C'},
    {value:135, name:'图例D'},
    {value:1548, name:'图例E'},
    {value:235, name:'图例F'},
    {value:548, name:'图例G'}
]
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: 'middle',
        right: '10%',
        itemGap:18,
        itemWidth:20,
        itemHeight:20,
        textStyle:{
            color:'#000',
            fontSize: '16',
            fontWeight:'normal',
            padding:[0,10]
        },
    },
    series: [
        {
            name:'饼图',
            type:'pie',
            radius: ['28%', '50%'],
            center:['40%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor:'transparent',
                    borderWidth:2,
                    show: true,
                    color: function (params) {
                        var index = params.dataIndex;
                        return colorList[index]
                    },
                }
            },
            data:dataList
        }
    ]
};
myChart.setOption(option,true);
myChart.on('legendselectchanged',function(params){
    var option = this.getOption()
    option.legend[0].selected[params.name] = true
    this.setOption(option)
})