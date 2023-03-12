var date = new Date()
var today =date - 24*60*60 * 1000
console.log(today)

var genet = function (interval,startTime,endTime){
    var st1 = new Date(startTime)
    var st2  = new Date(endTime)
    var lag =st2 -st1
    var oneday = 24 *3600 *1000
    console.log(lag / oneday)
    var initTime 
    var random = function(num){
        return num + (Math.random()*200-250) 
    }
    
        var option = {
        dataTime:[],
        sets:[],
        timespance:[]
    }
    option.timespance[0] = `${st1.getFullYear()}-${st1.getMonth()+1}-${st1.getDate()} 00:00`
    option.timespance[0] = `${st2.getFullYear()}-${st2.getMonth()+1}-${st2.getDate()} 00:00`    
    for(var i=0;i<500,i++;){
        
        option.dataTime.push(random(400));
        option.sets.push(str1+=3600*Math.random()*5000+1000);
        
    }
    


    
}
genet(3600,'2019-5-10','2019-5-17')

var items = [
        [
            '2019-5-10 02:00',
            500
        ],
         [
            '2019-5-11 02:00',
            500
        ],
         [
            '2019-5-10 02:00',
            200
        ],
         [
            '2019-5-10 02:00',
            500
        ],
         [
            '2019-5-10 02:00',
            500
        ],
         [
            '2019-5-10 02:00',
            500
        ]
    ];



option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        type:'time',
        min:'2019-5-10 00:00',
        max:'2019-5-17 00:00',
        interval:24*3600*1000
    
    },
    yAxis: {
        
    },
    series: [{
        type: 'line',
        data: items
    }]
};