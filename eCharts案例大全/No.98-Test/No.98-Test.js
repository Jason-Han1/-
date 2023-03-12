option = {
  title: {
    text: 'Major Factory Incidents(Top10 by Downtime, IT only)'
  },
    legend: {
    data: ['CAS', 'Infra', 'MFG','MFS','MOS','Netops']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: 80,
    bottom: 30
  },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    
  },
  series: [
    {
      name: 'CAS',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
        { value: 90, name:'CNIT-499', url:'https://issues.teslamotors.com/browse/CNIT-499' },
        { value: 94, name:'CNIT-427', url:'https://issues.teslamotors.com/browse/CNIT-427' },
		{ value: 0, name:'' },
        { value: 0, name:'' },
		{ value: 113, name:'CNIT-468', url:'https://issues.teslamotors.com/browse/CNIT-468' },
		{ value: 0, name:'' },
        { value: 0, name:'' },
		{ value: 132, name:'CNIT-656', url:'https://issues.teslamotors.com/browse/CNIT-656' },
		{ value: 200, name:'CNIT-399', url:'https://issues.teslamotors.com/browse/CNIT-399' },
		{ value: 333, name:'CNIT-371', url:'https://issues.teslamotors.com/browse/CNIT-371' },
      ]
    },
	    {
      name: 'Netops',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
        { value: 0, name:'' },
        { value: 0, name:'' },
        { value: 95, name:'CNIT-442', url:'https://issues.teslamotors.com/browse/CNIT-442' },
		{ value: 96, name:'CNIT-435', url:'https://issues.teslamotors.com/browse/CNIT-435' },
      ]
    },
		    {
      name: 'MOS',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
	  	{ value: 0, name:'' },
        { value: 0, name:'' },	  	
		{ value: 0, name:'' },
        { value: 0, name:'' },
		{ value: 0, name:'' },
		{ value: 125, name:'CNIT-490', url:'https://issues.teslamotors.com/browse/CNIT-490' },
		{ value: 130, name:'CNIT-769', url:'https://issues.teslamotors.com/browse/CNIT-769' },
      ]
    },
  ]
};

"click", function(params) {
        console.log(params);
          window.location.href = params.data.url;
      }
