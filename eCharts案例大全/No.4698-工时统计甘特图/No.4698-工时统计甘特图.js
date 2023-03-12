    var baseDate=`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
    // echart配置
    var option = {
        color: "#0A8BFF",
        backgroundColor:"#fff",
        title: {
            text: '工时统计甘特图',
            subtext: '不同日期的当日工时统计'
        },
        tooltip: {
            enterable:true,
            //alwaysShowContent:true,
            hideDelay:100,
            backgroundColor: 'rgba(255,255,255,1)',//背景颜色（此时为默认色）
            borderRadius: 5,//边框圆角
            padding: [5,0,5,0],    // [5, 10, 15, 20] 内边距
            textStyle:{
                color:'#000'
            },
            position: function(point, params, dom, rect, size) {
                $(dom).html('<div style="font-size:14px;color:rgba(0,0,0,0.65)" class="tip"><h1 style="font-size:14px;color:rgba(0,0,0,0.85);height:25px;display:flex;align-items: center;padding:0 0 5px 8px;margin:0;border-bottom:1px solid rgba(0,0,0,0.06);font-weight:bold">' + 
                params.name.split(',')[0] + '</h1> <p style="margin:0;padding:0 8px 0 8px;height:25px;display:flex;align-items: center;">时段:'+ 
                params.value[1].split(' ')[1] + '~' + params.value[2].split(' ')[1] + 
                ' </p><p style="margin:0;padding:0 8px 0 8px;height:25px;display:flex;align-items: center;">总工时:'+params.name.split(',')[1] + 
                ' </p></div>')
            },
        },
        legend: {//图例
            data: ['工时'],
            left: '90px',
            top:"6%",
            itemWidth:16,
            itemHeight:16,
            selectedMode: false, // 图例设为不可点击
            textStyle: {
                color: 'rgba(0, 0, 0, 0.45)',
                fontSize:14
            }
        },
        grid: {//绘图网格
            left: '0%',
            right: '3%',
            top: '10%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {                   
            type: 'time', 
            position: 'top',
            interval: 3600  * 1000,   //以一个小时递增 
            max:`${baseDate} 24:00`,
            min:`${baseDate} 00:00`, //将data里最小时间的整点时间设为min,否则min会以data里面的min为开始进行整点递增
            axisLabel: {
                formatter: function (value, index) {
                            var data = new Date(value)
                            var hours = data.getHours()
                            return hours
                        },
                textStyle: {
                  color: 'rgba(0,0,0,0.65)',  //更改坐标轴文字颜色
                  fontSize : 14      //更改坐标轴文字大小
                }
            },
            axisLine:{
                lineStyle:{
                    color:'rgba(0,0,0,0.1)',
                }
            } 
        },
        yAxis: {
            axisLine:{
                lineStyle:{
                    color:'rgba(0,0,0,0.1)',
                }
            } ,
            data: [
                ['2020-12-05','10小时40分钟'], 
                ['2020-12-06','7小时40分钟'], 
                ['2020-12-07','11小时40分钟'], 
                ['2020-12-08','11小时40分钟'], 
                ['2020-12-09','11小时40分钟'], 
                ['2020-12-10','11小时40分钟'], 
                ['2020-12-11','11小时40分钟'], 
                ['2020-12-12','11小时40分钟'], 
                ['2020-12-13','11小时40分钟'], 
                ['2020-12-14','11小时40分钟']
                ],
            axisLabel: {
                textStyle:{
                    color:"rgba(0, 0, 0, 0.65)", //刻度颜色
                    fontSize:14  //刻度大小
                },
                formatter: function (value) {
                    let a=value.split(',')[0];
                    let b=value.split(',')[1];
                    return   a +'{a|' +'\n'+ b + '}'+'{b|' + '}'
                }, rich: {
                    a: {
                        color: 'rgba(24, 144, 255, 0.7)',
                        fontSize:12, 
                    },
                    b: {
                        color: 'red',
                        fontSize:14, 
                    }
                } 
            }
        },
        series: [
            // 用空bar来显示三个图例
            { name: "工时", type: 'bar', data: [],barMaxWidth:10 },
            // { name: state[1], type: 'bar', data: [],barMaxWidth:10 },
            // { name: state[2], type: 'bar', data: [],barMaxWidth:10 },
            {
                type: 'custom',                
                renderItem: function (params, api) {//开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
                    var categoryIndex = api.value(0);//这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
                    var start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
                    var end = api.coord([api.value(2), categoryIndex]);
                    // var height = api.size([0, 1])[1];
                    var height =20;
                    return {
                        type: 'rect',// 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                        shape: echarts.graphic.clipRectByRect({ // 矩形的位置和大小。
                            x: start[0],
                            y: start[1] - height / 2,
                            width: end[0] - start[0],
                            height: height
                        }, { // 当前坐标系的包围盒。
                            x: params.coordSys.x,
                            y: params.coordSys.y,
                            width: params.coordSys.width,
                            height: params.coordSys.height
                        }),
                        style: api.style()
                    };
                },
                encode: {
                    x: [1, 2], // data 中『维度1』和『维度2』对应到 X 轴
                    y: 0// data 中『维度0』对应到 Y 轴
                },
                itemStyle: {
                	normal: {
                		color: function(params){
                			console.log(params)
                			if(params.data!==null && params.data['value']&& params.data['value'][3]=='in'){
                				return '#0A8BFF';
                			}else{
                				return 'red';
                			}
                		}
                	}
                },
                data: [ // 维度0 维度1 维度2
                  {
                    
                      value: [0, `${baseDate} 1:28`, `${baseDate} 5:28`,'out']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                    {
                      
                      value: [0, `${baseDate} 7:28`, `${baseDate} 15:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                  {
                      
                      value: [1, `${baseDate} 2:18`, `${baseDate} 4:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                    {
                      
                      value: [1, `${baseDate} 6:15`, `${baseDate} 17:58`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                  {
                      
                      value: [1, `${baseDate} 19:18`, `${baseDate} 20:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                    {
                      
                      value: [1, `${baseDate} 21:15`, `${baseDate} 23:38`,'out']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                   {
                      
                      value: [2, `${baseDate} 19:18`, `${baseDate} 20:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                    {
                      
                      value: [2, `${baseDate} 21:15`, `${baseDate} 23:38`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                   {
                      
                      value: [3, `${baseDate} 1:28`, `${baseDate} 5:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },
                    {
                      
                      value: [3, `${baseDate} 7:28`, `${baseDate} 15:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },{
                      
                      value: [4, `${baseDate} 8:28`, `${baseDate} 9:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },{
                      
                      value: [5, `${baseDate} 9:28`, `${baseDate} 10:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },{
                      
                      value: [6, `${baseDate} 10:28`, `${baseDate} 11:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },{
                      
                      value: [7, `${baseDate} 11:28`, `${baseDate} 12:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },{
                      
                      value: [8, `${baseDate} 12:28`, `${baseDate} 13:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  },{
                      
                      value: [9, `${baseDate} 13:28`, `${baseDate} 14:28`,'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
                  }
                ]
            }
        ]
    };