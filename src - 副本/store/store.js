//  store.js 中都mutation中增加添加和删除token的方法
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/*json.parse:字符串转json；
json.stringfy:json转字符串 */
const store=new Vuex.Store({
	state:{
		username:localStorage.getItem('username') ? localStorage.getItem('username'):'',
		userid:localStorage.getItem('userid') ? localStorage.getItem('userid'):'',
		isLogin:localStorage.getItem('isLogin') ? localStorage.getItem('isLogin'):false,
	 	token:localStorage.getItem('token') ? localStorage.getItem('token'):'',   // 如果没有设置localstorage，初始化的时候就把token初始化为'',token
	},
	//我们可以认为，【getters】是store的计算属性。
	getters:{    // 监听数据变化的
		gettoken(state){   // 获取本地存储的登录信息
	    	state.token =localStorage.getItem('token') || state.token
	      	return state.token
	    }
	},
	mutations:{
		$_setToken(state, value) { // 设置存储token
	        state.token = value;
	        localStorage.setItem('token', value);
	    },
	    /*$_removetoken(state){  // 删除token
			state.token=''
		    localStorage.removeItem('token');	
	    },*/
		$_setLoginInfo(state,[userid,username]){ //设置全局变量：用户名和用户id
			state.userid = userid;
			state.username=username;
			state.isLogin=true;
	        localStorage.setItem('userid', userid);
			localStorage.setItem('username', username);
			localStorage.setItem('isLogin', true);
		},
		$_removeLoginInfo(state){ //退出登录时，清空信息
			state.userid=''
			state.username=''
			state.token=''
			state.isLogin=false
		    localStorage.removeItem('token');
			localStorage.removeItem('username');
			localStorage.removeItem('userid');
			localStorage.removeItem('isLogin');
		},
	}
})

export default store