import { body } from 'express-validator';


export const validacionNombre = [
    body('name')
        .trim()
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre debe tener entre 3 y 90 caracteres')
];


export const validacionCapital = [
    body('capital')
        .trim()
        .notEmpty().withMessage('La capital es obligatoria')
        .isLength({ min: 3, max: 90 }).withMessage('La capital debe tener entre 3 y 90 caracteres')
];


export const validacionBorders = [
    body('borders')
        .isArray({ min: 1 }).withMessage('Debe haber al menos un pais limítrofe'),

    body('borders.*')
        .optional({ checkFalsy: true })
        .trim()
        .isLength({ min: 3, max: 3 }).withMessage('Cada código debe tener 3 caracteres')
        .toUpperCase()
];


export const validacionArea = [
    body('area')
        .trim()
        .notEmpty().withMessage('El area es obligatoria')
        .isInt({ min: 0 }).withMessage('El area debe ser un número positivo')
];


export const validacionPopulation = [
    body('population')
        .trim()
        .notEmpty().withMessage('La población es obligatoria')
        .isInt({ min: 0 }).withMessage('La población debe ser un número positivo')
];