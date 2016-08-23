Hi this application is for the examination for Surefiresocial.

I created a database for mysql named db_exam

Setup Guide:
		
		1. Clone or download the repository in your workstation
		
		2. In my case I use xampp for the webserver so I created a folder name surefire_exam in the htdocs and put the cloned repository inside
		
		3. Open cmd and go to the file path of surefire_exam and type composer install
		
		4. After a successful install, configure the database on .env , 
		
		database name is 'db_exam', 
		
		APP_KEY is 'base64:4sHHG4//by/KF5+mz8HYYACEZJVym3OH8Kc5y13Hc/Y='
		
		username is 'root' 
		
		and password is ''
		
		5. You can now migrate the tables by typing php artisan migrate on cmd terminal
		
		6. After the migration successful, type php artisan db:seed on cmd terminal for the data seeds
		
		7. After a successful setup, you can now access the application through localhost/surefire_exam/public
		
		8. The seed data created a default account with an email of 'mikebaccay@gmail.com' and a password of '123456'
		

I have used angular js for frontend and laravel framework for its backend

MASTER VIEW - resources/views/index.blade

ANGULAR FRONTEND - public/angular , public/partials

LARAVEL CONTROLLERS - app/Http/Controllers

I made a login and registration function on this application with simple and neat designs.

Hoping for your positive feedback and result thank you very much and Godbless :)

