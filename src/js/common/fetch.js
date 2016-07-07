var url = "";

if(process.env.NODE_ENV === 'production'){
	url = "http://console.topvdn.com";
}else{
	url = "http://192.168.2.52";
}