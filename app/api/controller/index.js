
class UrlShortener {
    constructor() {
        this.urlDatabase = {}
    }

    //Hash function to generate a short code
    generateShortCode(url) {
        let hashCode = 0
        for(let i = 0; i < url.length; i ++) {
            const char = url.charCodeAt(i)
            hashCode = (hashCode << 5) - hashCode + char 
        }
        return hashCode.toString(36).slice(0, 6) //Using base to keep it short
    }

    //shorten url
    shortenUrl(url) {
        const shortCode = this.generateShortCode(url) 
        this.urlDatabase[shortCode] = url
        const shortUrl = `http://localhost:3000/${shortCode}`
        return shortUrl
    }

    //retrieve original Url
    getOriginalUrl(shortCode) {
        return this.urlDatabase[shortCode]
    }
}

export const shortenUrl = async(req, res) => {
    const url = req.body 
    try {
        const shortener = new UrlShortener()
        const shortUrl = await shortener.shortenUrl(url)
        res.send({ shortdUrl: shortUrl});
    } catch (error) {
        res.json({ error: error})
        console.log(error);
    }
}