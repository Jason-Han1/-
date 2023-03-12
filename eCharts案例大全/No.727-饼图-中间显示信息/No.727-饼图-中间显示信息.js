

        // let  arr= function (oldVal, newVal, json) {
        //     for (var i in json) {
        //         for (var j in json[i]) {
        //         if (j == oldVal) {
        //             json[i][newVal] = json[i][j]//修改属性名为newVal
        //             delete json[i][oldVal]//删除oldVal
        //         }
        //         }
        //     }
        // }
        // let data=arr('total','value',this.parray)
        // let Ndata=arr('type','name',this.parray)
    
        var data = [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }]
        var color=['#ee6666',"#1492ff",'#fac858','#91cc75','#5470c6', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc','#0ed2ff']
        var nametext ='劳务用工'
        
// for(var j=0;j<data.length;j++){
//     total+=data[j].value
// }
option={
    color:color,
            title: {
                show: false,
                text: nametext,
                subtext:'122',
                textAlign:'center',
                textVerticalAlign:'middle',
                textStyle: {
                    fontSize: 20,
                    lineheight:30,
                    color: "#333",
                    fontStyle: "normal"
                },
                subtextStyle:{
                    color: '#1492ff',
                                    fontSize: 16,
                                    fontWeight:'bold',
                                    padding: [0, 10, 0, 10],
                },
                left: "30%",
                top:'center'
            },
            legend: {
                orient: 'vertical',
                right: '5%',
                bottom:'center',
                itemWidth: 14,
                itemGap: 12,
                selectedMode:false,
                textStyle: {
                rich: {
                                a: {
                                    color: '#333',
                                    fontSize: 16,
                                    width:150,
                                    padding: [0, 10, 0, 0],
                                },
                                b: {
                                    color: '#1492ff',
                                    fontSize: 16,
                                    fontWeight:'bold',
                                    padding: [0, 10, 0, 10],
                                },
                            }
                },
                formatter: function (name) {
                            var target,unit;
                            for (var i = 0, l = data.length; i < l; i++) {
                                if (data[i].name == name) {
                                    target = data[i].value;
                                    unit = data[i].unit
                                }
                            }
                            return `{a| ${name}}{b|${target}}`;
                        }
            },
            series: [
                {
                    name: 'lwyg',
                    type: 'pie',
                    radius: ['40%', '80%'],
                    center:['30%','50%'],
                    minAngle:30,
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal:{
                            show: true,
                            position: 'center',
                            formatter:'{b}\n{c}',
                            textStyle:{
                                fontSize:0,
                                color: '#fff',
                            }
                        },
                        emphasis: {
                            show:true,
                            textStyle:{
                                fontSize:20,
                                fontWeight:'bold'
                            },
                            formatter:function(params){
                                return `{a| ${params.name}}\n{b|${params.value}}`;
                            },
                            rich: {
                                a: {
                                    color: '#333',
                                    fontSize: 20,
                                    lineHeight:25,
                                },
                                b: {
                                    color: '#1492ff',
                                    fontSize: 20,
                                    fontWeight:'bold',
                                    lineHeight:25,
                                },
                            }
                        },
                    },
                    labelLine: {
                        normal:{
                            show: false
                        }
                    },
                    data: data
                }
            ]
}

// var that=this
// this.ChartPie.on('mouseover', { seriesName:'lwyg'},function(params) {
//     that.ChartPie.setOption({
//         title:{
//             show:false
//         }
//     })
// });
// this.ChartPie.on('mouseout', { seriesName:'lwyg'},function(params) {
//     that.ChartPie.setOption({
//         title:{
//             show:true
//         }
//     })
// })
        
