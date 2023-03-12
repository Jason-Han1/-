app.title = '垂直方向使用率示例';

const spirit = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk0NDgwODExNDUyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1OTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzc1LjQ2NjY2NyAwaDI3My4wNjY2NjZ2MTAyNEgzNzUuNDY2NjY3eiIgZmlsbD0iIzMyOTlGRiIgcC1pZD0iMjU5NyI+PC9wYXRoPjwvc3ZnPg=='

option = {
    color: ['#3398DB', 'rgba(180,180,180,0.2)'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter([ params ]) {
		    return `${params.componentType === 'markLine' ? 'Max': params.name} : ${params.value}`
		}
    },
    grid: {
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['CPU', '内存', '温度'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {
                show: false
            }
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'pictorialBar',
            barWidth: '50%',
            data:[10, 52, 20],
            barGap: '-100%',
            symbol: spirit,
            symbolBoundingData: 100,
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolSize: '100%',
            markLine: {
    			symbol: 'none',
    			label: {
    				normal: {
    					formatter: 'max: {c}',
    					position: 'middle'
    				}
    			},
    			lineStyle: {
    				normal: {
    					color: 'green',
    					type: 'dotted',
    					opacity: 0.2,
    					width: 2
    				}
    			},
    			data: [{
    			    type: 'max'
    			}]
    		}
        },
        {
            name:'full',
            type:'pictorialBar',
            barWidth: '100%',
            data:[100, 100, 100],
            barGap: '-100%',
            symbol: spirit,
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolSize: '100%'
        }
    ]
};
