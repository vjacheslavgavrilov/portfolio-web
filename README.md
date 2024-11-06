1. Just a website;
2. This code is in the .htaccess file:
    
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
