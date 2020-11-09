# Chatspace
A project I created because I wanted an alternative way to communicate with friends that sidesteps the limits of what the popular chatsites give.

## Login 
The login page takes you straight to the main chat page, under channel 1 upon registering/logging in.

## MessageBox
The MessageBox component takes all messages, ordered by the times they were posted, and puts every message into a message item.

## MessageItem 
A MessageItem is created for every message there is within the database, displayed with the Username, and his/her message. 

## ChannelBox
The ChannelBox takes every channel listed in the channels database table and sends them to individual ChannelItems.

## ChannelItem 
Every channel item lists the channels name, and a "load channel" button that, on click, loads the message box with all messages that have the respective channel ID attached to them. 
