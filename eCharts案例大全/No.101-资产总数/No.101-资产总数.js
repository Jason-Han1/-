var getsjjg = ['数据库', '文件系统', '接口','账号'];
var getsjjgrs = [84,10,107,102];
var PieColor = [ "#EB3B5A","#FA8231","#FFD14C",'#009DFF',"#00e473","#395CFE","#2EC7CF","#733DFF","#966EFF","#7fdefe"];
var Total = 303;
var syjgdata = [];
for (var i = 0; i < getsjjg.length; i++) {
    syjgdata.push({
        name: getsjjg[i],
        value: getsjjgrs[i]
    })
}


var rich = {
    name: {
        color: "#24c4ff",
        fontSize: 14,
        padding: [0, 5],
        fontWeight:'400',
        align: 'right'
    },
    value: {
        color: "#fff",
        fontSize: 14,
        padding: [5, 5],
        fontWeight:'400',
        align: 'right'
    },
    percent: {
        color: "#FFD14C",
        align: 'right',
        fontSize: 14,
        fontWeight:'500',
        padding: [0, 5]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
var colorList = PieColor;
 option = {
     title: {
         text: '资产总数',
         subtext: Total,
		 textAlign: 'center',
         textStyle: {
             color: '#00b5f3',
             fontSize: 14,
			

         },
         subtextStyle: {
             fontSize: 20,
             color: ['#85c7e3'],
         },
         x: '49%',
         y: '40%',
     },
    series: [{
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                },
                borderColor: '#172659',
                borderWidth: 3
            }
        },
        type: 'pie',
        //clockWise: false ,
        //roseType: 'radius',
        radius: ['40%', '60%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#34569D'
                }
            }
        },
        label: {
            normal: {
				formatter: function(params, ticket, callback) {
                    var total = Total;
                    var percent = 0;
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{name|' + params.name + '\n}{value|' + params.value + '}{percent|' + params.percent.toFixed(0) + '%}'
                },
                rich: rich,
                padding: [0, -5, 0, -5],
            }
        },
        data: syjgdata
    },{
        itemStyle: {
            normal: {
                color: 'rgba(62,109,255,0.4)',
            }
        },
        type: 'pie',
        hoverAnimation: false,
        radius: ['35%', '65%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show:false
            }
        },
        data: [{
                value: 1,
            }],
        z:-1
    }]
};