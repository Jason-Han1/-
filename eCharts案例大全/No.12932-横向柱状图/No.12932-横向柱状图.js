var myColor=['#00fcff','#00fcff','#00fcff','#00fcff','#00fcff','#00fcff','#00fcff','#00fcff'];

/*参数数值*/
let num = [600,700,650,980,550,300];
let big_num = 0;
$.each(num,function(i,v){
	if(big_num < v){
		big_num = v;
	}
})

/*最大数值值*/
let max_num = new Array();
/*内阴影*/
let max_num_f = new Array();
/*零值*/
let zero = new Array();
/*城市*/
let city = ['吕梁市','阳泉市','忻州市','朔州市','大同市','太原市'];

$.each(num,function(i,v){
	max_num[i] = big_num + 100;
	max_num_f[i] = big_num + 94;
	zero[i] = 0; 
})

option = {
    backgroundColor : '#000',
    grid: {
        left: '11%',
        top:'12%',
        right: '0%',
        bottom: '8%',
        containLabel: true
    },
    tooltip : {
    	formatter : function(datas){
    		return city[datas.dataIndex]+ '<br />购买总价：' + num[datas.dataIndex];
    	}
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
            axisTick:'none',
            axisLine:'none',
            offset:'27',
            axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize:'16',
                    }
                },
            data: city ,
        }, {
            axisTick:'none',
            axisLine:'none',
            data: ['12566','12566','12566','12566','12566','12566']
        },{
            nameGap:'50',
            nameTextStyle:{
                color:'#ffffff',
                fontSize:'16',
            },
            axisLine:{
              lineStyle:{
                color:'rgba(0,0,0,0)'
              }
            },
            data: [],
    }],
    series: [{
        name: '条',
        type: 'bar',
        stack:'圆',
        yAxisIndex: 0,
        data: num,
        label:{
              normal:{
                show:false,
                position:'right',
                distance:10,
                formatter:function(param){
                  return param.value + '%';
                },
                textStyle:{
                   color: '#ffffff',
                   fontSize:'16',
                }
              }
        },
        barWidth: 6,
        itemStyle: {
            normal: {
                color: function(params) {
                        var num=myColor.length;
                        return myColor[params.dataIndex%num]
                },
            }
        },
        z: 2
    },{
        name: '内圆',
        type: 'scatter',
        stack:'圆',
        yAxisIndex: 0,
        data: zero,
        label:{
              normal:{
                show:false,
                position:'right',
                formatter:function(param){
                  return param.value + '%';
                },
                textStyle:{
                   color: '#ffffff',
                   fontSize:'14',
                }
              }
        },
        symbolSize: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                        var num=myColor.length;
                        return myColor[params.dataIndex%num]
                },
                opacity: 1,
            }
        },
        z: 2
    }, {
        name: '白框',
        type: 'bar',
        yAxisIndex: 1,
        barGap: '-100%',
        data: max_num_f,
        barWidth: 20,
        itemStyle: {
            normal: {
                color: '#0e2147',
                barBorderRadius: 5,
            }
        },
        z: 1
    }, {
        name: '外框',
        type: 'bar',
        yAxisIndex: 2,
        barGap: '-100%',
        data: max_num,
        barWidth: 24,
        itemStyle: {
            normal: {
                color: function(params) {
                        var num=myColor.length;
                        return myColor[params.dataIndex%num]
                },
                barBorderRadius: 5,
            }
        },
        z: 0
    }
    ]
}