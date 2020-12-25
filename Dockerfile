from ubuntu

# update apt and install nginx, systemd, git, curl
RUN apt-get update
RUN apt-get -y install nginx
RUN apt-get -y install systemd
RUN apt-get -y install git

# set work dir
WORKDIR /var/www/family-photo-viewer

# configure and init git
RUN git config --global user.name "Paul Mojica"
RUN git config --global user.email "paulmojicatech@gmail.com"

# copy dist folder
COPY dist/* /var/www/html/

# copy nginx conf
COPY default /etc/nginx/sites-available/default

# export port
EXPOSE 80

# run nginx
CMD /usr/sbin/nginx && tail -f /dev/null