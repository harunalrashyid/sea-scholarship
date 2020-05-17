import axios from 'axios'

import {
    FETCH_PROGRAMS_REQUEST,
    FETCH_PROGRAMS_SUCCESS,
    FETCH_PROGRAMS_ERROR
} from './typesAction'

import { request, received, error } from './baseAction'

export const fetchPrograms = () => dispatch => {
    dispatch(request(FETCH_PROGRAMS_REQUEST))

    const AxiosData = {
        method: 'GET',
        url: 'https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return axios(AxiosData)
     .then(response => dispatch(received(FETCH_PROGRAMS_SUCCESS, response.data)))
     .catch(err => {
         console.log('AXIOS ERROR', err.response)
         dispatch(error(FETCH_PROGRAMS_ERROR))
     })
}