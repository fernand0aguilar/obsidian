
**Microservices: Up and Running** by Ronnie Mitra and Irakli Nadareishvili is a comprehensive guide to building microservices architecture. The book provides practical, opinionated advice derived from real-world experiences, focusing on team design, domain design, infrastructure, engineering, and release processes.

### Microservices Architecture

Microservices architecture has gained popularity due to its modular approach, allowing for independent deployment and scalability. This style reduces coordination costs and enhances flexibility by breaking down applications into smaller, autonomous services.

### Designing Microservices

The book introduces the SEED(S) process, which involves identifying actors, jobs, and interaction patterns. It emphasizes the importance of defining clear service boundaries using Domain-Driven Design (DDD) and context mapping. Event storming is recommended for discovering domain events and understanding system interactions.

### Data Management

Microservices embed their data to maintain independence, avoiding a proliferation of database clusters. Techniques like data duplication, event sourcing, and Command Query Responsibility Segregation (CQRS) are discussed to handle distributed transactions and improve performance.

### Infrastructure and Deployment

A robust infrastructure pipeline is crucial for microservices. The book covers DevOps principles, immutable infrastructure, and Infrastructure as Code (IaC) using tools like Docker, Terraform, and AWS. It details setting up a continuous integration and delivery pipeline, using GitOps with Argo CD, and deploying services with Kubernetes and Helm.

### Developer Environment

For optimal developer experience, the book suggests setting up a containerized environment using tools like Multipass and Docker. It outlines workspace guidelines to ensure consistency and efficiency.

### Managing Change

Microservices systems require careful management of changes, including infrastructure, service, and data modifications. The book presents deployment patterns and strategies to handle these changes effectively, ensuring system stability and scalability.

### Practical Implementation

The book provides step-by-step instructions for implementing microservices, including designing endpoints, developing microservices with OpenAPI specifications, and setting up staging environments. It discusses the use of Redis and MySQL for data modeling and the integration of multiple services under an umbrella project.

Overall, **Microservices: Up and Running** serves as a practical guide for architects and engineers tasked with building microservices systems, offering insights into the complexities and simplifications involved in the microservices journey.



Microservices architecture has gained significant popularity due to its ability to enhance software development agility and scalability. This approach involves building applications as a suite of small, independent services, each running in its own process and communicating through lightweight mechanisms. The microservices model is characterized by componentization, organization around business capabilities, decentralized governance, infrastructure automation, and evolutionary design.

The global market for microservices is expected to grow substantially, indicating widespread interest and adoption. However, implementing microservices is challenging due to the complexity of managing numerous independent components. The cost of management, maintenance, support, and testing can be prohibitive if not carefully controlled. Despite these challenges, the benefits, such as faster and safer software changes, make microservices an attractive option for many organizations.

Key to successful microservices implementation is a well-designed architecture that reduces system costs while maintaining the value of independent services. This requires early decisions on methods, processes, teams, technologies, and tools that work together cohesively. Many early adopters of microservices achieved success through iterative experimentation, learning, and optimization.

Microservices are defined by general design traits: services are machine-invocable and network-available, the boundaries of services are crucial, and the system is optimized holistically. These traits allow for reduced coordination costs, which is a primary advantage of microservices. This reduction in coordination costs leads to increased speed of software delivery, a critical benefit for industries that cannot compromise on safety, such as finance and healthcare.

However, microservices architecture presents several design challenges. Long feedback loops make it difficult to measure the impact of decisions. The system's complexity, with many moving parts, can lead to unintended consequences. Additionally, the potential for analysis paralysis exists due to the difficulty in evaluating impactful decisions.

To overcome these challenges, successful microservices practitioners often iterate and improve continuously. Learning by doing is emphasized, with many practitioners building their systems through experimentation and adaptation. A prescriptive microservices model can provide guidance, covering team design, process, architecture, infrastructure, and tools.

The journey to effective microservices architecture involves building expertise through practical experience, often starting with simplified systems to understand the work involved and the key decisions. This approach aligns with the Dreyfus Model of Skill Acquisition, which suggests that following instructions is a foundational step in gaining expertise.

Ultimately, microservices architecture enables businesses to maintain agility and scalability, allowing them to adapt and improve rapidly. While the benefits are significant, achieving them requires careful planning, decision-making, and a willingness to learn and evolve continuously.



The text outlines a comprehensive approach to building a microservices architecture, focusing on team design, microservice design, data management, cloud infrastructure, and decision-making processes. It emphasizes the importance of having the right people, processes, and tools to ensure the successful implementation of microservices.

**Team Design:** The book begins with team design, highlighting the challenges and fundamental factors influencing microservice coordination. It introduces Team Topologies to assist in designing effective teams.

**Microservice Design:** The SEED(S) process is introduced to create microservices that meet user needs with actionable interfaces. Domain-Driven Design concepts and Event Storming are used to define appropriate boundaries for microservices.

**Data Design:** Data management is identified as a critical aspect of microservices design. The concept of data independence is introduced to establish a robust data architecture.

**Cloud Infrastructure:** The microservices implementation is built on a cloud-based platform, using principles of immutable infrastructure and infrastructure as code (IaC). AWS is chosen as the cloud platform, and a CI/CD pipeline is established using GitHub Actions. A Kubernetes cluster and GitOps deployment tool are also implemented.

**Microservices Development:** The development phase covers essential principles and tools, followed by the implementation of independent, heterogeneous microservices.

**Release and Change Management:** The deployment of microservices onto the cloud-based platform is discussed, utilizing technologies like DockerHub, Kubernetes, Helm, and Argo CD. A retrospective analysis of the system is conducted to evaluate its effectiveness.

**Decision-Making Process:** The importance of decision-making in software development is emphasized. An architecture decision record (ADR) is introduced as a tool to document design decisions, capturing context, alternatives, choices, and impacts. A lightweight architectural decision record (LADR) format is used for simplicity and ease of management.

**Operating Model:** The text discusses the significance of an operating model, which includes people, processes, and tools that support microservices. The operating model shapes decision-making and work processes, emphasizing the need for a culture and organization conducive to microservices.

**Team Dynamics:** The impact of team size, skills, and inter-team coordination on microservices is highlighted. Smaller, well-coordinated teams are preferred to enhance efficiency and reduce coordination costs.

Overall, the text provides a structured approach to microservices architecture, emphasizing the integration of technology with effective team dynamics and decision-making processes to achieve successful implementation.



The concept of optimal team size has been explored by various thinkers and practitioners. Bill Gore, cofounder of Gore-Tex, emphasized personal relationships within teams, limiting size to ensure everyone knows each other. Anthropologist Robert Dunbar proposed the Dunbar number, suggesting humans can maintain about 150 stable relationships, with only 5 intimate ones and 15 trusted friends. Jeff Bezos' "two pizza rule" aligns with these ideas, suggesting teams should be small enough to be fed by two pizzas, typically 5 to 15 people.

In microservices models, teams are recommended to be 5 to 8 people to maintain high communication and change rates. Smaller teams necessitate more teams, requiring careful system design to avoid excessive inter-team coordination. Autonomous work is encouraged, but the limitation on specialists means ensuring a good mix of skills within each team.

Cross-functional teams, which include diverse expertise from technology and business domains, are preferred for microservices. These teams can make independent decisions and move quickly. However, the exact composition depends on organizational culture and needs. The principle is to have team members who directly influence the output, avoiding unnecessary roles.

Inter-team coordination is crucial. While autonomous teams are ideal, some level of coordination is necessary to align with organizational goals and share efficiencies. Too much independence can lead to inefficiencies, while excessive coordination can slow down the system. A balance is needed, with continuous adjustment of team design.

Team Topologies, a design approach by Matthew Skelton and Manuel Pais, provides a framework for team design, focusing on team types and interaction modes. There are four team types: stream-aligned (continuously delivering business-relevant work), enabling (supporting other teams with expertise), complicated-subsystem (handling complex domains), and platform (providing scalable self-service tools).

Interaction modes include collaboration (high coordination), facilitating (unidirectional support), and X-as-a-service (minimal coordination, scalable services). These concepts help reduce coordination costs and optimize team interactions.

Designing a microservices team topology involves creating a system design team, defining platform teams, and adding enabling and complicated-subsystem teams. This approach allows for visual representation of team interactions, highlighting key coordination points. The topology is adaptable to organizational size, skills, and needs, ensuring an effective microservices implementation.



In designing a microservices operating model, the system design team plays a crucial role. This team is responsible for creating team structures, establishing standards and incentives, and ensuring continuous improvement. They act as an enabling team, facilitating other teams in building microservices. The system design team should be small, consisting of three to five senior leaders, architects, and system designers, allowing for quick decision-making.

Each microservice is owned by a single team, responsible for its design, development, and maintenance. A microservices team is stream-aligned, meaning it continuously delivers improvements and fixes. The team size is typically five to eight people. A template for these teams ensures consistency and efficiency, allowing for scalable growth.

Platform teams support microservices teams by providing common components as a service, such as network and application infrastructure. This reduces coordination issues and facilitates scalability. The cloud platform team, for example, offers infrastructure services to the organization, allowing teams to create new environments on demand.

A specialized release team handles the deployment of microservices. This complicated-subsystem team manages the release process, coordinating approvals and ensuring smooth deployments. However, this approach can lead to coordination challenges, especially with frequent releases, necessitating a shift in responsibilities to individual microservices teams if needed.

Consumer teams, like the API team, interact with microservices by exposing them as APIs for other development teams. The API team is stream-aligned, continuously updating APIs to meet business needs. They depend on microservices teams to ensure services are accessible and usable.

The Team Topology model visualizes these interactions, highlighting the enabling role of the system design team and the service-oriented nature of platform and API teams. This model promotes an autonomous working environment but requires investment in a cloud platform to function effectively.

Overall, the microservices operating model relies on well-defined team structures and interactions, enabling efficient and scalable development while maintaining alignment with system goals.



The text discusses building a microservices operating model and introduces the SEED(S) process for designing microservices. The operating model involves defining team topologies and responsibilities, influencing future microservices work. It's crucial to create multiple topology diagrams for different interaction modes and to iteratively improve the model. Documentation allows for versioning and managing changes, similar to code.

The SEED(S) process, a systematic approach to microservices design, helps increase development speed and maintain system safety at scale. Originating from a healthcare startup, it has been successfully implemented in various organizations. The methodology is top-down and evolutionary, comprising seven steps: identifying actors, identifying jobs, discovering interaction patterns, deriving actions and queries, describing specifications, getting feedback, and implementing microservices.

Identifying actors is the first step, focusing on customer-centric service design. Actors are akin to user personas, helping scope and prioritize service design. Key rules for identifying actors include specificity over precision, avoiding overlapping definitions, and ensuring actors represent distinct needs and behaviors. The process emphasizes understanding the customer, or "actor," to create solutions that address their needs.

Next, identifying jobs that actors must do involves understanding the tasks and problems actors face. This is crucial for effective API or service design, aligning with the concept that APIs are products. The SEED(S) process uses the Job Stories format to capture jobs to be done (JTBD), focusing on circumstances, motivations, and goals. This approach ensures that service design addresses real customer needs rather than just technical capabilities.

In summary, the microservices operating model and the SEED(S) process provide a structured framework for designing scalable, customer-centric microservices. By focusing on team topologies, actor identification, and JTBD, organizations can create robust, user-friendly service interfaces that enhance developer productivity and system flexibility.



The text discusses the importance of focusing on the circumstances rather than personas in Job Stories, aligning with Christensen’s idea that "the job, not the customer, is the fundamental unit of analysis." It emphasizes using a standard Job Story format to capture circumstances, motivations, and goals, which helps in deriving technical requirements.

Examples of Job Stories are provided for different actors, such as family vacationers, frequent flyers, and customer service agents. These stories illustrate specific needs, like filtering flights by criteria or rescheduling bookings, and highlight the importance of deriving Job Stories from user research.

The SEED(S) process involves understanding service interaction patterns through sequence diagrams, often using UML or PlantUML. This text-based modeling approach facilitates team collaboration, version control, and integration into the release process. Sequence diagrams help translate user-centric requirements into technical interactions, which may not directly map to Job Stories.

In designing microservices, separating service endpoints into commands and queries using the Command Query Separation (CQS) principle is crucial. Queries are lookups with defined inputs and outputs, while actions modify system states. Both have well-defined contracts, and examples are provided for translating Job Stories into queries and actions, such as flight search and travel rebooking.

For complex requirements, the text suggests using Matt McLarty’s Microservice Design Canvas as an alternative to actions and queries. Once actions and queries are defined, they can be translated into formal interface specifications using open standards like Open API Spec or GraphQL. This formalization serves as a contract between service producers and consumers, aiding in documentation and developer portal creation.

The text provides an example of an Open API Specification (OAS) for a rebooking action, illustrating how to describe RESTful endpoints. It highlights the importance of producing a formal API contract as a design milestone but notes that further feedback on the API specification is necessary for a well-designed API.

Overall, the process involves capturing user needs through Job Stories, modeling interactions using sequence diagrams, defining service interfaces with commands and queries, and formalizing these into API specifications for implementation.



The SEED(S) methodology emphasizes the importance of collecting feedback from both end users and client developers when designing APIs and microservices. This feedback ensures that the services are usable and meet the needs of both groups. Implementing microservices is the last step in SEED(S) to avoid costly recoding due to incorrect assumptions. APIs and microservices, while similar, serve different roles; microservices are the system's implementation, while APIs are the external interface.

Microservices should not replace APIs but instead serve as modular components within a system. The ideal architecture involves APIs orchestrating microservices, maintaining loose coupling. This approach aligns with the Unix philosophy of composable tools. Microservices should not directly call each other; instead, orchestration should occur at the API layer, possibly using asynchronous interfaces like event logs for communication.

Determining the boundaries of microservices is crucial. Overly granular services can lead to complexity and coordination challenges. Domain-Driven Design (DDD) offers a framework for identifying service boundaries, focusing on business capabilities rather than technical needs. Services should be loosely coupled, highly cohesive, and aligned with business goals. DDD suggests multiple models can coexist, each applicable in different contexts, which aids in managing complex systems.

Avoid premature optimization by starting with a few microservices and gradually increasing their number. This approach allows for operational maturity and better handling of complexity. Successful microservices design requires a balance between speed and safety, minimizing coordination costs in a multi-team environment.

In summary, the SEED(S) process and DDD principles guide the design of robust microservices, focusing on feedback, clear boundaries, and strategic orchestration to achieve scalable and maintainable systems. These methodologies help avoid common pitfalls and ensure that microservices architecture delivers its intended benefits.



In Domain-Driven Design (DDD), a complex system is viewed as a collection of multiple domain models, each defined within a "bounded context." This concept delineates the applicability of each model, ensuring that different parts of a system can operate independently without corrupting each other. Within each bounded context, a "Ubiquitous Language" is developed—a shared vocabulary that balances business requirements and technical implementation. This language ensures that terms are understood consistently within their context, even if they differ across contexts.

For instance, the term "account" can vary significantly across contexts like identity management, customer management, and financial accounting. Identifying these boundaries helps in defining the contexts effectively. Not all terms in a domain make it into the Ubiquitous Language; only those core to the context's purpose are included, often derived from Jobs-to-be-Done (JTBD) analyses.

Context mapping in DDD involves designing multiple independent models that coexist and communicate within a system. This is represented as a "context map," which describes how different domains collaborate. Common interaction types include shared kernels, where domains overlap and require coordination, and upstream-downstream relationships, where one domain provides capabilities to another.

In an upstream-downstream relationship, variations like customer-supplier and conformist relationships exist. The former involves the upstream maintaining backward compatibility, while the latter requires the downstream to adapt to upstream changes without specific accommodations. To mitigate risks, downstreams can use strategies like anti-corruption layers or rely on upstreams with open host interfaces, which standardize interactions for multiple consumers.

Integrations between bounded contexts can be synchronous (e.g., RESTful APIs) or asynchronous (e.g., publish-subscribe patterns). Asynchronous interactions, although complex, offer scalability and flexibility by allowing multiple receivers to handle events uniformly.

Aggregates in DDD are collections of related domain objects treated as a single unit by external consumers, with the aggregate root being the primary reference point. This abstraction hides internal complexities and exposes only relevant interfaces.

Event Storming is a lightweight, efficient technique inspired by DDD for identifying bounded contexts quickly. It involves collaborative sessions with diverse team members using visual tools like sticky notes to map out domain events. This approach reduces the cost and complexity of formal DDD, making it accessible for service sizing and system design.

Overall, DDD and techniques like Event Storming help in understanding and designing complex systems by clearly defining domain boundaries, fostering effective communication, and facilitating scalable and maintainable architectures.



Event Storming is a collaborative workshop technique used to explore complex domains, primarily involving cross-functional teams. It requires the participation of diverse stakeholders, not just software engineers, to foster meaningful conversations. The process begins with participants using orange sticky notes to write key events in the domain, expressed in past tense, and placing them along a timeline. This initial phase, lasting 30 minutes to an hour, is about brainstorming without worrying about duplicates or exact sequences.

In the second phase, participants organize these notes into a coherent timeline, identifying duplicates and creating a "storyline" or "user journey." Any questions or ambiguities are noted as "hotspots" using differently colored sticky notes for later resolution. This phase also takes 30 to 60 minutes.

The third phase involves creating a "reverse narrative," identifying commands that cause the events, using blue sticky notes. These commands often have a one-to-one relationship with events, but not always. The focus is on capturing real-world processes without worrying about neatness.

Next, the process introduces aggregates, domain entities that accept commands and produce events. Participants rearrange the timeline so that commands and events related to the same aggregate are grouped together. This phase lasts about 15 to 25 minutes and results in clusters that represent bounded contexts.

Finally, contexts are prioritized based on difficulty and competitive edge using a matrix, ranked with T-shirt sizes (S, M, L). Decisions on investment are guided by the combination of these rankings. This competitive analysis phase is not part of the original Event Storming process but is useful for prioritizing domains.

The entire Event Storming process is interactive and requires a skilled facilitator. A typical four-hour session is divided into phases with time allocations for breaks and preparation. The goal is to identify bounded contexts, which are a starting point for determining microservice boundaries.

Microservice boundaries, however, are not fixed and evolve over time. The Universal Sizing Formula suggests starting with few microservices aligned with bounded contexts and splitting them as needed to reduce coordination dependencies. This approach emphasizes the trajectory towards decreasing coordination rather than initial perfection.

Microservices should own their data to maintain independent deployability. Shared data spaces can compromise this independence, leading to coordination issues. Microservices should not co-own data, and embedding data is a key principle. However, this does not mean each microservice requires its own database cluster. Sharing physical database installations is acceptable as long as logical data spaces remain distinct.

The chapter highlights the importance of independent deployability and data management in microservices. Techniques like delegates, data lakes, Sagas, Event Sourcing, and CQRS help manage data effectively. The focus is on maintaining loose coupling and high cohesion within microservices, ensuring changes in one service do not necessitate changes in others. This independence is crucial for achieving speed, safety, and scalability in microservices architecture.



In the context of an online reservation system, the transition from a monolithic, N-tier architecture to a microservices architecture involves significant changes in data management. A true microservices architecture requires components to be loosely coupled and independently deployable. In a monolithic setup, multiple services might share a common data table, such as a "flights" table, which compromises independent deployability.

To resolve this, a delegate service can be introduced. For example, a flight inventory service can act as the authoritative source for flight data. Other services, like reservations and flight tracking, access flight information through this inventory service rather than directly querying the database. This encapsulation ensures that data sharing is minimized, promoting the independence of services.

However, not all data-sharing scenarios are resolved with delegates. In cases where read-only data access is needed, such as in analytics or machine learning, data duplication into a data lake is a common solution. Data lakes serve as read-only, queryable data sinks, while microservices remain the authoritative data sources. This approach maintains data integrity and lineage without treating data lakes as databases of record.

For scenarios requiring data modification across multiple microservices, distributed transactions are necessary. Traditional ACID transactions, which ensure atomicity, consistency, isolation, and durability, are unsuitable for distributed systems due to their reliance on exclusive locks. Instead, saga transactions are employed. Sagas involve a series of steps, each with a compensating action to roll back transactions if needed. This approach ensures that a system reaches a reasonable state even if not fully reverting to the initial state.

Event Sourcing and CQRS (Command Query Responsibility Segregation) offer advanced solutions for data management in microservices. Event Sourcing focuses on storing events rather than the current state of domain objects. This approach allows for complete state reconstruction from event logs, akin to an accounting journal or a recorded chess game. In contrast to relational modeling, which emphasizes data normalization and reuse, Event Sourcing captures incremental changes, making it suitable for scenarios where data isolation and loose coupling are paramount.

Overall, these patterns—delegate services, data lakes, sagas, Event Sourcing, and CQRS—provide a comprehensive toolkit for managing data in a microservices environment, addressing challenges of data sharing and service independence.



In the text, the focus is on comparing traditional relational data models with Event Sourcing and exploring the benefits of combining Event Sourcing with Command Query Responsibility Segregation (CQRS) for data management in microservices architectures.

**Relational vs. Event Sourcing Models:**
- A relational data model typically consists of tables with relationships, such as customers linked to accounts and payment methods. This design is common in conventional databases.
- Event Sourcing, in contrast, represents the system state as a sequence of events. This approach captures every change, allowing the system state to be derived from these events. It offers a more uniform model with fewer subjective decisions about entity relationships.

**Benefits of Event Sourcing:**
- Simplifies data modeling by focusing on business events rather than complex table relationships.
- Enables the calculation of system state at any point in time, facilitating sophisticated analytics.
- Provides a complete history of changes, enhancing auditability and allowing for dispute resolution.

**Event Structure and State Calculation:**
- Events have a unique identifier, type, and relevant data. An example event might include a price increase with details like amount and currency.
- Projections are used to calculate the current state from events. Functions like `priceUp` or `priceDown` adjust the state based on events, similar to SQL updates in relational models.
- Rolling snapshots improve performance by storing intermediary states, reducing the need to recalculate from the beginning.

**Event Store Implementation:**
- An event store manages event sequences and notifies subscribers about new events. It supports storing new events and retrieving sequences.
- Notification systems ensure reliable event delivery, using message queues like Apache Kafka or HTTP callbacks.

**CQRS Pattern:**
- CQRS separates data storage from querying, allowing for optimized query indices independent of the event store.
- This separation supports granular, loosely coupled microservices, each managing specific events or reports.

**Considerations and Limitations:**
- Event Sourcing and CQRS should be used judiciously, as they add complexity. They are not a one-size-fits-all solution and should complement simpler approaches when appropriate.
- These patterns help achieve data isolation and loose coupling, crucial for microservices, but they also have applications beyond microservices.

**CAP Theorem and Benefits:**
- Event Sourcing and CQRS relate to the CAP theorem, balancing consistency, availability, and partition tolerance by using multiple systems and minimizing data sharing.
- They enhance auditability by maintaining a reliable event log as the source of truth, contrasting with traditional logging methods where the relational model remains the primary source.

Overall, the text emphasizes the advantages of Event Sourcing and CQRS in managing microservices data, providing historical accuracy, and supporting complex queries while maintaining system flexibility and integrity.



The text outlines the process of setting up a microservices infrastructure using DevOps principles, focusing on Event Sourcing, CQRS, and data modeling. It emphasizes the importance of containerized infrastructure and deployment pipelines to handle the complexities of microservices. The setup begins with creating an AWS account and establishing a CI/CD pipeline to automate infrastructure changes, allowing teams to deploy services independently without heavy coordination.

Key DevOps practices include Infrastructure as Code (IaC), Continuous Integration (CI), and Continuous Delivery (CD), which enable faster, safer infrastructure changes. Immutable infrastructure is highlighted, where components are not altered post-creation but rebuilt with new properties, ensuring predictability and ease of replication. This approach reduces manual intervention and server drift, facilitating a self-service model for infrastructure.

IaC represents all infrastructure changes as machine-readable files, allowing environments to be recreated by reapplying code. The text recommends using HashiCorp's Terraform for managing these changes due to its declarative approach, aligning with the immutable infrastructure principle. Terraform tracks the current state to plan and apply desired changes, requiring careful management of state and configuration files.

CI/CD practices integrate and test changes continuously, avoiding large batch testing phases that could slow down delivery. The use of a pipeline tool, such as GitHub Actions, automates integration and delivery steps, ensuring consistent application of changes. This approach minimizes risks associated with manual changes and accelerates release cycles.

The text also discusses setting up a development environment for infrastructure code, using Git for version control and GitHub for code management. This setup facilitates collaboration and sharing of code and configurations, essential for building and maintaining the microservices infrastructure.

Overall, the document provides a comprehensive guide to implementing a scalable, reliable microservices infrastructure using modern DevOps practices and tools.



To manage microservices and infrastructure as code (IaC), you need Git, GitHub, and Terraform. If Git is unfamiliar, refer to Scott Chacon and Ben Straub’s *Pro Git* or GitHub’s “Git Handbook.” A GitHub account is necessary for code management and CI/CD pipeline configuration. Terraform, a tool for managing infrastructure declaratively, requires a local installation for testing before deployment. Download Terraform from its official site and verify installation with `$ terraform version`.

AWS is chosen for hosting microservices due to its large user base, though Azure and Google Cloud Platform are alternatives. Ensure you have an AWS account, as examples may incur costs beyond the free tier. Set up an AWS operator account for tool access, using Identity and Access Management (IAM) to manage users and permissions.

Create a Terraform user in AWS IAM with necessary permissions. Log into AWS with root credentials, navigate to IAM, and create a user named `ops-account` with "Programmatic access" for CLI and API usage. Attach the `IAMFullAccess` policy to this user. Record the "Access key ID" and "Secret access key" for later use.

Configure the AWS CLI by installing it locally and running `$ aws configure` to input your access keys and preferred region. Verify CLI setup by listing users with `$ aws iam list-users`.

Enhance permissions by creating a group `Ops-Accounts` and adding `ops-account` to it. Attach necessary policies for managing AWS resources, such as `AmazonEC2FullAccess`, `AmazonVPCFullAccess`, and others. For AWS EKS (Elastic Kubernetes Service), create a custom policy `EKS-Management` using a JSON file and attach it to the group.

Store Terraform state files in an AWS S3 bucket for better management across machines and users. Create a unique bucket in your chosen AWS region. Ensure your `ops-account` has the necessary permissions to access this bucket.

This setup facilitates managing microservices infrastructure using Git, GitHub, and Terraform on AWS, ensuring efficient and organized deployment processes.



To create an S3 bucket using AWS CLI, use specific commands based on the region. For `us-east-1`, use:

bash
$ aws s3api create-bucket --bucket {YOUR_S3_BUCKET_NAME} --region us-east-1


For other regions, add a location constraint:

bash
$ aws s3api create-bucket --bucket {YOUR_S3_BUCKET_NAME} --region {YOUR_AWS_REGION} --create-bucket-configuration LocationConstraint={YOUR_AWS_REGION}


Successful creation returns a JSON object with the bucket's URL. S3 buckets are private by default, which is crucial for securing the Terraform state file. The ops account user has full permissions to manage resources and store objects in the S3 bucket.

The goal is to build an Infrastructure as Code (IaC) pipeline, allowing safe, rapid environment provisioning. This chapter focuses on laying the foundation for an IaC pipeline without deploying AWS infrastructure yet. Key components include:

- A GitHub repository for a sandbox environment.
- A Terraform root module defining the sandbox.
- A GitHub Actions CI/CD pipeline for creating the sandbox.

Each environment has its own repository, promoting independence and streamlined management. This approach contrasts with a monorepo, which centralizes all configurations but may complicate individual environment management.

To create a GitHub repository:

1. Log in to GitHub and create a new repository named `env-sandbox`.
2. Set it to private and add a `.gitignore` for Terraform to prevent committing hidden files.

Clone the repository locally for development. Terraform, written in HashiCorp Configuration Language (HCL), is used for declarative infrastructure coding. Key Terraform concepts include:

- **Backends**: Store the state file, using an S3 bucket.
- **Resources**: Objects representing infrastructure components.
- **Providers**: Libraries of resources, e.g., AWS provider.
- **Modules**: Reusable code segments.

Start by creating a `main.tf` file in the sandbox repository with the following HCL snippet:

hcl
terraform {
  backend "s3" {
    bucket = "{YOUR_S3_BUCKET_NAME}"
    key    = "terraform/backend"
    region = "{YOUR_AWS_REGION}"
  }
}

locals {
  env_name         = "sandbox"
  aws_region       = "{YOUR_AWS_REGION}"
  k8s_cluster_name = "ms-cluster"
}


This configures the backend and defines local variables. Test the setup using Terraform commands:

- `terraform fmt` to format the code.
- `terraform init` to initialize the working directory and install providers.
- `terraform validate` to check syntax.
- `terraform plan` to preview changes.

Commit and push the `main.tf` file to GitHub. Set up a CI/CD pipeline using GitHub Actions, which integrates pipeline configuration with the code. Use GitHub's secrets storage for AWS credentials.

Create a workflow triggered by Git tags, providing versioning and control over environment changes. This setup ensures infrastructure changes are tested and applied efficiently, supporting microservices architecture development.



This text outlines the process of setting up an Infrastructure as Code (IaC) pipeline using GitHub Actions, focusing on Terraform and AWS integration. The workflow begins with the installation of necessary tools, such as Terraform and AWS, within a virtual machine environment provided by GitHub Actions. The code from the repository is checked out, and post-provisioning activities are performed once changes are applied to the sandbox environment.

The pipeline is defined using YAML, leveraging GitHub Actions commands. A trigger is set up to initiate the workflow whenever infrastructure is tagged with a label starting with "v", maintaining a version history. The workflow runs on an Ubuntu virtual machine, with AWS secrets configured for the build environment. The first step involves checking out the Terraform code using the `actions/checkout@v2` action.

Dependencies are managed efficiently. Git is pre-installed, and HashiCorp provides a Terraform action, eliminating the need for manual installation. The AWS CLI is unnecessary since changes are made through Terraform. However, additional dependencies like an AWS authenticator and the Istio service mesh installer are added for managing Kubernetes-based microservices architectures.

Terraform commands such as `fmt`, `init`, `validate`, `plan`, and `apply` are automated in the pipeline. The `apply` step uses the `-auto-approve` flag to implement changes without manual intervention. The pipeline also includes a step to publish assets, using `upload-artifact` to make files like the Kubernetes configuration file available for download.

The YAML configuration concludes with committing changes to GitHub. The text emphasizes the importance of testing the pipeline by creating a Git tag, which triggers the workflow. Successful execution is verified through GitHub's UI, with detailed job logs available for troubleshooting.

The text suggests further enhancements, such as integrating testing with tools like Terratest. Overall, the pipeline setup demonstrates key DevOps principles, leveraging IaC and CI/CD practices to enhance infrastructure management.




In this chapter, we focus on building a microservices infrastructure using a CI/CD pipeline for infrastructure changes. The infrastructure is defined in code, facilitating automated testing and implementation. We use tools like Terraform to create a cloud-based infrastructure on AWS, emphasizing a feature-rich setup within the constraints of a single cloud platform.

Key components of the infrastructure include:

1. **Network Design**: We establish a virtual network using AWS resources. This includes creating a Virtual Private Cloud (VPC) and subnets to organize network traffic and control access. The network supports the Kubernetes service, which requires managing multiple subnets and routing configurations.

2. **Kubernetes Service**: Kubernetes is used for container orchestration, managing deployment, scaling, and operations of container-based applications. We utilize AWS Elastic Kubernetes Service (EKS) to simplify the setup, providing a managed control plane and node configuration.

3. **GitOps Deployment Server**: Argo CD is employed as a GitOps tool to manage microservice deployments. It synchronizes system configurations with the desired state in a Git repository, automating deployment and ensuring consistency.

The infrastructure setup involves writing Terraform modules, adhering to best practices like modularity, encapsulation, and avoiding repetition. These modules include:

- **AWS Networking Module**: Configures the software-defined network.
- **Kubernetes Module**: Sets up an AWS-based managed Kubernetes configuration.
- **Argo CD Module**: Installs and configures Argo CD for deployment management.

The infrastructure is built in a sandbox environment using a GitHub repository. The approach allows easy replication and modification of environments by reusing modules. While the setup mirrors production environments, it is not recommended for direct production use without customization to meet specific security and operational needs.

The chapter emphasizes the importance of infrastructure as code (IaC) practices, leveraging Terraform's module structure for clean, maintainable code. This setup provides a robust foundation for deploying microservices, reducing coordination costs, and enhancing scalability and manageability.



To build a microservices infrastructure using Terraform, start by creating GitHub repositories for your modules, preferably making them public for easier integration. Ensure to include a `.gitignore` file to avoid pushing unnecessary Terraform working files.

**Network Module:**

1. **Virtual Network Setup:**
   - Define the AWS network module to support Kubernetes and microservices.
   - Create resources like VPC (Virtual Private Cloud) and subnets using Terraform files (`main.tf`, `output.tf`).

2. **Output Definitions:**
   - Use `output.tf` to specify outputs such as `vpc_id`, `subnet_ids`, `public_subnet_ids`, and `private_subnet_ids`.

3. **Main Configuration:**
   - Use `main.tf` to declare the AWS provider and resources.
   - Define the VPC with CIDR blocks and tags for resource identification.
   - Utilize Terraform variables for reusability across different environments.

4. **Subnets and Availability Zones:**
   - Create four subnets: two public and two private, across different availability zones for redundancy.
   - Use dynamic data to select availability zones, enhancing flexibility across regions.

5. **Routing and Internet Access:**
   - Set up an internet gateway and routing tables for public subnets to allow internet connectivity.
   - Define NAT gateways for private subnets to enable external communication while maintaining internal security.

6. **Variables Definition:**
   - Create a `variables.tf` file to specify input variables like `env_name`, `aws_region`, `vpc_name`, and CIDR blocks for subnets.

By following these steps, you will establish a robust network foundation for deploying Kubernetes clusters and microservices, ensuring scalability and security across your infrastructure.



In Terraform, it's crucial to include a description attribute for every variable in your module to enhance maintainability and usability. The network module's code is complete, consisting of `variables.tf`, `main.tf`, and `outputs.tf` files. Before using the module, validate the code using `terraform fmt` and `terraform validate` to ensure syntax correctness. Once validated, commit the changes to GitHub using Git commands.

To create a sandbox environment network, use the network module by referencing it in a Terraform file with specific variable values. The module's source should point to the GitHub repository containing the network module code. After setting the correct path in the `main.tf` file, format and validate the code locally with `terraform fmt`, `terraform init`, and `terraform validate`. Perform a dry run using `terraform plan` to preview changes before applying them. Push the code and tag it for release, allowing GitHub Actions to build the network.

Verify the VPC creation using AWS CLI commands. Once the network is operational, proceed to develop the Kubernetes module, essential for orchestrating container-based services. The Kubernetes module setup involves creating a separate GitHub repository. Use Amazon EKS, a managed service, to simplify Kubernetes deployment.

The Kubernetes module outputs include identifiers and endpoints necessary for cluster access. Define the EKS cluster in `main.tf` by specifying an AWS provider and configuring IAM roles and policies for cluster management. Establish a security group with egress rules and define the cluster using `aws_eks_cluster`. This setup includes a control plane and managed node groups for running microservices.

Use `terraform` commands to manage and validate the infrastructure code throughout the process. This approach ensures predictable and repeatable environment setups, facilitating microservices deployment across testing and production stages.



In this guide, we delve into setting up a Kubernetes infrastructure using AWS EKS via Terraform. The key components involve defining IAM roles and policies for node groups, configuring EKS node groups, generating kubeconfig files for cluster access, and setting up Argo CD for GitOps deployment.

**IAM Roles and Policies:** The Terraform script defines IAM roles and policies necessary for Kubernetes nodes to interact with AWS services like EC2 and ECR. The `aws_iam_role` and `aws_iam_role_policy_attachment` resources ensure nodes can assume roles and access required AWS policies, essential for provisioning resources and accessing containers.

**EKS Node Group Configuration:** The EKS node group is configured using the `aws_eks_node_group` resource. Input variables control compute resources, storage, and scaling limits, allowing flexible environment setups for development and production. This ensures efficient resource usage and cost management.

**Kubeconfig Generation:** A `local_file` resource generates a kubeconfig file, enabling CLI access to the Kubernetes cluster. This file contains YAML content with connection parameters, facilitating cluster management through `kubectl`.

**Terraform Module and CI/CD Integration:** The Kubernetes module is integrated into a sandbox environment using a Terraform module call. It uses input variables and outputs necessary for cluster setup. By committing changes and pushing to a CI/CD pipeline, an EKS cluster is provisioned, ready for microservices deployment.

**Argo CD Setup:** Argo CD is installed using a separate Terraform module with Kubernetes and Helm providers. The Kubernetes provider connects to the EKS cluster, while Helm manages the Argo CD installation. This setup supports GitOps workflows, streamlining application deployment.

**Environment Testing:** To verify the setup, a kubeconfig file is downloaded and used to connect to the cluster via `kubectl`. Successful API calls confirm the cluster's operational status. The final test involves accessing the Argo CD web console to ensure the entire infrastructure stack is functioning.

This comprehensive setup leverages Terraform's modular approach, enabling scalable and repeatable infrastructure deployments on AWS EKS. It integrates GitOps principles through Argo CD, enhancing deployment efficiency and reliability.



To verify Argo CD installation in a Kubernetes cluster, use `kubectl get pods -n "argo"`. This command checks the status of pods like `argocd-application-controller`, `argocd-dex-server`, and others. A Kubernetes Pod is a deployable unit consisting of container images. After verifying the setup, it's crucial to dismantle the infrastructure to avoid costs, especially for elastic IPs. The environment is defined in Terraform files, allowing easy recreation. Use `terraform destroy` to remove the sandbox environment, ensuring AWS resources are deleted. Verify deletion with AWS CLI commands like `aws eks list-clusters`.

The chapter covers building a microservices infrastructure using Terraform to create a software-defined network and an AWS EKS cluster for Kubernetes. It also discusses implementing an Argo CD GitOps server. The infrastructure is designed to be declaratively managed, emphasizing immutability and CI/CD pipelines. The focus is on understanding Terraform module patterns and infrastructure design decisions.

In Chapter 8, the emphasis shifts to setting up a developer workspace for microservices architecture. A consistent, intuitive developer experience is vital for successful microservices deployment. Robust CI/CD pipelines are essential, with a focus on standardized development processes to avoid complexity. The chapter introduces 10 guidelines for a superior developer workspace:

1. **Docker Dependency**: Make Docker the sole dependency to avoid environment-specific issues.
   
2. **Remote/Local Consistency**: Ensure setups work both locally and remotely without exceptions.

3. **Heterogeneous-Ready Workspace**: Support multiple languages and databases, practicing the "Rule of Twos" for critical components.

4. **Ease of Running Services**: Allow easy execution of single or multiple microservices.

5. **Local Databases**: Use Docker-ized databases locally, with easy switches to cloud services.

6. **Containerization Guidelines**: Differentiate between Dockerfile and Docker Compose, use multistage builds, and ensure hot-reloading and debugging capabilities.

7. **Database Migrations**: Codify schema changes with migration scripts, automate migrations, and support sample data insertion.

8. **Automated Testing**: Implement pragmatic testing practices to enhance development efficiency.

The chapter also covers setting up local containerized environments, using Docker and Kubernetes, and installing a local Cassandra database. The goal is to create a fully functioning, containerized infrastructure ready for microservices development, with a focus on intuitive project setups. These principles will guide the development phase in subsequent chapters, ensuring a streamlined process for coding and deployment.



The text discusses effective strategies for automated testing, branching, and containerization in software development, emphasizing a balanced approach to enhance developer experience. Key points include:

1. **Automated Testing**: A pragmatic approach is recommended, accommodating test-first, test-as-you-code, or test-after-code practices, ensuring meaningful test coverage before merging code. Testing frameworks should align with the platform used, and external tools can be utilized if fully integrated and easy to run.

2. **Branching and Merging**: All development should occur on feature or bug branches. Merging into the main branch requires passing all tests, and test results should be visible during code reviews. Linting errors must prevent code from being pushed or merged.

3. **Makefile Standardization**: Each code repository should contain a makefile with standard targets (e.g., `start`, `stop`, `build`, `test`, `lint`) to streamline development across different languages and ensure consistency.

4. **Containerization with Docker**: The text outlines setting up a containerized environment using Docker, Docker Compose, and alternatives like Multipass for various platforms (Linux, macOS, Windows). It discusses the installation process, resource allocation, and running applications like MySQL and Cassandra in containers.

5. **Local Kubernetes Setup**: While Docker Compose suffices for most development tasks, Kubernetes is recommended for advanced orchestration. Tools like Minikube, k3s, and MicroK8s facilitate local Kubernetes deployment, though it's advised to use them selectively due to complexity.

The overarching goal is to create a developer workspace that is user-friendly, consistent, and conducive to productivity, supporting microservices development across diverse technology stacks.



Kubernetes is primarily designed for sophisticated orchestration in non-development environments, lacking native tooling for building container images. This makes it cumbersome for active development, as it requires pre-built images from a registry. To address this, Skaffold was developed to integrate image building into Kubernetes workflows, streamlining the build-run-test cycle.

In designing developer workspaces, it’s essential to create comfortable, reliable, and effective environments. Ten principles for efficient workspaces were introduced, focusing on containerized setups across major operating systems like macOS, Windows, and Ubuntu Linux. These setups facilitate collaborative environments, smooth onboarding, and good coding practices.

A sample multimicroservices project demonstrates these concepts. It involves identifying microservices through bounded contexts analysis and employing the SEED(S) design methodology. The process involves defining actors, such as customers, apps, and APIs, and designing microservice endpoints for flight and reservations management.

Event Storming identified two major contexts: flights and reservations management. The SEED(S) methodology helps map out interactions using UML sequence diagrams, emphasizing that microservices should not call each other directly but be orchestrated by a thin API layer.

The implementation involves RESTful microservices described using OpenAPI Specifications (OAS). The flights microservice handles flight details and seating arrangements, while the reservations microservice manages seat reservations. The design ensures microservices remain independent, using different data storage systems: Redis for reservations and MySQL for flights.

Redis hashes are suitable for the reservations system, allowing efficient storage of seat reservations with keys as seat numbers and values as customer IDs. This structure supports operations like setting new values and retrieving reserved seats, aligning with the need for data independence and efficient data handling in microservices.

Overall, the project exemplifies best practices in microservice architecture, emphasizing clear separation of concerns, efficient data handling, and robust API design to support scalable and maintainable systems.



To manage flight seat reservations and avoid double-booking, Redis is employed due to its simplicity and flexibility. The `HSETNX` command is used to set seat reservations only if the seat is not already booked, ensuring unique seat assignments. For instance, using `HSETNX` with a flight ID like `flight:40d1-898d-bf84a266f1b9`, seats such as "12B" and "12C" can be reserved with unique identifiers. Attempting to book an already reserved seat returns an integer `0`, indicating no update occurred.

For data retrieval, `HKEYS` fetches all occupied seats, while `HGETALL` retrieves both keys and values. Redis is ideal for this microservice due to its efficient key/value storage, but it may not suit every use case.

For the `ms-flights` microservice, MySQL is preferred due to its robust JSON support and ability to perform complex queries. MySQL's native JSON data type allows validation, optimized storage, and direct key-based lookups. It also supports in-place, atomic updates, which Redis lacks without additional modules. The seat map is stored in a `seat_maps` table, while flight details are maintained in a `flights` table, demonstrating MySQL's suitability for structured data and complex queries.

Microservice development is streamlined using reusable templates. Node.js-based services use NodeBootstrap, while Python services utilize GitHub templates. These templates facilitate rapid development, ensuring uniformity and quality across microservices. Docker and GNU Make are essential for setting up the development environment.

For the `ms-flights` microservice, NodeBootstrap provides a starting point with full support for OpenAPI Specification (OAS). Modifications involve setting up routes, input validation, and database migrations. Health checks are implemented using a draft RFC and Node.js, with liveness and readiness probes to ensure service functionality. The liveness probe checks if the service is running, while the readiness probe verifies database connectivity.

The NodeBootstrap template includes a sample "users" module, which is replaced with a "flights" module. Database migrations are managed with scripts to create and populate tables. The microservice can be tested and accessed through endpoints like `/flights` and `/flights/AA2532/seat_map`. Health checks ensure that services are operational and dependencies, such as databases, are accessible.

In summary, Redis is utilized for seat reservations due to its simplicity, while MySQL is chosen for the `ms-flights` microservice for its structured data capabilities. Reusable templates and health checks play a crucial role in developing and maintaining microservices effectively.



The text discusses implementing a second microservice, ms-reservations, using Python, Flask, and Redis, following a template similar to the Node.js-based ms-flights microservice. This template facilitates development with Docker and make, supports tasks like testing and linting, but lacks database migration support due to Redis's schema-less nature. The ms-reservations service involves modifying the template to implement a reservation creation endpoint, utilizing Redis's `hsetnx` command to prevent double-booking by ensuring a seat is only reserved if not already taken.

The implementation includes defining endpoints in `service.py`, handling requests in `handlers.py`, and performing database operations in `models.py`. The code ensures that successful reservations return a success status, while conflicts return an error. The microservice template aligns with the Twelve-Factor App principles, particularly in configuration management, demonstrating the benefits of using templates for microservices development.

To test the service, curl commands are used to make reservations and verify the prevention of double-booking. The text also introduces the concept of an umbrella project to manage multiple microservices as a unified system, emphasizing the importance of minimizing coordination needs and making it easy to run and shut down all components together.

The use of Faux Git Submodules is recommended for managing individual microservice repositories within an umbrella project, offering a simpler alternative to traditional Git submodules. The setup involves editing configuration files and scripts to streamline the process of starting and stopping services. Traefik is used for routing, requiring updates to `docker-compose.yml` files to ensure proper service routing.

The text concludes by outlining the setup of a staging environment on AWS for deploying microservices, leveraging infrastructure as code (IaC) with Terraform. This approach mitigates risks by ensuring consistent environment builds and streamlines the process of adding new components like ingress controllers and database instances. The staging setup is part of a broader deployment strategy involving multiple GitHub repositories, aligning with the operating model to give teams clear responsibilities and domains.

Overall, the text provides a comprehensive guide to developing, testing, and deploying microservices, emphasizing the use of templates, best practices in configuration management, and the benefits of infrastructure as code for reliable and scalable deployments.



In this text, we explore the implementation of a Traefik ingress controller and database provisioning in an AWS-based infrastructure using Terraform modules. The ingress controller, Traefik, initially used in development, is deployed to route messages from a load balancer to Kubernetes-deployed microservices. This setup is extendable for future API compositions with AWS API Gateway. The Traefik module is pre-written and available on GitHub.

For database requirements, AWS-managed MySQL and Redis services are provisioned using Terraform modules. The AWS ElastiCache service is used for Redis, and AWS RDS for MySQL. These modules also handle network configurations and access policies.

The staging environment setup mirrors the sandbox environment, using Terraform to define it in code. Existing modules for network, Kubernetes cluster, and Argo CD are complemented by new database and ingress controller modules. A GitHub Actions pipeline is used for provisioning, requiring AWS credentials and MySQL password to be added to the repository's secrets.

To fork the staging environment repository, users must sign into GitHub, navigate to the repository, and fork it. Post-fork, AWS credentials and MySQL password must be configured in GitHub secrets. GitHub Actions need enabling in the forked repository to activate the CI/CD pipeline.

Terraform code adjustments are necessary for the staging environment, particularly in the `main.tf` file, to align with specific AWS account settings. This includes setting local variables for the AWS region and Terraform backend configurations.

AWS IAM permissions need updating to allow the operator account to manage new database resources. This involves creating a new IAM group, attaching RDS and ElastiCache policies, and adding the operator account to this group.

Once permissions are set, Terraform commands (format, init, validate, plan) are run to ensure the infrastructure code is ready. Committing and pushing the updated code to the forked repository triggers the CI/CD pipeline.

For Kubernetes cluster access, a kubeconfig file generated by the pipeline is used. The `kubectl` command confirms the cluster and services are operational. A Kubernetes secret is created for the MySQL password, enhancing security.

The text concludes with steps to publish microservices as containers using Docker Hub. This involves creating a Docker Hub repository for the flight application and integrating it with CI/CD processes for automated deployments. Docker Hub is chosen for its ease of use and integration capabilities, especially with GitHub Actions.

Overall, the document outlines a comprehensive approach to deploying microservices in a cloud environment, leveraging Terraform for infrastructure as code, and ensuring seamless CI/CD integration with GitHub Actions and Docker Hub.



To build and push containers using a CI/CD pipeline, we utilize GitHub Actions for consistency and integration with Docker Hub. Start by configuring Docker Hub secrets in your GitHub repository, specifically `DOCKER_USERNAME` and `DOCKER_PASSWORD`. This setup is necessary for pushing containers to Docker Hub, ensuring they remain portable and environment-agnostic. The CI/CD workflow, triggered by a release tag, involves running unit tests, building containerized microservices, and pushing the container to Docker Hub.

To initiate the process, enable the GitHub Actions workflow in your repository. Create a new release with a tag (e.g., `v1.0`) to trigger the workflow. Verify the container's presence in Docker Hub to confirm successful deployment. The containerized microservice is then ready for staging deployment.

Deploying the microservice involves using the Argo CD GitOps tool. Create a deployment repository with Helm packages to define microservice deployment. Helm, a Kubernetes package manager, simplifies deployment by managing Kubernetes resources like Pods, ReplicaSets, Deployments, Services, and Ingress.

Understanding Kubernetes objects is crucial. A Pod defines basic workload units, ReplicaSets manage Pod instances, Deployments declare desired states, Services manage network access, and Ingress defines external access routes. Write declarative configurations for these objects, focusing on Deployment, Service, and Ingress.

Helm charts bundle templates and values for Kubernetes resources. Templates describe resources, and values files manage environment-specific configurations. Create a Helm chart for the microservice, updating the `deployment.yaml` file with specific configurations for the container, such as environment variables, ports, and probes.

Finally, store Helm charts in a monorepo for centralized management, allowing microservices teams to deploy independently. Use the Helm CLI to create and manage charts, facilitating seamless deployment into Kubernetes clusters. This approach streamlines the deployment process, ensuring consistency and reliability across environments.



In deploying microservices with Kubernetes, Helm charts are used to manage configurations, allowing parameterization for different environments by altering certain values. A `values.yaml` file is central to this process, containing settings for Docker images, MySQL connections, and ingress configurations. For example, it specifies the repository and tag for Docker images and sets up MySQL credentials to connect the microservice to a database.

After configuring these values, a dry-run test ensures the Helm package is error-free before deploying it to a Kubernetes cluster. This process involves using the Helm CLI to verify the deployment configuration, and if successful, the configuration files are committed to a Git repository for version control and further deployment automation.

Argo CD is introduced as a GitOps tool to automate deployments by synchronizing the desired state from a Git repository with the actual state in the Kubernetes environment. It uses the repository as the source of truth, ensuring deployments match the configurations defined in the Helm charts. This approach minimizes manual intervention and enhances consistency across deployments.

To log into Argo CD, port-forwarding is used to access the dashboard, where applications representing microservices are created and synchronized. This involves specifying metadata and repository paths to link Argo CD with the Helm packages. Once created, synchronization aligns the cluster's state with the declared configurations, deploying the microservice.

Testing the microservice involves sending requests via a load balancer using tools like `curl`, ensuring the service responds correctly. This confirms the integration of various components, including ingress routing and database connectivity.

Finally, infrastructure cleanup is crucial to avoid unnecessary costs, especially in cloud environments like AWS. Terraform is used to destroy resources when they are no longer needed, ensuring efficient resource management.

Overall, the process emphasizes the importance of configuration management, automation, and continuous integration in deploying and managing microservices. The use of Helm and Argo CD streamlines deployments, while careful planning and testing ensure reliability and scalability in a microservices architecture.



In decision-making for system changes, relying on data is crucial to avoid misallocating resources on unnecessary improvements while overlooking critical issues. Product teams leverage metrics like OKRs, KPIs, and user feedback to guide strategic decisions. Collecting project, design, and runtime metrics such as change frequency, code lines, and dependencies between microservices can provide a comprehensive view of improvement opportunities.

Understanding the impact of changes involves considering implementation time, coordination time, downtime, and consumer impact. Implementation time includes understanding, making, testing, and deploying changes, while coordination time involves communication within teams. Downtime, once accepted, is now minimized, especially in microservices aiming for zero-downtime. Consumer impact considers the effects on users, even in zero-downtime scenarios, such as interface changes breaking client code.

Deployment patterns like blue-green, canary, and multiple versions help manage changes. Blue-green deployment maintains two environments, switching traffic to the updated one, reducing downtime. Canary deployment releases new components in parallel, gradually increasing traffic to the new version, suitable for independent deployments. The multiple versions pattern allows users to choose component versions, easing transitions and reducing coordination efforts.

Infrastructure changes, such as those using Terraform, involve adding new resources or altering existing ones. Implementation costs are reduced by using immutable infrastructure and CI/CD pipelines, while coordination costs are minimized by centralizing design authority in a platform team. However, this requires robust tools and processes for self-service and low-coordination interaction. Downtime is a challenge in infrastructure changes due to its foundational role, but adopting patterns like blue-green or phoenix can mitigate this.

Overall, the architecture should support changeability, balancing implementation costs, coordination, downtime, and consumer impacts. Infrastructure changes should be managed carefully, considering both extensions and alterations to maintain system stability and performance.



The architecture discussed involves transitioning live traffic to a new environment, which requires careful consideration of data management. The current setup lacks a clean separation between data and application instances, complicating the process of spinning up new environments without extensive data replication. To maintain zero downtime, infrastructure design must be reevaluated from a data perspective.

**Infrastructure Change and Consumer Impact:**
The infrastructure is offered "as a service," impacting microservices teams when changes occur. Coordination is crucial to ensure changes don't disrupt existing services. Effective communication, automated testing, and shared responsibility for reliability are essential. As microservices grow, managing these changes becomes complex.

**Microservices Changes:**
Most changes target the microservices subsystem to introduce new features or update existing ones. Challenges arise when modifying active services, such as splitting or merging them. The architecture minimizes these impacts by focusing on four key change impacts.

**Implementation Costs:**
Event Storming helps define microservice boundaries, improving code comprehension and enabling smaller, faster changes. The microservice-bootstrap framework standardizes documentation and testing, reducing the burden of changes. CI/CD pipelines ensure code changes are tested and validated, maintaining code quality.

**Coordination Costs:**
Microservices are designed for independence, with each owned by a single team and having its own repository and CI/CD pipeline. This autonomy reduces inter-team coordination costs. However, lifecycle events and interface changes require more coordination, especially when merging services or altering APIs. A single release team manages production updates, but if it becomes a bottleneck, system design must be revisited.

**Downtime:**
The architecture uses canary deployment to minimize downtime during microservice updates. This involves deploying new versions alongside existing ones, gradually routing traffic, and observing performance before full deployment. Care is needed to ensure compatibility with older versions when shared databases are involved.

**Consumer Impact:**
Changes to microservice interfaces can disrupt dependent services. Adhering to design practices like avoiding mandatory new input parameters and using contract testing can mitigate these impacts. Tools like Pact facilitate consumer-driven contract testing, allowing changes without breaking existing clients.

**Data Changes:**
Managing data is challenging due to complex models and dependencies. Microservices owning their data reduces coordination costs but can complicate system-wide changes. Independent data models aren't optimized for zero-downtime changes, especially with shared databases. Intrusive changes may require replacing microservice instances, potentially using blue-green deployments to minimize downtime.

Overall, the architecture prioritizes independence and local changes, reducing coordination costs but requiring careful planning for system-wide changes. The design supports frequent local updates while maintaining service reliability and minimizing downtime.



The text discusses strategies for implementing microservices architecture with a focus on reducing change costs and improving system flexibility. Key decisions in architecture, infrastructure, code, APIs, and data are highlighted, emphasizing changeability. The authors advocate for microservices when dealing with large, complex systems, noting that while microservices don't eliminate essential complexity, they shift it from coding to operations, where automation can mitigate it.

Fred Brooks's concept of "No Silver Bullet" is referenced to explain that microservices don't reduce essential complexity but can simplify operations through automation tools like Ansible, Docker, and Kubernetes. The text introduces the "microservices quadrant," categorizing systems based on complexity and simplicity in architecture and implementation. Microservices are seen as complex to implement but simple architecturally, contrasting with monoliths, which are complicated but easy architecturally.

The text advises a holistic approach to microservices transformation, emphasizing that it's not just a technological shift but a cultural one. Success requires careful management to avoid common pitfalls, such as establishing overly strict adherence to microservices principles early on. Teams should focus on business impact rather than getting sidetracked by infrastructure upgrades or new tools.

The transformation process should be measured by the trajectory of progress, not the current state. Metrics for success include the average size of autonomous teams, the time they can operate without dependencies, and the frequency of successful deployments. The ultimate goal is to reduce coordination costs, a fundamental principle in microservices architecture. The text underscores that microservices should be a journey, not just a destination, with ongoing evaluation and adaptation.



Microservices transformation involves reducing team size and coordination deadlocks, enhancing team autonomy. Key metrics include team size, coordination stoppages, and deployment frequency, which indicate agility and transformation health. Microservices simplify complex systems by shifting complexity rather than eliminating it. Patience and a long-term outlook are crucial for success, focusing on trajectory rather than the current state. Reliable metrics help track progress.

Microservices architecture emphasizes independent deployability, data isolation, and decentralized governance. Teams should be designed around business capabilities, with a focus on stream-aligned, enabling, and platform teams. Team Topologies guide team interactions, promoting collaboration and minimizing dependencies.

Data management in microservices involves data delegation, embedding, and Event Sourcing, which supports eventual consistency and resilience. CQRS and sagas handle distributed transactions, reducing coordination costs. API design, including OpenAPI Specification, ensures clear communication between services.

Infrastructure automation through tools like Terraform and Kubernetes supports continuous integration and delivery (CI/CD), enabling rapid deployment. GitOps practices with tools like Argo CD streamline application deployment and management.

Effective microservices transformation requires a culture shift, emphasizing DevOps principles, cross-functional teams, and continuous feedback loops. This approach minimizes downtime and implementation costs, ensuring a smooth transition to a microservices architecture.




The text primarily discusses various aspects of microservices, infrastructure, and software development. Key topics include the use of Docker for containerization, the role of Kubernetes and Terraform in managing infrastructure, and the implementation of infrastructure as code (IaC) pipelines. It highlights the importance of automated testing and version control, particularly branching and merging strategies.

Traefik is mentioned as a tool used in conjunction with microservices, and the significance of distributed transactions and sagas is noted. The concept of Ubiquitous Language is emphasized in software development for consistency and understanding across teams.

The text also touches on the configuration of staging environments, particularly kubeconfig files, and the use of YAML for deployment objects. The Rule of Twos is a principle mentioned in the context of microservices, suggesting a focus on simplicity and manageability.

The authors, Ronnie Mitra and Irakli Nadareishvili, bring extensive experience in web and connectivity technologies, with Nadareishvili's role at Capital One underscoring the practical application of these concepts in a banking platform. The text references their work on "Microservice Architecture" and "Continuous API Management."

Additionally, the colophon provides details about the book's cover design, featuring the sparkling violetear hummingbird, and includes information about O'Reilly's offerings in online learning and resources.

Overall, the text serves as a comprehensive guide to modern software architecture, focusing on microservices and cloud-native solutions, with an emphasis on practical tools and methodologies for effective software development and deployment.
