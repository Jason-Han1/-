
   var legenddata = [
{name:'美国',value:85840,Dead:1296},
{name:'意大利',value:80589,Dead:8215},
{name:'西班牙',value:57786,Dead:4365},
{name:'德国',value:43938,Dead:267},
{name:'法国',value:29566,Dead:1698},
{name:'伊朗',value:29406,Dead:2234},
{name:'英国',value:11812,Dead:580},
{name:'瑞士',value:11811,Dead:191},
{name:'韩国',value:9332,Dead:139},
{name:'荷兰',value:7469,Dead:435},
{name:'奥地利',value:6909,Dead:49},
{name:'比利时',value:6235,Dead:220},
{name:'加拿大',value:4046,Dead:39},
{name:'土耳其',value:3629,Dead:75},
{name:'葡萄牙',value:3544,Dead:60},
{name:'挪威',value:3372,Dead:14},
{name:'澳大利亚',value:2991,Dead:13},
{name:'巴西',value:2985,Dead:77},
{name:'瑞典',value:2840,Dead:77},
{name:'以色列',value:2693,Dead:8}
],
 option = {
backgroundColor:'rgba(0,0,0,0.5)',
    toolbox: {
        show: false,//false则不显示工具栏
        feature: {
            saveAsImage: {show: true,type:'jpeg'}
        }
    },
    title: {show:false
    },
     legend: {show:false
     },
	calculable: true,
    series: [
        {
            z:2,
            name: '半径模式',
            type: 'pie',
            radius: ['40%', '80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            clockWise: false ,
          data: legenddata,
			label: {
                show: true,
             color:'#fff',
                formatter: (params) => {
                    return ` ${params.name}: ${params.percent}% `;
                },
                padding:[-30,-50,0,0],
                textStyle:{
                    lineHeight:48
                }
            },
            labelLine: {
                show: true,
                // showAbove:true,
                length: 20,
                length2: 50,
                
            },
            itemStyle: {
                normal: {
                borderColor:'#fff',
                borderWidth:1,
				color: 'rgba(9,170,145,0.2)'
                },
    },
        },
        {
            animation:false,
            z:1,
                    color: ['#A7ECFE','#09AA91','#FEC43A'],
            name:'透明圆圈',
            type:'pie',
            radius: ['40%', '45%'],
            center: ['50%', '50%'],
            silent:false,
            itemStyle: {
    },
            labelLine: {
              show:false,
            },
            data:[
                {value:25,name:''},
                {value:25,name:''},
                {value:50,name:''}
            ]
        }
            ] 
    
};
