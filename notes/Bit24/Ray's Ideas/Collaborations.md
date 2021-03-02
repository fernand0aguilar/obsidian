# Collaborations

For collaborations, this means, who does it talk to and how does it talk to them.

So in the case of a Login, the collaboration would be with the end user and how is that accomplished?

It is through a Login response.

In situations like this, the natural inclination is to tell how that collaboration is conducted, but that would be wrong.  

The actual response has to be shielded from the device doing the responding, which could be HTTP, Socket, Websocket, so, the proper response would be to say it responds with a Login Response message.


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

It is an iterative process, you keep going over it and over it until all the issues are resolved and all the pieces are in place, then you make it run and find all the other shit you forgot or screwed up.

So, when we say class, we define the Login class and then we define what it is responsible for, we then add the functionality and the data structures to accomplish that.  Having done that, we now ask ourselves, hmmm, how are we going to receive login requests and how are we going to convey responses.  Knowing logins well in most cases be external, that leads us to creating a class which can accept connections in a certain network protocol.  

But having thought about that, we ask ourselves are we logging or are people logging into us??  In our case, we have both cases, one is cactus but the other is our users.  This suggests that if the two require much the same information, perhaps we can create a messaging structure which can be used internally by both of our connection classes and have both delivery mechanisms convert the incoming wire message into our internal structure. 

This is the optimal solution but can't always be done.  But it also pointed out that we are probably going to need to different connection classes since the underlying network protocol is probably going to be different.  

But, in thinking about that, we should probably base all the messaging off of one base class and that way, the internal passing of messages will only require one structure which makes code reuse possible.  

We can probably accomplish actually sending of the messages through a common base class which instantiates the proper socket as well and a common parser which based on the type of message it uses the parser associated with it to do the proper conversion.

CRC, when you keep doing this you begin to see the commonality in things and thing which can be combined in one structure, such as passing messages, it can pass any message and doesn't care about the type.  This leads to good designs as you don't do the same thing 50 times in 50 different places.

If you look at my handler for connections, you will see that it creates through a template parameter the proper socket connection, it can be any time, doesn't matter:

This little bit of innocuous code actually defines the underlying network protocol as well as the parser which will be used

The bit24SpecialFrame actually parses data the StreamHandler passes to it and turns it into a common base message which gets returned to the OEHandler in an onMessageReceived funtion.  

We then look up the protocol enum, then look up the message type off that protocol enum. So, we only need to define which protocols we will be handling in that function and our actions to the messages we receive.

The underlying framework includes the ability to create any type of connection I want and the above code allows me to give it a special parser that understands the protocol of the wire data I received.  This is an example of how to build these types of systems which have reusable components which also allow you to swap out parts with something totally different.

I eliminated the checking of the protocol because I know exactly the type of message this handler gets.

But, the OEHandler also has a publish and subscribe mechanism so we can register on a subject and receive messages which we didn't actually parse.  This allows us to be totally agnostic to delivery mechanisms as we can publish responses the same way, on a subject which someone else is listening to.  We know nothing about them and they know nothing about us.

I hope this helps you.  I know it is a lot of information, but occasionally I use my head for something other than a place to hang my ears.

Well, I just want you to see what CRC leads to, when you find yourself doing the same thing over and over, it behooves you to find a way to reuse all that work, which naturally leads you to build a framework which I did which took over 1 year to complete.  It has gotten old with me and could probably stand an upgrade (as I probably could) but it is battle tested in some of the toughest environments in the world and has never failed me and also leads to rapid development.  No, I never did a paper design, just CRC'ed in my head like I do all designs.  I have never done a paper design of bit24 or BO either, the natural progression of things will lead you to the proper design if you just CRC it.

Not realy all here are Rays having all in mind. Me for example I need some paper design in order to plan everything clearly in mind, just.

Each to his own, I find I spend more time trying to keep the paper design up to date as I am designing it than I do actually working.

But all designs are like trouble shooting, they are like a movie, you see it in your head, you visualize every step of the way and only when you see it all clearly do you code any of it.  That is the way I troubleshoot and the way I design, a movie playing endlessly in my head until I have it all then I sit down and spit it all out.

There is a sister to that onMessageReceived function above, it will pass you a list of messages instead of just one message.

and this makes somehow overflow in my mind ;)

I am not saying my way is the only way, I am only saying what works for me.  I realize not everyone visualizes everything but that is the only way I can do it.  I once had a person work for me, after unsuccessfully troubleshooting problems, they asked me how I always went right to the problem.  I told them, the first thing I do is:  nothing. 

I put my hands under my legs and visualize everything I am seeing.  Going through every step of the process, not touching anything until I see the problem and where it must be happening.

I code the same way, never putting anything down until I see the whole process in my head, every step and everything which must be done in each step.

If you can visualize it, you can code it or fix it.  If you can't do that, for me it is a non starter.  

It is like a book, you don't need the book to read it as every book is a movie, you see it all in your head.  A program is the same way, you don't need the code, you need the movie in your head then all is clear.

Maybe everyone can't do that, but I can't code anything, can't fix anything until I see the movie.

Not being able to see it all in your head for me is like coming into a movie in the middle and trying to make sense of it.

I can't do it although I can make guesses.  If you truly visualize what is going on, with knowledge of what they are trying to do, you then know how they must be doing it.

It not necessary to understand the language to find the issue, when you know what is trying to be done you know all the ways they can try to do it.

The movie might be in a different language but the steps must be the same and thus the problem is easily identified.  A design in the same way, the language might be different, but the steps needed to get to the end must be the same.

So, each person must find the way for them, for some it is drawings and for some it is seeing and for some it is understanding.

Find the way which is right for you, but I highly encourage everyone to put down the pen, put their hands under their legs and close your eyes and visualize what must be happening or what must happen, the answer is there for you to see, don't need elaborate drawings as your mind has all the drawings you need.

Just make sure you are in the right movie theater, don't want to think you are on the beach and walk off a cliff in the Grand Canyon, lol.

There seems to be some questions about CRC so I will give an explanation I hope everyone can understand and how that applies.

Designing and building a system is similar to planning a trip to a destination.  

We first decide we want to go there, what we are going to do there and what are we going to bring back or deliver there.  

Depending on those answers, we might choose to:
	1.  Fly
	2.  Take a bus
	3.  Take a train
	4.  Walk
	5.  Ride a horse, bike, etc
	6.  Drive

In our case, lets say we need to go to Mexico and buy 1000 pounds of Mexican Jumping beans.  

Well, that makes #1, #2, #4, #5  pretty much out of the picture. Since it will cost a lot to transport the beans and we need transportation while there, we decide to drive.

So, we have now decided on the delivery mechanism for transporting us to Mexico.  Now, we need to plan what we are going to take with us and what are the restrictions for getting in, can we even drive there.

We check, yes, we can drive but we need a passport as ID.  We also want to buy the beans so we need money.  We also need to know how to get there.  We get out our trusty map and plan our route.  

So, now we know what we are responsible for delivering and now it only remains for us to get in the care with our required things and get there.

We have planned out our trip, which cities we will stop for gas, food and a place to sleep. Now we only need to go.  Once we go, occasionally we will pass a destination on our route and realize we are hungry and turn around and buy some snacks or a meal.

Once we arrive at the border of Mexico we must present our ID and then we are in.  But once in, we realize, we don't speak the language and they only accept peso's, not US dollars.


So, in order to buy the beans, we must convert our money into something they understand and will accept.  We do this and then ask where we can buy the beans and are taken there.  We buy the beans and then plan our destination home.

We are returned to the border by our friendly courier at which point we realize all of our unused peso's will not be accepted in the US so they are returned and exchanged for US dollars and we got our receipt for the beans and are now ready to go home.  We once again cross the border and are on our way home.

# Now, how is this like building a system.

Well, when we decided what we wanted to do, we asked ourselves what would we be responsible for delivering once we were there.

We went to the bank, gathered the information and the money and our passport and we have fulfilled our responsibility.

So, that is a class and that is what it is responsible for.  

Now, we need to figure out how we are going to get there.  We chose the medium of transport amongst the available option and then having ascertained there would be a place to exchange our money for local currency off we went.

That is the first part of the collaboration.  Along the way we stopped for essential items needed and finally arrived at the border.  You can think of the transport medium in the case to be the internet.  Once there, our money was exchanged to something which local people would understand.

You can think of this as the messaging protocol.  How it was done was immaterial to both sides, it was just done according to predefined rules which both sides had agreed to.

Now, the other side was responsible for getting us to our buyer, they had decided on a transport medium, a currier which the buyer and the border had previously agreed upon.  

So, the each had a responsibilities (a class) and a medium for accomplishing delivery of the item (us).  They also provided the exchange of currency (our money for their money). This was done without either side know about it or how it was done (the separation of functions and knowledge of each other).

And because that is all they do, they could exchange any currency and neither side needs to worry about it because it will be taken care of for them (the messaging protocol which knows how to speak all the languages incoming and translate to the local language or currency).

Upon exiting, the reverse happens and we take home our beans and receipt and have fulfilled our responsibility.

Each step of the process was accomplished by defining the problem, creating a class who took responsibility for certain parts of the operation, each one independent of the other by totally capable of meeting its responsibilities.

We could have exchanged the car for a plane and all the other pieces still worked exactly as before because they don't know where the currency came from, they only know how to manage it.

The border the same way, the border at the edge of the country or an airport all must do almost exactly the same things.

On our side we could easily build components to manage all of our requirements, get the money, get the  passport, arrange for transportation.

In defining each task that leads us to the next task and so on and so on until we get to the destination.  

**That is CRC, working through each aspect and what does it do and what does it produce and how does it transport that product to another destination.**

# It is always iterative.

It is an iterative process, in the example above, we turned around because we were hungry.  Often times in designs we return to a spot in the design and add things or take things away either because we forgot something or the design and changed.

Imagine for a moment on our trip the road had been washed out, we would have had to back track and take another route.  That is why it is an iterative process.  We sometimes made bad assumptions or things changed or we forgot things and had to redo things.

It is always iterative.

Even when you get home you realize that you could have gone a different route which would have saved you two days, well, you update your design so next time you take advantage this.

This often happens during a design, you learn something new or because you have now fully developed the design you realize there is a better way to do it.

That is the iteration again.  The design is never totally finished, most often it is the quality vs quantity which forces completion.

If you had arrived at the border and asked for a shower or a meal or without the proper ID you would have been rejected because that is not the responsibility of the border to wash your or feed you.

It is their responsibility to check your ID and if good convert your currency and send you on your way.  If the ID is bad, they reject you.

If they included that functionality then they would not be reusable at the airport because the food options are totally different.

That is why each class has a predefined responsibility and is not tied to factors which change from instance to instance.  

That makes it reusable which leads to extensibility and scalability.

I liken it to driving a car, you can't drive if you can't see your destination and all that will need to be done to reach that destination.

If you have been following along, you might want to take a victory lap, but don't.  We would have never accomplished this.

On our side, who is going to get the money, make the travel arrangements, who is asking for the beans, how are going to deliver them.

Ok, back to the drawing board, we have to build those entities and decide how we are going to collaborate with them, by what mechanism??  Phone??  Email, etc. and how are we going to get the items we need delivered to us??

As I said, it is an iterative process, you keep going through it over and over again looking for things which were forgotten or don't work.

You can't email money. So, you have to talk with them. All of this relates to the CRM, all aspects of what has to be done and who is going to do it have to be figured out and implemented. 

You have to keep going over it and over it.  You don't want to drive to Mexico and realize you have no cash or no passport but that is what will happen if you don't implement all the necessary steps.

I do it in my head, others use drawings or something else.  

Each must plan the part given to them to do.

I do it in my head and dole out the pieces which someone else needs to do and let them figure out how to get that done.  UML, drawings, in your head (only if you are the only one doing) it.

well, I have explained it in the simplest way I know how.

That is how I do design, others have other ways.

I do what I do because I am a visual person, I have to see it before i can do it and in seeing it and CRC'ing it, I don't need a drawing, I know all the details because I see them like a movie (which never stops playing and drives me crazy, like watching Groundhog day every day until I start something else).