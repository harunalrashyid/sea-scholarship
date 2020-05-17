import axios from 'axios'

import {
    FETCH_TESTIMONIALS_REQUEST,
    FETCH_TESTIMONIALS_SUCCESS,
    FETCH_TESTIMONIALS_ERROR
} from './typesAction'

import { request, received, error } from './baseAction'

export const fetchTestimonials = () => dispatch => {
    dispatch(request(FETCH_TESTIMONIALS_REQUEST))

    const AxiosData = {
        method: 'GET',
        url: 'https://form.v2.support.garena.co.id/_/items/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.* ',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return axios(AxiosData)
     .then(response => dispatch(received(FETCH_TESTIMONIALS_SUCCESS, response.data)))
     .catch(err => {
         console.log('AXIOS ERROR', err.response)
         dispatch(error(FETCH_TESTIMONIALS_ERROR))
     })
}