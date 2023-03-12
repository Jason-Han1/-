var salvProName =["安徽省","河南省","浙江省","湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"];
var salvProValue =[23,20,16,11,7,5,4,3,2,2];
// var salvProMax =[];//背景按最大值  
// for (let i = 0; i < salvProValue.length; i++) {
//     salvProMax.push(salvProValue[0])
// }
var salvProMax =[100];//背景按最大值  
option = {
 
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ' : ' + params[0].value+'%'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#648cfa' // 左边坐标轴颜色
            },
     
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        data: salvProName
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: 30,
                    color:'#FFE6D5', // 柱体颜色
                },
            },
            label: {
			    show: true,
			    position: 'right',
			    distance:10,
			    textStyle: {
				    color: '#648cfa', // 右边百分比数值
			    },
			    formatter:params=>{
			        return params.value+'%'
			    }
		    },
            barWidth: 20,
            data: salvProValue
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: salvProMax,
            itemStyle: {
                normal: {
                    color: '#fff', // 柱体背景色，白色或者透明色都可以
                }
            },
        },
    ]
};