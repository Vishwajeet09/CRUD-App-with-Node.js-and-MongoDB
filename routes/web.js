import express from "express"
import candidateController from "../Controller/candidateController.js"

const router = express.Router()
// import studentController from "./Controller/studentController.js"

router.get("/", candidateController.getAllDoc)
router.post("/", candidateController.createDoc)
router.get("/addInfo", candidateController.addInfo)
router.get("/edit/:id", candidateController.editDoc)
router.post("/update/:id", candidateController.updateDocById)
router.post("/delete/:id", candidateController.deleteDocById)

export default router