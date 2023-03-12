var colorList = ["24, 144, 255", "255, 110, 2", "221, 206, 33", "53, 198, 141", "126, 128, 252", "173, 247, 145", "13, 47, 145", "173, 24, 145", "173, 247, 15"];

var plantCap=["192.168.12.130","192.168.12.131","192.168.12.132","192.168.12.133","192.168.12.134","192.168.12.135"];
var datalist = [{
        offset: [50, 60]
    }, {
        offset: [50, 70]
    }, {
        offset: [68, 80]
    }, {
        offset: [30, 49]
    }, {
        offset: [30, 140]
    }, {
        offset: [20, 30]
    }, {
        offset: [6, 17]
    }, {
        offset: [14, 7]
    }, {
        offset: [2, 7],
}];

var datas = [];
for (var i = 0; i < plantCap.length; i++) {
    var item = plantCap[i];
    var itemToStyle = datalist[i];
    datas.push({
        // name: item.name+'\n'+item.value,
        name:plantCap[i],
        value: itemToStyle.offset,
        symbolSize: 80,
        label: {
            normal: {
                textStyle: {
                    fontSize: 13,
                    lineHeight: 17,
                }
            }
        },
        
        itemStyle: {
            normal: {
                color: 'rgb('+colorList[i]+')',
                opacity: .68
            }
        },
    })
}

option = {
	title:{
		text:'流量异常分析',
		left:15,
		top:15,
		textStyle:{
			color:'#555',
			fontSize:16,
			fontWeight:'normal'
		}
	},
    tooltip: {
		show:true,
		formatter:function(params){
			return params.name +'<br>数据库流速：'+ params.value[0]+'Mbps <br>每秒审计记录数：'+ params.value[1]
		}
    },
    grid: {
        left: '6%',
        right: '8%',
        bottom: 40,
        top: 65,
        containLabel: true
    },
    xAxis :{
		name:'数据库流速',
		nameLocation:'center',
		nameTextStyle:{
			color:'#666',
			padding:[20,0,0,0]
		},
		axisLabel:{
			textStyle:{
				color: '#9eaaba'
			},
			formatter:function(value){
				return value + 'Mbps'
			}
		},
        axisLine:{
            lineStyle:{
                color:"#e5e5e5"
            }
        }, 
        axisTick:{
          show:false
        },
        splitLine:{
        	show: false,
        },
    	boundaryGap: false,
    },
    yAxis :{
		name:'每秒审计记录数',
		nameLocation:'center',
		nameTextStyle:{
			color:'#666',
			padding:[0,0,20,0]
		},
        axisLabel:{
        	textStyle:{
                color: '#9eaaba'
            },
        },
        axisLine:{
        	show:false,
        },
        axisTick:{
          show:false
        },
        splitLine:{
        	show: true,
        	lineStyle:{
        		color:'#dadde4',
        		type:"dashed"
        	}
        }
    },
	series: [{
		type: 'scatter',
		symbol: 'circle',
		label: {
			normal: {
				show: true,
				formatter: '{b}',
				color: '#555'
			},
		},
		data: datas
	}]
};
