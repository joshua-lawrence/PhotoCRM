# Use an official Python runtime as a parent image
FROM python:3.8.0-alpine

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/backend

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \ && apk add postgresql-dev gcc python3-dev musl-dev

# Install Python dependencies
RUN pip install --upgrade pip 

COPY ./requirements.txt /app/backend/requirements.txt
RUN pip install -r requirements.txt

# Add the rest of the code
COPY . /app/backend

# Make port 8000 available for the app
EXPOSE 8000

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD python3 manage.py migrate runserver 0.0.0.0:8000