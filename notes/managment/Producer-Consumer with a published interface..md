![](https://files.slack.com/files-pri/T01APDQLTAP-F01PXDLATPW/image.png)

# Producer/Consumer with a published interface.

First of all, never be concerned with who needs the information.  Never be concerned with where the information is coming from.  

You are consumer/producer of information.  

When you start wondering where the data comes from or where it goes, you create dependencies which are to be avoided at all costs.

When the data is needed, then you build an interface to get that data and a means for others to get the data from you.

**The most important thing is to know what you are responsible for and produce that.**

This creates and extensible and scalable system which allows you to see whats used or not used and can be taken out or inserted with no impact to the system.

Each class must be responsible for a specific thing and ONLY that thing.

It must have an interface of some sort which others use to get the data from you without you know who or what they are.

If you do that, you will be fine and changes to the system will not cause massive rework because you tied all the entities together.

