# select node version
FROM node:14.5.0 as base

RUN mkdir -p /srv/app
COPY . /srv/app
WORKDIR /srv/app

# Install production dependencies
RUN npm install --production

# Expose port for access outside of container
ENV PORT 3000
EXPOSE $PORT

CMD ["node", "index.js"]