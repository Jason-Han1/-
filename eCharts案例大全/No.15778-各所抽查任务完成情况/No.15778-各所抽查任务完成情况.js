option = {
            title: {
                text: '各所抽查任务完成情况',
                subtext:'',
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
                data:['完成率','计划完成率','一般','及格', '优秀'],
                icon:'roundRect',
                left:'right'
            },
            xAxis: {
            	boundaryGap: true,
            	axisLine:{
            		show:false
            	},
                data: [
                '洪楼所', '东风所', '山东所', '港沟所', '遥墙所'
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
                name: '完成率',
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
                name: '计划完成率', 
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
            	name:'一般',
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
            	name:'及格', 
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
            	name:'优秀', 
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