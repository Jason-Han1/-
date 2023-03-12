option = {
            title: {
                text: '子弹图-模仿练习',
                subtext:'数据纯属虚构',
                left:'left',
            },
            tooltip: {
                show:true,
                trigger:'axis',
                showDelay:0,
                formatter:'{a0}: {c0}<br />{a1}: {c1}',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
                axisPointer:{
                    type:'shadow'
                }
            },
            legend: {
                data:['Actual','Object','General','Good', 'Excellent '],
                icon:'roundRect',
                left:'right'
            },
            xAxis: {
            	boundaryGap: true,
            	axisLine:{
            		show:false
            	},
                data: [
                'KPI 1', 'KPI 2', 'KPI 3', 'KPI 4', 'KPI 5'
                ]
            },
            yAxis: {
                type:'value',
                max:120,
                splitLine:{
                	show:false
                },
                axisLabel:{
                	formatter: '{value} %'
                }
            },
            series: [
            {
                name: 'Actual',
                type: 'bar',
                barGap:'-300%',
                barWidth:10,
                z:10,
                itemStyle:{
                	normal:{
                		color:'#29252C'
                	}
                },
                data: [ 110, 94, 97, 78, 68]
            },
            {
                name: 'Object', 
                type: 'scatter' ,
                symbol:'rect',
                silent:true,
                itemStyle:{
                	normal:{
                		color:'#F33535'
                	}
                },
                symbolSize:[30,5],
                symbolOffset:['-30%',0],
                z:20,
                data: [95, 90, 90, 90, 85]
            },
            {
            	name:'General',
            	type:'bar',
            	barWidth:50,
                itemStyle:{
                	normal:{
                		color:'#AACFD0'
                	}
                },
            	stack:'total',
            	data:[70, 70, 70, 70, 70]
            },
            {
            	name:'Good', 
            	type:'bar',
            	barWidth:50,
                itemStyle:{
                	normal:{
                		color:'#79A8A9'
                	}
                },
            	stack:'total',
            	data:[15, 15, 15, 15, 15]
            },
            {
            	name:'Excellent ', 
            	type:'bar',
            	barWidth:50,
                itemStyle:{
                	normal:{
                		color:'#1F4E5F'
                	}
                },
            	stack:'total',
            	data:[15, 15, 15, 15, 15]
            }]
        };