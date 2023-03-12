var xData = ['低压柜','高压柜','莱山区','变压器','楼层配电箱','电梯','水泵','控制柜','风机','机械格栅','分氧系统','制氧系统','多联空调机组','水冷冷水机组','燃气锅炉','电锅炉'];
var y1Data = [10758,3975,2980,1831,2122,3018,3525,1729,2764,380,3988,2333,3596,453,55,9,];
option = {
    backgroundColor:'#021847',
    grid: {
        left: '7%',
        right: '5%',
        top: '25%',
        bottom: '19%',
    },
    title: {
        show: false
    },
    tooltip : {
        trigger:'axis',
		position:function (point, params, dom, rect, size) {
		      // 固定在顶部
		      return [point[0]-58, point[1]-100];
		 },
		backgroundColor:"rgba(24,79,172,0.5)",
		axisPointer: {
			type: 'none'
		}
    },
   
    toolbox: {
        show: false,
    },
    dataZoom: [{
            id: 'dataZoomY',
            show: true,
            type: 'slider',
            showDetail:false,
            start: 0,
            end: 70,
            handleSize: '25%',
            height:8,          //滑动条的高度
            handleColor: '#ff0',
            fillerColor:"#a3edff",  //选中范围的填充颜色。
            borderColor:"#1259a3",                     //边框颜色。
            borderRadius:5,
            bottom:20,
            // dataBackground:{ //取消里面的折线图
            //     lineStyle:{
            //         opacity:0
            
            //     },
            //     areaStyle:{
            //         opacity:0
            //     }
            
            // },
        }],
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            show: true,
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 15,
                color: '#d0d0d0',
                margin: 8,
                interval:0 ,
                formatter:function(val){
                    return val.split("").join("\n");
                }
            },
            
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(255,255,255,.3)',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            data: xData
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '',
             axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(255,255,255,.3)',//左边线的颜色
                    width:'1'//坐标线的宽度
                }
            },
            splitNumber : 4,
            axisTick: {
                show: false
            },
            splitLine: {
                 show: false,
                lineStyle: {
                    // 使用深浅的间隔色
                    color: '#4e608b'
                }
            },
            axisLabel: {
                fontSize: 13,
                color: '#d0d0d0',
                margin: 12,
            },
            max: 12000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
       
    ],
    series: [
        {
            name:'监控数量',
            type:'bar',
            label: {
                normal: {
                    
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#1dacfe'
                    },
                    formatter:function(val){
                        
                        console.log(val)
                    }
                },
                 
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#4889fb" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#15b3ff" // 100% 处的颜色
                    }], false)
                }
            },
            barWidth: '40%',
            yAxisIndex: 0,
            data: y1Data
        },
       
    ]
};
