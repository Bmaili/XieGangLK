//用来实例化多个axios对象
import axios from 'axios'
import store from '../store/store.js'
export const http_raw= axios.create({
    baseURL: 'http://101.43.198.16:10000',
    //timeout: 1000,
    headers: {'Content-Type': 'application/json'}
    })

export const http_raw_token= axios.create({
    baseURL: 'http://101.43.198.16:10000',
    //timeout: 1000,
    headers: {
            'Authorization':  store.state.token,   
            'Content-Type': 'application/json',
    }
    })
