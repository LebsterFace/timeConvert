// timeConvert by LebsterFace
const timeConvert={format:function(n){return null!=n.match(/s(ec(ond)?)?s?/gi)?"second":null!=n.match(/m(in(ute)?)?s?/gi)?"minute":null!=n.match(/h(our)?s?/gi)?"hour":null!=n.match(/d(ay)?s?/gi)?"day":null!=n.match(/w(eek)?s?/gi)?"week":null!=n.match(/mo(nth)?s?/gi)?"month":void 0},conversions:{second:{second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3},minute:{second:1/60,minute:1,hour:60,day:1440,week:10080,month:43200},hour:{second:1/3600,minute:1/60,hour:1,day:24,week:168,month:720},day:{second:1/86400,minute:1/1440,hour:24,week:7,month:30},week:{second:604800,minute:10080,hour:168,day:7,week:1,month:30/7},month:{second:2592e3,minute:43200,hour:720,day:30,week:30/7,month:1}},convert:function(n,e,t){return e=this.format(e),t=this.format(t),n/this.conversions[e][t]},valueFormat:function(n,e){return e=this.format(e),(n>1||n>0&&n<1)&&(e+="s"),`${n} ${e}`},convertString:function(n,e,t){return`${this.valueFormat(n,e)} = ${this.valueFormat(this.convert(n,e,t),t)}`}}