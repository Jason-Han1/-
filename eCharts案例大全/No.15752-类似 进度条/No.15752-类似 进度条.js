var data=[17];
var xMax=100;
option = {
	tooltip:{
		show:true,
		formatter:"{b} {c}"
	},
	grid:{
		left:50,
		top:50,
		bottom:'0',
		right:'0'
	},
    xAxis : [
        {
            max:xMax,
            type : 'value',
            axisTick: {show: false},
	        axisLine: {show:false},
	        axisLabel: {show:false},
	        splitLine: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['其他'],
            nameTextStyle:{color:'#b7ce9e',fontSize:'18px'},
           	axisLabel: {show:false},
            axisTick: {show: false},
	        axisLine: {show: false}
        }
    ],
    graphic: [
        {
            type: 'text',
            z: -10,
            left: 50,
            top: 'middle',
            style: {
                fill: '#f60',
                text: '自用：总数332  占用 213 空置 119',
                font: 'bold 14px Microsoft YaHei'
            }
        }    
    ],
    series : [
        { 
            name:' ',
            type: 'bar',
            barWidth:16,
            silent:true,
            itemStyle: {normal: {color: '#ccc'}},
            barGap:'-100%',
            barCategoryGap:'50%',
            data: data.map(function(d){return xMax}),
        },
        {
            name:' ',
            type:'bar',
            barWidth:16,
            label: {normal: {show: false,position: 'right',formatter: '{c}%'}},
            data:[{value:17,itemStyle:{normal:{color:'#f80'}}}]
        }
    ]
};