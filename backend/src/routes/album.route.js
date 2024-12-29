import { Router } from "express";
import { getAllAblums, getAlbumById } from "../controller/album.controller.js";

const router = Router();

router.get("/", getAllAblums);
router.get("/:albumId", getAlbumById);

export default router;
