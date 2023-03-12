option = {
    tooltip: {
          trigger: 'item',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          },
          confine: true,
          formatter: (params) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            `<div><span>${params.marker}掉期点：${numberToFixed(
              params.value.y,
              2,
              '',
              true
            )}</span> <span class="pd10">${params.seriesName}：${params.value.x}</span></div>  `
        },
        legend: {
          type: 'scroll',
          selectedMode: false,
          left: 30,
          bottom: 10,
          formatter: (name) => {
            if (name === '成交量') {
              return `${name}(百万)`;
            }
            if (name === '成交笔数') {
              return `${name}(笔)`;
            }
            return '';
          }
        },
        grid: {
          top: '20',
          left: '20',
          right: '20',
          bottom: '60',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          scale: true
        },
        yAxis: {
          name: '掉期点(BP)',
          nameLocation: 'middle',
          nameGap: 35,
          nameTextStyle: {
            color: 'rgba(255,255,255)'
          },
          scale: true,
          boundaryGap: ['5%', '5%'],
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#6aa4f0',
              opacity: 0.7
            }
          },
          axisLabel: {
            show: true,
            formatter: (val) => val.toFixed(2)
          },
          axisTick: {
            show: true
          }
        },
        dataset: [
			{
				source:[
				  { y: 4.2, x: 100 },
				  { y: 4.1, x: 300 },
				  { y: 4.0, x: 2441.5 },
				  { y: 3.85, x: 273 },
				  { y: 3.0, x: 730 }
				]
			}
		
		],
        series: [
            {
				type: 'custom',
				name:'1',
				renderItem: (params, api) => {
				  const xValue = api.value(0);
				  const yValue = api.value(1);;
				  const start = api.coord([0, 0]);
				  const end = api.coord([xValue, yValue]);
				  const size = api.size([xValue, yValue]);
				  const style = api.style();
				  console.log(xValue, yValue, start, end, size);
				  return {
					type: 'rect',
					shape: {
					  x: start[0],
					  y: end[1] - 0.5, // 纠正height导致的偏移量
					  width: size[0],
					  height: 2
					},
					style
				  };
				},
				nameLocation: 'center',
				barMinHeight: 5,
				barWidth: 1,
				nameGap: 40,
				stack: 'all',
				dimensions: ['x', 'y']
            }
            
    ]
};