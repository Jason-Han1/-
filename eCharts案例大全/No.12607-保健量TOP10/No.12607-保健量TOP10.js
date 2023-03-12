option = {
    title: {
        text: '保健量TOP10',
        textStyle:{
            color:'#fff', 
        },
    },
    backgroundColor:'#141845',
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:[ 
	    	{name: '现场申请',textStyle:{color:"#fff"}},
	        {name:'网上申请',textStyle:{color:"#fff"}},
	        {name:'咨询',textStyle:{color:"#fff"}}
        ],
        axisLine:{lineStyle:{color:"#fff"}}
    },
    grid: {
    	top:'14%',
        left: '10%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLine:{lineStyle:{color:"#fff"}}
    },
    yAxis: {
        type: 'category',
        data: ['泸州市','内江市', '自贡市', '成都市', '乐山市', '攀枝花市','广元市', '德阳市', '绵阳市', '四川省'],
        axisLine:{lineStyle:{color:"#fff"}},
        
    },
    series: [
        {
            name: '现场申请',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
                        normal:{
                            color:'#2AF6B1'
                        }
                    },
            data: [120, 102, 101, 134, 300, 130, 220, 401, 434, 590]
        },
        {
            name: '网上申请',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    
                    
                }
            },
           itemStyle:{
                        normal:{
                            color:'#2A86F5'
                        }
                    },
            
            data: [80, 92, 101, 134, 90, 230, 210, 201, 134, 90]
        },
        {
            name: '咨询',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            itemStyle:{
                        normal:{
                            color:'#858FFE'
                        }
                    },
            data: [120, 182, 191, 234, 290, 330, 310, 191, 234,200]
        }
        
    ]
};