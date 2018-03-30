function str_split(source, chunkSize) {
	if (source.length === 0)
		return [];
	else if (chunkSize <= 0)
		return [source];

	var result = [];
	var startIndex = 0, i = -1, loops = Math.ceil(source.length / chunkSize);
	while (++i < loops) {
		result.push(source.slice(startIndex, startIndex + chunkSize));
		startIndex += chunkSize;
	}

	return result;
}


function array_reverse( array, preserve_keys ) {	

	var arr_len=array.length, newkey=0, tmp_ar = {}

	for(var key in array){
		newkey=arr_len-key-1;
		tmp_ar[(!!preserve_keys)?newkey:key]=array[newkey];
	}

	return tmp_ar;
}
