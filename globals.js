//////////////REQUIRED FOR USING YODLEE
//cobrand login and cobrandpassword is the first authentication to verify your app with Yodlee
// this gets the token session


//then you need the userLogin and the userPassword, which is the particular user that you want to query from
//this gets the user token session
var cobSessionToken = '';
var userSessionToken = '';
module.exports = {
  cobrandLogin  : 'sbCobvictorhom1',
  cobrandPassword  : 'c61928f5-eb83-4633-bebb-3ac494f46e56',
  users : {'john' : 'sbMemvictorhom12', 'jane' : 'sbMemvictorhom13', 'jim' : 'sbMemvictorhom14' },
  user1 : 'sbMemvictorhom12',
  user1pw : 'sbMemvictorhom12#123',
  user2 : 'sbMemvictorhom13',
  user2pw : 'sbMemvictorhom13#123',
  user3 : 'sbMemvictorhom14',
  user3pw : 'sbMemvictorhom14#123',
  baseUrl : 'https://developer.api.yodlee.com:443/ysl/restserver/v1/',
  cobrandLoginURL : 'cobrand/login',
  userLoginURL : 'user/login',
  transactions : 'https://developer.api.yodlee.com:443/ysl/restserver/v1/transactions?toDate=2015-12-03&&&',
  accounts : 'https://developer.api.yodlee.com:443/ysl/restserver/v1/accounts',
  options : {
    url: 'https://developer.api.yodlee.com:443/ysl/restserver/v1/transactions?toDate=2015-12-03&&&',
    method:  'GET',
    headers: {Authorization : "{cobSession=" + cobSessionToken + "," + "userSession=" + userSessionToken + "}"},
    form: ''
  },
  headers: {
			'User-Agent':            'Mozilla/5.0',
			'Content-Type':          'application/json',
			'encoding':				 'utf8'
		},
  cobSessionToken : cobSessionToken,
  userSessionToken : userSessionToken
}
