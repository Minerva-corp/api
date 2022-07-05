import request from 'request';
import cheerio from 'cheerio'

class MemeController {
    async generateMeme(req, res) {
        request("https://www.reddit.com/r/dankmemes/", async function (error, response, html) {
            if (!error) {
                const $ = cheerio.load(html);
                let returnInfo = [];

                $('.media-element').each(function (i, element) {
                    let temp = $(this).attr('src');
                    returnInfo.push(temp);
                });

                const randomNum = Math.floor(Math.random() * returnInfo.length);

                await res.status(200).json({ imageUrl: returnInfo[randomNum] });
            } else {
                return res.status(500).json({ error: error });
            }
        })
    }
}

module.exports = new MemeController()