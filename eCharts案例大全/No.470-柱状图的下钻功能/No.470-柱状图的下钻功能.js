let option1 = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
        toolbox: {
        feature: {
            myTool1: {
                show: true,
                title: '返回',
                icon: 'image://http://jun.one/img/return.png',
                onclick: function (){
                    setOption2()
                }
            }
        }
    }
};

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }],
};

myChart.on('click',(params)=>{
    myChart.clear();
    option && myChart.setOption(option1);
 })

option && myChart.setOption(option);

const setOption2 = () => {
    myChart.clear();
    console.log(option);
    option && myChart.setOption(option);
}