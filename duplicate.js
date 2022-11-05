var marks = [88, 44, 35, 65, 78, 86, 21, 8, 88, 45];
var unique = [];

for(var i=0; i<marks.length; i++){
    var element = marks[i];
    var index = unique.indexOf(element);
    if(index == -1){
        unique.push(element);
    }
}
console.log(unique);