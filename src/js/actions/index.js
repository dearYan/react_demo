export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'

function getUserMessage(json){
	return {
		type : USER_LOGIN_REQUEST,
		data : json
	}
}