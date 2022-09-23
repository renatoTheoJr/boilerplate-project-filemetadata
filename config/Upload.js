const multer = require("multer");
const { resolve } = require("path");

export default {
    upload(folder) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, "..", "..", folder),
                filename: (request, file, callback) => {
                    const fileName = `${file.originalname}`;
                    return callback(null, fileName);
                },
            }),
        };
    },
};
