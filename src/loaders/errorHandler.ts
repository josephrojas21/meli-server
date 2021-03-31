import { Application, Request, Response, NextFunction } from 'express';

export default async ({ app }: { app: Application }) => {
    app.use((
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        let status = 500;

        res.status(status).json({
            message: 'error with the server',
            error: true,
        });
    });
};