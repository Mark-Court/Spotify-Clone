import { Song } from "../model/song.model.js";
import { User } from "../model/user.model.js";
import { Album } from "../model/album.model.js";

export const getAllStat = async (req, res, next) => {
  try {
    const [totalSongs, totalUsers, totalAlbums, unqieArtists] =
      await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),

        Song.aggregate([
          { $unionWith: { coll: "albums", pipeline: [] } },
          { $group: { _id: "$artist" } },
          { $count: "count" },
        ]),
      ]);

    res
      .status(200)
      .json({
        totalSongs,
        totalUsers,
        totalAlbums,
        totalArtists: unqieArtists[0]?.count || 0,
      });
  } catch (error) {
    next(error);
  }
};
