let data = [{
            "name": "一般",
            "value": 10
        }, {
            "name": "满意",
            "value": 56
        }, {
            "name": "不满意",
            "value": 20
        }
        ];
        let num = 0;
        data.forEach(item => {
            num += item.value;
        })
        let color = [ '#115FE1', '#FF6327', '#FCD658']
        let setLabel = (data)=>{
            let opts = [];
            for(let i=0;i<data.length;i++){
                let item = {};
                item.name = data[i].name;
                item.value = data[i].value;
                item.label = {
                    normal:{
                        show:true,
                        formatter:[
                            `{a|{b} ${Math.round(data[i].value/num * 100)}%}`,//引导线上面文字
                            '{b|}' //引导线下面文字
                        ].join('\n'), //用\n来换行
                        rich:{
                            a:{
                                left:20,
                                padding:[0,-70,-15,-60]
                            },
                            b:{
                                height:4,
                                width:4,
                                lineHeight: 4,
                                marginBottom: 10,
                                padding:[0,-4],
                                borderRadius:'50%',
                                backgroundColor:color[i], // 圆点颜色和饼图块状颜色一致
                            }
                        },

                    }
                }

                opts.push(item)
            }
            return opts;
        }
        option = {
            backgroundColor: '#fff',
            animation: true,
            series: [
                {
                    color:color,
                    name: '饼图圆点',
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    type: 'pie',
                    radius: ['35%', '50%'],
                    avoidLabelOverlap: false,
                    labelLine: {
                        normal: {
                            show: true,
                            length: 7, // 第一段线 长度
                            length2: 60, // 第二段线 长度
                            align: 'right'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:setLabel(data)
                }
            ]
        }