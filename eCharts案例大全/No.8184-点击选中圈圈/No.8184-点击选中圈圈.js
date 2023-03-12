 var timeData = ['01','02','03','04','05','06','07','08','09','10'];
            var legend=['全部流向', 'IDC','联通'];
            var Data = [45,56,58,55,68,75,62,68,75,62];

            var colorList=['#ff8f50','#FECA17','#39B5F1','#B9E1A2'];
            var seriesList=[];
            var datamark= [{
                symbol: 'circle',
                symbolSize: 12,

            }]
            $.each(legend,function (index, obj) {
                seriesList.push({
                    name: obj,
                    type: 'line',
                    showAllSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 5,
                    yAxisIndex: (legend.length==2&&index==1)?1:0,
                    itemStyle: {
                        normal: {
                            color:colorList[index]},
                    },
                    markPoint: {
                        data:datamark
                    },
                    data:Data
                })
            })

            var option = {

                tooltip: {
                    trigger: 'axis',
                    position: function (point, params, dom, rect, size) {
                       // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下       
                       // 提示框位置                    var x = 0; // x坐标位置
                      var y = 0; // y坐标位置
                     
                      // 当前鼠标位置
                      var pointX = point[0];
                      var pointY = point[1];
                     
                      // 外层div大小
                      // var viewWidth = size.viewSize[0];
                      // var viewHeight = size.viewSize[1];
                     
                      // 提示框大小
                      var boxWidth = size.contentSize[0];
                      var boxHeight = size.contentSize[1];
                     
                      // boxWidth > pointX 说明鼠标左边放不下提示框
                      if (boxWidth > pointX) {
                        x = 5;
                      } else { // 左边放的下
                        x = pointX - boxWidth;
                      }
                     
                      // boxHeight > pointY 说明鼠标上边放不下提示框
                      if (boxHeight > pointY) {
                        y = 5;
                      } else { // 上边放得下
                        y = pointY - boxHeight;
                      }
                     
                      return [x, y];
                    }

                },
                legend: {
                    data: legend,
                    textStyle: {
                        color: '#666'
                    },
                    bottom:'1%',
                },
                grid: {
                    left: '2%',
                    right: '3%',
                    bottom: '10%',
                    top:'7%',
                    containLabel: true
                },
                xAxis: {
                    data: timeData,
                    axisLine: {
                        lineStyle: {
                            color: '#666'
                        }
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel: {
                        interval: 0,//横轴信息全部显示
//                    rotate: 60,//60度角倾斜显示
                        /* formatter:function(val){
                             if(kpiTimeDim=='hour'){
                                 return (val.split(" ")[1]).split(":")[0]; //横轴信息文字竖直显示
                             }else if(kpiTimeDim=='day'){
                                 return (val.split(" ")[0].split("-")[2]);
                             }else{
                                 return (val.split("-")[1]);
                             }
                         }*/
                    }
                },
                yAxis: [{
                    splitLine: {show: false},
                    axisLine: {
                        lineStyle: {
                            color: '#666',
                        }
                    },

                    axisLabel:{
                        formatter:'{value} ',
                    }
                },
                    {
                        splitLine: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: '#666',
                            }
                        },
                        axisLabel:{
                            formatter:'{value} ',
                        }
                    }],
                series:seriesList
//
            };
            myChart.setOption(option);
            myChart.resize();
            window.addEventListener("resize", function () {
                myChart.setOption(option);
                myChart.resize();
            });
            myChart.on('click',function(params){
                var index = params.dataIndex;
                var xtxt=timeData[index]
                var ytxt=Data[index]
               datamark=[{//点击选中的圈圈变大
                    symbol: 'circle',
                    symbolSize: 12,
                    coord: [xtxt, ytxt]
                }]
                for(var i = 0 ; i < seriesList.length ; i++){//点击选中循环赋值
                    seriesList[i].markPoint.data=datamark
                }
                myChart.setOption(option,true);

            })