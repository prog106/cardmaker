class ImageUploader {
    async upload(file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "qce6ouot");
        const result = await fetch(
            "https://api.cloudinary.com/v1_1/prog106/upload",
            {
                method: "POST",
                body: data,
            }
        );
        return result.json();
    }
}
export default ImageUploader;
