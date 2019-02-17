var i = 0;

while( i < 10 ){
    i++;
    console.log(i);
}

i=0;

while( i < 10 ){
    i++;
    if(i===5){
        break;
    }
    console.log(i);
}

i=0;

while( i < 10 ){
    i++;
    if(i===5){
        continue;
    }
    console.log(i);
}

i = 0;

do{
    i++;
    console.log(i);

}while( i < 0);