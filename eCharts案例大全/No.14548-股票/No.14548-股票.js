    var time = [],
        price = [],
        avgPrice = [];
    var suiji = 80;
    var sjjj=true;
    var refercnce = 100; //参考线，昨收价格
    var minVal = refercnce - 20; //价格最小值
    var maxVal = refercnce + 20; //价格最大值
    var minPct = ((minVal - refercnce) / refercnce * 100).toFixed(2); 
    //涨幅最小值
    var maxPct = ((maxVal - refercnce) / refercnce * 100).toFixed(2); 
    //涨幅最大值
    for (var i = 9; i <= 15; i++) {
        for (var y = 0; y <= 59; y++) {
            if (i == 9 && y < 30) {
                y = 30;
            }
            if ((i > 11 && i < 13) || (i === 11 && y > 30) || (i === 13 && y === 0) ) {
               
            }else{
                time.push(weishu(i, 2) + ':' + weishu(y, 2));
       			
                if(sjjj){
                  suiji = randomNum(suiji,suiji+1);  
                    if(suiji>=120){
                        
                        sjjj=false;
                    }
                }else{
                    suiji =  randomNum(suiji,suiji-2);  
                    if(suiji<=80){
                        sjjj=true;
                    }
                }
                // price.push(suiji); 
                // avgPrice.push(randomNum(suiji+2,suiji+4).toFixed(2)); 
                if(i<=11){
              price.push(suiji); 
               
                avgPrice.push(randomNum(suiji+2,suiji+4).toFixed(2)); 
              }
            }
            if (i >= 15) {
                break;
            }
        }
    }
   function randomNum(minNum,maxNum){ 
// 	  console.log(Math.floor(Math.random()*(maxNum-minNum+1)+minNum).toFixed(2))
      return Math.random()*(maxNum-minNum+1)+minNum; 
    } 

    function weishu(str, num) {
        str = '0000' + str;
        return str.substr(str.length - num);
    }
    
    var option = {
        tooltip:{  
            backgroundColor :'rgba(240,255,255,0.8)',
            borderColor:'#666',
            transitionDuration :0,
            padding :[2,4],
            trigger :'axis',
            confine:true,
            borderWidth: 1,
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor:'rgba(240,255,255,0.8)',
                   	textStyle:{
                   		color:'#333',
                   		fontSize:14,
                   	},
                   	padding:[5,4],
                   	borderColor:'#000',
                	borderWidth:1,
                   	shadowBlur:0,
                   	shadowColor:'rgba(0,0,0,0)'
                },
                crossStyle :{
                    type :'solid',
                    color:'rgb(190,190,190)',
                },
            },
            extraCssText: 'border-radius:0',
			position: function (pos, params, el, elRect, size) {
                var obj = {};
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 10;
                obj['top']=pos[1]-10;
                return obj;
            },
			formatter: function(obj) {
              	var data='';  
              	var fcolor = obj[0].value < refercnce ? '#26aa5e' : obj[0].value > refercnce ? '#f0595e' :'#333';
              	data+='<span style="color:'+fcolor+'">'+obj[0].value.toFixed(2)+'</span>';
				return data;
            }
        },
        title: {
            text: '',
        },
        grid:{
        	top:5,
            left:5,
            right:5,
        },
        xAxis: {
            boundaryGap: false,
            splitNumber: 4,
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 59,
                color:'#333',
                padding: [0, 0,0 ,-25],
                formatter: function(val,index) {
                    var flag = '        ';               
                    if(index===0){
//                      flag='                  ';
                        flag='                ';
                    }
                    if(index === 240){
                        flag='';
                    }
                    if(val == '10:30' || val == '14:00'){
                    	flag='';
                    	val = '';
                    }
                    return flag + val;
                },
            },
            axisLine:{
                lineStyle:{
                    color:'#ddd'
                }, 
            },
            data: time,
            splitLine: {
                show: true,
            },
        },
        yAxis: [{
            splitNumber: 4,
            min: minVal,
            max: maxVal,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLine:{
                lineStyle:{
                    color:'#ddd'
                },
                onZero: false 
            },
            axisLabel: {
                inside:true,
                padding:[-25,0,0,0],
                formatter: function(val,index) {
                    var flag = '';
                    if(index % 2 === 0){
                        if(index===2){
                           flag='\n\n';
                        }
                        if(index===4){
                            flag ='\n\n\n\n';
                        }
                        return flag+ val.toFixed(2);
                    }
                },
                textStyle: {
                    color: function(val) {
                        //设置坐标轴刻度颜色(大于1000的数需要去除'，')
                        var temp = val.split(',').join('');
                        return temp < refercnce ? '#26aa5e' : temp > refercnce ? '#f0595e' :'#333';
                    }
                }
            },
            axisPointer: {
                label: {
                   show :false,
                }
            },

        }, {
            min: minPct,
            max: maxPct,
            axisLine:{
                lineStyle:{
                    color:'#ddd'
                },
                 onZero: false 
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                inside:true,
                padding:[-25,0,0,0],
                formatter: function(val,index) {
                    var flag = '';
                    if(index % 2 === 0){
                        if(index===2){
                           flag='\n\n';
                        }
                        if(index===4){
                            flag ='\n\n\n\n';
                        }
                        return flag+ val.toFixed(2) + '%';
                    }
                },
                textStyle: {
                    color: function(val) {
                        var temp = val = val.split(',').join(''); 
                        return temp < 0 ? '#26aa5e' : temp > 0 ? '#f0595e' :'#333';
                    }
                }
            },
            axisPointer: {
                label: {
                   show :false,
                }
            },

        }],
        series: [{
            type: 'line',
            symbol: 'none',
             name:'实时价格',
            smooth: true,
            tooltip :{
           
            },        
            lineStyle: {
                normal: {
                    color: '#474747', // 实时价格
                    width: 1,
                },

            },
            areaStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)'
                }
            },
            data: price,
            markLine: {
             silent: true,
             label: {
                 normal: {
                     // position: 'start'
                     show:false
                 }
             },
             lineStyle: {
                 normal: {
                     color: '#f0595e', // 参考价格
                     width: 1,
                 },
 
             },
             symbol:'none',
             data: [{
                 yAxis: 102
             }]
         }
        },{
            type: 'line',
            symbol: 'none',
            name:'均线价格',
            lineStyle: {
                normal: {
                    color: '#ffa421', // 均线价格
                    width: 1
                }
            },
            label:{
            	normal: {
                    show: false
                  
                }
            },
            data: avgPrice
        }]
    };
    
    function getdata(gpcode){
        $.ajax({
            url:"http://pdfm.eastmoney.com/EM_UBG_PDTI_Fast/api/js?id="+gpcode+"&TYPE=r&js=fsdata((x))&rtntype=5&isCR=false&fsdata=fsdata",
            type:'get',
            beforeSend: function(request) {
                        request.setRequestHeader("Referer", "http://pdfm.eastmoney.com/EM_UBG_PDTI_Fast/api/js?id=3001192&TYPE=r&js=fsdata((x))&rtntype=5&isCR=false&fsdata=fsdata");
                        request.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
                   
                    },
                    
            success:function(data){
                console.log(data);
                suiji = randomNum(suiji,suiji+1);  
                price.push(suiji);
                avgPrice.push(randomNum(suiji,suiji+1));
                myChart.setOption({
                    series: [{
                         name:'实时价格',
                        data: price
                    },{
                         name:'均线价格',
                        data:avgPrice
                    }]
                });
            },
            error:function(error){
                
                
            }
        });
    }
    setInterval(function () {
        getdata('3001192');
    
    }, 2000);