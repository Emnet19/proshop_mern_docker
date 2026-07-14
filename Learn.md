## Docker commands 

# Initialy docker is a container that will help us run our app in different pcs without being dependet on that dependencies

# Docker image: its like a recipe that will help the docker to create the container.The purpose of a Docker image is to provide a consistent environment where an application can run the same way on any machine that has Docker installed. Images act as a template or blueprint for creating containers. For example, you can create a backend image that contains Node.js, your backend code, and all required packages; then Docker can use that image to create a running backend container.It reads the dockerfile and create an image based on that.

# Dockerfile: its a set of instruction that tells how the docker creates an image

# docker --version: to check whether docker is installed or not
# docker build: create a docker image form a dockerfile

# Docker image: shows all the docker images stored in computer

# docker run: creates and starts a contaner from an image. Its used to start one specific part of an application from docker image. example, if you already have a backend image, you can use docker run backend-image to tell Docker: "Take this image and create a running container from it." It is mainly used when you are working with one container and you want direct control over it.

# docker compose up: used when your application has multiple parts that need to run together. Instead of manually starting the frontend, backend, and database separately, you describe all of them inside a file called docker-compose.yml.

## difference between docker run and docker compose up is docker run starts one container, while docker compose up starts the entire application made up of multiple containers.


# docker compose up --build : does the same work as docker compose up but it adds one extra step before starting the container, docker rebuild the images. this is useful when we have changed our code or modfied our dockerfile. example, if you update your backend code, the old Docker image still contains the old version. Running docker compose up --build tells Docker to create a new image with your latest changes and then start the containers using that updated image.

## CI/CD Pipeline: its a software development practice where developers frequently merge their code changes into shared repository,and every change is automatically checked.

# CI is a security guard before code enters the main application.
## Uses of CI : - Secret Protection, preventibg Vulnerable code, Immutable Artifacts, Clean build env't (there won't be leftover malware, no hidden filesfrom previous builds, not dependency on a developer's personal machine)

# CD(Continous Development): s the process of automatically taking an application that has already been tested and making it available for users on the internet without requiring manual steps. Instead of building a Docker image, pushing it to Docker Hub, and then manually deploying it to a cloud platform, CD automates the entire process.This ensures that the latest version of the application is always available with minimal effort and fewer human errors.

 # uses: - Automated Delivery Channels:connections that allow different services to communicate and automate deployments - State & Runtime Integrity: keeping sensitive information, such as database connection strings, API keys, passwords, and secret tokens, outside of the source code. - Zero-Downtime Deployment: a deployment strategy that allows users to continue using the application while a new version is being released
 
 # Deploy Hooks: are special URLs or triggers that tell a cloud platform to redeploy an application automatically. Cloud Infrastructure Managment: involves configuring and maintaning cloud services such as Render or Vercel Log Auditing: the process if reading deployment and application logs to identify and fix errors. Health Checks: are automatic tests performed by the cloud platform to verify that the application is running correctly after deployment. 