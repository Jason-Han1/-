 var v=4000;
 var newV=0;
 if(v <=1000){
     newV= v*250
 }else if(v <=5000){
      newV =(v - 1000)*30 + 250000;
 }
option = {
    series: [
        {
            name: '',
            type: 'gauge',
             min: 0,
            max: 1000000,
            splitNumber: 8,
            axisLabel: {
                show: true,
                formatter: function (e) {
                    switch (e + "") {
                        case "125000":
                            return "500";
                        case "250000":
                            return "1000";
                        case "375000":
                            return "5000";
                        case "500000":
                            return "10000";
                        case "625000":
                            return "50000";
                        case "750000":
                            return "100000";
                        case "875000":
                            return "500000";
                        default:
                            return e;
                    }
                }
            },
            detail: {formatter: function () {
                return v;
                
            }},
            data: [{value: newV}]
        }
    ]
};
