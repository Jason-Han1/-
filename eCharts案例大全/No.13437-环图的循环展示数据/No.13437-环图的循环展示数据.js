var colorSelect = [
    new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#e81a33'},
            {offset: 1, color: '#ff4057'}
        ]
    ),
    new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#6816ff'},
            {offset: 1, color: '#5816ff'}
        ]
    ),
    new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#337bff'},
            {offset: 1, color: '#24bfff'}
        ]
    ),
    new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#ff6c32'},
            {offset: 1, color: '#ffc12b'}
        ]
    ),
    new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
            {offset: 0, color: '#15daf1'},
            {offset: 1, color: '#15f1e9'}
        ]
    ),
];
var fontSizeSmall = 18;
var fontSizeBig = 26;
var rich = {
    name: {
        color: '#ffffff',
        fontSize: fontSizeSmall,
    },
    value:{
        color: '#ffffff',
        fontSize: fontSizeBig,
        textShadowColor: '#1549cc',
        textBorderColor: '#1549cc',
        textBorderWidth: 5,
        textShadowBlur: 20
    }
}
option = {
    tooltip: {
        padding: 0,
        enterable: true,
        position:['36%', '40%'],
        backgroundColor: 'rgba(245, 245, 245, 0)',
        borderWidth: 0,
        formatter: function(params){
            let tipHtml = '';
            var htmlT = ['<div style="width: 120px;height:120px; color: #ffffff;"><p style="margin: 0; margin-top: 20px; text-align: center; text-shadow: 0px 0px 20px #4467bd,0px 0px 20px #4467bd,0px 0px 20px #4467bd; font-size: 80px;">'+params.percent+'%</p><p style="margin: 0;margin-top: 40px;text-align: center;font-size: 40px;">'+ params.name +'</p></div>', '<div style="width: 120px;height:120px; color: #ffffff;"><p style="margin: 0; margin-top: 10px; text-align: center; text-shadow: 0px 0px 20px #4467bd,0px 0px 20px #4467bd,0px 0px 20px #4467bd; font-size: 26px;">'+params.percent+'%</p><p style="margin: 0;margin-top: 26px;text-align: center;font-size: 18px;">'+ params.name +'</p></div>']
            tipHtml = htmlT[0]
            return tipHtml;
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '74%'],
            center: [ '50%', '57%' ],
            minAngle: 45,
            avoidLabelOverlap: true,
            label: {
                normal:{
                    show: true,
                    position: 'outside',
                    textShadowcColor: '#1549cc',
                    textShadowBlur: 30,
                    formatter:function(params){
                        return '{name|' + params.data.name + '}\n{value|'+params.data.value + '}';
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle:{
                        color:'#ffffff'
                    }
                }
            },
            data: [
                    {
                        value:231, 
                        name:'地产',
                        itemStyle:{
                            color: colorSelect[0]
                        }
                    },
                    {
                        value:12702, 
                        name:'建筑',
                        itemStyle:{
                            color: colorSelect[1]
                        }
                    },
                    {
                        value:19395, 
                        name:'物业',
                        itemStyle:{
                            color: colorSelect[2]
                        }
                    },
                    {
                        value:907, 
                        name:'设计院',
                        itemStyle:{
                            color: colorSelect[3]
                        }
                    },
                    {
                        value:2621, 
                        name:'其他',
                        itemStyle:{
                            color: colorSelect[4]
                        }
                    }
                ]
        }
    ]
};

        var count = 0;
        var timeTicket = null;
        var dataLength = option.series[0].data.length;
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(() => {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            count++;
        }, 2000);
        myChart.on('mouseover', (params) => {
            clearInterval(timeTicket);
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
        })
        myChart.on('mouseout', (params) => {
            timeTicket && clearInterval(this.timeTicket);
            timeTicket = setInterval(() => {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                });
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                count++;
            }, 2000)  
        })