var gzData = [12, 25, 9, 62, 28, 70, 45, 82, 48, 18, 26, 22];
var bjData = [13, 15, 11, 18, 48, 69, 31, 46, 55, 28, 20, 10];
var XData = ["2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7"];
// var statusDom = document.getElementById('s1')
// var statusChart = echarts.init(statusDom)
option = {
    // backgroundColor:'#040519',
    title: {
        // text: "设备异常情况总览",
        x: 'left'
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor:'white',
        textStyle:{
            color:'#000'
        },
        formatter: function(value) {
          const a0 = value[0] ? value[0].seriesName : '';
          const a1 = value[1] ? value[1].seriesName : '';
          const c0 = value[0] ? parseFloat(value[0].data) : '';
          const c1 = value[1] ? parseFloat(value[1].data) : '';
          let sum = c0 + c1;
          if(c0 != '' && c1 != ''){
             sum =sum.toFixed(0);//保留0位小数 
          }
          const b = value[0] ? value[0].name : '';
          var atext='';
          var btext='';
          if(c0 != ''){
            atext='<span style="color: #BDBEC3">' + a0 + '&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>' + c0 + '</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: red">2.85%</span><span class="test1" >&#9650<style>\n' +
                    '.test1{color:red }\n' +
                    '</style></span></br>';  
          };
          if(c1 != ''){
            btext='<span style="color: #BDBEC3">' +a1+ '&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>' + c1 + '</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: #00a854">2.85%</span><span class="test2" >&#9660<style>\n' +
                      '.test2{color:green }\n' +
                      '</style></span></br>';  
          };
          return '<span style="color: #0a080b">全部&nbsp;&nbsp;&nbsp;<span style="font-size:20px;color: #0a080b"><strong>' + sum + '</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: red">2.85%</span><span class="test" >&#9650<style>\n' +
                '.test{color:red }\n' +
                '</style></span></br>'
                  + atext+ ' ' +btext +
                 '<span style="color: #0a080b">' + b +'</span>';
        }

    },
    // legend: {
    //     icon: 'roundRect',
    //     right: 10,
    //     textStyle:{
    //         color:'#fff'
    //     },
    //     y:'5.5%',
    //     x:'65%'
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'30%',
        containLabel: true
    },
    xAxis: [{
        // name:'时间',
        type: 'category',
        axisPointer: {
            type: "shadow",
            shadowStyle: {
                color: "blue",
                opacity: 0.05
            }
        },
        axisLine:{
            lineStyle:{
                color:'#284fc4',
                width:1,//这里是为了突出显示加上的
            }
        },
        axisLabel:{
            color:'#284fc4'
        },
        axisTick:{
            lineStyle:{
                color:'#284fc4'
            }
        },
        boundaryGap: false,
        data: XData
    }],
    yAxis: [{
        name:'次',
        type: 'value',
        splitLine:{
            show:false,
            lineStyle:{
                type:'dashed',
            }
        },
        axisLine:{
            lineStyle:{
                color:'#284fc4',
                width:1,//这里是为了突出显示加上的
            }
        },
        axisPointer:{
            
        },
    }],
    series: [{
            id:'y0',
            name: '故障',
            type: 'line',
            smooth: true,
            color: "#4091fc",
            symbol:'circle',
            areaStyle: {
                opacity: 0.3,
                color: {
                    type: "linear",
                    x: 1,
                    y: 0,
                    x: 1,
                    y2: 1,
                    colorStops: [{
                            "offset": 0,
                            "color": "#4091fc" //0% 处的颜色
                        },
                        {
                            "offset": 1,
                            "color": "#bdd6f7" // 100% 处的颜色
                        }
                    ],
                    "globalCoord": false // 缺省为 false
                }
            },
            data: gzData
        },
        {
            id:'y1',
            name: '报警',
            type: 'line',
            smooth: true,
            color: "#5f87ff",
            // hoverAnimation:true,
            symbol:'circle',
            areaStyle: {
                opacity: 0.3,
                color: {
                    type: "linear",
                    x: 1,
                    y: 0,
                    x: 1,
                    y2: 1,
                    colorStops: [{
                            "offset": 0,
                            "color": "#4091fc"
                        },
                        {
                            "offset": 1,
                            "color": "#054292"
                        }
                    ],
                    "globalCoord": false
                }
            },
            data: bjData
        },
        {   
            name: '报警',
            type: 'effectScatter',
            coordinateSystem: 'cartesian2d',
            data: bjData, //2d坐标系
            symbol:'circle',
            symbolSize: 10,
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: '#2a90f8',
                    borderColor:'white'
                }
            },
            zlevel: 1,
            tooltip: {
                trigger: 'item',
                backgroundColor:'white',
                textStyle:{
                    color:'#000'
                },
                formatter:  '<span style="font-size:20px;color: #0a080b"><strong>{c0}</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: green">2.85%</span><span class="test1" >&#9660<style>\n' +
                  '.test1{color:green }\n' +
                  '</style></span></br>' +
                  '<span style="color: #0a080b">{b0}</span>'
            }    
        },
        {   
            name: '故障',
            type: 'effectScatter',
            coordinateSystem: 'cartesian2d',
            data: gzData, //2d坐标系
            symbolSize: 10,
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: '#2d78c4',
                    borderColor:'white'
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor:'white',
                textStyle:{
                    color:'#000'
                },
                formatter:  '<span style="font-size:20px;color: #0a080b"><strong>{c0}</strong></span><span style="color: #0a080b">次&nbsp;&nbsp;&nbsp;</span><span style="color: red">2.85%</span><span class="test1" >&#9650<style>\n' +
                  '.test1{color:red }\n' +
                  '</style></span></br>' +
                  '<span style="color: #0a080b">{b0}</span>'

            },
            zlevel: 1
        }
    ]
};
