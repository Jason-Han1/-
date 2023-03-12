option = {
    backgroundColor: "#05224d",
    title: {
        text: '数量',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        top: '25%',
        left: '0%'
    },
    legend: {
        icon: 'rect',
        itemWidth: 34,
        itemHeight: 3,
        itemGap: 150,
        data: ['供给', '需求',],
        top: '25%',
        left: '40%',
        align:'right',
        textStyle: {
            fontSize: 16,
            color: '#F1F1F3'
        }
    },
	grid: {
		top: '30%',
		left: '1%',
		right: '1%',
		bottom: '30%',
		containLabel: true,
	},
	xAxis: [{
		type: 'category',
		boundaryGap: true,
		axisLine: { //坐标轴轴线相关设置。数学上的x轴
			 show: true,
			 lineStyle: {
			     width:4,
				 color: '#0b97be',
			 },
		 },
		 axisLabel: { //坐标轴刻度标签的相关设置
			 textStyle: {
				 color: '#0b97be',
			 },
		 },
		 axisTick: { show: false,},
		 data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
	}],
	yAxis: [{
		type: 'value',
		min: 0,
		max:140,
		splitNumber: 3,
		splitLine: {
			 show: false,
			 lineStyle: {
				 color: '#233e64'
			 }
		 },
		 axisLine: {show: false,},
		 axisLabel: {
		 	margin:20,
			 textStyle: {
				 color: '#0b97be',
				 
			 },
		 },
		 axisTick: { show: false,},  
	}],
	series: [{
		name: '供给',
		type: 'line',
		smooth: false, //是否平滑曲线显示
// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
		symbolSize:0,
		
		itemStyle: {
			normal: {
				color: "#1ed5ed"   // 线条颜色
			}
		},
		areaStyle: { //区域填充样式
            normal: {
             //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				   { offset: 0,  color: 'rgba(30,213,237, 0.9)'}, 
				   { offset: 1,  color: 'rgba(30,213,237, 0)'}
			    ], false),

            //  shadowColor: 'rgba(53,142,215, 0.1)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
		data: [90, 105, 84, 125, 110, 92, 98]
	},
	{
		name: '需求',
		type: 'line',
		smooth: false, //是否平滑曲线显示
// 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
		symbolSize:0,
		
		itemStyle: {
			normal: {
				color: "#ffe100"   // 线条颜色
			}
		},
		areaStyle: { //区域填充样式
            normal: {
             //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				   { offset: 0,  color: 'rgba(255,225,0, 0.9)'}, 
				   { offset: 1,  color: 'rgba(255,225,0, 0)'}
			    ], false),

            //  shadowColor: 'rgba(53,142,215, 0.1)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
		data: [10, 20, 30, 60, 80, 100, 120]
	}],
};