var defaultData = ['6.69m', '8.9m'];
var v1 = Number(defaultData[0].split('m')[0]),
	v2 = Number(defaultData[1].split('m')[0]);
var fillData = []; //水波数据
fillData.push(v1/10, v2/10, v1/15, v2/15); //console.log(this.fillData)
var color = ''; //[255, 198, 2], [247, 151, 0], [241, 92, 128], [63, 144, 255]
console.log((v2-v1).toFixed(2), v2);
if((v2-v1)<2 && (v2-v1)>1){
	color = '255, 198, 2';
}else if((v2-v1)<=1 && (v2-v1)>0){
	color = '247, 151, 0';
}else if(v2 <= v1){
	color = '241, 92, 128'; 
}else{
	color = '63, 144, 255';
}

//echarts
option = {
    backgroundColor:'transparent',//背景色
    title:{
        text:'水波球',
        x:'left',
        y:'top',
        textStyle: {
            fontSize: 14,
            fontWeight:'bold',
            color: 'rgb('+color+')' // 主标题文字颜色
        }
    },
    xAxis:{
        show: false, // 不显示
    },
    yAxis: {
        show: false, // 不显示
    },
    grid:{
         top: 0,
         right: 0,
         bottom: 0,
         left: 0,
    }, 
    series: [{
        type: 'liquidFill',
        radius: '100%',         // 半径大小
        center: ['50%', '50%'], // 布局位置
        waveAnimation: 10,      // 动画时长
        amplitude: 20,          // 振幅
        data: (function(data){
            var arr=[];
            data.forEach(function(items){
                arr.push(items);   //value
            });
            return arr;
        })(fillData), // 水球波纹值
        backgroundStyle: {
            color: '#0b2d46',
        },
        color: ['rgba('+color+', .1)', 'rgba('+color+', .2)', 'rgba('+color+', .3)', 'rgba('+color+', .4)'],
        label: {
            normal: {
                color: '#fff',
                textStyle: {
                    fontSize: 18
                },
                formatter: (params)=>{ //console.log(params)
                    let newValue = params.value*10;
                    return newValue.toFixed(2)+'m'
                }
            }
        },
        outline: { // 轮廓设置
            show: false,
        },
    },{
        type: 'line', // 折线图
        markLine: {
            silent: true, // 不触发鼠标事件
            symbol: 'diamond', // 标线两端样式
            lineStyle:{ // 标线样式
                type: 'dashed',
                width: 1,
                color: 'rgba('+color+', 1)',
                opacity: 0.8
            }, 
            precision: 2, //标线数值的精度，在显示平均值线的时候有用（即小数点后第几位）
            label:{
                show: true,
                position: 'middle',
                distance: -10,
                color: 'rgba('+color+', 1)',
                fontSize: 18,
                formatter: function(params){ //console.log(params)
                    var res = '警戒线 '+ (params.value*10).toFixed(2) + 'm';
                    return res;
                }
            },
            data: [{ // 标线数据
                yAxis: fillData[1], // y 轴
            }]
        }

    }]          
};
