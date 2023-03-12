//timeLine有点类似于表格的分页控件，点击后使用options中的数据刷新图表
var option = {
    //timeline基本配置都写在baseoption 中
    baseOption: {
        title: {
          text: '区划在线用户数',
        },
        timeline: {
            //loop: false,        
            axisType: 'category',
            show: true,
            left:'40%',
            right:'40%',
            data: [1, 2, 3],
            label:{
                show: false
            },
            tooltip:{
                show: false
            },
            lineStyle:{
                show:false
            },
            controlStyle:{
                showPlayBtn:false,
                
            },
            itemStyle:{//一般小圆点样式
                color: '#777',
                borderWidth:0
            },
            checkpointStyle:{//选中项样式
                color: 'rgba(0,0,255,.8)',
                borderWidth:0
            },
            emphasis:{
                itemStyle:{//hover时的样式
                    color: 'rgba(0,0,255,.8)',
                    borderWidth: 0
                },
            }
        },
        grid: { containLabel: true },
        xAxis: [{
            type: 'category',
            axisTick:{
                show: false
            }
        }, ],
        yAxis: { 
            type: 'value',
            axisTick:{
                show: false
            }
        },
        series: [
            {
                type: 'bar',
                barWidth:20,
            },
        ],
        tooltip: {}
    },
    //变量则写在options中
    options:[
        {
            xAxis: [{
                data: ['省本级', '九江市', '抚州市']
            }],
            series: [
                {
                    data: [120, 450, 140]
                },
            ]
        },
        {
            xAxis: [{
                data: ['赣州市', '萍乡市', '南昌市']
            }],
            series: [
                {
                    data: [530, 130, 780]
                },
            ]
        },
        {
            xAxis: [{
                data: ['宜昌市', '新余市', '吉安市']
            }],
            series: [
                {
                    data: [560, 350, 180]
                }
            ]
        }
    ]
}