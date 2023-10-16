var names=new Array();
names[0]="raj";
names[1]="Adhvi";
names[2]="Jen";
names[3]="joyson";
names[4]="pauly";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="adhi";



for (var i = 0; i < names.length; i++) {
       if(names[i].charAt(0)==='A'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
	}
