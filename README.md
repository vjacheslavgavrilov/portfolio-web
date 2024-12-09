1. Here's my UX/UI designer portfolio. It was my first experience in creating websites and it's my first project that is more complicated than «Hello World» :D
2. In the future, I want to approach it more professionally by adding JavaScript and React.
3. This code was put in the .htaccess file:
    
        # Redirecting to HTTPS
        RewriteEngine On
        RewriteCond %{SERVER_PORT} !^443$
        RewriteRule .* https://%{SERVER_NAME}%{REQUEST_URI} [R,L]
        
        # Error Pages
        ErrorDocument 404 /404.html
        
        # Adding HTML to a page
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^([^\.]+)$ $1.html [NC,L]

4. I'll be glad to hear any advice on how to improve my skills.
