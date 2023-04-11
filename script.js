const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	// for(let ky in sampleObject)
	// 	{
	// 		if(ky==key)
	// 		{
	// 			return true;
	// 		}
	// 	}

	// return false;
	let key_arr=Object.keys(sampleObject);
	if(key_arr.includes(key))
	{
		return true;
	}else{
		return false;
	}
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
