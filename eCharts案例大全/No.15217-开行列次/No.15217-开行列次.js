var xAxisData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],  //时间轴和柱状x轴数据
    act = ["1014", "891", "612", "327", "386", "585", "471", "586", "546", "534", "575",  "405"],  //柱状数据
 dx = ["6", "90", "30", "60", "100", "40.00", "90", "10", "94", "50", "10", "100", "70.00", "10"];   //仪表盘数据
 dx2 = [ "90", "30", "60", "100", "40.00", "90", "10", "94", "50", "10", "6","100", "70.00", "10"];   //仪表盘数据

var os = [];
for (var i = 0; i < dx.length; i++) {
    var series = [];
    series.push({
           data: [{
            value: dx[i],
            name: '地块'
        }]
    });

    series.push({
        //data:[{value: 50, name: '仪表盘'}]
        data: [{
            value: dx2[i],
            name: '施工'
        }]
    });
    
    os.push({
        series: series
    });
}

var option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            bottom: 10,
            left:0,
            data: xAxisData
        },
        backgroundColor:'#384756',
        color: ['#019aba'],
        title: {
            text: '',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',

            },
        },
       
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
      
        series: [
        {
            type: 'gauge',
            center: ['20%', '75%'],
            radius : '30%',
            label: {
                normal: {
                    position: 'center'
                }
            },
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.5, '#00EFC9'],[1, '#00BCF2']], 
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 10,    // 每份split细分多少段
                length:3,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length:15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#fff',
                    width: 3,
                    type: 'solid'
                }
            },
            pointer: {
                width:5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize:30,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail: {
                formatter: '{value}%',
                textStyle: {
                    fontSize: 30,
                    fontWeight: "",
                    color: '#00BCF2', 
                }
            },
           
        },
        {
            type: 'gauge',
            center: ['60%', '75%'],
            radius : '30%',
            label: {
                normal: {
                    position: 'center'
                }
            },
            axisLine: {            // 坐标轴线
                show: true,        // 默认显示，属性show控制显示与否
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.5, '#00EFC9'],[1, '#00BCF2']], 
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: true,        // 属性show控制显示与否，默认不显示
                splitNumber: 10,    // 每份split细分多少段
                length:3,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: '#fff',
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length:15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: '#fff',
                    width: 3,
                    type: 'solid'
                }
            },
            pointer: {
                width:5
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize:30,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail: {
                formatter: '{value}%',
                textStyle: {
                    fontSize: 30,
                    fontWeight: "",
                    color: '#00BCF2', 
                }
            },
           
        }]
    },
    options: os
};