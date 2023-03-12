
        var arry=[];//series数组
        var leg=[];//legend数组
        for(var i=0;i<7;i++){
            var data=[];
            for(var j=0;j<=i;j++){
                if(j==i){
                     data.push(Math.random()*1000)
                }else{
                    data.push(0)
                }
               
            }
            leg.push("名字"+i)
            var color="#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);
            if(i==0){
                color="#f00"
            }
            arry.push({
                name:"名字"+i,
                type:'bar',
                stack: '广告',
                data:data,
                color:color
            })
        }
option = {
               
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                 tooltip : {
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : arry,
                 legend: { 
                   data:leg
                },
            };