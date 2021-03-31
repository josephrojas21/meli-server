import { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import Routes from '../api'

export default async ({ app }: { app: Application }) => {
    app.set('port', process.env.PORT || 5000 );
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());

    app.use( new Routes().expose());

};