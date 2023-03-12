option = {
            title: {
                text: '快递业绿色发展相关政策及标准',
                left:'center',
                textStyle:{
                    color:'white',
                    fontStyle:'italic',
                    fontSize:36,
                    textBorderColor:'yellow',
                    textBorderWidth:0.8
                }
            },
            xAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            backgroundColor: '#2a333d',
            legend:{
                left:'right',
                top:'bottom',
                orient:'vertical',
                selectedMode:'single',
                textStyle:{
                    color:'write',
                    fontSize:18
                },
                data:[{
                    name:'政策规划'
                },{
                    name:'相关标准'
                },{
                    name:'法律法规'
                },]
            },
            tooltip:{
                enterable: true,
                textStyle: {
                    color: '#000',
                    decoration: 'none',
                },
            },
            series:[{
                name:'政策规划',
                type:'graph',
                draggable: false,
                coordinateSystem: "cartesian2d",
                itemStyle:{
                    color:'#99cc99'
                },
                label:{
                    show:true,
                    position:'right',
                    fontSize:15
                },
                data:[{
                    name:'2020年',
                    value:[250,850],
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    symbolSize:100,
                    
                },{
                    name:'《关于加强快递绿色包装标准化工作的指导意见》',
                    value:[650,850],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,

                        
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:460px;border-radius:5px;background:#fff">' +
                                      '印发时间：'+'2020年8月'+
                                      '<br>印发部门：'+'市场监管总局、发展改革委、科技部、生态环境部、商务部、<br>工业信息化部、住房城乡建设部、国家邮政局'+
                                      '<br>政策内容：提出了今后3年我国快递绿色包装标准化工作的总体目标，明确<br>了升级快递绿色包装标准体系、加快研制快递包装绿色化标准、完善快递<br>包装减量化标准、抓紧制定快递包装回收支撑标准等8项重点任务。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2019年',
                    value:[250,650],
                    symbolSize:80,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《行业生态环境保护年度工作要点》',
                    value:[650,700],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:410px;border-radius:5px;background:#fff">' +
                                      '印发时间：'+'2019年2月'+
                                      '<br>印发部门：国家邮政局'+
                                      '<br>政策内容：'+'明确量化目标，聚焦快递包装和节能减排系统提出年度<br>工作任务。'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《关于推进物流高质量发展 促成形成强大国内市场的意见》',
                    value:[650,650],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:410px;border-radius:5px;background:#fff">' +
                                      '印发时间：'+'2019年3月'+
                                      '<br>印发部门：国家发展改革委、商务部、交通运输部等24个有关部门'+
                                      '<br>意见内容：加快绿色物流发展；鼓励企业使用符合标准的低碳环保<br>配送车型；发展绿色仓储。'+
                                     
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《关于全面加强生态环境保护 坚决打好污染防治攻坚战的意见》',
                    value:[650,600],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:450px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2018年6月'+
                                      '<br>发布单位：中共中央、国务院'+
                                      '<br>意见内容：'+'推行绿色消费，出台快递业、共享经济等新业态的规范标准，<br>推广环境标志产品、有机产品等绿色产品。'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2018年',
                    value:[250,500],
                    symbolSize:60,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                   
                },{
                    name:'《国务院办公厅关于推进电子商务与快递物流协同发展的意见》',
                    value:[650,550],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:380px;border-radius:5px;background:#fff">' +
                                      '发布时间：'+'2018年1月'+
                                      '<br>发布机关：国务院办公厅'+
                                      '<br>意见内容：强化绿色理念，发展绿色生态链。促进资源集约，<br>推广绿色包装，推动绿色运输与配送。'+
                                     
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《快递暂行条例》',
                    value:[650,500],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:110px;width:440px;border-radius:5px;background:#fff">' +
                                      '实施日期：'+'2018年5月'+
                                      '<br>发布机构：中华人民共和国国务院'+
                                      '<br>条例内容：强调促进快递行业绿色发展，鼓励经营快递业务的企业和<br>寄件人使用可降解、可重复利用的环保包装材料，鼓励经营快递业务的<br>企业采取措施回收快递包装材料，实现包装材料的减量化利用和再利用'+
                             
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《邮政业服务决胜全面建成小康社会 开启全面服务社会主义现代化国家新征程三年行动计划》',
                    value:[650,450],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:70px;width:340px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2018年6月'+
                                      '<br>发布单位：国家邮政局'+
                                      '<br>规划内容：对绿色邮政建设进行规划，提出工作措施。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    
                    name:'2017年',
                    value:[250,350],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《快递业发展“十三五规划”》',
                    value:[650,400],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:430px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2017年2月'+
                                      '<br>发布单位：国家邮政局'+
                                      '<br>规划内容：实现快递业“低污染、低消耗、低排放、高效能、高效率、<br>高效益”的绿色发展。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《关于协调推进快递业绿色包装工作的指导意见》',
                    value:[650,350],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:340px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2017年10月'+
                                      '<br>发布单位：国家邮政局等十部门'+
                                      '<br>意见内容：制定实施《快递封装用品》系列国家标准,<br>对联合推进快递业绿色包装工作进一步做出规定。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《关于加快我国包装产业转型发展的指导意见》',
                    value:[650,300],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:115px;width:430px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2016年12月'+
                                      '<br>发布单位：工信部、商务部'+
                                      '<br>意见内容：坚持绿色发展、适度包装。构建覆盖生产、流通、消费、<br>回收与资源再利用的包装全生命周期绿色化网络体系，对联合推进<br>快递业绿色包装工作进一步做出规定。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2016年',
                    value:[250,200],
                    symbolSize:30,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《全国电子商务物流发展专项规划》',
                    value:[650,230],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:85px;width:345px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2016年3月'+
                                      '<br>发布单位：国家邮政局、海关总署、商务部等六个部门'+
                                      '<br>规划内容：将“电商物流绿色循环工程”作为规划中的<br>八大重点工程之一。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《推进快递业绿色包装工作实施方案》',
                    value:[650,170],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:65px;width:280px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2016年8月'+
                                      '<br>发布单位：国家邮政局'+
                                      '<br>方案内容：部署快递业绿色包装工作。'+
                                   
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2015年',
                    value:[250,50],
                    symbolSize:30,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《关于促进快递业发展的若干意见》',
                    value:[650,50],
                    symbolSize:15,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:70px;width:350px;border-radius:5px;background:#fff">' +
                                      '发布日期：'+'2015年10月'+
                                      '<br>发布单位：中华人民共和国国务院'+
                                      '<br>意见内容：将“绿色节能”作为快递发展目标之一。'+
                                   
                                      '</div>';
                            return tipHtml;
                        }
                    },
                 
                }],
            },{
                name:'政策规划',
                type:"effectScatter",
                coordinateSystem:'cartesian2d',
                silent:true,
                rippleEffect:{
                    brushType:'stroke',
                    scale:1.7
                },
                itemStyle:{
                    color:'#99cc99'
                },
                data:[{
                    value:[250,850],
                    symbolSize:100
                },{
                    value:[250,650],
                    symbolSize:80
                },{
                    value:[250,500],
                    symbolSize:60
                },{
                    value:[250,350],
                    symbolSize:40
                },{
                    value:[250,200],
                    symbolSize:30
                },{
                    value:[250,50],
                    symbolSize:30
                },]
            },{
                name:'政策规划',
                type:'lines',
                coordinateSystem:'cartesian2d',
                zlevel:2,
                effect:{
                    show:true,
                    symbolSize:10,
                    symbol:'triangle'
                },
                tooltip:{
                    show:false
                },
                lineStyle:{
                    curveness:0.1,
                    opacity:0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 2,
                },
                data:[
                      {coords:[[250,850],[250,650]],lineStyle:{curveness:0}},
                      {coords:[[250,650],[250,500]],lineStyle:{curveness:0}},
                      {coords:[[250,500],[250,350]],lineStyle:{curveness:0}},
                      {coords:[[250,350],[250,200]],lineStyle:{curveness:0}},
                      {coords:[[250,200],[250,50]],lineStyle:{curveness:0}},
                      {coords:[[250,850],[650,850]]},
                      {coords:[[250,650],[650,700]]},
                      {coords:[[250,650],[650,650]]},
                      {coords:[[250,500],[650,600]]},
                      {coords:[[250,500],[650,550]]},
                      {coords:[[250,500],[650,500]]},
                      {coords:[[250,500],[650,450]]},
                      {coords:[[250,350],[650,400]]},
                      {coords:[[250,350],[650,350]]},
                      {coords:[[250,200],[650,300]]},
                      {coords:[[250,200],[650,230]]},
                      {coords:[[250,200],[650,170]]},
                      {coords:[[250,50],[650,50]]},
                    ]
            },{
                name:'相关标准',
                type:'graph',
                draggable: false,
                coordinateSystem: "cartesian2d",
                label:{
                    show:true,
                    position:'right',
                    fontSize:20
                },
                itemStyle:{
                    color:'#FF9966'
                },
                data:[{
                    name:'2020年',
                    value:[250,700],
                    symbolSize:80,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《快递包装绿色产品认证规则》',
                    value:[650,750],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:70px;width:400px;border-radius:5px;background:#fff">' +
                                      '发布时间：'+'2020年6月'+
                                      '<br>制订单位：'+'市场监管总局、国家邮政局'+
                                      '<br>标准内容：规定了快递包装绿色产品认证的基本原则和要求。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《邮件快件绿色包装规范》',
                    value:[650,650],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:110px;width:440px;border-radius:5px;background:#fff">' +
                                      '发布时间：'+'2020年6月'+
                                      '<br>制定单位：'+'国家邮政局'+
                                      '<br>标准内容：将“注意节约环保，杜绝过度包装，避免浪费和污染环境”<br>的要求落实在行业规范体系上，细化为行业操作要求和一线人员操作<br>规则，深入推进邮件快件包装绿色治理工作。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2018年',
                    value:[250,500],
                    symbolSize:60,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《绿色封装用品》系列国家标准',
                    value:[650,500],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '发布时间：'+'2018年2月'+
                                      '<br>发布单位：'+'国家邮政局'+
                                      '<br>标准内容：从绿色采购、内部培训、包装操作等方面明确了相关<br>要求，推进规范化系统性治理。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2017年',
                    value:[250,300],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《邮政业封装胶带第2部分：生物降解胶带》',
                    value:[650,300],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '发布时间：'+'2017年10月'+
                                      '<br>发布单位：'+'国家邮政局'+
                                      '<br>标准内容：规定了生物降解胶带的要求、试验方法、检验规则、<br>标志、包装、运输和储存等。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                }],
            },{
                name:'相关标准',
                type:"effectScatter",
                coordinateSystem:'cartesian2d',
                silent:true,
                rippleEffect:{
                    brushType:'stroke',
                    scale:1.7
                },
                itemStyle:{
                    color:'#FF9966'
                },
                data:[{
                    value:[250,700],
                    symbolSize:80
                },{
                    value:[250,500],
                    symbolSize:60
                },{
                    value:[250,300],
                    symbolSize:40
            
                }]
            },{
                name:'相关标准',
                type:'lines',
                coordinateSystem:'cartesian2d',
                zlevel:2,
                effect:{
                    show:true,
                    symbolSize:10,
                    symbol:'triangle'
                },
                tooltip:{
                    show:false
                },
                lineStyle:{
                    curveness:0.1,
                    opacity:0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 2,
                },
                data:[
                      {coords:[[250,700],[250,500]],lineStyle:{curveness:0}},
                      {coords:[[250,500],[250,300]],lineStyle:{curveness:0}},
                    
                      {coords:[[250,700],[650,750]]},
                      {coords:[[250,700],[650,650]]},
                      {coords:[[250,500],[650,500]]},
                      {coords:[[250,300],[650,300]]},
                    ]
            },{
                name:'法律法规',
                type:'graph',
                draggable: false,
                coordinateSystem: "cartesian2d",
                label:{
                    show:true,
                    position:'right',
                    fontSize:20
                },
                itemStyle:{
                    color:'#CCCCFF'
                },
                data:[{
                    name:'2020年',
                    value:[250,700],
                    symbolSize:80,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《中华人民共和国固体废物污染环境防治法》',
                    value:[650,700],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:435px;border-radius:5px;background:#fff">' +
                                      '修订时间：'+'2020年9月'+
                                      '<br>发布机关：'+'全国人大常委会'+
                                      '<br>法规内容：如第六十八条第四、五款，电子商务、快递、外卖等行业<br>应当优先采用可重复使用、易回收利用的包装物，优化物品包装，减少<br>包装物的使用，并积极回收利用包装物。县级以上地方人民政府商务、<br>邮政等主管部门应当加强监督管理。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2018年',
                    value:[250,500],
                    symbolSize:60,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《中华人民共和国电子商务法》',
                    value:[650,500],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '修订时间：'+'2018年8月'+
                                      '<br>发布机构：全国人大常委会'+
                                      '<br>法规内容：增加绿色包装专门条款，明确了快递包装绿色治理的<br>上位法依据。'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'2015年',
                    value:[250,300],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    
                },{
                    name:'《中华人民共和国邮政法》',
                    value:[650,300],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:110px;width:400px;border-radius:5px;background:#fff">' +
                                      '修订时间：'+'2015年月'+
                                      '<br>发布机构：全国人大常委会'+
                                      '<br>法规内容：构建邮政业规范发展的大框架，具体规定了邮政设施、<br>服务、资费、损失赔偿、快递业务等内容，为绿色物流发展奠定<br>了基础。'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                }],
            },{
                name:'法律法规',
                type:"effectScatter",
                coordinateSystem:'cartesian2d',
                silent:true,
                rippleEffect:{
                    brushType:'stroke',
                    scale:1.7
                },
                itemStyle:{
                    color:'#ccccff'
                },
                data:[{
                    value:[250,700],
                    symbolSize:80
                },{
                    value:[250,500],
                    symbolSize:60
                },{
                    value:[250,300],
                    symbolSize:40
                }]
            },{
                name:'法律法规',
                type:'lines',
                coordinateSystem:'cartesian2d',
                zlevel:2,
                effect:{
                    show:true,
                    symbolSize:10,
                    symbol:'triangle'
                },
                tooltip:{
                    show:false
                },
                lineStyle:{
                    curveness:0.1,
                    opacity:0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 2,
                },
                data:[
                      {coords:[[250,700],[250,500]],lineStyle:{curveness:0}},
                      {coords:[[250,500],[250,300]],lineStyle:{curveness:0}},
                      {coords:[[250,700],[650,700]]},
                      {coords:[[250,500],[650,500]]},
                      {coords:[[250,300],[650,300]]},
                    ]
            }],
            animationDuration:5000,
            animationDelay:500
        }