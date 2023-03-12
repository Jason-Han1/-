option = {
    title:{
        text:"杭州写字楼2月10日复工后电梯平均增多人流量变化",
        textAlign :"left"
    },
    xAxis: {
        type: 'category',
        data: ['2/10','2/11','2/12','2/13','2/14','2/15','2/16','2/17','2/18','2/19','2/20','2/21']
    },
    yAxis: [{
        type: 'value',
        name:"写字楼电梯平均人流量（人）",
        nameRotate:'90',
        nameLocation:'middle',
        nameGap:40
    }],
    series: [{
        data: [93,82,84,91,98,87,98,144,175,181,226,231],
        type: 'line',
        symbolSize:30,
        label:{
            show:true,
            color:'#000',
            position:'inside'
        }
    }, {
        data: [0,0,0,0,300,0,0,0,0,0,0,0],
        type:'bar',
        barWidth:1,
        itemStyle: {
            normal: {
                borderColor: '#1e90ff',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                    show: false
                }
            },
            emphasis: {
                borderColor: '#1e90ff',
                borderWidth: 5,
                label: {
                    show: false
                }
            }
        },
        markPoint:{
            symbol:'pie',
            symbolSize:10,
            label:{
              show:true  
            },
            data:[ { value: '2月10日启动复工',xAxis:'2/10',yAxis:0,symbolOffset :[0,40]},
                {value: '调整十项措施',xAxis:'2/14',yAxis:0,symbolOffset :[0,40]}]
        }
    }]
};
