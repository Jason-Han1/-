var dateCar = ['一月','二月','三月','四月','五月','六月','七月','八月',
     '九月','十月','十一月','十二月'];

     var dataCar = [50,50,90,50,60,68,25,82,23,40,52,90];
     var datas =  {
	    	date:dateCar,data:dataCar,opacityNum:0
	    }

    var rotate= 40;
    var date = datas.date;
    var data = datas.data;
    var opacityNum = datas.opacityNum;
    option = {
        backgroundColor:"#000",
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        grid: {

            top: '15%',
            bottom: '10%',
            left: '13%',
            right: '10%'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
            name:'月',
            nameTextStyle:{
                color:'rgba(51, 152, 255, 1)',
                fontSize: 12,
            },
            axisLabel:{
                color:'rgba(102,193,255,1)',  //x轴文字颜色
                fontSize: 10,
                interval:0,
                rotate:rotate
            },
            axisLine:{  //x轴轴线
                lineStyle:{
                    color:'rgba(102,193,255,1)',
                    width: 2
                },

            },
            axisTick: {//刻度线
                show: false
            },

        },
        yAxis: {
            type: 'value',
            //  boundaryGap: [0, '100%'],
           
            nameTextStyle:{
                color:'rgba(51, 152, 255, 1)',
                fontSize: 14,
            },
            axisLabel:{
                normal:{
                    color:'rgba(102,193,255,1)',
                    fontSize: 14,
                }

            },
             axisLine:{  //x轴轴线
                lineStyle:{
                    color:'rgba(102,193,255,1)',
                    width: 2
                },
             },
            splitLine:{//分割线
                show:false
            },
            axisTick: {
                show: false
            },
        },

        series: [
            {
                name:'上报数量',
                type:'line',
                smooth:true,
                symbol:'none',
                itemStyle: {
                    normal:{
                        show:false,
                        color: 'rgba(0,159,154,1)'//边的颜色
                    }

                },
                lineStyle: {
                    normal: {
                        color: "rgba(0,159,154,1)"   // 线条颜色
                    }
                },
                markPoint: {
                    data: [
                        {type: 'max',
                            name: '最大值',
                            symbol:'circle',
                            symbolSize :10,
                            itemStyle:{
                                normal:{
                                    color:'rgb(255,247,58)',
                                }
                            },
                            label:{
                                normal:{
                                    show:false
                                }
                            }},



                    ]
                },
                areaStyle: {
                    normal:{
                        opacity:opacityNum,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,159,154,0)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(0,159,154,0.2)'
                        },{
                            offset: 0.6,
                            color: 'rgba(0,159,154,0.6)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0,159,154,0.8)'
                        },{
                            offset: 1,
                            color: 'rgba(0,159,154,1)'
                        }])
                    }

                },
                data: data
            }
        ]
    };