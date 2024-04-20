import { Route, createBrowserRouter, createRoutesFromElements, json, redirect } from 'react-router-dom';
import { date, number, string } from 'yup';

import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import WeatherPage from './WeatherPage';
import CommonErrorPage from './CommonErrorPage';
import yup from './yup.jp';
import BookFormPage from './BookFormPage';
import { lazy } from 'react';

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

const fetchWeather = async ({params}) => {
    sleep(3000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    if (res.ok) {
        return res;
    }
    switch (res.status) {
        case 404:
            throw json({message: 'City not found'}, {status: 404});
        case 401:
            throw json({message: 'Invalid API key'}, {status: 401});
        default:
            throw json({message: 'api server is in trouble'}, {status: 501});
    }
}

const bookAction = async ({ request }) => {
    const form = await request.formData();
    const bookSchema = yup.object({
      title: string().label('書名').required().max(100),
      price: number().label('価格').integer().positive(),
      published: date().label('刊行日').required().max(new Date(2100, 0, 1))
    });
    let info;
    try {
      info = await bookSchema.validate({
        title: form.get('title'),
        price: form.get('price') || 0,
        published: new Date(form.get('published') || Date.now()),
      }, {
        abortEarly: false
      });
      console.log(info);
      return redirect('/');
    } catch (e) {
      return e.errors;
    }
  };

const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam />} errorElement={<CommonErrorPage />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/book/form" element={<BookFormPage />} action={bookAction} />
            <Route path="/book/:isbn?" element={<BookPage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path='/bookQuery' element={<BookQueryPage />} />
            <Route path='/bookState' element={<BookStatePage />} />
            <Route path='/weather/:city' element={<WeatherPage />} lazy={() => import('./WeatherLazyPage')} 
                loader={fetchWeather}
            />
        </Route>
    )
);

export default routesParam;