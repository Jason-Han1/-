var chartData = [
        {value: 0.7, name:'惠南'},
        {value: 0.9, name:'三林'},
        {value: 0.2, name:'张江'},
        {value: 0.5, name:'高东'},
        {value: 0.8, name:'高行'},
        {value: 0.7, name:'金桥'},
        {value: 0.9, name:'曹路'},
        {value: 0.2, name:'唐镇'},
        {value: 0.5, name:'合庆'},
        {value: 0.8, name:'北蔡'},
        {value: 0.7, name:'高桥'},
        {value: 0.9, name:'川沙'},
        {value: 0.2, name:'花木'},
        {value: 0.5, name:'东明'},
        {value: 0.8, name:'浦兴'}
];
var itemData = [],
    bgData = [];

// 取出每一条数据value,作为显示数据
chartData.forEach(function(items, index) {
    itemData.push(items.value);
});

// 取出所有数据最大值,作为背景象形柱图数据
chartData.forEach(function(items, index) {
    bgData.push(Math.max.apply(null, itemData));
});

var sum = eval(itemData.join("+")); //eval方法求和公式
console.log("dataValue求和值为："+sum);
var averageValue = Math.abs((sum / itemData.length * 100) / 100).toFixed(1); //求平均值
console.log("dataValue求平均值为："+"%c"+averageValue, "color:red");

    option = {
        backgroundColor: '#000e46',
        title : {
            show:false
        },
        tooltip : {//提示框（悬浮框）
            trigger: 'axis',
            backgroundColor:'rgba(0,0,0,0.7)',
            borderRadius:2,
            axisPointer: {
                type: "shadow"
            },
            textStyle: {
                color: "#fff",
                fontSize: 14
            },
            formatter: "{a} <br/>{b}: {c}"
        },
        legend: {
            show: false
        },
        grid: {
            x:40,
            y:60,
            x2:30,
            y2:60,
        },
        xAxis : [
            {
                type: 'category',//种类是类目
                axisLine:{
                    lineStyle:{
                        color:'#181970',
                        width:1
                    }
                }, 
                axisTick:{ 
                    show:false, //坐标轴小标记
                    inside:false, //小标记是否显示为在grid内部,默认在外部
                    lineStyle: {
                        color: '#3f5a8c', //小标记颜色
                        width:2
                    }
                },
                axisLabel: {//坐标轴标签
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16
                    },
                    /*formatter: '{value}'*/
                    formatter:function(value){
                        return value.split("").join("\n");
                    }
                },
                data: (function(data){
                    var arr=[];
                    data.forEach(function(items){
                        arr.push(items.name);   
                    });
                    return arr;
                })(chartData) //x轴data
            }
        ],//x轴   
        yAxis : [
            {                   
                min: 0,
                max: 1.0,
                interval: 0.2,
                axisTick:{
                    show:false, //坐标轴小标记
                    inside:false, //小标记是否显示为在grid内部,默认在外部
                    lineStyle: {
                        color: '#3f5a8c', //小标记颜色
                        width:2
                    }
                },//坐标轴刻度
                axisLine:{
                    show:false,
                },//坐标轴线
                splitLine:{
                    show: false,
                     lineStyle:{
                        color:'#181970',
                        width:1
                    }
                },//轴向网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16
                    },
                    formatter: '{value}'
                } //坐标轴标签
            }
        ],//y轴 
        animationEasing: 'elasticOut',
        series: [{
            name: '检查覆盖率',
            type: 'pictorialBar', //象形柱图
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize:[16, 4],
            symbolMargin: 2, //图形的两边间隔
            itemStyle: {
                normal:{
                    //color:"#fec85f"
                    color: function(params){ // 颜色定制显示（按顺序）console.log(params)
                        var colorList= []; 
                        for(var i=0; i< chartData.length; i++){
                            if(params.value > averageValue){
                                colorList.push('#5878ff');
                            }else{
                                colorList.push('#ef9356');
                            }//console.log(colorList);
                            return colorList;
                        }
                        return colorList[params.dataIndex];
                    }
                }, 
            },
            markLine: {
                precision: 1, //标线数值的精度，在显示平均值线的时候有用（即小数点后第几位）
                data : [
                    {type : 'average', name: '平均值'}
                ],
                lineStyle: {
                    normal: {
                        type: 'dashed',
                        color: '#ef4034',
                        width: 2,
                    },
                },
                label:{
                    show: true,
                    formatter:function(params){ //强制设置平均值
                        var res = averageValue
                        return res;
                    }
                }
            },
            data: itemData //数据
        },
        {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize:[16, 4],
            symbolMargin: 2,
            color:'#272762',
            barGap : '-100%',
            z: 1,
            data: bgData //背景数据
        }]
    };