<h1 align="center"><strong>Welcome to The Satellite Bot</strong></h1>

<h1>What is this?</h1>
Ever needed information while you were chatting? Like, performing a simple
Google search, or searching the lyrics of the song you're listening to in the
background, or checking the weather, generating random numbers, deciding some
stuff... All while you're chatting.

Well, this bot is here to help you! You can do all that without leaving the
chat.

<h1>Is it free?</h1>
I believe in something called the free internet. So, for that purpose, this bot
is actually free to use, and open-sourced for anyone to use.

<h1>INSTALLATION</h1>
<ul>
<li>Using GIT</li>
In your git bash console or any other CLI, use <code>git clone https://github.com/loox37/thesatellitebot</code> and it will automatically cloned into a folder named "thesatellitebot"
<li>Requirments</li>
You need Node.js installed, along with some other libraries, but I included that into the <code>package.json</code> under "dependencies".
And you need to go to <a href="https://t.me/thebotfather">TheBotFather</a> and request your own API key.

Also, create a folder at root, name it "tokens". Then, add the API keys to the appropriate functions, export them of course.

Example: <code>exports.getToken = () => {<br>
return 'Some API key'
<br>}
</code>

You should be set to go.

If all the above are satisfied, use <code>node index.js</code> in your CLI to get the bot up and running.
You also need to request your own API keys for the following:

<ul>
<li>Open Weather API</li>
<li>Genius Lyrics</li>
<li>Merriam-Webster</li>
</ul>
</ul>

<h1>COMMANDS</h1>
Send <code>/help</code> to the bot.

Or read this if you have the time:

<table class="tg">
  <tr>
    <th class="tg-0pky">Command</th>
    <th class="tg-0lax">Usage</th>
    <th class="tg-0lax">Description</th>
  </tr>
  <tr>
    <td class="tg-hmp3">/add</td>
    <td class="tg-hmp3">/add something</td>
    <td class="tg-hmp3">Adds a new item to your todo list</td>
  </tr>
  <tr>
    <td class="tg-0lax">/get</td>
    <td class="tg-0lax">/get</td>
    <td class="tg-0lax">Gets your todo list</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/remove</td>
    <td class="tg-hmp3">/remove &lt;index of the list item&gt;</td>
    <td class="tg-hmp3">Removes an item of your todo list</td>
  </tr>
  <tr>
    <td class="tg-0lax">/bug</td>
    <td class="tg-0lax">/bug something wrong with the bot</td>
    <td class="tg-0lax">Reports the bug found by you to the creator</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/cats</td>
    <td class="tg-hmp3">/cats</td>
    <td class="tg-hmp3">Choose between a cat picture or a cat fact, because why not :/</td>
  </tr>
  <tr>
    <td class="tg-0lax">/decide</td>
    <td class="tg-0lax">/decide</td>
    <td class="tg-0lax">Choose between a huge list of choices. e.g. cards, dice, coin, custome list, etc...</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/define</td>
    <td class="tg-hmp3">/define word OR /define</td>
    <td class="tg-hmp3">Returns the meaning of a word from Merriam-Webster dictionary</td>
  </tr>
  <tr>
    <td class="tg-0lax">/excuse</td>
    <td class="tg-0lax">/excuse</td>
    <td class="tg-0lax">Ever late for work? Use this!</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/flag</td>
    <td class="tg-hmp3">/flag country OR /flag</td>
    <td class="tg-hmp3">Sends you the sent country's flag</td>
  </tr>
  <tr>
    <td class="tg-0lax">/games</td>
    <td class="tg-0lax">/games</td>
    <td class="tg-0lax">Play some simple games</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/google</td>
    <td class="tg-hmp3">/google something OR /google</td>
    <td class="tg-hmp3">Searches Google for you</td>
  </tr>
  <tr>
    <td class="tg-0lax">/jokeen</td>
    <td class="tg-0lax">/jokeen</td>
    <td class="tg-0lax">Sends you a random joke in English</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/kick</td>
    <td class="tg-hmp3">/kick @username</td>
    <td class="tg-hmp3">Used by a group's admin only. Kicks a user out of the group</td>
  </tr>
  <tr>
    <td class="tg-0lax">/lang</td>
    <td class="tg-0lax">/lang</td>
    <td class="tg-0lax">Returns a language, written in it's own native</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/lyrics</td>
    <td class="tg-hmp3">/lyrics song OR /lyrics</td>
    <td class="tg-hmp3">A fun and useful command. Returns the lyrics of ANY song</td>
  </tr>
  <tr>
    <td class="tg-0lax">/morse</td>
    <td class="tg-0lax">/morse</td>
    <td class="tg-0lax">Encode or decode messages using Morse Code</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/ping</td>
    <td class="tg-hmp3">/ping</td>
    <td class="tg-hmp3">Checks if the bot is still online</td>
  </tr>
  <tr>
    <td class="tg-0lax">/help</td>
    <td class="tg-0lax">/help</td>
    <td class="tg-0lax">Sends you all the commands</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/about</td>
    <td class="tg-hmp3">/about</td>
    <td class="tg-hmp3">Information about the bot</td>
  </tr>
  <tr>
    <td class="tg-0lax">/afk</td>
    <td class="tg-0lax">/afk</td>
    <td class="tg-0lax">Away From Keyboard. An old social media thing-y. Use it and the bot starts counting time until you come back</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/contact</td>
    <td class="tg-hmp3">/contact</td>
    <td class="tg-hmp3">Sends you some links to contact the creator</td>
  </tr>
  <tr>
    <td class="tg-0lax">/telcode</td>
    <td class="tg-0lax">/telcode [number in + format] e.g. +963</td>
    <td class="tg-0lax">Sends you the country's name. e.g. /telcode +963 ------&gt; Syria</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/warn</td>
    <td class="tg-hmp3">/warn @username reason</td>
    <td class="tg-hmp3">Used by a group's admin. Warns the user. After 3 warnings the user is kicked out</td>
  </tr>
  <tr>
    <td class="tg-0lax">/weather</td>
    <td class="tg-0lax">/weather city</td>
    <td class="tg-0lax">Sends you the real-time temp in Celsius</td>
  </tr>
  <tr>
    <td class="tg-hmp3">/wExtend</td>
    <td class="tg-hmp3">/wExtend city</td>
    <td class="tg-hmp3">Like /weather, but sends you a detailed description of the weather status</td>
  </tr>
  <tr>
    <td class="tg-0lax">/wiki</td>
    <td class="tg-0lax">/wiki search-term OR /wiki</td>
    <td class="tg-0lax">Sends you the Wikipedia article searched for</td>
  </tr>
  <tr>
    <td class="tg-0lax">/lmgtfy</td>
    <td class="tg-0lax">/lmgtfy search term OR /lmgtfy</td>
    <td class="tg-0lax">For those annoying people who ask for info all the time. Let Me Google That For You.</td>
  </tr><tr>
    <td class="tg-0lax">/qr</td>
    <td class="tg-0lax">/qr text to be converted OR /qr</td>
    <td class="tg-0lax">Sends you a QR code holding the info of the text you sent.</td>
  </tr>
  <tr>
    <td class="tg-hmp3">Easter eggs</td>
    <td class="tg-hmp3">Hidden</td>
    <td class="tg-hmp3">To get a hint, try sending "we were on a break" or "Helene"</td>
  </tr>
  <tr>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
    <td class="tg-0lax"></td>
  </tr>
  <tr>
    <td class="tg-hmp3"></td>
    <td class="tg-hmp3"></td>
    <td class="tg-hmp3"></td>
  </tr>
</table>

<h1>Who created it?</h1>
Hi, my name is Alexi Jamal, a moron on the internet who happens to be a programmer. I, hereby, offer you this software, free of charge, for any use except commercial.

<h1>The License</h1>

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">The Satellite Bot</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Alexi Jamal</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.

<h1>What does the license mean?</h2>

It's basically MIT license, but with a modification in which the part that permits you to sell copies is overriden by prohibited.
If you don't wanna read everything, just read this:
I, Alexi, offer you this software free of charge for whatever usage you intend to use except to sell copies of this software. And under the CC license (CreativeCommos) you should mention me as an attribution of your work.

<h2>The actual license</h2>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, but prohibited to sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<h1>Attribution And Thanks</h1>
This project is an undergraduate project, submitted by Alexi Jamal at the University of Balamand. All works must be attributed.

The following made it easier:

<ul>
<li>Coffee</li>
<li>Nescafè</li>
<li>The creator of the library (Naltox, telegram-node-bot)</li>
<li>JavaScript (Node.js)</li>
<li>Taylor Swift (you can be a metalhead and love her, she's extraordinary with her music, SWIFTIE FOR LIFE! 🤘)</li>
</ul>
As always, as a thank you for the open-source community, this bot is open-sourced.

<code>37@Alexi:~\$ </code> ./endScene

<p style='font-family: "Consolas"'>May the command line live...</p>

<code>37@Alexi:~\$ █ </code>
