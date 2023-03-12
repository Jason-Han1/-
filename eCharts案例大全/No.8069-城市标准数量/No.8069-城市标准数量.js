var uploadedDataURL = "/asset/get/s/data-1586603611317--TJASLTUQ.json";
    var originData;
    var linqData;
    var StdType;
    var FinalData = [];
    $.getJSON(uploadedDataURL, function (data) {
        originData = data;
        linqData = JSLINQ(data.data);
        StdType = linqData.Distinct(function (o) { return o.stdtype })
        // console.log(linqData);
        //console.log(StdType);

        for (var i in StdType.items) {
            var typedata = linqData.Where(function (o) { return o.stdtype == StdType.items[i] });
            // console.log(typedata);
            var FD = {
                name: StdType.items[i],
                type: 'bar',
                stack: '企业标准',
                data: []
            };

            for (var j in originData.city) {
                var item = typedata.Where(function (o) { return o.city == originData.city[j] });
                //console.log(item);

                if (item.items.length > 0) {
                    FD.data.push(item.items[0].name)
                }
                else {
                    FD.data.push(0)
                }
            }
            FinalData.push(FD);
        }

        // console.log(FinalData);

       var option  = {
       title: {
        text: '全国各城市企业自我声明标准情况',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '1%',
        left: 'center',
    },
            color: ["#4AA3FF", "#9967FA", "#00FED9", "#EFE26F", "#8DBB93", "#FB8993", "#FFB880"],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                //formatter: '{b0}<br /> {a0}:{c0}________________{a1}:{c1}<br /> {a2}:{c2}________________{a3}:{c3}<br /> {a4}:{c4}________________{a5}:{c5}<br /> {a6}:{c6}________________{a7}:{c7}<br /> {a8}:{c8}________________{a9}:{c9}<br /> {a10}:{c10}________________{a11}:{c11}<br /> {a12}:{c12}________________{a13}:{c13}<br /> {a14}:{c14}________________{a15}:{c15}<br /> {a16}:{c16}________________{a17}:{c17}<br /> {a18}:{c18}________________{a19}:{c19}<br /> {a20}:{c20}________________{a21}:{c21}<br /> {a22}:{c22}________________{a23}:{c23}<br /> {a24}:{c24}________________{a25}:{c25}<br /> {a26}:{c26}________________{a27}:{c27}<br /> {a28}:{c28}________________{a29}:{c29}<br /> {a30}:{c30}________________{a31}:{c31}<br /> {a32}:{c32}________________{a33}:{c33}<br /> {a34}:{c34}________________{a35}:{c35}<br /> {a36}:{c36}________________{a37}:{c37}<br /> {a38}:{c38}________________{a39}:{c39}<br /> {a40}:{c40}________________{a41}:{c41}'
            },
            dataZoom: [
                  {
                      type: 'inside',
                      show: true,
                      xAxisIndex: [0],
                      start: 0,
                      end: 5
                  }],
            grid: {
                top: "5%",
                left: '3%',
                right: '4%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: "#4169E1"
                    }
                },
                data: originData.city
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: "#4169E1"
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#4169E1'
                    }
                },
            }],
            series: FinalData
        };


    myChart.setOption(option);

    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function() {
    JSLINQ = window.JSLINQ = function(dataItems) {
        return new JSLINQ.fn.init(dataItems);
    };
    JSLINQ.fn = JSLINQ.prototype = {
        init: function(dataItems) {
            this.items = dataItems;
        },

        // The current version of JSLINQ being used
        jslinq: "2.10",

        ToArray: function() { return this.items; },
        Where: function(clause) {
            var item;
            var newArray = new Array();

            // The clause was passed in as a Method that return a Boolean
            for (var index = 0; index < this.items.length; index++) {
                if (clause(this.items[index], index)) {
                    newArray[newArray.length] = this.items[index];
                }
            }
            return new JSLINQ(newArray);
        },
        Select: function(clause) {
            var item;
            var newArray = new Array();

            // The clause was passed in as a Method that returns a Value
            for (var i = 0; i < this.items.length; i++) {
                if (clause(this.items[i])) {
                    newArray[newArray.length] = clause(this.items[i]);
                }
            }
            return new JSLINQ(newArray);
        },
        OrderBy: function(clause) {
            var tempArray = new Array();
            for (var i = 0; i < this.items.length; i++) {
                tempArray[tempArray.length] = this.items[i];
            }
            return new JSLINQ(
            tempArray.sort(function(a, b) {
                var x = clause(a);
                var y = clause(b);
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            })
        );
        },
        OrderByDescending: function(clause) {
            var tempArray = new Array();
            for (var i = 0; i < this.items.length; i++) {
                tempArray[tempArray.length] = this.items[i];
            }
            return new JSLINQ(
            tempArray.sort(function(a, b) {
                var x = clause(b);
                var y = clause(a);
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            })
        );
        },
        SelectMany: function(clause) {
            var r = new Array();
            for (var i = 0; i < this.items.length; i++) {
                r = r.concat(clause(this.items[i]));
            }
            return new JSLINQ(r);
        },
        Count: function(clause) {
            if (clause == null)
                return this.items.length;
            else
                return this.Where(clause).items.length;
        },
        Distinct: function(clause) {
            var item;
            var dict = new Object();
            var retVal = new Array();
            for (var i = 0; i < this.items.length; i++) {
                item = clause(this.items[i]);
                // TODO - This doens't correctly compare Objects. Need to fix this
                if (typeof (item) == "object") {
                    if (dict[item["ID"]] == null) {
                        dict[item["ID"]] = true;
                        retVal[retVal.length] = item;
                    }
                }
                else {
                    if (dict[item] == null) {
                        dict[item] = true;
                        retVal[retVal.length] = item;
                    }
                }

            }
            dict = null;
            return new JSLINQ(retVal);
        },
        Any: function(clause) {
            for (var index = 0; index < this.items.length; index++) {
                if (clause(this.items[index], index)) { return true; }
            }
            return false;
        },
        All: function(clause) {
            for (var index = 0; index < this.items.length; index++) {
                if (!clause(this.items[index], index)) { return false; }
            }
            return true;
        },
        Reverse: function() {
            var retVal = new Array();
            for (var index = this.items.length - 1; index > -1; index--)
                retVal[retVal.length] = this.items[index];
            return new JSLINQ(retVal);
        },
        First: function(clause) {
            if (clause != null) {
                return this.Where(clause).First();
            }
            else {
                // If no clause was specified, then return the First element in the Array
                if (this.items.length > 0)
                    return this.items[0];
                else
                    return null;
            }
        },
        Last: function(clause) {
            if (clause != null) {
                return this.Where(clause).Last();
            }
            else {
                // If no clause was specified, then return the First element in the Array
                if (this.items.length > 0)
                    return this.items[this.items.length - 1];
                else
                    return null;
            }
        },
        ElementAt: function(index) {
            return this.items[index];
        },
        Concat: function(array) {
            var arr = array.items || array;
            return new JSLINQ(this.items.concat(arr));
        },
        Intersect: function(secondArray, clause) {
            var clauseMethod;
            if (clause != undefined) {
                clauseMethod = clause;
            } else {
                clauseMethod = function(item, index, item2, index2) { return item == item2; };
            }

            var sa = secondArray.items || secondArray;

            var result = new Array();
            for (var a = 0; a < this.items.length; a++) {
                for (var b = 0; b < sa.length; b++) {
                    if (clauseMethod(this.items[a], a, sa[b], b)) {
                        result[result.length] = this.items[a];
                    }
                }
            }
            return new JSLINQ(result);
        },
        DefaultIfEmpty: function(defaultValue) {
            if (this.items.length == 0) {
                return defaultValue;
            }
            return this;
        },
        ElementAtOrDefault: function(index, defaultValue) {
            if (index >= 0 && index < this.items.length) {
                return this.items[index];
            }
            return defaultValue;
        },
        FirstOrDefault: function(defaultValue) {
            return this.First() || defaultValue;
        },
        LastOrDefault: function(defaultValue) {
            return this.Last() || defaultValue;
        }
    };
    JSLINQ.fn.init.prototype = JSLINQ.fn;
    })();