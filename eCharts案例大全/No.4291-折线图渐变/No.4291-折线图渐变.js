
const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const dataY = [820, 932, 901, 934, 1290, 1330, 1320]
const color = ['#249BFF', '#18D1D8', '#FEA416']

const finalData = []
 for (let i = 0; i < dataY.length; i++) {
     let item = dataY[i]
     let j = i+1
 
     if (j!==0 && j%3===0){
         finalData.push(
           
            {
                value: item,
                symbol: 'circle',     //折点设定为实心点
                symbolSize: 30,  
                itemStyle: {
                    normal: {
                        color: 'blue',
                        borderColor: 'white',
                        borderWidth: '3'
                    }
                } 
            }
       )
     } else {
          finalData.push(item)
     }
 }
 

option = {
     tootip: {
        show: true,
        trigger: 'axis',
        // axisPointer: {
        //     type: 'cross',
        //     label: {
        //         backgroundColor: '#6a7985'
        //     }
        // }
        
    },
    xAxis: {
        type: 'category',
        data: data,
        //  axisLabel: { //  如果这个字段不设置，echarts会根据屏宽及横坐标数据自动给出间隔
        //   interval: 2, // 间隔长度，可自定义（如果是时间格式，echarts会自动处理）
        // //   rotate: 40 // 横坐标上label的倾斜度
        // },
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '折线图',
        data: finalData,
        type: 'line',
        smooth:true,//折线是圆弧状的
        showSymbol: true,
        // symbol: 'circle',     //折点设定为实心点
        // symbolSize: 15,   //设定实心点的大小
    
        hoverAnimation: true,
        
         areaStyle:{
            normal:{
               //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

                    offset: 0,
                    color: 'blue'
                }, {
                    offset: 1,
                    color: 'white'
                }])

            }
        },
        itemStyle: {
            normal: {
                // interval: 3,
                // color: 'blue',
                // borderColor: 'white',
                // borderWidth: '2',
                lineStyle: {
                  width:3,// 0.1的线条是非常细的了
                  color: 'blue'
                }
            }
        },
    }],
    
   
};

