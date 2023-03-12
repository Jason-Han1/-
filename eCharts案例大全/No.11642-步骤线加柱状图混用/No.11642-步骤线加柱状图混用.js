// var uploadedDataURL = "/asset/get/s/data-1555323032699-byXK6EYDs.png";
// var uploadedDataURL = "/asset/get/s/data-1555323013467-soKfGBDiV.png";
//下面这几个值可以根据项目的实际情况来
var predictEVFVC = "0.0";
var predictFEV1 = "3.78";
var predictFEV1FVC = "80.37";
var predictFVC = "4.52";
var predictMEF25 = "2.27";
var predictMEF50 = "5.14";
var predictMEF75 = "8.04";
var predictMMEF7525 = "4.48";
var predictPEF = "9.32";

option = {
    xAxis: {
        min: '0',
        max: '11',
        splitNumber: 12,//分割段数
        name: '时间(S)',
        position: 'bottom',
        nameGap: 5, //轴名字距离轴距离
        splitLine: {
            show: false,
        },
        axisLabel: {
            showMinLabel: false,
            showMaxLabel: true,
            //如果图表高度固定的话可以设置一个的固定值显示在零刻度线下面
            margin:'10',
        },
        axisTick: {
            show: true,
            inside: false,
        },
        interval: 1,//隔几显示一个刻度
        show: true,
    },
    grid: {
        right: '10%',
        bottom:'30%'
    },
    yAxis: [{
        min: '0',
        max: '12.5',
        axisLabel: {
            showMinLabel: true,
            showMaxLabel: false
        },
        interval: 2,
        splitNumber: 12,
        axisTick: {
            show: true,
            inside: false
        },
        name: '容积(L)',
        splitLine: {
            show: false
        },
        show: true,
    },{
        min: '0',
        max: '12.5',
        axisLabel: {
            show:false,//显示刻度值
            showMinLabel: true,
            showMaxLabel: false
        },
        interval: 1,
        splitNumber: 12,
        axisTick: {
            show: true,//显示刻度
            inside: false//刻度向内向外
        },
        name: 'MVV',
        splitLine: {
            show: false
        },
        show: true,
    }],
    series: [
        {
            type:'line',
            step: 'start',
            symbol:'none',
            markLine : {
                // lineStyle:{
                //     color:'#4980DF'
                // },
                data : [
                    {type : 'max'}
                ]
            },
            data:[[0,0],[1,2],[2,4],[3,5],[4,6],[5,7],[6,8],[7,8],[8,10],[9,11],[10,11.5],[11,11.5]]
        },
        {
            type: 'bar',
            barWidth:'12px',
            barGap: '-100%',
            data:[[0,0],[1,2],[2,2],[3,2.2],[4,2.3],[5,2.2],[6,2.2],[7,2.1],[8,2],[9,1.9],[10,2],[11,2.1]]
        },
        {
            type: 'bar',
            // barWidth:7,
        }
    ] 
};