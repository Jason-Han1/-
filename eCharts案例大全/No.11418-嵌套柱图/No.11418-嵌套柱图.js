option = {
            title: {
                text: '嵌套柱图',
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
                'KPI 1', 'KPI 2', 'KPI 3', 'KPI 4', 'KPI 5', 'KPI 3', 'KPI 4', 'KPI 5'
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
                name: '实际',
                type: 'bar',
                barGap:'-175%',
                barWidth:20,
                z:10,
                itemStyle:{
                	normal:{
                		color:'#29252C'
                	}
                },
                data: [ 110, 94, 97, 78, 68, 97, 78, 68]
            },
            {
            	name:'定额',
            	type:'bar',
            	barWidth:50,
                itemStyle:{
                	normal:{
                		color:'#AACFD0'
                	}
                },
            	stack:'total',
            	data:[70, 70, 70, 70, 70, 97, 78, 68]
            },
           ]
        };