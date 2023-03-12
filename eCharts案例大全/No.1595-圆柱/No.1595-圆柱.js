let nameList=[]
let valueList=[]
let series=[]
let legend=[]
let barWidth=26
let barGap=0
let colorList=['#02C0EA','#FF9826','#6ACC29','#9833FF']
let chartObj={
      series:[{name:"当前资源",data:[269,500,400,170]},{name:"其他资源",data:[39,50,40,100]},{name:"资源",data:[15,200,80,60]}],
      chartList:['通信','网络','能源','建筑']
    }
    //颜色转化为rgba
function colorRgba(str,alpha){
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = str.toLowerCase();
    if(sColor=='transparent'){
        return 'transparent'
    }
    if(sColor && reg.test(sColor)){
        if(sColor.length === 4){
            var sColorNew = "#";
                for(let i=1; i<4; i+=1){
                    sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));       
                }
                sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for(let i=1; i<7; i+=2){
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));       
        }
        return "rgba(" + sColorChange.join(",") +','+alpha+ ")";
    }else{
        return sColor;       
    }
}

      if (chartObj.series&&chartObj.series.length) {
          chartObj.series.forEach((item, index) => {
          legend.push({
              name:item.name, 
              itemStyle:{
                color:colorList[index]
              }})
            series.push({
                  name:'',//"柱顶部"index
                  type: "pictorialBar",
                  symbolSize: [barWidth,barWidth*0.4],
                  symbolOffset: [(-0.5*(chartObj.series.length-1)+index+(-0.5)*barGap*0.01*(chartObj.series.length-1)+barGap*0.01*index)*barWidth, -barWidth*0.2],
                  // symbolOffset: [(-0.5*(this.chartObj.series.length-1)+index)*this.barWidth, -this.barWidth*0.2],
                  z: 12,
                  itemStyle: {
                      color:(params)=>{
                        return colorList[index];
                      },                    
                  },
                  tooltip:{
                    show:false
                  },
                  symbolPosition: "end",
                  data: item.data,
                }),
              series.push({
                  name: item.name,//"柱底部"
                  type: "pictorialBar",
                  symbolSize: [barWidth, barWidth*0.4],//柱子底部宽高
                  //柱子底部圆移动的宽度和移动的间距
                  symbolOffset: [(-0.5*(chartObj.series.length-1)+index+(-0.5)*barGap*0.01*(chartObj.series.length-1)+barGap*0.01*index)*barWidth,barWidth*0.2],
                  z: 12,
                  tooltip:{
                    show:false
                  },
                  itemStyle: {
                      color:(params)=>{
                        return colorList[index];
                      },                   
                  },
                  data:item.data,
                }),
              series.push({
                type: "bar",
                name:item.name,                    
                itemStyle: {
                    // borderRadius: [ 0, 0,13,13],
                    color:(params)=>{
                      return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 1,
                          color:colorRgba(colorList[index],1),
                        },
                        {
                          offset: 0.2,
                          color:colorRgba(colorList[index],0.3),
                        },
                        {
                          offset: 0,
                          color:'transparent',
                        }
                      ]);
                    },                                          
                },
                z: 16,
                silent: true,
                label: {
                    show: true,
                    position: "top",
                    offset:[0,4],               
                    distance: 10,
                    textStyle: {
                      color: colorList[index],
                      fontSize:16,
                    },
                    // formatter: function (a, b) {
                    //   return a.value==0?'':a.value;
                    // },                  
                },
                barWidth: barWidth,
                barMaxWidth:barWidth*3,
                barGap:barGap+'%', // Make series be overlap
                data: item.data,
              })
          })
      }

      option = {
        // backgroundColor: "#061326",
        title: {
          text: "",
          top: 20,
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
        },
        tooltip: {
          show:true,
          trigger: 'axis',
          backgroundColor:'rgba(116,176,222,0.3)',
          extraCssText:'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
          borderWidth:0,
          confine:false,
          appendToBody:true,
          formatter:(params)=>{
            ////console.log(params,'---paramsshopping')
            let result ="<div style='margin-bottom:5px;'>"+params[0].name+"</div>"
            params.forEach((item,index)=>{
               
              var dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:10px;height:10px;background:${colorList[index]}"></span>`
              result += "<div style='display:flex;align-items:center;margin-bottom:5px'>"+dotHtml +item.seriesName+(item.seriesName?"<span style='display:inline-block;margin-right:6px;'></span>":'')+item.data+"</div>"})
            return result
          },
          //轴触发提示才有效
          axisPointer:{
            type:'shadow',
            shadowStyle:{
              color:'rgba(35,49,77,0.3)',
            },
          },
          textStyle:{
            color:"#fff",
          } 
        },
        grid: {
          top:40,
          left: 5,
          right:5,
          bottom:16,
          containLabel:true//包括文本，居中
        },
        legend: {
            show:true,
            data:legend,
            selectedMode:false,
            type: 'scroll',
            icon:'circle',
            itemHeight:16,  
            textStyle:{
              color:"#C3E3F9",
            }           
         },
        xAxis: {
          data:chartObj.chartList,
          type: "category",
            axisLine: {
              show: true,
              lineStyle:{
                color:"#2B72A1",    
              }
            },
            axisLabel: {
                color:"#87CCFF",              
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          interval: 0,
        },
       yAxis: [
          {
            type: "value",
            name:'单位',
            nameGap:20,
            nameTextStyle: {
                align: 'center',
                color: "#2869A9",
            },
            splitNumber: 4,
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              margin: 10,
              color: "#2869A9",
              
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#2869A9",
              },
            },
          },
        ],
        series:series,
        // series: [
        //   {
        //     name: "柱顶部",
        //     type: "pictorialBar",
        //     symbolSize: [barWidth, 10],
        //     symbolOffset: [-barWidth/2,0],
        //     z: 12,
        //     itemStyle: {
        //       normal: {
        //         color:(params)=>{
        //           return colorList[0];
        //         },
        //       },
        //     },
        //     symbolPosition: "end",
        //     data:chartObj.series[0].data,
        //   },
        //   {
        //     name: "柱底部",
        //     type: "pictorialBar",
        //     symbolSize: [barWidth, 10],
        //      symbolOffset: [-barWidth/2,0],
        //     z: 12,
        //     itemStyle: {
        //       normal: {
        //         color:(params)=>{
        //           return colorList[0];
        //         },
        //       },
        //     },
        //     data:chartObj.series[0].data,
        //   },
        //   {
        //     type: "bar",
        //     name:"当前资源",
        //     itemStyle: {
        //       normal: {
        //         // borderRadius: [ 0, 0,13,13],
        //         color:(params)=>{
        //           return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //             {
        //               offset: 1,
        //               color: colorList[0],
        //             },
        //             {
        //               offset: 0,
        //               color:'transparent',
        //             }
        //           ]);
        //         },
        //         opacity: 0.8,
        //       },
        //     },
        //     z: 16,
        //     label: {
        //       show: true,
        //       position: "top",
        //       fontSize: 16,
        //     },
        //     silent: true,
        //     barWidth: 26,
        //     barGap: "0", // Make series be overlap
        //     data: chartObj.series[0].data,
        //   },
        //   {
        //     name: "柱顶部",
        //     type: "pictorialBar",
        //      symbolSize: [barWidth, 10],
        //      symbolOffset: [barWidth/2,0],
        //     z: 12,
        //     itemStyle: {
        //       normal: {
        //         color:(params)=>{
        //           return colorList[0];
        //         },
        //       },
        //     },
           
        //     symbolPosition: "end",
        //     data: chartObj.series[1].data,
        //   },
        //   {
        //     name: "柱底部",
        //     type: "pictorialBar",
        //      symbolSize: [barWidth, 10],
        //      symbolOffset: [barWidth/2,0],
        //     z: 12,
        //     itemStyle: {
        //       normal: {
        //         color:(params)=>{
        //           return colorList[0];
        //         },
        //       },
        //     },
        //     data:chartObj.series[1].data,
        //   },
        //   {
        //     type: "bar",
        //     name:"其他资源",
        //     itemStyle: {
        //       normal: {
        //         // borderRadius: [ 0, 0,13,13],
        //         color:(params)=>{
        //           return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //             {
        //               offset: 1,
        //               color: colorList[0],
        //             },
        //             {
        //               offset: 0,
        //               color:'transparent',
        //             }
        //           ]);
        //         },
        //         opacity: 0.8,
        //       },
        //     },
        //     z: 16,
        //      label: {
        //       show: true,
        //       position: "top",
        //       fontSize: 16,
        //     },
        //     silent: true,
        //     barWidth: 26,
        //     barGap: "0", // Make series be overlap
        //     data: chartObj.series[1].data,
        //   },
        // ],
      };
