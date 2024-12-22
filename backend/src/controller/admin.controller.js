export const createSong = async (req, res) => {
    try {
        if (!req.files || !req.files.audioFile || !req.files.imageFile) {
            return res.this.status(400).json({ message: "Please upload all files"});
        }

        const {title, artist, albumId, duration} = req.body;
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        })

        await song.save()

    } catch (error) {

    }
};