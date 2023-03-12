option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        grid: {
            left: 0
        },
        legend: {
	       	top:'top',
	        data:['线上店铺','线下门店','微信','货到付款','现金','微信','支付宝','其他支付']
        },
        series: [
            {
                name:'支付占比',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '25%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:200, name:'线上店铺', selected:true},
                    {value:800, name:'线下门店'}
                ]
            },
            {
                name:'支付占比',
                type:'pie',
                radius: ['35%', '45%'],
                data:[
                    {value:100, name:'微信'},
                    {value:100, name:'货到付款'},
                    {value:150, name:'现金'},
                    {value:300, name:'微信'},
                    {value:250, name:'支付宝'},
                    {value:50, name:'其他支付'}
                ]
            }
        ]
    };
        myChart.setOption(option);
        function randomData() {
            return Math.round(Math.random()*1000);
        }
                    
     