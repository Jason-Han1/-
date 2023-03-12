option = {
    title : {
        text: '2016年A区手机市场份额',
        subtext: '数据纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
             selectedMode: 'single',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:29.5, name:'华为',selected:true},
                {value:16.0, name:'联想'},
                {value:13.8, name:'小米'},
                {value:12.5, name:'苹果'},
                {value:7.5, name:'三星'},
                {value:5.1, name:'OPPO'},
                {value:4.5, name:'HTC'},
                {value:4, name:'vivo'},
                {value:3.6, name:'酷派'},
                {value:3.5, name:'其他'},
            ],
            itemStyle: {
                normal: {
                    color: '#61a0a8',
                    borderWidth: 0.5,
                    borderColor: '#ffffff'
                },
                emphasis: {
                    color: '#c23531',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

var count = 0;
app.timeTicket = setInterval(function () {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (count++) % 10
    });
}, 1000);
