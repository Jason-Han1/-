   var data = [143, 125, 170, 175, 110, 80, 115, 70, 60];
        var data2 = [110, 90, 50, 15, 20, 25, 5, 10, 8];
         var data3 = [9, 90, 50, 15, 20, 25, 5, 10, 8];
        var dataCategory = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
        var pieData1 = [335, 310, 234, 135, 548];
        var pieData2 = [335, 0, 234, 548];
          var pieData3 = [1, 310, 234, 548];
        var pieDataCategory1 = ["住宅房屋", "厂房及建筑物", "商业及服务用房屋", "办公用房屋", "其他"];
        var pieDataCategory2 = ["科研、教育和医疗用房屋", "仓库", "文化、体育和娱乐用房屋", "其他未列明的房屋建筑物"];
        var chart = echarts.init($("#chart-panel")[0]);
        var option = {
            title: [
                {
                    text: '资源目录',
                    textStyle: {
                        color: '#0094ff',
                        fontSize: '40'
                    },
                    top: '30',
                    left: '70'
                }
            ],

            legend: [
                {
                    orient: 'horizontal',
                    icon: "rect",
                    textStyle: { color: "#ccc" },
                    data: pieDataCategory1,
                    bottom: 80,
                    left: "23%",
                    width: 300,
                    height: 400,
                    padding: 20,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                }, {
                    orient: 'horizontal',
                    icon: "rect",
                    textStyle: { color: "#ccc" },
                    data: pieDataCategory2,
                    bottom: 80,
                    width: 300,
                    padding: 20,
                    height: 400,
                    left: "65%",
                    backgroundColor: 'rgba(255,255,255,0.1)'
                }
            ],
            series: [
                {
                    name: '饼图1',
                    type: 'pie',
                    radius: '40%',
                    center: ['30%', '40%'],
                    data: (function () {
                        var rData = [];
                        for (var i = 0; i < data.length; i++) {
                            rData.push({ value: pieData1[i], name: pieDataCategory1[i], selected: true })
                        }
                        return rData;
                    })(),
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 20,
                                color: "white"
                            },
                            formatter: "{d}%\n{b}"
                        }
                    },
                    animationDelay: 400,
                },
                {
                    name: '饼图2',
                    type: 'pie',
                    radius: '25%',
                    center: ['70%', '40%'],
                    data: (function () {
                        var rData = [];
                        for (var i = 0; i < data.length; i++) {
                            console.log(pieData3[i])
                            if(pieData3[i]==0)
                            {
                                
                                rData.push({ value: pieData3[i], name: pieDataCategory2[i], lable:{show:false},labelLine:{show:false}})
                            }
                            else{
                                rData.push({ value: pieData3[i], name: pieDataCategory2[i], selected: true })
                            }
                            
                        }
                        return rData;
                    })(),
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 20,
                                color: "white",
                            },
                            formatter: "{d}%\n{b}"
                        }
                    },
                    animationDelay: 1000,
                }
            ]
        };
         chart.setOption(option);
        //点击事件
        chart.on('click', function (params) {
           console.log(params)
                     chart.setOption(getOption(data));
        });
var now=1
          
          // 设置data到option中
    function getOption( data) {
        if(now==1)
        {
            now=2
             var option = {

            series :  [
                {
                    name: '饼图1',
                    type: 'pie',
                    radius: '40%',
                    center: ['30%', '40%'],
                    data: (function () {
                        var rData = [];
                        for (var i = 0; i < data.length; i++) {
                            rData.push({ value: pieData1[i], name: pieDataCategory1[i], selected: true })
                        }
                        return rData;
                    })(),
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 20,
                                color: "white"
                            },
                            formatter: "{d}%\n{b}"
                        }
                    },
                    animationDelay: 400,
                },
                {
                    name: '饼图2',
                    type: 'pie',
                    radius: '25%',
                    center: ['70%', '40%'],
                    data: (function () {
                        var rData = [];
                       for (var i = 0; i < data.length; i++) {
                            console.log(pieData3[i])
                            if(pieData3[i]==0)
                            {
                                
                                rData.push({ value: pieData3[i], name: pieDataCategory2[i], lable:{show:false},labelLine:{show:false}})
                            }
                            else{
                                rData.push({ value: pieData3[i], name: pieDataCategory2[i], selected: true })
                            }
                            
                        }
                        return rData;
                    })(),
                    label: {
                        normal: {
                            textStyle: {
                                fontSize: 20,
                                color: "white",
                            },
                            formatter: "{d}%\n{b}"
                        }
                    },
                    animationDelay: 1000,
                }
            ]
        };
        }
        else{
            now=1
             var option = {

            series :  [
                {
                    name: '饼图1',
                    type: 'pie',
                    radius: '40%',
                    center: ['30%', '40%'],
                    data: (function () {
                        var rData = [];
                        for (var i = 0; i < data.length; i++) {
                            rData.push({ value: pieData1[i], name: pieDataCategory1[i], selected: true })
                        }
                        return rData;
                    })(),
                    label: {
              
                        normal: {
                            textStyle: {
                                fontSize: 20,
                                color: "white"
                            },
                            formatter: "{d}%\n{b}"
                        }
                    },
                    animationDelay: 400,
                },
                {
                    name: '饼图2',
                    type: 'pie',
                    radius: '25%',
                    center: ['70%', '40%'],
                    data: (function () {
                        var rData = [];
                       for (var i = 0; i < data.length; i++) {
                            console.log( pieData2[i])
                            if(pieData2[i]==0)
                            {
                               
                                rData.push({ value: pieData2[i], name: pieDataCategory2[i],  label: {
                        normal: {
                                
                            textStyle: {
                                fontSize: 20,
                                color: "white",
                            },
                            formatter: ""
                        }
                    },labelLine:{show:false},show:false})
                            }
                            else{
                                rData.push({ value: pieData2[i], name: pieDataCategory2[i], selected: true })
                            }
                            
                        }
                        return rData;
                    })(),
                    label: {
                        normal: {
                                
                            textStyle: {
                                fontSize: 20,
                                color: "white",
                            },
                            formatter: "1111"
                        }
                    },
                    animationDelay: 1000,
                }
            ]
        };
        }
       
        return option;
    }