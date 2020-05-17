import axios from 'axios'

import {
    FETCH_ALL_WEB_CONTENT_REQUEST,
    FETCH_ALL_WEB_CONTENT_SUCCESS,
    FETCH_ALL_WEB_CONTENT_ERROR
} from './typesAction'

import { request, received, error } from './baseAction'

export const fetchAllWebContent = () => dispatch => {
    dispatch(request(FETCH_ALL_WEB_CONTENT_REQUEST))

    const AxiosData = {
        method: 'GET',
        url: 'https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return axios(AxiosData)
     .then(response => dispatch(received(FETCH_ALL_WEB_CONTENT_SUCCESS, response.data)))
     .catch(err => {
         console.log('AXIOS ERROR', err.response)
         dispatch(error(FETCH_ALL_WEB_CONTENT_ERROR))
     })
}