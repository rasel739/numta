
// Array traversing in javascript:


var arrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



for(i = 0;i<arrayNumber.length;i++){

    console.log(arrayNumber[i]);


};


var arrayName = ['Rasel','Hossain','kobir','HM','Nayem','Tajul'];


for(var j = 0;j<arrayName.length;j++){


    console.log(j+1+' '+arrayName[j]);

};



var plus = [1,2,3,4,5,6,7,8,9,10];


var sum = 0;

for(var x = 0;x<plus.length;x++){

    sum += plus[x];

    console.log(sum);


}console.log(sum);



var even = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



for(n = 0;n<even.length;n++){

    if(even[n]%2==0){

        console.log(even[n]);
    }


}


var odd = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


for(z = 0;z<odd.length;z++){


    if(odd[z]%2==0){

        console.log(z);

        console.log(odd[z]);

    }

};


var ab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


var suma = 0;

for(var u = 0;u<ab.length;u++){

    if(ab[u]%2 == 0){

        console.log(ab[u]);

        suma += ab[u];

        console.log(suma);

    }

};



var oddPlus = [1,2,3,4,5,6,7,8,9,10];

var oddSum = 0;


for(var r = 0;r<oddPlus.length;r++){

    if(oddPlus[r]%2== 1){

        console.log(oddPlus[r]);

        oddSum += oddPlus[r];

        console.log(oddSum);

    }

}




var add = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


for(var p = 0;p<add.length;p++){

    console.log(add[p]);

    add[p] = add[p] +2;

    console.log(add[p]);


}


var sub = [10,20,30,40,50,60,70,80,90,100];


for(var t = 0;t<sub.length;t++){

    console.log(sub[t]);

    sub[t] = sub[t] -2;

    console.log(sub[t]);


};


var multi = [1,2,3,4,5,6,7,8,9,10];

var numta = 2;

for(var m  = 0;m<multi.length;m++){

    console.log(multi[m]);

    multi[m] = multi[m] *numta;

    console.log(multi[m]);


}