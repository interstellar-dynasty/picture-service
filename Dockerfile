FROM node:9.6.1-onbuild

#find port number
EXPOSE 3030

CMD ["npm", "start"]