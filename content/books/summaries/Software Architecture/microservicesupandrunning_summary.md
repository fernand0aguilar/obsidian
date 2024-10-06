
# Summary of "Microservices: Up and Running"

**Authors**: Ronnie Mitra & Irakli Nadareishvili  
**Publisher**: O’Reilly Media, Inc.  
**ISBN**: 978-1-492-07545-5  

## Overview

"Microservices: Up and Running" by Ronnie Mitra and Irakli Nadareishvili is a practical guide aimed at helping software architects and engineers build microservices architectures. The book provides a comprehensive, step-by-step approach, drawing on real-world experiences and lessons learned from both successful and challenging implementations.

## Key Concepts

### Microservices Architecture

- **Definition**: A style of software architecture that focuses on building applications as a collection of loosely coupled services.
- **Benefits**: Reduces coordination costs, enhances scalability, and allows for independent service deployment.
- **Challenges**: Involves complex inter-service communication and requires careful boundary definition.

### Designing Microservices

- **SEED(S) Process**: A method for designing services using the Seven Essential Evolutions of Design, focusing on actors, jobs-to-be-done (JTBD), interaction patterns, and API specifications.
- **Service Boundaries**: Establishing proper boundaries using Domain-Driven Design (DDD) and context mapping is crucial for effective microservices.

### Data Management

- **Independent Deployability**: Microservices should embed their data to ensure independence, using patterns like data duplication and event sourcing.
- **Event Sourcing and CQRS**: These patterns help manage distributed transactions and improve performance.

### Infrastructure and Deployment

- **Infrastructure as Code (IaC)**: Utilizes tools like Terraform and AWS to automate infrastructure setup.
- **Continuous Integration/Delivery (CI/CD)**: Essential for maintaining a streamlined deployment pipeline.
- **Kubernetes and GitOps**: Used for managing microservices infrastructure and deployments.

### Team and Operational Models

- **Team Topologies**: Emphasizes the importance of team size, skills, and coordination. Different team types and interaction modes are introduced to optimize microservices development.
- **DevOps Practices**: Encourages immutable infrastructure and coding standards for a superior developer experience.

### Managing Change

- **Change Management**: Focuses on handling infrastructure, microservices, and data changes effectively within a microservices system.
- **Deployment Patterns**: Offers strategies for managing changes and measuring progress in a microservices transformation.

## Tools and Technologies

To follow along with the examples, readers need to be familiar with or have access to various tools such as Docker, Redis, MySQL, GitHub, Terraform, AWS, kubectl, Helm, and Argo CD.

## Target Audience

This book is designed for architects and engineers tasked with building microservices architectures. It is also beneficial for anyone interested in understanding the intricacies of microservices implementation.

## Conclusion

"Microservices: Up and Running" provides a unified view of microservices implementation, offering prescriptive advice and a practical model to guide readers through the complexities of building a microservices architecture. The book emphasizes learning from both successes and mistakes, making it a valuable resource for anyone involved in microservices development.

For more resources, visit [O'Reilly's online platform](http://oreilly.com) and access additional materials related to this book.



Microservices architecture, characterized by small, independent components, has seen rapid adoption across industries due to its benefits in enabling faster and safer software changes. The global market for microservices is projected to grow significantly, indicating widespread interest and implementation. However, building and managing microservices can be challenging due to the complexity of coordinating multiple independent parts, which can lead to high management, maintenance, and testing costs.

The key to successful microservices lies in the right architecture that supports independent services while minimizing system costs. This requires strategic decisions about methods, processes, teams, technologies, and tools, often achieved through iterative experimentation and optimization. Early adopters of microservices typically arrived at this architecture through continuous improvement rather than a predetermined plan.

Microservices are defined by several characteristics, including componentization via services, organization around business capabilities, decentralized governance, infrastructure automation, and evolutionary design. These principles form a holistic solution encompassing technology, infrastructure, team structure, and culture. Definitions of microservices vary slightly, but generally focus on interoperability, bounded scopes, and message-based communication.

The primary advantage of microservices is the reduction of coordination costs, which increases the speed of software delivery without compromising safety. This is particularly valuable in industries where speed and safety are critical, such as finance and healthcare. By minimizing coordination costs, microservices allow organizations to maintain agility and efficiency, akin to smaller companies, while leveraging their actual size.

Despite their benefits, microservices present challenges such as long feedback loops, numerous moving parts, and the risk of analysis paralysis. Decisions made in a microservices system can have delayed impacts, making it difficult to evaluate options and choose the best path. The complexity of the system requires careful consideration of how changes will affect overall behavior and team dynamics.

To address these challenges, it's important to focus on minimizing coordination costs and building a microservices system through iterative learning and improvement. Successful implementers have often learned through trial and error, refining their architectures over time. A prescriptive microservices model can guide new adopters by providing a framework for team design, process, architecture, and tools.

Ultimately, microservices architecture enables businesses to adapt and innovate rapidly, providing a competitive advantage in a fast-paced market. However, achieving these benefits requires significant upfront investment in planning and decision-making to create a system that effectively balances speed, safety, and coordination.



# Summary of Microservices Architecture and Team Design

## Introduction
The text provides an overview of building a microservices-based system, emphasizing the importance of team design, microservice design, data management, cloud infrastructure, and decision-making processes. It introduces the "up and running" microservices model, focusing on elements crucial for successful implementation.

## Team Design
Effective team design is crucial for microservices systems. The book begins by addressing the challenges of team coordination and introduces Team Topologies to assist in designing teams. The relationship between team structure and microservices implementation is highlighted, reinforcing that technology alone is insufficient without the right organizational culture and team dynamics.

## Microservice Design
The SEED(S) process is introduced to create microservices that meet user needs with actionable interfaces. Domain-Driven Design concepts and Event Storming are used to define service boundaries effectively. This approach helps in "rightsizing" services, ensuring they are neither too large nor too small.

## Data Design
Data management is a challenging aspect of microservices. The concept of data independence is introduced to establish a robust data architecture. The book emphasizes the importance of considering data factors in microservices design to ensure effective data handling and integration.

## Cloud Infrastructure
The microservices system is built on cloud-based infrastructure, employing principles like immutable infrastructure and Infrastructure as Code (IaC). AWS is used as the cloud platform, and a CI/CD pipeline is established using GitHub Actions. Networking, Kubernetes clusters, and GitOps deployment tools are integrated to support the microservices infrastructure.

## Microservices Development
With the infrastructure in place, the book delves into engineering microservices. It covers essential principles and tools, and implements two independent, heterogeneous microservices for the example application. This section underscores the importance of proper development practices in building a robust microservices system.

## Release and Change Management
The deployment of microservices onto the cloud platform is discussed, utilizing technologies such as DockerHub, Kubernetes, Helm, and Argo CD. A retrospective analysis of the system is conducted, guided by principles like the twelve-factor app pattern. The importance of documenting design decisions through Architecture Decision Records (ADRs) is emphasized to facilitate future evaluations and improvements.

## Decision-Making Process
Decisions in software development are critical, impacting the quality and outcomes of the software. The text introduces the concept of Architecture Decision Records (ADRs) to document decisions, capturing context, alternatives, choices, and impacts. The Lightweight Architectural Decision Record (LADR) format is recommended for its simplicity and effectiveness in decision tracking.

## Conclusion
The book outlines foundational concepts for microservices architecture, focusing on reducing coordination costs and addressing complexity challenges. It advocates for an opinionated, prescriptive implementation model to accelerate learning. The importance of team design, decision-making, and a well-structured operating model is emphasized to ensure the success of microservices systems.

By the end of the book, readers will have implemented a comprehensive microservices system, equipped with the knowledge to make informed decisions and adapt to changes effectively.



### Summary

The text explores optimal team sizes and structures in organizations, particularly in the context of microservices. It highlights several key principles and practices for effective team management.

**Team Size and Dynamics:**
- Bill Gore, cofounder of Gore-Tex, emphasized that teams should be small enough for members to maintain personal relationships, a concept echoed by Robert Dunbar's research, which suggests humans can maintain 150 stable relationships.
- Jeff Bezos' "two pizza rule" suggests teams should be small enough to be fed by two pizzas, aligning with Dunbar's number, suggesting effective team sizes between 5 to 15 people.
- In microservices, teams are recommended to be between five to eight people to maintain high rates of change and minimize internal coordination.

**Team Composition and Skills:**
- Teams should be cross-functional, comprising members with diverse expertise to make autonomous decisions.
- The right mix of skills and experience is crucial, varying based on organizational culture and goals.
- Cross-functional teams can include UX designers, developers, product owners, and business analysts.

**Interteam Coordination:**
- Effective communication between teams is essential to prevent delays in a microservices system.
- Total independence can lead to inefficiencies, while too much coordination can slow down processes.
- Balancing independent work with coordinated efforts is crucial, requiring continuous tuning of team design.

**Designing Teams with Team Topologies:**
- Team Topologies, developed by Matthew Skelton and Manuel Pais, provides a framework for team design focusing on interaction modes.
- Four team types are defined: stream-aligned, enabling, complicated-subsystem, and platform teams.
  - **Stream-Aligned Teams:** Deliver continuous business-relevant outputs.
  - **Enabling Teams:** Support other teams with expertise.
  - **Complicated-Subsystem Teams:** Handle complex domains requiring specialized knowledge.
  - **Platform Teams:** Provide scalable self-service tools and processes.

**Interaction Modes:**
- **Collaboration:** High coordination, suitable for innovation but hard to scale.
- **Facilitating:** Unidirectional support to help deliver outcomes.
- **X-as-a-Service:** Minimal coordination, scalable, suitable for platform teams.

**Implementing Team Topologies:**
- The design process involves establishing a system design team, creating templates for microservices teams, defining platform, enabling, and complicated-subsystem teams, and identifying key consumer teams.
- Team Topologies help visualize team interactions and coordination, tailored to an organization's specific needs.

In conclusion, effective team design in microservices involves maintaining small, cross-functional teams with a balance of independence and coordination. Utilizing frameworks like Team Topologies can aid in structuring teams to optimize performance and communication.



In the design of a microservices operating model, the system design team plays a crucial role. This team is responsible for structuring other teams, establishing standards and incentives, and continually improving the system. The system design team is small, consisting of 3-5 senior leaders, architects, and designers, and is classified as an enabling team. Their primary function is to facilitate and support microservices teams in building and navigating the system.

Each microservice is owned by a single stream-aligned team responsible for its design, development, and maintenance. These teams, sized between 5-8 people, ensure the microservice is continuously improved and released. To streamline the creation of new teams, a microservices team template is used, documenting essential properties like team type, size, and responsibilities.

Platform teams are integral, providing common components as services to microservices teams. A cloud platform team, for example, offers network, application, and deployment infrastructure. This team, also 5-8 people, is tasked with designing and updating infrastructure, treating users as customers to ensure continuous improvement.

A specialized release team handles deploying microservices to production. This complicated-subsystem team coordinates approvals and manages the deployment process, ensuring that services are released efficiently. However, the coordination cost can be high, especially if daily releases are needed across multiple microservices.

Consumer teams, such as the API team, interact with microservices by exposing them as APIs. The API team, also stream-aligned, manages the design and maintenance of APIs, ensuring they connect effectively to internal microservices. This team is crucial for enabling other development teams to access microservices without direct interaction.

The model emphasizes independent and autonomous working, requiring a robust cloud platform to support it. The system design team facilitates interactions between microservices, platform, release, and API teams, ensuring alignment with system goals. This structured approach allows for scalable and efficient microservices development and deployment.



# Summary of Microservices Operating Model and SEED(S) Process

## Microservices Operating Model

The microservices operating model is a foundational framework that defines team structures, responsibilities, and interaction modes. It influences all subsequent decisions in microservices development. Although the initial design is not exhaustive, it should be continuously improved and treated like code, allowing for versioning and management of changes as the system evolves. Additional design assets, such as service-level agreements and skill inventories, can be included to enhance the model.

## SEED(S) Process for Designing Microservices

### Key Decision: Use a Standard Process

A standard, repeatable process is essential for high-quality, customer-centric service design. The SEED(S) process is a top-down, multistep methodology that evolves from previous steps, providing a reliable framework for designing robust service interfaces.

### Seven Essential Evolutions of Design for Services (SEED(S))

1. **Identifying Actors**: Focus on customer-centric design by identifying key actors or personas who will use the services. This step helps in scoping and prioritizing service capabilities.

2. **Identifying Jobs That Actors Have to Do**: Understand the jobs or tasks actors need to accomplish. This approach ensures services are designed to meet user needs rather than merely exposing technical capabilities.

3. **Discovering Interaction Patterns**: Use sequence diagrams to map out how actors interact with the system, identifying high-level actions and queries.

4. **Deriving Actions and Queries**: Base actions and queries on Jobs to Be Done (JTBD) and interaction patterns, ensuring they address user needs effectively.

5. **Describing Queries and Actions**: Use open standards like OpenAPI or GraphQL schemas to specify each query and action, facilitating clear and consistent API design.

6. **Getting Feedback on API Specification**: Engage stakeholders to review and refine the API specification, ensuring it meets user expectations and technical requirements.

7. **Implementing Microservices**: Develop the microservices based on the refined design, ensuring they are independently deployable and accessible.

### Customer-Centric Approach

The SEED(S) process emphasizes viewing services as products, leveraging product management techniques to enhance design. Identifying key actors and understanding their needs is crucial. The process starts with defining actors, inspired by user personas, to ensure services are designed with the end-user in mind.

### Key Decision: Scope Service Design Using Key Actors

Start by identifying specific actors to achieve customer-centric service design. Avoid broad or overlapping actor definitions, focusing on distinct needs and behaviors to guide service boundaries.

### Example Actors

In a sample airline reservation system, actors might include frequent flyers, family vacationers, and customer service agents. These personas guide the design process, ensuring the system meets diverse user needs.

### Identifying Jobs to Be Done (JTBD)

Understand the tasks actors need to accomplish, using the Job Story format: "when <circumstance>, I want to <motivation>, so I can <goal>." This approach ensures services are designed to solve real user problems, not just technical challenges.

By focusing on JTBD as the unit of analysis, the SEED(S) process ensures that microservices are effectively aligned with user needs, promoting successful and sustainable design outcomes.



The text discusses the concept of Jobs to Be Done (JTBD) and its application in designing microservices through the SEED(S) process. JTBD focuses on the context and motivation behind a task rather than the persona performing it, emphasizing that circumstances drive the need for a solution. This approach helps in identifying specific tasks without being constrained by user personas.

**Key Decisions:**

1. **Standard Job Story Format:** Use a uniform format to capture circumstances, motivations, and goals, which aids in consistent user research documentation and discussions with experts.

2. **Discovering Interaction Patterns:** Job Stories, while useful for understanding user needs, don't directly translate to technical requirements. Using UML sequence diagrams, particularly in a text-based format like PlantUML, helps model service interactions. This approach aids in version control, integration, and team collaboration.

3. **Deriving Actions and Queries:** Convert Job Stories into technical specifications using the command query separation (CQS) principle. This involves defining clear contracts for queries (lookups) and actions (state changes) to streamline API design.

**Examples:**

- **Queries:** For a family vacationer, a query might include inputs like departure date and number of passengers, with a response listing available flights.
  
- **Actions:** For rebooking, inputs could include reservation ID and new flight details, with expected outcomes like successful booking or errors.

**Specification with Open Standards:**

- Use standards like Open API Specification (OAS) for formalizing API contracts before implementation, providing a clear understanding between service producers and consumers. This facilitates documentation and developer portal creation.

**Feedback and Iteration:**

- Initial API designs should be reviewed and refined based on feedback to ensure they meet user needs effectively.

Overall, the SEED(S) process emphasizes a structured approach to translating user needs into technical designs, leveraging JTBD, sequence diagrams, and open standards to create robust microservice architectures.



In designing APIs and microservices, collecting feedback from developers and end users is crucial. This feedback ensures APIs are user-friendly and meet client needs, preventing costly redesigns. The SEED(S) methodology emphasizes understanding user requirements and iterating based on developer feedback before coding, saving time and enhancing outcomes.

Microservices and APIs share similarities but serve distinct roles. Microservices implement system capabilities, while APIs provide an outward-facing interface. It's crucial to differentiate between them, as microservices should not replace APIs. Instead, APIs should orchestrate microservices, maintaining loose coupling to enhance flexibility and scalability.

The Unix philosophy of composable tools parallels the microservices approach, advocating for components that operate independently. This independence prevents tight coupling, allowing for scalable and adaptable systems.

A key challenge is determining microservice boundaries. Domain-Driven Design (DDD) offers guidance by focusing on business capabilities rather than technical needs. This approach aligns microservices with business goals, ensuring loose coupling and high cohesion. Overly granular microservices can lead to complexity and inefficiency, so starting with a few well-defined services and expanding over time is recommended.

Successful microservices design involves understanding the domain and applying principles like loose coupling, high cohesion, and alignment with business capabilities. These ensure that microservices are scalable, maintainable, and effective in minimizing coordination costs across teams.

In summary, the SEED(S) methodology provides a structured approach to designing APIs and microservices by emphasizing user and developer feedback. Differentiating between APIs and microservices is crucial for effective system architecture, and applying DDD principles helps define appropriate service boundaries, leading to successful microservices implementation.



Domain-Driven Design (DDD) introduces the concept of bounded contexts to manage complex systems by defining the range of applicability for each domain model. This allows different parts of a system to operate independently without corrupting each other's domain models. A key element of bounded contexts is the Ubiquitous Language, a shared vocabulary developed collaboratively by subject-matter experts and engineers to describe the domain. This language ensures clarity within a specific context, as terms can have different meanings in different contexts. For example, the term "account" varies in meaning across identity management, customer management, and financial accounting contexts.

Context mapping is another crucial DDD concept, involving the design of multiple independent models that coexist and communicate within a system. This interaction is represented in a context map. Several types of collaboration interactions exist, such as shared kernels and upstream-downstream relationships. Shared kernels require high coordination and are problematic in microservices architectures. Upstream-downstream relationships, including customer-supplier and conformist types, offer more flexibility but come with their own challenges, such as maintaining backward compatibility and managing breaking changes.

To mitigate risks, downstream contexts can employ strategies like anti-corruption layers or use upstreams that provide open host interfaces. Open host services define a standard interface for multiple downstream consumers, ensuring scalability and ease of integration. Integration between bounded contexts can be synchronous, using RESTful APIs or gRPC, or asynchronous, using publish-subscribe interactions. Asynchronous interactions offer superior scalability and flexibility.

Aggregates in DDD are collections of related domain objects viewed as a single unit by external consumers. They hide internal complexities and expose only relevant information. Event Storming, a methodology inspired by DDD, streamlines domain-driven analysis to identify bounded contexts quickly and efficiently. It involves collaborative sessions with diverse team members using physical or virtual tools to map out domain events and identify aggregates.

Event Storming is a pragmatic approach that lowers the cost of DDD analysis, making it viable for situations where traditional DDD would be too expensive or time-consuming. It involves using stickies and markers to map out domain events on a long wall or digital platform, encouraging broad participation from engineers, product owners, and other stakeholders. This process enhances clarity and facilitates the discovery of service boundaries in a matter of hours.

In summary, DDD's bounded contexts, context mapping, and aggregates provide a structured approach to managing complex systems. Event Storming offers a lightweight alternative for identifying service boundaries efficiently, making it a valuable tool for modern software development.



### Summary of Event Storming and Microservices Sizing

#### Event Storming Process

Event Storming is a collaborative domain modeling technique involving cross-functional teams to explore complex systems. It requires a large room, a roll of paper, orange sticky notes, and markers. The process involves several phases:

1. **Domain Events Identification**: Participants write key domain events on orange sticky notes, one per note, and place them on a timeline. This phase is about generating ideas without worrying about duplicates or exact sequences.

2. **Timeline Coherence**: The group organizes the notes into a coherent timeline, removing duplicates and creating a storyline or user journey. Questions or uncertainties are noted as "hotspots" on differently colored sticky notes.

3. **Reverse Narrative and Commands**: Participants walk the timeline backward to identify commands (causes of events) using blue sticky notes. This phase highlights the relationship between commands and events.

4. **Aggregates and Bounded Contexts**: Commands and events are grouped around domain entities called aggregates. This helps identify bounded contexts, which are clusters of related events and commands.

5. **Competitive Analysis**: Bounded contexts are prioritized based on difficulty and competitive edge using a matrix with T-shirt sizes (S, M, L). This phase helps decide which contexts to focus on for development.

#### Microservices Sizing and Universal Sizing Formula

Microservices should not be assumed to align perfectly with bounded contexts. Service boundaries evolve over time, often increasing in granularity. The Universal Sizing Formula suggests:

- Start with a few microservices using bounded contexts.
- Split microservices as applications grow, avoiding coordination dependencies.
- Focus on reducing coordination rather than achieving perfect initial sizing.

#### Independent Deployability and Data Management

Microservices must be independently deployable, which requires them to own their data. Shared data spaces compromise loose coupling and independent deployment. Key principles include:

- Microservices should embed their data, avoiding shared data ownership.
- Multiple microservices can share physical database clusters, but not logical data spaces.

#### Importance of Data Independence

Data independence is crucial for maintaining microservices' agility and safety. It prevents ripple effects from data changes affecting multiple services. By ensuring microservices have their own data spaces, teams can deploy independently and maintain system robustness.

#### Conclusion

The chapter emphasizes the importance of domain-driven design and Event Storming for effective microservices sizing and data management. These methodologies help teams model complex systems, prioritize domains, and ensure microservices are independently deployable, ultimately enhancing system scalability and flexibility.



In the context of an online reservation system, the transition from a monolithic, N-tier architecture to a microservices architecture involves significant changes in data management. Microservices are characterized by being loosely coupled and independently deployable, which is not achieved if services are arbitrarily split and share data spaces, as seen in the example with services requiring data from the "flights" table. To resolve this, a delegate service, such as a flight inventory service, can be introduced to encapsulate and manage shared data, allowing other services to interact with it via API calls. This approach prevents direct data sharing and ensures independent deployability.

However, not all data-sharing scenarios can be addressed by delegate services. In cases where data needs to be accessed or modified across microservices, solutions like data duplication and data lakes are utilized. Data lakes allow for read-only access by streaming data from microservices, maintaining them as authoritative sources. This setup is effective for analytics and machine learning but unsuitable for scenarios requiring data modification.

For distributed transactions, traditional ACID transactions are not feasible due to their reliance on exclusive locks and centralized data management. Instead, saga transactions are used, where each step in a transaction includes a compensating action for rollback in case of failure. This approach ensures that the system reaches a reasonable state, even if not the original state, after a transaction fails.

Event Sourcing and CQRS (Command Query Responsibility Segregation) offer advanced solutions for data management in microservices. Event Sourcing involves storing events rather than the state of domain objects, allowing systems to derive current states from a sequence of changes. This method contrasts with traditional relational modeling, which stores current states directly. Event Sourcing is analogous to accounting journals or chess game records, where individual transactions or moves are recorded, and the state is a result of summing these events.

Overall, these patterns—delegate services, data lakes, sagas, Event Sourcing, and CQRS—provide a comprehensive toolset for managing data in a microservices environment, addressing challenges of data isolation and loose coupling.


# Summary

The text explores the concepts of Event Sourcing and Command Query Responsibility Segregation (CQRS) as alternatives to traditional relational data models, particularly in microservices architectures.

## Relational vs. Event-Sourced Models

A relational data model typically involves tables with entities and their relationships, such as customers, accounts, and transactions. This model is state-oriented, showing the current state but not the sequence of events leading to it.

Event Sourcing, on the other hand, models the system as a sequence of events. This approach captures each change as an event, allowing the system's state to be derived from these events. It simplifies the design by reducing the need for complex relationships between entities and focuses on capturing business events.

## Benefits of Event Sourcing

1. **Simplicity and Uniformity**: Event Sourcing reduces subjective design decisions and focuses on business events.
   
2. **No Referential Relationships**: Entities do not have direct relationships, which simplifies data segregation and microservice ownership.

3. **Temporal Flexibility**: The ability to calculate the state at any point in time enables sophisticated analytics and auditing.

4. **Rolling Snapshots**: To improve performance, intermediate states (snapshots) can be saved to avoid recalculating from scratch.

## Event Structure

Events are simple data structures with three parts:
- **Unique Identifier**: Often a UUID.
- **Event Type**: To distinguish between different events.
- **Data**: Relevant information for the event type.

## Projections

Projections are used to calculate the current state from events. They are akin to SQL updates in relational databases and can be computationally expensive, hence the use of rolling snapshots for optimization.

## Event Store

An event store is a system that records events in sequence and supports:
- Storing new events.
- Notifying subscribers about new events (Competing Consumers pattern).
- Retrieving events for reconciliation.

## CQRS

CQRS separates the command (write) and query (read) responsibilities, allowing for optimized query systems independent of data storage. This separation enables granular, loosely coupled components, ideal for microservices.

## Considerations

- **Complexity**: Event Sourcing and CQRS can complicate implementations and should not be overused.
- **Auditability**: Provides a complete history of changes, unlike relational models that may lose historical data.

## Beyond Microservices

Event Sourcing and CQRS offer benefits beyond microservices, such as addressing the CAP theorem's limitations by prioritizing consistency in event stores and availability in query indices. They also enhance auditability by maintaining a reliable event log as the source of truth.

In summary, Event Sourcing and CQRS are powerful patterns that address data isolation and management challenges in microservices, offering flexibility, auditability, and simplified design while requiring careful consideration of their complexity and applicability.


This text outlines key strategies for implementing microservices infrastructure using DevOps principles. It emphasizes the importance of infrastructure as code (IaC), continuous integration, and continuous delivery (CI/CD). The focus is on creating a predictable, scalable, and efficient system by leveraging cloud-based tools like AWS and Terraform.

**Infrastructure Setup and Automation**  
The process begins with setting up an AWS account and establishing a CI/CD pipeline to automate infrastructure changes. This approach allows teams to manage microservices infrastructure efficiently, enabling a self-service model where teams can deploy services without heavy coordination with a platform team.

**DevOps and Microservices**  
DevOps practices are crucial for microservices architecture, emphasizing improvements in software development, release, and support. These practices facilitate faster, safer infrastructure changes, allowing for frequent improvements and better service offerings. The text highlights the synergy between DevOps and microservices, underscoring the need for tools that support code management, build management, and releases.

**Key DevOps Concepts**  
1. **Immutable Infrastructure**: Infrastructure components are not changed after creation. Instead, they are destroyed and recreated, ensuring predictability and ease of replication.
2. **Infrastructure as Code (IaC)**: Infrastructure changes are managed as code, allowing for consistent and repeatable changes. Tools like Terraform are used to define and apply these changes, supporting the principle of immutability.
3. **CI/CD**: Continuous integration and delivery practices are applied to ensure safe and efficient infrastructure changes. Using pipeline tools like GitHub Actions, changes are automatically integrated and delivered, reducing risks and enhancing change speed.

**Tooling and Implementation**  
The text details the use of Terraform for managing infrastructure changes, highlighting its declarative approach, which simplifies the process of achieving a desired infrastructure state. It also discusses the use of GitHub for code management, integrating GitHub Actions for CI/CD pipelines to streamline the development and deployment process.

**Conclusion**  
By adopting these DevOps principles and tools, teams can build a robust microservices infrastructure that is scalable, predictable, and easy to manage. The text provides a foundation for setting up an effective development environment and emphasizes the importance of automated, code-driven infrastructure management.



# Summary of Infrastructure Setup for CI/CD with AWS and Terraform

## Introduction to Tools

To manage code and infrastructure, Git and GitHub are essential. If unfamiliar with Git, resources like "Pro Git" and GitHub's "Git Handbook" are recommended. A GitHub account is necessary for managing code and CI/CD pipelines.

## Installing Terraform

Terraform is used for declarative infrastructure management. Although CI/CD pipelines will automate Terraform runs, a local installation is useful for testing. Terraform supports various platforms including OS/X, Linux, and Windows. Version 0.12.20 is used in examples, and installation verification can be done using `$ terraform version`.

## Choosing AWS for Cloud Hosting

AWS is chosen for hosting microservices due to its large user base. An AWS account is required, and users should monitor billing as some resources may incur costs beyond AWS's free tier. An "operator" account is needed for tool access.

## Setting Up AWS IAM

AWS Identity and Access Management (IAM) is used to manage users, groups, and permissions. A special user, "ops-account," is created to represent tooling with necessary permissions. This user will be used for CI/CD pipeline interactions.

### Steps to Create IAM User

1. Log in to AWS management console.
2. Navigate to IAM service.
3. Create a user with "Programmatic access."
4. Attach the "IAMFullAccess" policy.
5. Note the "Access key ID" and "Secret access key" for later use.

## Configuring AWS CLI

The AWS CLI is used for configuration and resource management. After installation, configure it with `aws configure`, providing access keys and setting a default region. Verify setup by listing user accounts with `aws iam list-users`.

## Setting Up Permissions

The "ops-account" user needs additional permissions to manage AWS resources. A new group, "Ops-Accounts," is created, and the user is added to it. Several policies are attached to this group, including IAMFullAccess, AmazonEC2FullAccess, and others necessary for infrastructure management.

## Custom Policy for EKS

A custom JSON policy is created for AWS Elastic Kubernetes Service (EKS) permissions, and attached to the user group. This involves creating a policy file and using `aws iam create-policy` and `aws iam attach-group-policy`.

## Creating an S3 Backend for Terraform

Terraform requires a state file to track environment configurations, ideally stored in AWS S3 for accessibility and synchronization. An S3 bucket is created with a unique name and region, set as the backend for Terraform state.

### Key Considerations

- S3 bucket names must be unique across the AWS region.
- Use a consistent region for both AWS CLI configuration and S3 bucket.

This setup ensures a robust CI/CD pipeline using GitHub, Terraform, and AWS, adhering to Infrastructure as Code (IaC) principles.



To create an S3 bucket in AWS, use the `aws s3api create-bucket` command. For the `us-east-1` region, the command is straightforward, but for other regions, include `--create-bucket-configuration` with `LocationConstraint`. Successful creation returns a JSON object with the bucket's URL. By default, S3 buckets are private, which is suitable for storing sensitive files like Terraform state files.

The AWS user `ops-account` is configured for full permissions to manage resources and store objects in the S3 bucket. This setup allows for Infrastructure as Code (IaC) management, reducing manual changes and enabling automated pipeline handling.

The chapter focuses on building an IaC pipeline, crucial for provisioning environments efficiently. The pipeline ensures a stable infrastructure definition, allowing teams to test, modify, and release services. The foundation includes:

- A GitHub repository for sandbox testing
- A Terraform root module
- A GitHub Actions CI/CD pipeline

The sandbox environment tests IaC modules and pipelines before creating a test environment for microservices. Each environment has its own repository, promoting independence and easier management. Some prefer a monorepo for shared components and consistency.

To create a GitHub repository, navigate to GitHub, create a private repository named `env-sandbox`, and include a `.gitignore` for Terraform. Clone the repository locally for development.

Terraform, used for declarative infrastructure coding, utilizes HCL (HashiCorp Configuration Language). Key concepts include:

- **Backends:** Store Terraform state files, typically in an S3 bucket.
- **Resources:** Objects representing desired states.
- **Providers:** Libraries of resources, like the AWS provider.
- **Modules:** Reusable code blocks.

Start by writing a `main.tf` file in the `env-sandbox` repository, specifying the S3 bucket and AWS region. Use Terraform commands (`fmt`, `init`, `validate`, `plan`) to format, initialize, validate, and preview changes without applying them.

Set up an automated CI/CD pipeline using GitHub Actions to apply Terraform configurations. Store AWS credentials in GitHub secrets for secure access. The pipeline workflow involves validating and applying Terraform files, triggered by Git tags for version control and build management.

This setup prepares for automated infrastructure management, enhancing efficiency and reducing manual intervention.



In this chapter, we set up an Infrastructure as Code (IaC) pipeline using GitHub Actions to automate the deployment of Terraform-managed infrastructure on AWS. The process begins with setting up the build environment by installing necessary tools like Terraform and AWS, and retrieving code from the repository. The pipeline is triggered via Git tags that start with "v", allowing us to maintain version history.

The YAML configuration for the GitHub Actions workflow is created from scratch, bypassing templates. The workflow files reside in the `.github/workflows` directory and are edited using GitHub's browser-based editor for ease of access to plugins. The pipeline's trigger is configured to initiate builds on creating a new tag, running on an Ubuntu virtual machine.

Dependencies are managed efficiently; Git is pre-installed with GitHub Actions, and HashiCorp provides a Terraform action, eliminating the need for manual installation. The AWS CLI is not required as changes are made solely through Terraform. Additional tools like AWS IAM Authenticator and Istio CLI are installed to handle Kubernetes-based microservices.

The workflow includes steps to format, validate, plan, and apply Terraform changes, with an auto-approve flag to execute changes without manual intervention. After applying Terraform, the pipeline uploads a Kubernetes configuration file using the `upload-artifact` action to facilitate remote cluster access.

Upon completion, the pipeline commits changes to the GitHub repository. Testing involves creating and pushing a Git tag to trigger the workflow, ensuring it runs successfully. The chapter concludes with a recommendation to incorporate integration testing using tools like Terratest for a more robust CI/CD pipeline.

The setup embodies key DevOps principles, providing a streamlined, automated approach to infrastructure management, enhancing both speed and reliability of deployments.



# Summary

In this chapter, we focus on building a microservices infrastructure using a CI/CD pipeline for infrastructure changes. The infrastructure for our microservices system is defined in code, enabling automated testing and implementation. Setting up the right infrastructure is crucial for effective microservices systems, which require a robust network and deployment architecture.

## Infrastructure Components

The infrastructure consists of various components needed to deploy, manage, and support a microservices-based application. This includes hardware, software, networks, and tools. We utilize a single cloud platform (AWS) to simplify our infrastructure setup, focusing on three main components: a virtual network, an AWS managed Kubernetes service, and a declarative GitOps server.

### Network Design

Microservices require a suitable network, which we achieve by creating a virtual private cloud (VPC) on AWS. The VPC is partitioned into subnets to organize traffic and control access. We define routing and security objects to manage traffic flow, including private subnets that only accept internal traffic. This complexity supports the Kubernetes service running on top.

### Kubernetes Service

Kubernetes, a container orchestration tool, is essential for managing containers at scale. It provides solutions for deploying, scaling, and managing container-based applications. We use AWS's Elastic Kubernetes Service (EKS) to simplify Kubernetes management, provisioning the cluster and configuring nodes as needed.

### GitOps Deployment Server

We introduce a GitOps deployment server to facilitate microservice deployment by the release team. GitOps uses Git as a "source of truth," ensuring system configurations match the state described in the Git repository. We use Argo CD, a GitOps tool, to automate Kubernetes application deployment, allowing for continuous deployment by synchronizing with Git.

## Implementing the Infrastructure

We use Terraform and GitHub Actions to write and apply infrastructure code. Our approach involves creating reusable Terraform modules that define key infrastructure components: networks, the API gateway, and the managed Amazon Kubernetes service (EKS). This modular approach allows us to easily manage and replicate environments.

### Setting Up the Module Repositories

We create several GitHub repositories for our Terraform modules: `module-aws-network` for the network, `module-aws-kubernetes` for EKS, and `module-argo-cd` for Argo CD. These modules are designed to be reusable and parameterized, facilitating the creation of multiple environments without code repetition.

### Key Decisions

1. **Use of AWS EKS**: We choose AWS EKS as a managed Kubernetes service to handle complexity.
2. **Deploy Microservices Using GitOps**: Argo CD is selected for managing microservice deployment into production environments.

By the end of this chapter, we establish a sandbox environment with an Argo CD server on an AWS-managed Kubernetes cluster, running on an AWS VPC network. This setup lays the foundation for deploying example microservices in the following chapter.



To build a microservices infrastructure using Terraform, start by creating GitHub repositories for storing Terraform modules. Public repositories are recommended for ease of import, but private ones can be used with authentication. Use a `.gitignore` file to prevent unnecessary files from being pushed to GitHub.

**Network Module:**

1. **Virtual Network Foundation:** Begin by defining the AWS network module, which supports Kubernetes and microservices architecture. This involves writing input, main, and output code to provision a network environment with minimal input values.

2. **Outputs Definition:** Create a `output.tf` file to define expected network resources, such as VPC and subnets. The module will create a VPC and four subnets (two public, two private) for Kubernetes deployment.

3. **Main Configuration:** Use `main.tf` to declare the AWS VPC resource. Specify parameters such as CIDR blocks and tags. Tags help identify resources and avoid naming collisions in shared environments.

4. **Subnets and Availability Zones:** Define subnets in `main.tf` using AWS availability zones for redundancy. Public subnets handle internet traffic, while private subnets manage internal traffic. Use Terraform variables for CIDR blocks and availability zones to ensure flexibility across regions.

5. **Routing and Internet Gateway:** Implement routing rules to manage traffic. Public subnets require an internet gateway for external connectivity. Define an `aws_route_table` for routing internet traffic to public subnets.

6. **NAT Gateway for Private Subnets:** Private subnets need a NAT gateway for internet access. Allocate elastic IPs for NAT gateways, allowing private subnets to communicate with the internet.

7. **Route Tables for Private Subnets:** Define route tables for private subnets, enabling them to route traffic through NAT gateways.

**Variables Definition:**

Create `variables.tf` to specify input variables for the module. Variables include environment name, AWS region, VPC name, CIDR blocks, and cluster name. These inputs ensure the module's reusability and configurability.

By following these steps, the Terraform configuration will establish a robust AWS network ready for Kubernetes and microservices deployment. This setup ensures redundancy, scalability, and proper traffic management across the infrastructure.



In implementing a Terraform-based infrastructure, it's crucial to include a description attribute for every variable in your Terraform module to enhance maintainability and usability. After completing the Terraform code for a network module, ensure your module directory contains files like `README.md`, `.git`, `main.tf`, `variables.tf`, and `outputs.tf`. Before using the module, validate and format the code using Terraform commands such as `terraform fmt`, `terraform init`, and `terraform validate`.

To create a sandbox environment network, define values for the module's variables in a Terraform file. Use the `module` resource to reference your Terraform module and specify a `source` property indicating the GitHub repository path. This setup allows for predictable and repeatable environment creation, reducing variation in microservices deployment.

After writing and validating the Terraform code, push the changes to GitHub using Git commands like `git add`, `git commit`, and `git push`. Run `terraform plan` to review the changes before applying them. Once the plan is satisfactory, execute the code to build the network.

To verify the creation of resources, use AWS CLI commands, such as `aws ec2 describe-vpcs`, to ensure the VPC is correctly set up. With the network module in place, begin developing a Kubernetes module, which includes setting up an EKS cluster for orchestrating container-based services.

The Kubernetes module involves defining output variables, writing configuration code, and managing inputs. Start by creating a new GitHub repository for the module. Use Amazon's EKS for Kubernetes deployment, which simplifies setup and management. Define an EKS cluster and a node group, specifying parameters for both.

The EKS cluster comprises a control plane and node groups. Define policies and security rules for the cluster and nodes, using AWS IAM roles and security groups. The configuration allows EKS to manage AWS resources on your behalf, enabling automated solutions for resiliency, scaling, and fault tolerance.

Finally, ensure your Terraform code is valid and formatted, and push the changes to GitHub. The infrastructure pipeline will apply Terraform changes, and you can monitor progress via GitHub Actions. This setup provides a robust foundation for deploying microservices efficiently and effectively in a sandbox environment.



### Summary of Kubernetes Module Setup and Configuration

This guide outlines the process of setting up a Kubernetes infrastructure using Terraform on AWS EKS, focusing on defining IAM roles, policies, and node groups for efficient resource management. The setup allows Kubernetes nodes to interact with AWS services such as container registries and EC2 instances.

#### IAM Role and Policies

- **Node Role Definition**: An IAM role is created for Kubernetes nodes to assume, enabling them to interact with AWS services.
- **Policy Attachments**: Essential policies like `AmazonEKSWorkerNodePolicy`, `AmazonEKS_CNI_Policy`, and `AmazonEC2ContainerRegistryReadOnly` are attached to the IAM role to facilitate resource provisioning and container access.

#### Node Group Configuration

- **Node Group Declaration**: A managed node group is defined using input variables for flexibility in resource allocation, allowing different configurations for development and production environments.
- **Scaling Configuration**: Parameters such as desired, minimum, and maximum node sizes are set to control resource usage and costs, allowing EKS to auto-scale efficiently.

#### Kubeconfig File Generation

- **Configuration File**: A `kubeconfig` file is generated to store cluster connection details, facilitating easy access for Kubernetes management using CLI tools like `kubectl`.

#### Variable Declaration

- **Module Variables**: Variables are declared in `variables.tf` to manage AWS region, environment name, cluster details, and node group specifications. This modular approach ensures reusable and scalable infrastructure setups.

#### Infrastructure Validation and Deployment

- **Terraform Commands**: Commands like `terraform fmt`, `terraform init`, and `terraform validate` are used to format, initialize, and validate the infrastructure code.
- **Version Control**: Changes are committed and pushed to GitHub, enabling CI/CD pipelines to create a working EKS cluster.

#### Argo CD Setup

- **GitOps Integration**: Argo CD is installed using a separate Terraform module, leveraging Kubernetes and Helm providers to manage the deployment on the Kubernetes cluster.
- **Helm Chart**: A Helm chart from the Argo CD community is used to streamline the installation process.

#### Testing and Validation

- **Environment Testing**: The setup is tested by accessing the Argo CD web console, verifying the operational status of the entire stack.
- **kubectl Configuration**: A `kubeconfig` file is downloaded and used to configure `kubectl`, enabling API calls to the Kubernetes cluster to ensure connectivity and functionality.

### Conclusion

The comprehensive setup of a Kubernetes infrastructure using Terraform on AWS EKS involves defining roles, policies, and node groups, generating configuration files, and integrating GitOps with Argo CD. This modular approach facilitates efficient resource management, scalability, and ease of deployment in various environments.



### Summary

This text outlines the process of managing infrastructure using Terraform and Kubernetes, focusing on Argo CD for continuous deployment. It emphasizes the importance of cleaning up infrastructure to avoid costs, particularly with elastic IPs, and provides a step-by-step guide for destroying a sandbox environment using Terraform. The process involves navigating to the working directory, pulling the latest code, initializing Terraform providers, and executing the `terraform destroy` command. Verification of resource removal is done using AWS CLI commands.

The text also highlights the creation of a microservices infrastructure using Terraform modules for a software-defined network and AWS EKS cluster, alongside implementing Argo CD with Helm. A key takeaway is the ease of re-creating environments due to the declarative nature of Terraform.

In the subsequent chapter, the focus shifts to setting up a developer workspace for microservices. It stresses the importance of intuitive and standardized development processes to facilitate collaboration and avoid complexity. The text recommends investing in CI/CD pipelines and consistent development practices to support a successful microservices culture.

Key guidelines for a developer workspace include:

1. **Docker Dependency**: Ensure Docker is the only dependency, avoiding manual setups and ensuring environment consistency across different machines.
   
2. **Remote and Local Compatibility**: The setup should work seamlessly whether code is run locally or on a cloud server.

3. **Heterogeneous-Ready Workspace**: Accommodate multiple languages and database systems, supporting the ability to introduce new stacks when necessary.

4. **Ease of Running Services**: Facilitate running a single microservice or a subsystem of multiple services with equal ease.

5. **Local Databases**: Use Docker-ized alternatives for databases locally, with easy switching to cloud services.

6. **Containerization Guidelines**: Emphasize developer-friendly containerization, using Dockerfiles for building images and Docker Compose for local integrations. Implement multistage builds for optimized images.

7. **Database Migrations**: Automate schema changes and data management with migration scripts, ensuring they are part of the project launch and build processes.

8. **Automated Testing**: Establish pragmatic testing practices to ensure code quality and reliability.

The text concludes by emphasizing the importance of a superior developer experience, encouraging standardized practices to enhance development speed and maintain high quality. These principles aim to create an intuitive and efficient development environment for microservices projects.



In the realm of automated testing, a balanced approach is essential. Teams should avoid extremes, such as abandoning automated testing or being overly zealous with test-driven development. Instead, a pragmatic method that considers developer experience and quality metrics is recommended. This involves ensuring all code is reasonably tested before merging, using platform-appropriate testing frameworks, and integrating external tools like Cucumber seamlessly into the codebase. Special care is needed for tests spanning multiple microservices, potentially requiring dedicated repositories for orchestration.

Branching and merging strategies are crucial for effective collaboration. All development should occur on feature or bug branches, and merging to the main branch should only happen after passing all tests. The status of test runs should be visible during code reviews, and linting errors must prevent code from being merged.

Makefiles are recommended for standardizing common targets across repositories, making it easy for developers to interact with different codebases regardless of the language. Standard targets include commands for running, stopping, building, and testing code, as well as managing dependencies and migrations.

Containerization with Docker is highlighted as a key principle for creating reliable development environments. Setting up a containerized environment involves installing Docker and possibly Kubernetes. Docker4Mac and Docker4Windows are popular choices, though alternatives like Multipass offer lighter-weight solutions. Multipass allows launching Ubuntu-based Docker hosts on macOS or Windows, with options to customize resources like memory allocation.

Installing Docker within a Multipass container involves standard procedures, and ensuring non-root user access is advised for security. Testing Docker setups can be done by running services like MySQL or Cassandra using Docker Compose. For more complex orchestration, Kubernetes can be installed locally using tools like Minikube, k3s, or MicroK8s, though it's generally recommended to avoid local Kubernetes unless necessary.

These practices form a blueprint for developing user-friendly workspaces that enhance team productivity and cohesion, especially in microservices environments.



# Summary

## Kubernetes and Skaffold

Kubernetes, while powerful for orchestration in non-development environments, lacks built-in tooling for building container images, making it cumbersome for active development. To address this, Skaffold, an open-source toolset, was developed to integrate container image building into Kubernetes workflows. This enhances the build-run-test cycle, streamlining development processes.

## Developer Workspaces

The chapter emphasizes designing developer-friendly workspaces by introducing 10 principles for efficient environments across macOS, Windows, and Ubuntu Linux. These principles aim to create collaborative spaces, ease onboarding, and promote good coding practices. The subsequent chapters build on these goals to delve into microservices development.

## Microservices Development

The book outlines a sample multimicroservices project, using the SEED(S) design methodology. This involves identifying microservices through bounded contexts analysis, such as Flights and Reservations management. The focus is on designing endpoints, implementing data models, and creating a user-friendly development environment.

### Designing Microservice Endpoints

Using Event Storming, two microservices are identified: `ms-flights` and `ms-reservations`. The SEED(S) methodology guides the design, involving actors like customers, airline apps, and backend APIs (BFF APIs). Key jobs include rendering seating charts and managing reservations. A critical decision is avoiding direct microservice-to-microservice calls, using a thin API layer for orchestration instead.

### Sequence Diagrams

UML sequence diagrams illustrate interactions, showing how APIs authenticate and coordinate with microservices to render seating charts and manage reservations. This approach ensures microservices are orchestrated efficiently without direct communication.

### Actions and Queries

For `ms-flights`, actions include getting flight details and seating charts. For `ms-reservations`, actions involve querying reserved seats and reserving seats. These actions are essential for translating business needs into technical specifications.

## OpenAPI Specification

The OpenAPI Specification (OAS) is used to define RESTful microservices. The `ms-flights` API includes endpoints for flight details and seating maps, while the `ms-reservations` API handles seat reservations. OAS provides a clear structure for requests and responses, facilitating implementation.

## Implementing Microservices

The implementation uses different tech stacks: Python/Flask for `ms-reservations` and Node/Express.js for `ms-flights`, demonstrating heterogeneity. The data independence principle is emphasized by using Redis for reservations and MySQL for flights, showcasing the benefits of tailored data storage solutions.

### Redis for Reservations

Redis hashes are utilized for the reservations system, storing seat reservations efficiently. Each flight has a hash with seat numbers as keys and customer IDs as values. This structure supports quick access and management of reservation data.

In summary, the text provides a comprehensive guide to setting up developer environments, designing, and implementing microservices with an emphasis on efficient orchestration, data independence, and leveraging appropriate technologies for specific use cases.


# Summary

## Redis for Reservations

Redis is chosen as the data store for the reservations microservice due to its simplicity and flexibility. It prevents double-booking of seats using the `HSETNX` command, which sets a value only if the key is not already assigned. This ensures that seats on a flight, identified by `flight_id`, are uniquely reserved. Commands like `HKEYS` and `HGETALL` are used to retrieve occupied seats and their details. Redis is praised for its ease of use and suitability for various use cases, although it may not fit every scenario.

## MySQL for Flights Microservice

For the flights microservice, MySQL is selected due to its robust support for JSON data types, which is beneficial for storing complex seat maps. MySQL allows for in-place, atomic updates, and efficient querying by fields such as `flight_no` and `datetime`. The seat maps are stored in a JSON format, providing advantages like validation and optimized storage. MySQL's relational structure is more natural for such queries compared to Redis.

## Implementing Microservices

### Node.js and Python Templates

To develop microservices rapidly, reusable code templates are used. For the Node.js-based flights microservice, NodeBootstrap is employed, while a GitHub template is used for the Python-based reservations microservice. These templates ensure uniformity and speed up development.

### Setting Up the Flights Microservice

NodeBootstrap is used to create a Node/Express microservice. The repository setup involves creating MySQL tables and implementing endpoints for flights and seat maps. Input validation is added to ensure correct parameter formatting. Database migrations are utilized to manage schema changes.

### Health Checks

Health checks are crucial for container management. Two types of probes are implemented: a liveness probe at `/ping` and a readiness probe at `/health`, which checks database connectivity. This ensures that the microservice is not only running but also fully functional.

### Code Modifications

The NodeBootstrap template is adjusted by renaming modules and setting up routes for the API endpoints. Database migrations are created to establish tables and insert sample data. The health-check middleware is configured to perform database checks efficiently, reducing stress on the system.

## Conclusion

The choice of data store, whether Redis or MySQL, is based on the specific needs of the microservice. Redis is ideal for simple, fast operations like seat reservations, while MySQL excels in handling complex data structures and queries. The use of templates and health checks streamlines the development and deployment of microservices, ensuring reliability and efficiency.


## Summary

This text outlines the development and deployment of a microservices architecture focusing on two microservices: `ms-flights` and `ms-reservations`. The `ms-flights` microservice is implemented using Node.js and MySQL, while `ms-reservations` is built with Python, Flask, and Redis.

### Microservices Implementation

**ms-reservations Microservice:**
- Implemented using Python and Flask with Redis as the data store.
- Utilizes a GitHub template similar to `NodeBootstrap` for a smooth development experience, including Docker and Makefile configurations.
- Lacks database migrations since Redis does not use schemas; however, test data creation is possible.

**API Development:**
- The OpenAPI Specification (OAS) is placed in `docs/api.yml`.
- The reservation creation endpoint is implemented using a PUT request to `/reservations`.
- The endpoint logic involves checking seat availability using Redis's `hsetnx`, which prevents double-booking by setting a value only if it is not already set.

**Code Structure:**
- `service.py` handles endpoint routing.
- `handlers.py` processes requests and responses.
- `models.py` manages database interactions with Redis.

### Deployment and Testing

**Running the Microservices:**
- The services can be started using Makefile commands, with Docker mapping the internal port 5000 to 7701 on the host.
- Logs can be accessed using `make logs` or `make logs-db`.

**Testing with Curl:**
- Reservations can be made and tested using curl commands.
- Double-booking protection is verified by attempting to reserve an already booked seat, which returns a 403 error.

### Multi-Microservice Management

**Umbrella Project:**
- An umbrella project allows multiple microservices to be executed as a single unit.
- Faux Git Submodules are used for managing individual microservice repositories within the umbrella project.
- Configuration involves editing `fgs.json` and modifying start/stop scripts (`bin/start.sh` and `bin/stop.sh`).

**Routing with Traefik:**
- Traefik is used for seamless routing between microservices.
- Docker-compose files are updated with Traefik labels for proper routing.

### Infrastructure and Deployment

**Staging Environment Setup:**
- Infrastructure is defined using Terraform, allowing for consistent and repeatable deployments.
- New components include an ingress controller, MySQL for `ms-flights`, and Redis for `ms-reservations`.

**CI/CD Pipeline:**
- The infrastructure and microservices are deployed using a CI/CD pipeline.
- This setup ensures that updates can be applied safely and efficiently.

### Conclusion

The text emphasizes the importance of using robust templates and infrastructure as code to streamline the development and deployment processes. By leveraging these tools, developers can efficiently manage microservices and ensure reliable and scalable applications.



### Summary

**Ingress Gateway Module**

The text discusses implementing an ingress routing architecture in an AWS-based infrastructure using Traefik, an edge router previously used in development. Traefik will route messages from the load balancer to microservices deployed in Kubernetes. A pre-written Terraform module will install the Traefik ingress controller, similar to modules for network, EKS, and Argo CD. The module is available on GitHub. Although a "backend for frontend" API isn't implemented, the setup is extendable for future use, possibly with AWS API Gateway.

**Database Module**

Two databases, MySQL and Redis, are needed for microservices. AWS managed versions will be used, enabling the platform team to offer databases as a service. Terraform-based modules will provision AWS hosted and managed services using AWS ElastiCache for Redis and AWS RDS for MySQL. The module also handles network configuration and access policies. Once applied, both database instances will be operational in the staging environment.

**Staging Environment Setup**

The staging environment mirrors the sandbox environment from Chapter 7, using Terraform to define it in code. Existing modules for network, Kubernetes, and Argo CD will be complemented by new database and ingress controller modules. A GitHub Actions pipeline, as detailed in Chapter 6, will provision the environment. Users will fork a staging environment skeleton project from GitHub, make necessary AWS-specific code changes, and configure the CI/CD workflow with AWS credentials and a MySQL password.

**Configuring the Staging Workflow**

AWS credentials and MySQL password must be added as secrets in the GitHub repository. The GitHub Actions pipeline will be activated to run the workflow. Users must update the Terraform code with specific AWS account details, including S3 bucket name, backend data identifier, and AWS region. Additional IAM group permissions for database operations are needed for the AWS operator account.

**Testing and Finalizing the Staging Environment**

The Terraform code is validated and applied, and the infrastructure code is committed to the forked repository. A release tag triggers the CI/CD pipeline, provisioning the staging environment. Kubernetes cluster accessibility is tested using a kubeconfig file generated by the pipeline. A Kubernetes secret is created to store the MySQL password securely.

**Shipping the Flight Information Container**

A CI/CD pipeline is set up to build and publish the flights microservice to a container registry, with Docker Hub chosen for its integration options with GitHub Actions. Users create a Docker Hub repository for the flight application, facilitating container management and deployment.

**Key Decisions**

1. **Traefik Ingress Controller**: Used for message routing in AWS.
2. **Shared and Managed Database Services**: AWS managed MySQL and Redis databases.
3. **Docker Hub**: Selected as the container registry for microservices.

The setup allows for scalable and manageable deployment of microservices within a structured AWS environment, leveraging existing tools and services for efficient operation.



## Summary

To build and push containers using a CI/CD pipeline, we utilize GitHub Actions due to its effectiveness in IaC-based provisioning and its integration with Docker Hub. The process involves creating a GitHub Actions workflow within the repository containing the microservices code. This workflow will handle building, testing, and pushing containers to Docker Hub.

### Configuring the Pipeline

1. **Docker Hub Secrets:** Add Docker Hub access information as secrets in the GitHub repository. This includes:
   - `DOCKER_USERNAME`: Your Docker account identity.
   - `DOCKER_PASSWORD`: Your Docker account password.

2. **Workflow Setup:** The workflow is designed to:
   - Run unit tests on the code.
   - Build a containerized version of the microservices.
   - Push the container to Docker Hub.

3. **Triggering the Workflow:** Push a release tag (e.g., `v1.0`) to initiate the CI/CD process. This can be done via the GitHub UI.

4. **Verification:** Check Docker Hub to ensure the container is successfully pushed.

### Deploying the Flights Service Container

With the container in Docker Hub, the next step is deploying it into a staging environment using Argo CD and Helm. The deployment process involves:

1. **Understanding Kubernetes:**
   - Kubernetes manages container-based microservices, providing resilience and self-healing.
   - Key objects include Pods, ReplicaSets, Deployments, Services, and Ingress.

2. **Helm Charts:**
   - **Charts:** Bundles describing a Kubernetes resource or deployment.
   - **Templates:** Files in a chart that describe Kubernetes resources with templated values.
   - **Values:** Files that define values for templates, allowing environment-specific customizations.

3. **Creating a Helm Chart:**
   - Use the Helm CLI to bootstrap a new chart.
   - Update the `deployment.yaml` file to specify the container image and environment variables.

4. **Deployment Repository:**
   - Create a GitHub repository (`ms-deploy`) to store Helm charts.
   - This repository acts as the source of truth for Argo CD, facilitating GitOps deployment.

5. **Deployment Process:**
   - Write declarative configurations for Ingress, Service, and Deployment objects.
   - Use Helm to manage installation and deployment into Kubernetes.

By following these steps, the `ms-flights` microservice is containerized, pushed to Docker Hub, and ready for deployment into a Kubernetes-managed environment. This approach ensures consistency, portability, and reliability across different environments.



In this chapter, we focus on deploying microservices using Helm and Argo CD within a Kubernetes environment. The process begins with customizing Helm templates to define a Kubernetes Deployment object, which includes setting TCP ports, liveness and readiness endpoints, and other configurations in the `values.yaml` file. This involves updating Docker image details, MySQL connection values, and ingress properties for routing.

Once configured, a dry-run test with Helm ensures there are no syntax errors before committing the Helm files to a GitHub repository. This setup allows deploying the flight information service into a staging environment using Helm, but it requires manual operations and version tracking.

To automate and enhance deployments, Argo CD, a GitOps tool, is introduced. It uses a Git repository to manage the desired deployment state, synchronizing the environment with the defined Helm charts. This declarative approach aligns with tools like Terraform, providing a more efficient deployment process.

To use Argo CD, the MySQL password must be stored as a Kubernetes Secret. Accessing Argo CD involves retrieving the default password using `kubectl` and setting up port-forwarding to access the login screen. After logging in, a new application is created, referencing the Helm package in the Git repository. The deployment is synchronized through Argo CD to match the Helm chart description.

Testing the deployment involves sending a request to the flights microservice via Traefik's load balancer using `curl`. The response confirms successful deployment and integration of all architecture components.

Finally, cleaning up involves using Terraform to destroy the staging environment, ensuring no unnecessary AWS resources incur costs. The chapter emphasizes the importance of efficient, automated deployments and the role of continuous integration and deployment tools in managing microservices.

In conclusion, the chapter highlights the importance of designing systems that facilitate change. Microservices architecture should support both extrinsic changes driven by business needs and intrinsic changes for system optimization. Utilizing data to guide decisions helps avoid overengineering and ensures effective system improvements.



In decision-making for system improvements, relying on data is crucial to avoid wasting resources on unnecessary changes while overlooking critical issues. Product teams use metrics like OKRs, KPIs, net promoter scores, and satisfaction surveys to guide strategic decisions and backlog management. Similarly, project, design, and runtime metrics such as change time per microservice, frequency of changes, and runtime latency provide insights for improvement opportunities.

Understanding the impact of changes is essential, particularly in microservices systems. Key areas to consider include:

1. **Implementation Time**: This involves understanding the current state, making changes, testing, and updating the production environment. Factors like readability and maintainability of components significantly affect this time.

2. **Coordination Time**: This subset of implementation time involves communication and organizational friction, impacted by the organizational structure.

3. **Downtime**: The duration a system remains unavailable during changes. Modern systems aim for zero-downtime models.

4. **Consumer Impact**: Changes can affect users, even in zero-downtime models, such as infrastructure changes impacting developers or interface changes breaking code.

Deployment patterns in microservices include:

- **Blue-Green Deployment**: Maintains two environments, one live and one idle. Changes are applied to the idle environment, reducing downtime but requiring careful handling of persistent systems.

- **Canary Deployment**: Releases a new version alongside the original, gradually routing traffic to the new version. It allows finer-grained changes but can impact shared resources.

- **Multiple Versions**: Supports running multiple versions in parallel, allowing clients to choose. This reduces coordination but increases maintenance complexity.

When assessing architecture changeability, consider implementation costs, coordination time, downtime, and consumer impacts. For infrastructure changes, distinguish between extending with new resources and altering existing ones. Immutable infrastructure, CI/CD pipelines, and Infrastructure as Code (IaC) reduce implementation costs by ensuring consistent, repeatable changes.

Centralizing infrastructure management within a platform team lowers coordination costs but requires robust tools and processes for self-service and low-coordination interactions. Downtime is challenging to avoid in infrastructure changes due to its foundational nature. Adopting patterns like blue-green or phoenix deployments can help manage changes with minimal disruption.

Overall, leveraging modern tools and deployment strategies enhances the changeability and resilience of microservices architectures while minimizing downtime and consumer impact.



# Summary

Switching live traffic to a new environment often involves using tools like API gateways or load balancers. However, a significant challenge is the lack of separation between data and application instances, complicating data replication and potentially affecting zero downtime. Infrastructure changes impact microservices teams, requiring coordination to ensure changes don't disrupt services. Effective communication, automated testing, and shared responsibility for system reliability are crucial.

## Microservices Changes

Most changes occur within the microservices themselves, such as adding new features or modifying existing ones. This may involve creating new microservices, updating logic, or combining services. While adding new services is straightforward, modifying existing ones is complex due to their active use. The architecture aims to minimize these impacts by focusing on implementation costs, coordination costs, downtime, and consumer impact.

### Implementation Costs

Key strategies include using Event Storming to define microservice boundaries, employing a microservice-bootstrap framework for consistency, and implementing CI/CD pipelines to ensure code maintainability. These measures reduce implementation costs by improving code comprehension and testing efficiency.

### Coordination Costs

To minimize coordination costs, each microservice is owned by a single team, with its own repository and CI/CD pipeline. This autonomy reduces inter-team dependencies. However, lifecycle events and interface changes still require significant coordination, particularly if microservices need to be merged or interfaces altered.

### Downtime

Minimizing downtime is achieved through canary deployments, allowing new versions to be tested alongside existing ones. This approach reduces the risk of disruptions but requires caution when shared databases are involved.

### Consumer Impact

Changes to microservice interfaces can be challenging due to dependencies. Adhering to good API design practices and using contract testing can help mitigate these issues. However, significant changes may still require maintaining multiple versions of a service.

## Data Changes

Data model changes are complex due to dependencies and the need for understanding the model. The architecture promotes microservices owning their own data, reducing coordination costs but potentially increasing costs for system-wide changes. While this independence aids local changes, it complicates global changes, requiring careful consideration of microservice boundaries.

### Implementation and Coordination Costs

The complexity of the data model affects implementation costs. Prioritizing independence helps manage these costs, but global changes require coordination across teams, potentially increasing costs.

### Downtime and Consumer Impact

Independent data models aren't optimized for zero-downtime changes, especially with shared databases. Intrusive changes might necessitate replacing microservice instances. However, the consumer impact is limited to the microservice itself, allowing for staggered implementation of changes.

In summary, the architecture is designed to facilitate microservices changes with minimal disruption, emphasizing autonomy, effective communication, and strategic tooling. However, data changes remain a challenging aspect, requiring careful planning and potentially impacting downtime and coordination efforts.



# Summary of Microservices Architecture

## Introduction

Microservices architecture offers a flexible and efficient way to manage complex systems. It emphasizes the importance of reducing change costs to enable teams to improve systems and products. This architecture is not a one-size-fits-all solution and should be adopted with a clear understanding of its implications.

## Benefits and Challenges

Microservices are particularly suited for large, complex, and continuously changing systems. They don't eliminate complexity but shift it from coding to operations, which can be automated. This shift allows for significant efficiency gains, as modern tools like Kubernetes and Docker simplify operations beyond what was possible in the past.

## Complexity in Systems

Fred Brooks's seminal work, "No Silver Bullet," highlights the presence of essential complexity in software systems. While microservices don't reduce this essential complexity, they help manage it by distributing it across smaller, more manageable services. This approach aligns with Brooks's observations by focusing on shifting rather than eliminating complexity.

## Microservices Quadrant

The microservices quadrant illustrates different architectural approaches:
- **Microservices**: Complex implementation but simple design.
- **Monoliths**: Complicated implementation with easy design.
- **Dreamland**: Simple architecture with predictable implementation, rare in rapidly changing systems.
- **Unicorns**: Easy design with complex implementation, requiring exceptional talent to maintain.

## Transformation and Measurement

Adopting microservices involves significant organizational and cultural changes. Success depends on careful management and avoiding technology-only approaches. Key to transformation is minimizing coordination costs, a core technique of microservices architecture.

### Measuring Success

To gauge the progress of a microservices transformation, focus on:
- **Autonomous Team Size**: Smaller teams indicate better autonomy.
- **Dependency Waiting Time**: Reduced waiting times reflect increased efficiency.
- **Deployment Frequency**: More frequent successful deployments suggest improved operational capabilities.

These metrics help track the trajectory of transformation rather than the current state, emphasizing long-term progress over immediate results.

## Conclusion

Microservices architecture is a journey rather than a destination. The focus should be on continuous improvement and adaptability, ensuring that the trajectory towards increased autonomy and efficiency is maintained. This approach aligns with the principles of evolutionary architecture and emphasizes the importance of flexibility in complex systems.



### Summary

In the context of microservices and organizational transformation, it is crucial to measure and track specific metrics to ensure successful implementation. Key metrics include team autonomy, coordination-related deadlocks, and deployment frequency. Observing a decrease in team size and frequency of coordination deadlocks indicates improved autonomy. Coordination deadlocks occur when teams wait for shared capabilities, such as infrastructure provisioning or critical decision meetings, which can delay progress. Tracking dependencies before code release and waiting for other teams to make code changes are also important.

Deployment frequency, although not directly measuring coordination costs, is a significant indicator of team agility and the health of a microservices transformation. Consistently measuring these metrics helps teams focus on long-term success rather than perfection in every microservices trait.

Microservices aim to simplify complex systems by shifting rather than eliminating complexity. Understanding the difference between "complex" and "complicated" systems is essential, as is the role of "easy" versus "simple" architectural approaches. Patience and a long-term outlook are vital during a microservices transformation, which is a marathon, not a sprint. Reliable metrics ensure that the transformation trajectory is healthy.

The book emphasizes practical guidance and encourages readers to learn from their own microservices implementation experiences. Key architectural concepts include ACID transactions, domain-driven design (DDD), and microservices design patterns. DDD involves identifying boundaries, context mapping, and event storming to define system interactions. The microservices architecture focuses on independent deployability, decentralized governance, and smart endpoints with dumb pipes.

DevOps practices, such as Continuous Integration/Continuous Delivery (CI/CD), infrastructure as code (IaC), and immutable infrastructure, support microservices deployment. Tools like Docker, Kubernetes, and Terraform facilitate infrastructure management and deployment automation. GitOps, with tools like Argo CD, enhances deployment processes by using Git as the single source of truth.

Successful microservices transformation requires a focus on team design and collaboration. Team Topologies suggest interaction modes like collaboration and facilitation, with teams organized around business capabilities. Stream-aligned teams, platform teams, and enabling teams play distinct roles in supporting microservices.

Overall, the book provides a comprehensive guide to microservices transformation, emphasizing metrics, team dynamics, and architectural principles for long-term success.



### Summary

**Microservices and Infrastructure**

The text delves into various aspects of microservices architecture and infrastructure management, emphasizing tools and practices that enhance development and deployment processes. Key elements include:

- **Infrastructure as Code (IaC):** Utilizing pipelines to automate infrastructure setup, with Terraform modules playing a crucial role in managing Kubernetes and other cloud resources.

- **Microservices Design and Development:** Focuses on the holistic approach to microservices, covering cloud platform integration, data design, and team structuring to ensure seamless deployment and operation.

- **Version Control and Automation:** Highlights the importance of branching and merging strategies in version control, alongside automated testing, to maintain code integrity and streamline development workflows.

**Technical Tools and Practices**

- **Containerization and Virtualization:** Docker and Multipass are highlighted as essential tools for creating isolated environments, facilitating local and remote microservice deployment.

- **Configuration and Workflow Management:** YAML is used extensively for defining deployment objects and configuring environments, while tools like Traefik manage service routing.

- **Distributed Systems and Transactions:** Discusses the complexities of distributed transactions and the implementation of sagas to manage failures across microservices.

**Authors and Background**

- **Ronnie Mitra and Irakli Nadareishvili:** Both authors bring extensive experience in web technologies and microservices architecture. Their backgrounds include strategic roles in major corporations and tech startups, contributing to innovations in cloud-native solutions.

**Design and Aesthetics**

- **Book Design:** The cover features the sparkling violetear hummingbird, symbolizing resilience and adaptation, aligning with the themes of microservices and adaptability in tech environments.

- **Typography and Layout:** Utilizes a combination of Adobe fonts for clarity and readability, ensuring that the technical content is accessible and engaging.

**Learning Resources**

- **O’Reilly Media:** Offers a wide range of learning materials, including books, videos, and online courses, to support continuous education in technology and software development.

This summary encapsulates the essence of the text, focusing on the core themes of microservices architecture, infrastructure management, and the tools and practices that drive efficiency and innovation in the field.
