1. Here's my UX/UI designer portfolio
2. I mainly learned how to use HTML and CSS (and started learning JavaScript)
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
