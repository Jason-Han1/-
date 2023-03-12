var data = [{
        value: 100,
        name: '湖北'
    },
    {
        value: 50,
        name: '湖南'
    },
    {
        value: 20,
        name: '河南'
    },
    {
        value: 20,
        name: '浙江'
    },
    {
        value: 100,
        name: '江西'
    }
];
total = 0;
radiusData = ['38%', '45%'];
optionColor =  ['#1465d1', '#fffac0', '#fe8687', '#851fda', '#a16acc', '#32bb83'],
				
data.forEach((item, index) => {
    total += item.value;
});
option = {
   backgroundColor:"#999",
    color: optionColor,
    series: [{
        name: '使用占比',
        type: 'pie',
        radius: radiusData,
        center: ['42%', '50%'],
        data: data,
         
        labelLine: {
	        },
        label: {
            formatter: function(params) {
                var tooltipText = '';
                var ratio = (params.value / total * 100).toFixed(2);
                if (params.dataIndex === 0) {
                    tooltipText = '{a|' + params.name + '}{b|'+ ratio + '%}';
                    return tooltipText;
                } else {
                    return '{c|' + params.name + '}' + '{d|' + ratio + '%}';
                }
            },
            textStyle: {
                rich: {
                    a: {
	                        color: 'yellow', 
                        fontSize: 12,
                         
                    },
                    b: {
                        fontSize: 12,
                        color: "yellow"
                        
                    },
                    c: {
                        color: '#fff'
                    },
                    d: {
                        color: '#fff'
                    }
                }
            }
        }
    }]
};
		myChart.setOption(option)