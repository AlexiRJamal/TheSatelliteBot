exports.helpMessage = () => {
  return `
This help message will be in English currently. Translations are coming soon.

You can refer to this link, or read the following message.

*Basic commands:*
/add:
    Adds a new item to your todo list.
    Usage: /add <any>
    Example: /add something
/get:
    Gets your list of items.
/remove:
    Removes an item from your todo list.
    Usage: /remove <index>
    Example: /remove 2
    Removes the second item.
/bug:
    Reports a bug found by you to the creator.
    Usage: /bug bug
    Example: /bug wrong translation
/lyrics:
    Sends a song's lyrics
    Usage: /lyrics <song name>
    Example: /lyrics don't blame me
/decide:
    Decides for you.
    Available => {
        Heads or tails
        Random numbers
        Dice
        Cards
        Shuffle
        Password
        Custom list
    }
/define:
    Sends the definition of a word as defined Merriam-Webster's dictionary.
    Usage: /define <word>
    Example: /define sky
/help:
    Sends this help message.
/settings:
    Access your own personal settings to change your language and notification types and timings.
/qr:
    Converts the sent text to a scannable QR image.
    Usage: /qr <string>
    Example: /qr I love Alexi!
/weather:
    Sends the tempreature of the city.
    Usage: /weather <city>
    Example: /weather Beirut
/wExtend:
    Sends the full weather status of the city.
    Usage: /wExtend <city>
    Example: /wExtend Beirut
/convert:
    Tired of converting from metric to imperial? Or vice versa? This tool can help you.
    Usage: /convert
    It'll send an inline menu in which you can choose what you can do
/about:
    To get to know information about the bot.
/contact:
    To contact the creator
/generate:
    Choose maths numbers sequences.
/math:
    Choose math operations.
/ping:
    Check the connection with the bot.
/wiki:
    Searches Wikipedia for you.
    Usage: /wiki <search term>
    Example: /wiki world war one

*Extras:*
/cats:
    Choose between cats facts, pictures, or GIFs. Because... Why not?
    Usage: /cats
/flag:
    Sends you the flag of the country you send.
    Usage: /flag <country>
    Example: /flag vatican
/lmgtfy:
    Let Me Google That For You.
    For all those annoying people...
    Usage: /lmgtfy <query term>
    Example: /lmgtfy how to eat
/morse:
    Encode or decode a message to-from morse code.
/wotd:
    Sends you Word Of The Day
/excuse:
    Ever late for work or need something? Use this!
/google:
    Perform a simple Google search. Just send me the text and the rest is mine.
    Usage: /google (search term)
    Example: /google 37
/native:
    Get how a language is written in its native.
    Usage: /native <language>
    Example: /native Russian
/remind:
    You send the timing, I'll send a message reminding you of it :)
    Usage: /remind (time in seconds)
    Example: /remind 120
/telcode:
    Get the country from its code.
    Usage: /telcode (country code)
    Example: /telcode +961
/shout:
    SHOUTS THE TEXT
    Usage: /shout <text>
/whisper:
    whisper the text silently...
    Usage: /whisper <text>

Eastereggs:
    I've hided some funny stuff. Try sending "We were on a break" or "Emma" to the bot, and see what happens...
Try to discover them all.

Coming soon:
/download
    Gets you the mp3 song of a YouTube link
/movie
    Get movie details
/warn:
    Warns a user in a group

`;
};
