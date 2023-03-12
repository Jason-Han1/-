//数据
var XName= ["推送","处置中","完成","数据入库"]
var data1 = [
            [100,100, 100, 100],
            [100,100, {value:100, symbol:'emptyHeart',symbolSize:20}]
        ]
var Line = ["线1","线2"];
var color =['#256589','#3fe973'];

//数据处理
        var datas = [];
        Line.map((item,index)=>{
            if(index==0){
                 datas.push(
                {
                    symbolSize: 15,
                    symbol: 'circle',
                     hoverAnimation:false,
                    name: item,
                    type: "line",
                    data: data1[index] ,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            color: color[index],
                        }
                    }
                }
            )
                
            }else{
                 datas.push(
                {
                    symbolSize: 15,
                    symbol: 'circle',
                    hoverAnimation:false,
                    name: item,
                    type: "line",
                    data: data1[index] ,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            color: color[index],
                        }
                    }
                }
            )
                
            }
           
        })
        
option = {
    backgroundColor:"#fas111",
     grid: {
                left: '5%',
                top: '25%',
                bottom: '60%',
                right: '5%',
            },
            yAxis: [
                {
                    type: 'value',
                    position: 'right',
                    max:100,
                    splitLine: {
                        show: false
                    }
                    ,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#6A989E',
                        }
                    },
                    axisLabel: {
                        inside: true,
                        show: true,
                        textStyle: {
                            color: '#90deff',// x轴颜色
                            fontWeight: 'normal',
                            fontSize: '24',
                            lineHeight: 24
                        }

                    },
                    data: XName,
                }
            ],
            series: datas,
};
//当点击legend选项时折线上的小图片会消失，为避免这种情况，可以采取以下初始化方法 使用svg
//var myCharts = echarts.init(document.getElementById('AnalysisChartLine'), null, {renderer: 'svg'});
//myCharts.clear();
//myCharts.setOption(option)