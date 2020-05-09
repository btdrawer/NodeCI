const { S3 } = require("aws-sdk");
const { v4: uuid } = require("uuid");
const requireLogin = require("../middlewares/requireLogin");
const {
    accessKeyId,
    secretAccessKey,
    region,
    bucket,
} = require("../config/keys");

const s3 = new S3({
    accessKeyId,
    secretAccessKey,
    region,
});

module.exports = (app) => {
    app.get("/api/upload", requireLogin, (req, res) => {
        const key = `${req.user.id}/${uuid()}.jpeg`;
        s3.getSignedUrl(
            "putObject",
            {
                Bucket: bucket,
                ContentType: "image/jpeg",
                Key: key,
            },
            (err, url) => res.send({ key, url })
        );
    });
};
