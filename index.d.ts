declare module 'express-query-boolean' {
    import { Request, Response, NextFunction } from 'express'

    export default function parseBool(): (req: Request, res: Response, next: NextFunction) => void
}
