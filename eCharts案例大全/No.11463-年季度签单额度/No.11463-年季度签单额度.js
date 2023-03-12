option = {
    //color:'#ff9e9e',
    backgroundColor:'#1f2b4c',
    title:{
        text:'年季度签单额度',
        textStyle: {
            color: '#fff',
        },
    },
    xAxis: {
        type: 'category',
        //boundaryGap: ['1%', '20%'],
        data: ['2012','2013', '2014', '2015', '2016', '2017', '2018', ''],
        //name:'时间',
        nameTextStyle:{
            color:'#666666',
            fontFamily: "PingFang-SC-Medium",
	        fontSize: 10,
        },
        interval: 1,
        offset: 2,
        axisLine:{  
            show:false,
            lineStyle:{  
                color:"#b5b5b5"
            }  
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: "PingFang-SC-Medium",
            	fontSize: 12,
            	color: "#fff"
            }
        }
    },
    yAxis: {
        type : 'value',
        //name:'12123322',
        interval: 1,
        nameTextStyle:{
            color:'#666666',
            fontFamily: "PingFang-SC-Medium",
	        fontSize: 10,
        },
        axisLine:{  
            show:false,
            lineStyle:{  
                color:"#b5b5b5"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: "PingFang-SC-Medium",
            	fontSize: 12,
            	color: "#fff"
            }
        },
        
        splitLine:{  
                show:false  ,
                lineStyle:{
                opacity: 0.4,
	            backgroundColor: "rgba(181, 181, 181, 0.2)"
            }
        }
    },
    legend: {
        show:false,
        data: ['a','b','c','d','e'],
        left:'right',
    },
    series: [
        {
            name:'a',
            data: [null,8, 8.2, 8.2, 8.6, 8.5, 8.7, null,null],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:1,
                    color:'green',
                },
            },
            lineStyle: {
                opacity:0,
                color: '#fff',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'a',
            data: [8, 8, 8, 8, 8, 8, 8, 8],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:1,
                    color:'#1f2b4c',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'b',
            data: [null, 6.2, 6.2, 6.6, 6.5, 6.7, 6.7,null],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:0.5,
                    color:'blue',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'b',
            data: [6, 6, 6, 6, 6, 6, 6,6],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:1,
                    color:'#1f2b4c',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'c',
            data: [null, 4.2, 4.2, 4.6, 4.5, 4.7,4.9, null],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:0.5,
                    color:'blue',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'c',
            data: [4, 4, 4, 4, 4, 4, 4,4],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:1,
                    color:'#1f2b4c',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'d',
            data: [null, 2.2, 2.2, 2.6, 2.5, 2.7,2.9, null],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:0.5,
                    color:'blue',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'d',
            data: [2, 2, 2, 2, 2, 2, 2,2],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:1,
                    color:'#1f2b4c',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'e',
            data: [null, 0.2, 0.2, 0.6, 0.5, 0.7,0.1, null],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:0.5,
                    color:'blue',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
        {
            name:'e',
            data: [0, 0, 0, 0, 0, 0, 0,0],
            type: 'line',
            areaStyle: {
                normal:{
                    opacity:1,
                    color:'#1f2b4c',
                },
                origin:'end',
                
            },
            lineStyle: {
                color: '#1f2b4c',
            },
            symbol:'none', //去掉折线图中的节点
            smooth: true  //true 为平滑曲线，false为直线
        },
    ]
};
