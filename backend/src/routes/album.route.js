import { Router } from "express";

const router = Router();

router.get("/", getAllAblums);
router.get("/:albumId", getAlbumById);

export default router;
