# Collaborations

For collaborations, this means, who does it talk to and how does it talk to them.

So in the case of a Login, the collaboration would be with the end user and how is that accomplished?

It is through a Login response.

In situations like this, the natural inclination is to tell how that collaboration is conducted, but that would be wrong.  

These two messages would then have to be defined in a messaging library which both sides understand.

In addition, where the login came from is immaterial to the Login class, it doesn't know where the message came from or the medium used to deliver it, we separate these two things in order to allow us to change the underlying medium for transport at any time.

Thus, we have no dependencies on each other.

The responsibility of the login class is to deliver the response back to the entity which requested it and it is the responsibility of the underlying medium to translate that message into the proper structure to be transferred over the medium, be it binary, Json, HTTP or whatever.

These types of designs are essential to ensuring extensibility and scalability.

The problems most people have are:

- they closely tie the delivery mechanism to the end user and that means if you want to add another delivery mechanism which could also deliver the same message it is impossible to do.

So, tie the delivery mechanism into a messaging library which any delivery mechanism can translate into incoming/outgoing formats and the end user always gets the same message and doesn't give a hoot about where it came from or where it is going.

It has one job and one job only, respond to logins with a login response and let the delivery mechanism convert it to the wire format that has been defined between those to entities.

When we say collaborations, that could mean the two entities doing the actual wire transfer or the collaboration between the delivery mechanism and the end user. 

Both are collaborating, one with a foreign entity in which a know wire structure has been established and with internal users expecting messages of the language and format it is expecting. 

As can be seen, the delivery mechanism has no idea who is responding to the login, it only knows it got a response and needs to translate the response to a known wire format and then send it.

No, the login is response is to deliver more than that, it must validate the user, return the token and whatever information is required, such as the status of the login, successful or not, etc.

This is how you flush out all the issues, once we know we need the messages, we then ask ourselves, well, what network protocol is the other side using, doing they already have a defined messaging structure we must implement, etc.

So, when we say class, we define the Login class and then we define what it is responsible for, we then add the functionality and the data structures to accomplish that.  

Having done that, we now ask ourselves, hmmm, how are we going to receive login requests and how are we going to convey responses. 

Knowing logins well in most cases be external, that leads us to creating a class which can accept connections in a certain network protocol.  

But having thought about that, we ask ourselves are we logging or are people logging into us??  

In blackocean case, we have both cases, one is cactus but the other is our users.  

This suggests that if the two require much the same information, perhaps we can create a messaging structure which can be used internally by both of our connection classes and have both delivery mechanisms convert the incoming wire message into our internal structure. 

This is the optimal solution but can't always be done.  But it also pointed out that we are probably going to need to different connection classes since the underlying network protocol is probably going to be different.  

But, in thinking about that, we should probably base all the messaging off of one base class and that way, the internal passing of messages will only require one structure which makes code reuse possible.  

We can probably accomplish actually sending of the messages through a common base class which instantiates the proper socket as well and a common parser which based on the type of message it uses the parser associated with it to do the proper conversion.

CRC, when you keep doing this you begin to see the commonality in things and thing which can be combined in one structure, such as passing messages, it can pass any message and doesn't care about the type.  

If you look at my handler for connections, you will see that it creates through a template parameter the proper socket connection, it can be any time, doesn't matter:

This little bit of innocuous code actually defines the underlying network protocol as well as the parser which will be used

So, we only need to define which protocols we will be handling in that function and our actions to the messages we receive.

The underlying framework includes the ability to create any type of connection I want and the above code allows me to give it a special parser that understands the protocol of the wire data I received.  

This is an example of how to build these types of systems which have reusable components which also allow you to swap out parts with something totally different.

I eliminated the checking of the protocol because I know exactly the type of message this handler gets.

This allows us to be totally agnostic to delivery mechanisms as we can publish responses the same way, on a subject which someone else is listening to.  

We know nothing about them and they know nothing about us.

