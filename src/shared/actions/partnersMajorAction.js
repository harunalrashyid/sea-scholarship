import axios from 'axios'

import {
    FETCH_PARTNERS_MAJOR_REQUEST,
    FETCH_PARTNERS_MAJOR_SUCCESS,
    FETCH_PARTNERS_MAJOR_ERROR
} from './typesAction'

import { request, received, error } from './baseAction'

export const fetchPartnersMajor = () => dispatch => {
    dispatch(request(FETCH_PARTNERS_MAJOR_REQUEST))

    const AxiosData = {
        method: 'GET',
        url: 'https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return axios(AxiosData)
     .then(response => dispatch(received(FETCH_PARTNERS_MAJOR_SUCCESS, response.data)))
     .catch(err => {
         console.log('AXIOS ERROR', err.response)
         dispatch(error(FETCH_PARTNERS_MAJOR_ERROR))
     })
}