var  getzczbm=['其他总额','日常教学经费','基础设施建设','教学改革及研究','设备采购','师资建设','图书购置'];
var  getzczbje=[12032,10362,9230,8605,7230,6662,4250];
var  getzczbl=[21,19,16,14,13,12,10];
var zczbdata = [];
for(var i = 0;i<getzczbm.length;i++){
	zczbdata.push({name:getzczbm[i],value:getzczbje[i]})
}

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>收入金额: {c}万元"
    },

    legend: {
        type:"scroll",
        orient: 'vertical',
		height:'88%',
        right: '20',
        top: 'center',
        itemWidth: 18,
        itemHeight: 18,
        data: getzczbm,
        formatter: function(name) {
            for (var i = 0; i<option.series[0].data.length; i++) {
				if (name == option.series[0].data[i].name) {
                    return '{name|' + name+ '}{rate|' + getzczbl[i] + '%}'
				}
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 400,
                    width: 170,
                    height: 25,
                    padding:[0,0,0,5],
					color:'#666'
                },
                rate: {
                    fontSize: 16,
                    fontWeight: 400,
                    height: 25,
                    width: 40,
                    align:'right',
					color:'#333'
                }
            }
        }        

    },
	animation: false,
    series: [{
        type: 'pie',
        radius: ['40%', '65%'],
        center: ['25%', '50%'],
        color: ["#4E7BFE","#6796FD","#3CB4FF","#26D080","#6B72D4","#FEC704","#FF4756"],
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: zczbdata
    }]
};