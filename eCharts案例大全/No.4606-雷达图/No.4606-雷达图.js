var data = [43, 100, 280, 350, 500, 190, 143, 130, 180, 150, 100, 190, 130, 180, 150, 100];
maxNum = Math.max.apply(null, data); //applay方法获取最大值★
console.log("最大值为"+ maxNum);
var sum = eval(data.join("+")); //eval方法求和公式
console.log("求和值为："+sum)

option = {
    backgroundColor:'transparent', //背景色
    title: {
        text: '雷达图'
    },
	tooltip:{
	    show: true,
		trigger: 'item', 
		confine: true,
		textStyle: {
			color: "#fff",
			fontSize: 13
		}
	},
	legend:{
		show: true,
		data: ['检查主体情况'],		//载入图例数据
		selectedMode:true,
		itemWidth: 15,
		itemHeight:9,
		textStyle: {
			color: 'rgba(111,82,38, 1)'
		},
		x: 'center',
		y: 'bottom'			
	},
    radar: {
        shape: 'polygon' ,      //polygon | circle
        center: ['50%', '50%'],
        radius: '60%',          //外半径为可视区尺寸
        name: {
            textStyle: {
                color: 'rgba(111,82,38, 1)'
            }
        },
        axisLabel: {
            show: true,
            color: 'rgba(143,142,140, .618)',
            fontSize: 12
        },
        indicator: [
            { name: '市住房局', max: maxNum},
            { name: '市市场局', max: maxNum},
            { name: '市公安局', max: maxNum},
            { name: '市卫生健康委', max: maxNum},
            { name: '市财政局', max: maxNum},
            { name: '经信委', max: maxNum},
            { name: '文化执法局', max: maxNum},
            { name: '交通局', max: maxNum},
            { name: '环保局', max: maxNum},
            { name: '市绿化市容局', max: maxNum},
            { name: '市人保局', max: maxNum},
            { name: '市商务委', max: maxNum},
            { name: '市卫计委', max: maxNum},
            { name: '市农委', max: maxNum},
            { name: '应急管理局', max: maxNum},
            { name: '市住建委', max: maxNum}
        ]
    },
    series: [{
        type: 'radar',
        label:{
            show: true,
            position: 'top',
            color: 'rgba(111,82,38, .8)',
            fontSize: 13,
            fontWeight: 'bold'
        },
        symbol: 'circle',
        symbolSize: 7 ,
        itemStyle: {
            color: 'rgba(251,155,105,1)'
        },
        areaStyle: {
            opacity: 0.4
        },
        emphasis: {       
            label: {
              show: true,
              color: 'rgba(111,82,38, 1)',
              fontSize: 13,
              formatter: '{c}',       // 鼠标悬浮时展示数据
            }
        },
        data: [
            {
                value: data,    //载入数据
                name: '检查主体情况'
            }
        ]

    }]
};