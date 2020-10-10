URL Shortener

This project is made using HTML/CSS/JS for Frontend and C#/.Net framework for Backend.
jQuery library is also used for some operations.

This project just takes a URL and converts it into a smaller form which when used in the browser would redirect you to the original link.

This is done by simply creating a new random string for every new URL it recieves. This new string is treated as an index. This URL and the generated index are stored in a list. 
This index is then added to the url of this tool, to create a new shortened URL. Now if this new URL is hit, an action gets called with this index, which then finds the URL for this index from the list and redirects to it.
