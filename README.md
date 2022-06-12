# A Gun Relay Server executable for Desktop

![image](https://user-images.githubusercontent.com/67427045/173240428-1f85a4f5-38dd-494e-b337-ca5a73ce4044.png)

#### Combine with https://github.com/worldpeaceenginelabs/DONATE-DECENTRALIZE-UI to offer your fanbase, gun relay donations to your website/app.

## SETUP

- npm install
- add your peers in server.js
- npm exec electron-packager . (the dot means "in the actual folder", without further arguments electron-packager compiles for the actual OS you are using to compile)

## CHECK IF IT WORKS

![image](https://user-images.githubusercontent.com/67427045/171200838-3839b2d7-1100-4aa5-bec4-6472afed0351.png)
![image](https://user-images.githubusercontent.com/67427045/171201213-78c2768b-d3b4-44a9-932d-ad36273b938e.png)

# Use cases

## Decentralized Subscription Service (decentralized database/storage server)

You can use it to collect data 24/7 with your desktop relay from a subscribe form, or customer/user chat, or whichever datasource, which is on your static website on a CDN.<br>
Without the need for any DynDNS service or centralized back-ends! Without the need to stay 24/7 online with your desktop!

_!!!Heroku becomes unnecessary or fallback if you use Decentralized-STUN-Service. But this concept is for showing how to decentralize your back-end with gun for something simple like `<input>`!!!_


![image](https://user-images.githubusercontent.com/67427045/172740619-e714e7f8-07b5-4528-8e81-a99db40d8b5c.png)

## Decentralized STUN Service (decentralized database/storage server with STUN)

Run your own IP Lookup server (or multiple) if you like https://github.com/mpolden/echoip<br>
A simple service for looking up your IP address. This is the code that powers https://ifconfig.co/ 

Gun + Public IP Version
![image](https://user-images.githubusercontent.com/67427045/172740669-0223e421-970b-40c1-9737-e44b611edb0e.png)

Gun + Public IP + Decentralized File Version
![image](https://user-images.githubusercontent.com/67427045/172741154-617c5eba-0df0-4192-a3dd-db20ba59b6f5.png)

## Decentralized CDN Service

Peer-CDN https://rafallorenz.com/peer-cdn/docs/installation.html<br>
Serve your website/apps build files from your gun nodes and peers.<br>
The source-code of your website/app in this example comes from the desktop relay, but can come from anywhere you like.

![image](https://user-images.githubusercontent.com/67427045/172741491-d1be8a6d-2c30-4945-abb6-aa2f02f63dd4.png)

## Gun emailserver

A Gun based email server on your desktop. by by classic email provider! (take a look on Cloudflare Email Routing https://developers.cloudflare.com/email-routing/ to improve further)

## Make your desktop gun server available from the outside (centralized way, for fallback or scaling eventually)

https://www.noip.com/integrate/request (free user account neccessary)

## Contribute

feel free to add more use cases...
