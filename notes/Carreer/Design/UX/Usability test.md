
## Usability test
"Usability testing is a black-box technique. The objective is to observe real users using the product to discover problems and points of improvement. The product, which can be a website, a web application, a physical product, does not have to be completely developed. Prototypes are widely used in usability tests to validate what is being done." - [Caelum]

The usability test to be developed will be based on the [article by Jakob Nielsen](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) who says that the ideal number of people to test a product is 5.

As a methodology for carrying out the test, the 5-step interview will be used, a UX technique created by Michael Margolis and taken from the book Design Sprint.

Below is the base template created for the interview:

## Interview in 5 steps
### 1. friendly greeting

Hello, good afternoon/good morning, thank you very much for helping us. We are trying to test our solution and find ways to improve it. Your opinion is important to us.

Remembering that the test is informal and you don't have to be afraid to answer the questions as honestly as possible.

We'll record your interaction with the product so we can identify issues and potential improvement needs, okay?

Well, let's start with a few questions just to put our product in context.

### 2. Customer Contextualization
* Do you have digital bank accounts? If yes, what, in your opinion, is the main advantage?
* Do you use the credit function of your accounts?
* Do you think your limit is enough for your expenses?
* Do you know the overdraft? Have you used it? What do you think about this service?
* What is your main motivation for using this service or not?


### 3. Product presentation

I'll explain the situation to you: "You need to make a purchase whose value is much greater than the available balance in your account"

The product allows simulating the use of overdraft linked to a 100% digital payment account. In it, when you start a simulation, you receive a user and an account, through which you can:
```
 * Carry out inbound and outbound transactions
 * Enable or disable overdraft
 * Monitor the debts generated
 * Follow the overdraft limit
```

### 4. Tasks
* Analyze and annotate user reactions while performing the following flows:
* Activate overdraft
* See how much of the limit was used
* Adjust limit
* Use overdraft
``` 
To test the use of overdraft, consider the following scenarios:

 > Scenario 1

      User uses the overdraft and after the period of 26 days he inserts the amount necessary to be paid, so that no debt is created

> Scenario 2

      Customer goes into overdraft, makes more withdrawals, increasing the amount due and after 26 days deposits to cover the debt

> Scenario 3

      User enters overdraft, enters the amount owed, makes more withdrawals entering overdraft again and the 26-day term changes, on the 26th day he covers the debt and there is no fee charged

  > Scenario 4

      Customer goes into overdraft and does not pay off the balance before 26 days. Customer tracks the debt created and pays the installment.
```
* View debts

### 5. debriefing

* Would you use the Over26 overdraft service? Why?
* What did you like least about the use of Over26 overdraft?
* What was your impression of the process of activating the overdraft?
* What was your impression of the process of visualizing your debt?
* What was your main difficulty in monitoring the use of the overdraft limit? And to adjust your limit?
* What did you like most about the APP? And what would you change?