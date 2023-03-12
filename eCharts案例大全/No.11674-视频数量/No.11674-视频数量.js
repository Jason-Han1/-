option = {
    title : {
        text: '视频数量',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['景点','人文','美食','交通']
    },
    series : [
        {
            name: '视频数量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:283, name:'景点50%'},
                {value:200, name:'人文34%'},
                {value:71, name:'美食13%'},
                {value:14, name:'交通3%'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
