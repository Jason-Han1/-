
var legends = [{name:"二衬", value:6, color:'green'},{name:"初衬", value:3},{name : "爆破", value:9}, {name : "支护", value:1},
{name:"钢筋工", value:6},{name:"木工", value:3},{name : "架子工", value:9}, {name : "电工", value:1}, {name : "钳工", value:1}];




option = {
        title: {
            x:5,
            text: '隧道内人员情况',
            textStyle:{
                color:'#eee',
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function(params,ticket,callback){
                //console.log(params);
                var tip = "";
                for(var i in params){
                    if(params[i].value[0] > 0){
                        tip = "时长：" + params[i].value[0] + "分钟";
                    }
                }

                return tip;

            }
        },
        backgroundColor:'#04334c',
        color:['#48cda6','#fd87ab','#11abff','#efdf33','#968ade','#89cd46','#7d85cb','#61abff','#4fdf33'],
        legend: {
            orient: 'vertical', // 'vertical'
            x:5,
            y:50,
            textStyle: {
                color: '#eee'
            },
            formatter:function(name){
                for(var i in legends){
                    if(legends[i].name == name){
                        return name + "(" + legends[i].value + ")";
                    }
                }
                return name;
            },
            data: legends
        },
        calculable : true,
        dataZoom : [{
            yAxisIndex:[0,1],
            show : true,
            realtime : true,
            orient: 'vertical',   // 'horizontal'
            x: 480,
            y: 80,
            backgroundColor: 'rgba(0,0,0,0)',
            width: 20,
            height: '88%',
            start : 10,
            end : 90
        }],
        grid:[
            {

                left: 150,
                right: '4%',
                top: '10%',
                width: 130,
                bottom: '45%',
                height: '50%', //设置grid高度
                containLabel: true
            } ,{
                left: 350,
                right: '4%',
                top: '10%',
                width: 130,
                height: '50%', //设置grid高度
            }],
        xAxis: [ {

            gridIndex:0,
            type: 'value',
            axisTick: {show: false},
            axisLine: {show:false},
            axisLabel: {show:false},
            splitArea: {show:false},
            splitLine: {show:false}
        }, {

            gridIndex:1,
            type: 'value',
            axisTick: {show: false},
            axisLine: {show:false},
            axisLabel: {show:false},
            splitArea: {show:false},
            splitLine: {show:false}
        }],
        yAxis: [{
            name: '左线(7)     时长',
            axisLine: {show:false},
            axisTick: {show:false},
            nameTextStyle: {
                fontWeight: 'bold',
                color: '#eee'
            },
            axisLabel:{textStyle:{ color: '#eee'}},
            gridIndex:0,
            type: 'category',
            data: ['陈迪','肖东菁','高川','冯超','明明','徐丹','向珍','史靖文','宫昊','冯媛媛','李青','王国花','李子月','推卸','宫昊']
        },{
            name:'右线(27)     时长',
            axisLine: {show:false},
            axisTick: {show:false},
            nameTextStyle: {
                fontWeight: 'bold',
                color: '#eee'
            },
            axisLabel:{textStyle:{ color: '#eee'}},
            gridIndex:1,
            type: 'category',
            data: ['周杰','白桦','张涵','章伟','王晗','刘思思','黄芙蓉','宋阳','肖锋','毛泽尧','徐夕武','张百玲']
        }],
        series: [
            {
                xAxisIndex: 0,
                yAxisIndex: 0,
                type: 'bar',
                stack:'group1',
                name: '二衬',
                barWidth:15,
                itemStyle:{color:'#eee'},
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[46,0],[0,1],[0,2],[0,3],[46,4],[146,5],[26,6],[0,7],[36,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14]]
            },
            {   xAxisIndex: 0,
                yAxisIndex: 0,
                type: 'bar',
                stack:'group1',
                name: '初衬',
                barWidth:15,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[0,0],[21,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[86,9],[50,10],[0,11],[0,12],[0,13],[0,14]]
            },
            {
                xAxisIndex: 0,
                yAxisIndex: 0,
                type: 'bar',
                stack:'group1',
                name: '爆破',
                barWidth:15,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[0,0],[0,1],[34,2],[0,3],[0,4],[0,5],[0,6],[69,7],[0,8],[0,9],[0,10],[0,11],[0,12],[33,13],[0,14]]
            },
            {   xAxisIndex: 0,
                yAxisIndex: 0,
                type: 'bar',
                stack:'group1',
                name: '支护',
                barWidth:15,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[0,0],[0,1],[0,2],[90,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[32,11],[55,12],[0,13],[0,14]]
            },
            {   xAxisIndex: 0,
                yAxisIndex: 0,
                stack:'group1',
                type: 'bar',
                name: '钢筋工',
                barWidth: 15,//固定柱子宽度
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[23,14]]
            },
            {
                xAxisIndex: 1,
                yAxisIndex: 1,
                type: 'bar',
                stack:'group2',
                name: '木工',
                barWidth:15,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[45,0],[68,1],[0,2],[90,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[23,14]]
            },
            {
                xAxisIndex: 1,
                yAxisIndex: 1,
                type: 'bar',
                stack:'group2',
                name: '架子工',
                barWidth:15,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[0,0],[0,1],[90,2],[0,3],[56,4],[0,5],[0,6],[76,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[23,14]]
            },
            {
                xAxisIndex: 1,
                yAxisIndex: 1,
                type: 'bar',
                stack:'group2',
                name: '电工',
                barWidth:15,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[56,8],[87,9],[89,10],[88,11],[24,12]]
            },
            {
                xAxisIndex: 1,
                yAxisIndex: 1,
                type: 'bar',
                stack:'group2',
                name: '钳工',
                barWidth:15,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        formatter: function(object){
                            if(object.value[0] > 0){
                                return object.value[0];
                            }else{
                                return "";
                            }

                        },
                    }
                },
                data: [[0,0],[0,1],[0,2],[0,3],[0,4],[56,5],[77,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12]]
            }

        ]
    };