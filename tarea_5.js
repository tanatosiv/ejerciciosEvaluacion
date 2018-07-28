let array = [80, 60, 56, 87, 100, 340,-54];	
	
	function closest(array,num){
	var i=0;
	var minDiff=1000;
	var ans;
	for(i in array){
	var m=Math.abs(num-array[i]);
	if(m<minDiff){ 
	minDiff=m; 
	ans=array[i]; 
	}
	}
	return ans;
	}
		
    console.log(closest(array,4));
    