            var createSaleChart = function(stitle, type){
                if(main_chart){
                    main_chart.dispose();
                }
                $('#myTabContent').find('span.text').text(stitle);
                
                var dtNow = new Date();
                var dateTimes =[];
                var dateTimesdata = [];
                
                for(var i=0; i <= 11; i++){
                    dateTimes.push((i + 1) + '月');
                    dateTimesdata.push(function(){
                        return Math.floor(1000 * i * Math.random() * 10);
                    }());
                }
    
    
                var rqtDataSet = [];
                var legendData = [];
                $.each(['微信小程序','头条小程序','支付宝小程序','H5站', 'WEB站'], function(i, item){
                    legendData.push(item);
                    var obj = {
                        name:item,
                        type:type || 'line',
                        data:dateTimesdata
                    }
                    rqtDataSet.push(obj);
                })

                var chartOpt = {
                    // title:{
                    //     text:stitle
                    // },
                    legend:{
                        data:rqtDataSet
                    },
                    grid: {show:'true',borderWidth:'0',height:"60%",width:"80%",y:"20%",x:"12%"},
		            calculable : true,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    yAxis:{
                        type:'value'
                    },
                    xAxis:{
                        data:dateTimes
                    },
                    series:rqtDataSet
                }

                main_chart = echarts.init(document.getElementById('main_chart'));
                main_chart.setOption(chartOpt);
            }
    
            var eventInit = function(){
                $('#myTabContent .dropdown-menu').delegate('li', 'click', function(event){
                    if($(this).hasClass('active')){
                        return;
                    }else{
                        $(this).addClass('active').siblings('li').removeClass('active');
                        if($(this).data('id') == 1){
                            createSaleChart('走势曲线图', 'line');
                        }else{
                            createSaleChart('柱状对比图', 'bar');
                        }
                    }
                });

                $('#main_chart').on('resize', function(event){
                    main_chart.resize();
                });
            }