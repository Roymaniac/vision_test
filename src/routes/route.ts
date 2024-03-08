import express from 'express';
const router = express.Router();
import { getModelData } from '../dto/modelDto';

router.get('/data', (req, res) => {
    try {
        const { modelName, fields, filters } = req.query;
        const modelNameStr = modelName as string;
        const fieldsArr = fields as string[];
        const filtersObj = filters as string;
        const modelData = getModelData(modelNameStr, fieldsArr, filtersObj);
        return res.status(200).json({ "success": true, 'data': modelData });
    } catch (error) {
        return res.status(500).json({ "success": false, "message": "Something went wrong" })
    }
});


export default router;