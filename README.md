# Blog-React-Django

This is a Blogging Application which gives all general features a blog should have.

The backend is build with Django using Django Rest Framework, while the frontend is completed using ReactJS.

## Features:
* Create/Edit/Delete Post.
* Minimal Design.
* Segregation of Content with respect to categories.
* Admin Panel
    * Create/View/Edit/Delete A Post
    * View/Edit Category of A Post
    * Feature a Post
    * Publish/Unpublish A Post

## Backend Setup:
1. Clone this repository. 
2. Change the current directory to backend folder: cd ./Blog-React-Django/backend/.
3. Create a virutal environment and install all backend dependencies with pipenv: pipenv install.
4. Start the virtual environment: pipenv shell.
5. Change the working directory to backend which contains the manage.py file: cd ./backend.
6. Run python manage.py makemigrations.
7. Run python manage.py migrate.
8. Create a superuser: python manage.py createsuperuser
9. Run the server: python manage.py runserver.

## Frontend Setup:
1. Navigate the current working directory to frontend: cd ./Blog-React-Django/frontend/.
2. Install the all frontend dependencies using npm: npm install.
3. Run the server: npm start.

## Screenshots:
![Screenshot from 2021-05-17 20-49-41](https://user-images.githubusercontent.com/47291405/118537212-524b1200-b76a-11eb-8372-ca74cd19f95f.png)
![Screenshot from 2021-05-17 20-49-46](https://user-images.githubusercontent.com/47291405/118537316-71e23a80-b76a-11eb-8361-6c3d32f09fbf.png)
![Screenshot from 2021-05-17 20-49-56](https://user-images.githubusercontent.com/47291405/118537453-950cea00-b76a-11eb-9424-994dfd0babc1.png)
