
# Summary of "Monolith to Microservices" by Sam Newman

**Introduction:**
Sam Newman's "Monolith to Microservices" provides a comprehensive guide on transitioning from monolithic systems to microservices architecture. It addresses the complexities and challenges involved in this transformation, aiming to help organizations decide if microservices are right for them and how to manage the transition effectively.

**Core Concepts:**
- **Microservices Definition:** Microservices are independently deployable services modeled around a business domain. They own their own data and offer advantages like improved team autonomy, reduced time to market, cost-effective scaling, and robustness.
- **Challenges:** Despite benefits, microservices introduce challenges such as increased complexity, difficulties in managing distributed systems, and potential issues with data consistency and service ownership.

**Planning a Migration:**
- **Assessment:** Organizations must assess if microservices fit their needs by considering their domain clarity, team structure, and readiness for organizational change.
- **Incremental Migration:** Emphasizes the importance of gradual migration to minimize disruption. Techniques like domain-driven design and event storming can aid in prioritizing service decomposition.

**Decomposing Monoliths:**
- **Application Decomposition:** Techniques such as the Strangler Fig pattern, UI composition, and branch by abstraction are discussed for breaking down monolithic applications.
- **Database Decomposition:** Strategies for database separation include shared databases, database views, and change data capture. The book stresses the importance of handling data ownership and synchronization carefully.

**Growing Pains:**
- **Scalability Challenges:** As microservices grow, issues like service ownership, breaking changes, and monitoring become prominent. Solutions include establishing clear service boundaries, robust monitoring systems, and effective communication strategies.
- **Testing and Optimization:** Emphasizes the need for comprehensive testing and balancing global versus local optimization to ensure system robustness and efficiency.

**Conclusion:**
The book concludes by acknowledging the complexity of microservices and the need for careful planning and execution. It provides insights into recognizing and addressing the growing pains associated with scaling microservices architectures.

**Additional Resources:**
Newman suggests reading his previous book, "Building Microservices," for a broader understanding of microservices architectures. The book also includes a pattern index and bibliography for further exploration of the topics discussed.

**Acknowledgments:**
Newman credits his wife, Lindy Stephens, and various contributors and reviewers for their support and insights in the creation of this book.

**Contact Information:**
For further inquiries or comments, readers are encouraged to contact O'Reilly Media or visit their website for additional resources and errata.




## Summary

The text discusses the development and implementation of microservice architectures, emphasizing their advantages and challenges. Microservices are independently deployable services centered around business domains, forming a distributed system. They are a subset of service-oriented architecture (SOA) that prioritizes independent deployability and technology agnosticism. This architecture promotes flexibility, scalability, and robustness, allowing parallel development and diverse technology use.

### Key Concepts

1. **Independent Deployability**: 
   - Microservices can be updated and deployed independently without affecting other services.
   - This requires loosely coupled services with stable, well-defined interfaces.

2. **Business Domain Modeling**: 
   - Microservices should be designed around business domains to minimize cross-service changes.
   - This approach enhances cohesion of business functionality and aligns team organization with business needs.

3. **Data Ownership**:
   - Each microservice owns its data, preventing shared databases to maintain stable interfaces and reduce coupling.
   - This encapsulation supports independent deployability.

### Advantages

- **Flexibility**: Microservices provide options for solving future problems and allow for varied technology choices.
- **Parallel Development**: Teams can work on different services simultaneously without interference.
- **Scalability**: The architecture supports scaling by allowing services to be deployed across multiple machines.

### Challenges

- **Network Communication**: Microservices rely on network communication, which introduces latency and potential failures.
- **Distributed Systems Complexity**: Managing transactions and data consistency across distributed components is complex.
- **Technology Temptation**: There is a risk of adopting too much new technology, which should be avoided to prevent complications.

### Organizational Influence

The architecture often reflects organizational structures, as described by Conway’s Law. Traditional three-tiered architectures group people by technical expertise, but microservices encourage poly-skilled teams, aligning with business domains for faster software delivery.

### Implementation Tools

The author used AsciiDoc with Visual Studio Code and Git for source control, highlighting a practical approach to writing and managing content.

### Conclusion

While microservices offer numerous benefits, they also introduce significant challenges, particularly in network communication and system complexity. They provide options but require careful consideration of their costs and benefits. The text suggests that embracing microservices should also involve considering the user interface, not just server-side components.

Overall, microservices offer a modern approach to software architecture that aligns with evolving business and technological needs, provided the challenges are navigated thoughtfully.


# Microservices: Key Concepts and Considerations

Microservice architecture offers flexibility and scalability but comes with challenges related to distributed systems. It is crucial to address these challenges using familiar technology stacks and consider changes as needed. Microservices are technology agnostic, allowing diverse technology stacks and programming languages. The choice of language is less important than the ability to communicate over a network.

## Microservice Size and Complexity

The question of how big a microservice should be is common but misleading. The focus should be on having a small interface and maintaining information hiding. The size is contextual, varying based on the system's familiarity and complexity. Initially, it is essential to determine how many microservices you can manage and define boundaries to avoid coupling.

## Evolution of the Term "Microservices"

The term "microservices" emerged from the concept of "micro-apps" in 2011, aimed at making services easy to replace. The name change reflected a focus on small, understandable scopes and ease of change.

## Ownership and Alignment

Microservices align IT artifacts with business domains, breaking down traditional IT and business divides. This alignment facilitates assigning ownership to product-oriented teams and reduces shared services, minimizing delivery contention.

## Monoliths vs. Microservices

Monoliths, including single-process and distributed systems, represent units of deployment where functionality is deployed together. A modular monolith allows separate modules within a single process, offering parallel working without the complexity of microservices. However, database decomposition remains a challenge.

### Types of Monoliths

1. **Single Process Monolith:** All code is deployed as a single process, often leading to delivery contention due to tight coupling.
2. **Modular Monolith:** Consists of separate modules within a single process, allowing independent work but requiring combined deployment.
3. **Distributed Monolith:** Multiple services deployed together, often failing to deliver on service-oriented architecture promises due to high coupling.

## Advantages and Challenges

Monoliths offer simpler deployment and developer workflows, making them a valid architectural choice. However, they are prone to coupling issues, leading to delivery contention. Microservices provide clearer boundaries for ownership and flexibility but require careful management of cohesion and coupling.

## Coupling and Cohesion

Balancing coupling and cohesion is crucial in defining microservice boundaries. High cohesion and low coupling lead to stable systems. Independent deployability is a goal, allowing changes to one service without affecting others. Understanding these concepts is vital for effective microservice architecture.

## Conclusion

Microservices and monoliths each have their trade-offs. The choice depends on the specific context and needs of the organization. Understanding the underlying principles of coupling and cohesion helps in making informed decisions about architectural strategies.


The concepts of coupling and cohesion, introduced by Larry Constantine in 1968, are foundational in software design, particularly in the context of microservices. Cohesion refers to grouping related functionalities to facilitate easy changes, minimizing the need to alter multiple services when updating a feature. Coupling, on the other hand, is about the degree to which different modules or services depend on each other. High coupling is generally undesirable as it complicates changes and deployments.

**Cohesion and Coupling:**

Cohesion can be summarized as "the code that changes together, stays together." It emphasizes organizing functionalities to allow changes in a few places, thus reducing complexity and cost. Coupling comes in various forms, each requiring different strategies to manage.

**Information Hiding:**

A key technique in managing coupling is information hiding, which involves separating frequently changing parts of code from more stable ones. This allows internal changes without affecting external interfaces, maintaining module compatibility. This concept relates to encapsulation in object-oriented programming, where implementation details are hidden within a class.

**Types of Coupling:**

1. **Implementation Coupling:** Occurs when a service is dependent on the specific implementation of another. For example, if a Recommendation service directly accesses the database of an Order service, any change in the database schema could break the Recommendation service. Solutions include using APIs to abstract database access.

2. **Temporal Coupling:** Arises in synchronous communication where services need to be available simultaneously. This can be mitigated by caching or using asynchronous messaging systems, allowing services to operate independently of each other’s availability.

3. **Deployment Coupling:** Happens when changes in one module necessitate redeployment of the entire application. This risk can be reduced by adopting microservices that allow independent deployments, fostering continuous delivery and reducing deployment risks.

4. **Domain Coupling:** Reflects the necessary interactions between services that model real-world processes. For example, a Warehouse service needs order details from an Order Processing service to function. Domain coupling is unavoidable but can be minimized by carefully designing what information is shared.

**Design Strategies:**

- **"Outside-In" Thinking:** Design service interfaces by focusing on consumer needs, similar to user interface design. This approach helps maintain a clear separation between external contracts and internal implementations.

- **Event-Driven Architecture:** Instead of direct API calls, services can emit events that other services consume. This reduces direct dependencies and allows for more flexible interactions.

In summary, managing coupling and cohesion effectively is crucial in microservice architectures. By employing strategies like information hiding, asynchronous communication, and event-driven designs, developers can create systems that are easier to maintain, evolve, and deploy.



### Domain-Driven Design (DDD) and Microservices

Domain-Driven Design (DDD) is crucial for aligning software with real-world domains. Eric Evans' book on DDD introduces concepts that enhance this alignment, particularly useful in microservice architectures.

#### Aggregates in DDD

Aggregates are core DDD concepts representing domain entities like Orders or Invoices. They act as state machines with a lifecycle, ensuring state transitions are managed within cohesive units. In microservices, a single service can manage multiple aggregates. Aggregates can refuse illegal state transitions, promoting data integrity.

#### Bounded Contexts

A bounded context defines a domain boundary, encapsulating aggregates and hiding internal details. This separation allows different parts of an organization, like finance and warehouse departments, to operate independently. Bounded contexts map well to microservices, providing clear service boundaries and reducing inter-service dependencies.

#### Mapping to Microservices

Aggregates and bounded contexts offer natural service boundaries. Initially, services should encompass entire bounded contexts, allowing for later decomposition around aggregate boundaries. This strategy maintains a stable external API, hiding internal changes.

### Planning a Microservice Migration

Transitioning to microservices requires careful planning. Microservices are not a goal but a means to achieve specific outcomes. Organizations must understand their goals, consider alternatives, and establish metrics to measure success.

#### Key Considerations

1. **Understand Goals**: Define clear outcomes aligned with business objectives.
2. **Consider Alternatives**: Explore other solutions that might achieve similar benefits.
3. **Measure Success**: Establish criteria to evaluate the transition's effectiveness.

#### Common Mistakes

Organizations often adopt microservices without clear reasons, leading to wasted resources. It’s vital to avoid decisions based on trends or assumptions without understanding the specific benefits for the organization.

#### Benefits of Microservices

1. **Team Autonomy**: Microservices enable teams to operate independently, enhancing productivity and innovation.
2. **Reduced Time to Market**: Independent deployment of services accelerates the release of new features.

#### Alternatives to Microservices

Improving team autonomy and reducing time to market can also be achieved through other means, such as modular monoliths or process improvements. Autonomy can be enhanced by delegating responsibilities within teams and adopting self-service infrastructure.

### Conclusion

Microservices offer significant benefits but require thoughtful implementation. Organizations must critically assess their needs, explore all options, and ensure they have a clear understanding of what they aim to achieve with microservices.



### Summary

The text discusses the potential benefits and challenges of adopting a microservices architecture in software development. It highlights several key advantages, such as improved time to market, cost-effective scaling, enhanced robustness, and flexibility in technology choices. However, it also warns of potential pitfalls and situations where microservices may not be the best choice.

#### Key Benefits of Microservices

1. **Improved Time to Market**: By identifying and addressing bottlenecks in the software shipping process, microservices can help accelerate the delivery of new functionalities. They allow for independent scaling and deployment, which can reduce time delays.

2. **Cost-Effective Scaling**: Microservices enable independent scaling of processes, allowing companies to manage operational costs effectively. This is particularly beneficial for SaaS products, where only the necessary parts of the system need to be scaled to handle load.

3. **Enhanced Robustness**: Decomposing applications into independently deployable processes can improve system robustness. Microservices allow for targeted improvements to critical parts of the system, ensuring that failures in one area do not bring down the entire application.

4. **Flexibility in Technology Choices**: Microservices provide the flexibility to experiment with new technologies by isolating changes within individual services. This can lead to competitive advantages and help keep developers engaged by allowing them to work with diverse technologies.

#### Challenges and Considerations

1. **Complexity in Implementation**: Transitioning to microservices can introduce complexity, especially if service boundaries are not well-defined. This can lead to increased costs and difficulties in managing changes across services.

2. **Coordination and Autonomy**: Successful implementation requires clear boundaries and autonomy among teams. Without proper coordination, the benefits of microservices may not be fully realized.

3. **Potential for Increased Failure Points**: While microservices can improve resilience, they can also increase the surface area for potential failures. Proper design and redundancy measures are crucial.

4. **Not Always Suitable**: Microservices may not be ideal for startups or projects with unclear domains. In such cases, the complexity and resource demands may outweigh the benefits.

#### Alternatives and Additional Strategies

- **Vertical and Horizontal Scaling**: Before adopting microservices, consider vertical scaling (using bigger machines) or horizontal scaling (running multiple copies of a monolith). These methods can be simpler and quicker to implement.

- **Modular Monoliths**: For some projects, a modular monolith approach may be more appropriate, allowing teams to work independently while maintaining a single deployment unit.

- **Incremental Technology Adoption**: Organizations can adopt new technologies incrementally within a monolithic structure, using strategies like the strangler fig pattern to transition smoothly.

#### Conclusion

Microservices offer significant benefits for scaling, robustness, and technology flexibility, but they require careful planning and consideration of the domain and organizational structure. They are particularly beneficial for established companies looking to scale, but may not be the best fit for early-stage startups or projects without clear domain boundaries.



In the context of startups, the initial focus should be on success rather than adopting microservices prematurely. It's easier to partition an existing system than to start with a microservice architecture from scratch. With an established system, you have the advantage of understanding its operations, which helps in identifying performance issues during decomposition. For startups, it's advisable to only split clear boundaries initially and maintain a monolithic approach otherwise. This also allows time to assess operational maturity, as managing multiple services can be challenging.

For customer-installed software, microservices might not be ideal due to the complexity they introduce in the operational domain. Customers may not have the necessary skills or platforms to manage microservice architectures, which could lead to issues if they are expected to run software on complex systems like Kubernetes. It's crucial to have a clear reason for adopting microservices. Without a defined goal, adopting them because of trends can be detrimental. 

When planning a migration to microservices, it's important to separate core objectives from secondary benefits. Prioritizing these objectives ensures that the main goal, such as scaling, remains the focus. Using a model of sliders to balance priorities can aid in decision-making. This approach helps in aligning team autonomy and technology choices with the primary goal.

Communication and organizational change are critical in adopting microservices. Dr. John Kotter's eight-step process for change management is useful, especially for large-scale shifts. Establishing urgency and forming a guiding coalition are initial steps. It's important to involve stakeholders from outside the IT domain to ensure alignment with business goals. Developing a shared vision and strategy is crucial for guiding the change process.

Communicating the vision effectively involves realistic and achievable goals. Face-to-face communication can be more effective than digital methods for conveying important messages. Empowering employees by removing roadblocks and providing necessary resources is essential for broad-based action. This might involve bringing in new technology to solve specific problems rather than adopting new tools for their own sake. The focus should be on addressing concrete issues rather than creating a perfect platform that doesn't align with actual needs.



### Summary

The text discusses the process and strategies for transitioning from a monolithic system to a microservice architecture, drawing from experiences at Google and insights from industry leaders like Jeff Bezos and Martin Fowler.

#### Test Mercenaries Program at Google
- The program aimed to streamline test suite creation and management.
- Successes were achieved incrementally, starting with small changes before tackling larger company-wide systems.

#### Generating Short-Term Wins
- Quick wins are crucial to maintain momentum and faith in the vision.
- Focus initially on easily extractable functionalities from the monolith.
- Learning from mistakes early on helps refine strategies.

#### Consolidating Gains and Producing More Change
- Continuous reflection on successes and failures is necessary.
- As transitions deepen, challenges increase, requiring adaptable strategies.
- Iterative changes help embed new approaches into the organizational culture.

#### Importance of Incremental Migration
- An incremental approach helps manage the risks and costs associated with transitioning to microservices.
- Small, iterative steps allow for learning and adaptation, reducing the impact of mistakes.
- Deploying microservices into production is essential to fully understand their impact.

#### Cost of Change
- Small, reversible decisions should be made quickly, while irreversible ones require careful deliberation.
- The cost of change varies, with code changes being less risky than database alterations.
- Experimentation should occur where the impact is lowest, such as during the design phase.

#### Domain-Driven Design
- Domain-driven design helps identify service boundaries and prioritize decomposition.
- Event Storming is a collaborative technique to define a shared domain model.
- Understanding domain events aids in logical decomposition without necessitating an event-driven system.

#### Using a Domain Model for Prioritization
- A domain model helps identify which functionalities to extract based on dependencies.
- High-level domain models provide a starting point for decomposition, allowing for informed decisions on microservice creation.

Overall, the text emphasizes the importance of incremental change, learning from experiments, and using domain-driven design to effectively transition to a microservice architecture. It also highlights the need to balance quick wins with long-term strategic goals. 



In planning a migration to microservices, it's crucial to assess system components based on their ease of extraction and potential benefits. For example, while Notification functionality may be tightly coupled and harder to extract, Invoicing appears easier due to its lack of dependencies. The use of patterns like the strangler fig can facilitate this process by allowing inbound calls to be proxied before reaching the monolith. However, the logical domain model does not always reflect the actual code structure, so examining the code is necessary to understand the degree of entanglement.

When prioritizing which services to extract, consider both the value and difficulty of decomposition. A two-axis model can help visualize potential candidates, with the top-right quadrant indicating services that are easy to extract and offer significant benefits. This approach allows for quick wins and early feedback, although initial assessments may change as the project progresses.

Organizational changes are also essential for successful microservice transitions. Traditional IT structures often involve siloed teams, leading to inefficiencies. Instead, integrating roles such as developers and testers into autonomous teams can enhance collaboration and reduce hand-offs. The DevOps movement supports this by promoting a culture of shared responsibility between development and operations.

Copying organizational models from other companies, like the Spotify model, without considering your unique context can be problematic. Instead, focus on understanding your company's needs and culture. For example, mandating that developers handle 24/7 support without adequate preparation can be disruptive. Incremental changes, such as gradually shifting responsibilities and providing training, are more effective.

To facilitate organizational change, start by mapping current activities and responsibilities, then develop a vision for the future. This can involve merging team responsibilities and enabling self-service platforms. Engage with stakeholders to ensure changes are feasible and align with overall goals.

Skill development is another critical component. Encouraging self-assessment can help individuals identify areas for growth. For instance, during a project with The Guardian, developers assessed their skills against core criteria, setting personal targets for improvement. This approach allows for targeted skill development and supports the transition to new technologies and processes.

In summary, successful migration to microservices requires careful planning, prioritization, organizational restructuring, and skill development. By considering both technical and human factors, organizations can achieve a smoother transition and realize the benefits of a microservices architecture.



In the process of migrating to microservices, it's crucial to assess team skills and identify areas for improvement. Self-assessments should remain private to encourage honest evaluations and guide personal development. By anonymizing these assessments, a team skill map can reveal gaps that may need addressing, such as through training or hiring new experts. This approach fosters a balanced team where responsibilities are shared effectively.

When transitioning to microservices, it's essential to define measurable outcomes to track progress. Both quantitative metrics, like cycle time and deployment frequency, and qualitative feedback from team members should be considered. Regular checkpoints should be established to evaluate if the transition is on track, allowing for course corrections if necessary.

Avoiding the sunk cost fallacy is critical. This occurs when continued investment in a failing approach is justified by past investments. By taking small, incremental steps, teams can more easily pivot and adapt to new insights. Embracing a culture of constant improvement and openness to change helps avoid stagnation and ensures ongoing progress.

The chapter emphasizes the importance of incremental migration to microservices. Large-scale rewrites can be risky, so breaking down the transition into smaller steps allows for learning and adjustment. The goal is to gradually integrate new microservices into production, ensuring that they are used and provide value.

When dealing with existing monolithic systems, teams must decide whether to modify the monolith or work around it. If changes to the monolith are possible, it offers more flexibility. However, if constraints exist, such as lack of access to source code or outdated technology, alternative patterns can be employed.

During migration, teams must decide whether to copy existing code or reimplement functionality in new microservices. If the monolith is well-structured, code can be copied to save time, while leaving the original intact for rollback options. Over time, once the new microservice is stable, the monolith's redundant code can be removed.

The chapter concludes by emphasizing the need for careful planning and execution in the migration process. By understanding team dynamics, setting clear goals, and adopting a flexible, incremental approach, organizations can successfully transition to a microservice architecture while minimizing risks and disruptions.



Reorganizing a monolithic codebase along business domain boundaries can be challenging due to mismatches in existing structures. Michael Feathers' "Working Effectively with Legacy Code" introduces the concept of a seam, which allows changes in behavior without altering existing code. This concept aligns well with bounded contexts and can aid in organizing code using domain-driven design principles.

A modular monolith, which involves breaking a monolith into independently developed modules, can offer benefits similar to microservices without the associated challenges. Some teams find that a modular monolith resolves most issues, negating the need for microservices.

Incremental rewrites are preferable, focusing on salvaging existing codebases before reimplementing functionality. Small, regular updates are key to avoiding big bang rewrites. While many teams opt for a clean-room implementation of microservices, ensuring rewrites are manageable in scope is crucial.

Migration patterns, such as the strangler fig application, facilitate system rewrites. This pattern, inspired by the strangler fig tree, involves gradually replacing old systems with new ones while allowing both to coexist. This incremental approach supports risk reduction and allows for reversibility, ensuring mistakes can be corrected efficiently.

The strangler fig pattern involves three steps: identifying parts of the system to migrate, implementing functionality in a new microservice, and rerouting calls from the monolith to the new service. This pattern is particularly effective when the existing system is a black box or when reducing contention with ongoing developments in the monolith.

The pattern can be implemented using an HTTP reverse proxy, which allows for transparent call interception and redirection. This involves inserting a proxy, migrating functionality incrementally, and finally redirecting calls to the new service. Proxies like NGINX are well-suited for handling HTTP redirections and can support various redirection mechanisms.

In summary, the strangler fig pattern is a proven technique for migrating systems incrementally, offering a light-touch approach that accommodates easy reversibility and integration with existing systems. It is often the first choice for exploring system migrations due to its flexibility and effectiveness.



In the text, the author discusses the complexities and strategies involved in transitioning from a monolithic to a microservice architecture. Key points include:

1. **Network Proxies and Custom Behavior**: The author shares personal experiences with inefficient network proxies written in Java and Python, highlighting the benefits of using dedicated proxies like NGINX, which allows custom behavior through Lua scripting.

2. **Incremental Rollout**: The text emphasizes the importance of making architectural changes incrementally. This approach avoids large-scale disruptions and allows for parallel work on new features. The example given is the migration of Payroll functionality, which can be done in parts to prevent data sharing issues between the monolith and microservices.

3. **Protocol Transformation**: Using proxies to change communication protocols (e.g., from SOAP to gRPC) is discussed. However, the author warns against overloading proxies with complex logic, advocating for smart endpoints and simple pipes. Service-specific protocol mapping within services is preferred to maintain simplicity and control.

4. **Service Meshes**: The use of service meshes, like Envoy, is explored as a means to facilitate service-to-service communication without a centralized proxy layer. This approach allows each service to manage its own communication, avoiding shared middleware complexities.

5. **Real-World Example - Homegate**: The text provides an example of Homegate, a Swiss real estate company, using the strangler pattern to transition from FTP to a REST API for customer uploads. This change was made seamless for customers, demonstrating the pattern's effectiveness in real-world scenarios.

6. **Message Interception**: The text describes intercepting messages in systems driven by protocols like message brokers. Techniques like content-based routing and selective consumption are explored, with a focus on maintaining "smart endpoints, dumb pipes" to avoid complexity.

7. **Challenges in Migration**: The author discusses the difficulties in changing or enriching system behavior during migration. Rollbacks become complicated if new functionalities or bug fixes are introduced before migration completion. The recommendation is to delay changes until after migration to maintain rollback capability.

8. **UI Composition**: The potential for incremental migration at the user interface level is noted. The Guardian's transition to a new CMS is cited as an example, where verticals were migrated in phases to minimize disruption.

Overall, the text offers insights into managing the transition from monolithic systems to microservices, emphasizing incremental changes, careful management of middleware complexity, and strategic planning to ensure seamless migrations.



The text discusses the transition of The Guardian's architecture over a decade, focusing on the adoption of microservice architectures and the techniques used for migration. Initially, The Guardian employed a page-based migration strategy to update its website's look and feel, starting with the Travel vertical. This approach allowed for gradual changes while maintaining functionality and redirecting old links. Later, The Guardian utilized Fastly CDN for routing during another technological shift.

REA Group in Australia adopted a similar page-based composition approach, allowing different teams to manage distinct channels with unique branding. This method facilitates ownership of the end-to-end experience.

The Guardian also experimented with widget-based composition, deploying a single widget to test the new system. They used Edge-Side Includes (ESI) with Apache to integrate new content into existing pages. Over time, browser-based technology evolved, enabling more client-side composition and reducing server-side widget integration.

Orbitz (now part of Expedia) transitioned to microservices by decomposing UI modules, which were previously managed by a monolithic Content Orchestration service. This shift allowed for incremental migration and better team autonomy.

The text highlights the challenges of deploying changes in native mobile applications due to app store requirements. Companies like Spotify use component-driven UIs across platforms, allowing dynamic server-side changes without app redeployment.

Micro Frontends have emerged as a way to modularize single-page applications, enabling independent development of UI components. This approach leverages frameworks like Vue, Angular, and React, allowing for incremental migration to microservices.

The text introduces the "branch by abstraction" pattern to facilitate incremental changes in monolithic systems. This pattern involves creating an abstraction layer for the functionality being replaced, allowing new implementations to coexist with old ones. This technique minimizes disruption during migration, aligning with continuous integration principles.

Overall, the text emphasizes the importance of strategic UI composition and incremental migration in adopting microservices, highlighting various techniques and challenges encountered by organizations like The Guardian, REA Group, Orbitz, and Spotify.



### Summary

In transitioning from a monolithic architecture to microservices, several patterns and techniques can be employed to ensure a smooth transformation while minimizing risks. One key approach is the use of **feature toggles**, which allow for easy switching between the old and new implementations through configuration files. This facilitates a quick rollback if issues arise. Feature toggles should be removed once they are no longer needed to avoid clutter.

The **branch by abstraction** pattern is useful when changes to the existing codebase are time-consuming. It allows multiple implementations to coexist, enabling testing and verification of the new system before full deployment. This pattern is preferable to long-lived code branches and is ideal when migrating to microservices, particularly when using the strangler fig pattern is unfeasible.

A variation of branch by abstraction, known as **verify branch by abstraction**, introduces live verification, allowing for automatic fallback to the old implementation if the new one fails. This adds complexity, especially concerning data consistency between stateful implementations.

The **parallel run** pattern involves running both the old and new implementations simultaneously, comparing results to ensure equivalency. This pattern is beneficial for high-risk changes and can verify both functional and non-functional aspects, such as performance and latency. It is often used in industries where accuracy is critical, such as financial services or safety-critical systems.

In parallel runs, only one implementation is considered the source of truth, typically the old one, until the new implementation is verified. This technique can also be used for non-functional validation, ensuring that the new system meets performance standards.

**N-version programming** is a related approach used in safety-critical systems, where multiple implementations of the same functionality run side-by-side to reduce the impact of defects. This method focuses more on reliability than on replacing existing systems.

For verification, techniques like using **spies** can be employed. Spies replace certain functionalities to verify that actions, such as sending emails, would have been triggered without actually performing them. This is useful during parallel runs to prevent duplicate actions.

**GitHub's Scientist library** is a tool that aids in implementing parallel runs by running implementations side-by-side and capturing data to verify the new implementation's correctness.

**Dark launching** and **canary releasing** are techniques related to parallel runs. Dark launching involves deploying new functionality invisibly to users, while canary releasing directs a subset of users to the new system to mitigate risk. Both are part of **progressive delivery**, which controls software rollout to ensure reliability.

Finally, the **decorating collaborator** pattern is used when changes inside the monolith are not possible. It allows for new functionalities to be attached without altering the underlying system, enabling collaboration with external microservices.

Overall, these patterns and techniques provide a structured approach to transitioning from monolithic to microservice architectures, ensuring functionality and performance are maintained while minimizing risks during the migration process.



### Summary

In modern software architecture, transitioning from monolithic systems to microservices involves challenges, especially concerning data management. The **Strangler Fig Pattern** is a technique where a proxy directs requests to new microservices, but this can increase complexity if the proxy becomes too smart. It requires careful handling of inbound requests to ensure necessary data is available for microservice calls. If data needed for microservices isn't present in requests or responses, additional queries to the monolith might be necessary, risking complexity and circular dependencies.

**Change Data Capture (CDC)** is an alternative to intercepting calls to the monolith. It involves reacting to changes in a datastore rather than direct calls, which inherently couples the capture system to the monolith’s database. This method is useful when integrating new functionalities like loyalty card printing, where additional customer details are needed. CDC can be implemented through database triggers, transaction log pollers, or batch delta copiers, each with its own trade-offs in complexity and reliability.

- **Database Triggers**: Allow custom actions on data changes but can lead to complex systems if overused.
- **Transaction Log Pollers**: Use transaction logs to detect changes, offering a clean separation from the database but requiring knowledge of log formats.
- **Batch Delta Copiers**: Periodically check for data changes, but may struggle with identifying what has changed.

**Where to Use CDC**: It's beneficial when reacting to data changes without altering the monolith's codebase. However, challenges include the complexity of tools and potential system coupling.

**Shared Database Pattern**: Often, multiple services access the same database, leading to implementation coupling and unclear data ownership. This can result in inconsistent business logic across services. While splitting databases is ideal, shared databases might be appropriate for static reference data or when a service exposes a database as a managed endpoint.

**Coping Patterns**: If splitting databases isn't feasible, using database views or wrapping services can help manage shared databases. These approaches can mitigate coupling by controlling data visibility and access.

**Database View Pattern**: Provides a limited projection of the underlying schema to services, reducing coupling by hiding unnecessary data.

**Conclusion**: Transitioning to microservices often requires a mix of approaches, as no single technique addresses all challenges. Understanding data management is crucial, and various patterns can facilitate the migration process while maintaining system integrity and performance.

The transition involves not only extracting functionality but also decomposing databases to ensure each microservice encapsulates its data. This requires tackling issues like data synchronization, schema decomposition, and transactional integrity. While complex, these steps are essential for leveraging the full benefits of a microservice architecture.



The text discusses challenges and solutions in managing database schemas, particularly in environments with multiple applications accessing a shared database. The primary issue identified is the bottleneck caused by writes to the database, exacerbated by multiple external applications having shared read/write access with identical credentials. This lack of distinct credentials complicates access control and auditing.

To address these issues, the text suggests restructuring the database schema and implementing dedicated secret stores like HashiCorp’s Vault to manage credentials. This approach facilitates easier access control and credential rotation.

A significant challenge was that many external applications were not actively maintained, making it impossible to update them to accommodate a new schema design. As a result, the existing schema became a de facto public contract, preventing changes.

To allow internal schema changes while maintaining external compatibility, the text proposes using database views. Views can present a subset of the database, enabling changes to the underlying schema without affecting external systems. However, views have limitations, such as being read-only and requiring the source schema and view to be in the same database engine, which can increase deployment coupling.

The text also introduces the concept of a database wrapping service, which acts as a thin layer around the database, allowing controlled access and hiding complexity. This pattern is useful when the underlying schema is too complex to decompose. It helps manage dependencies and encourages teams to treat the schema as external, promoting data ownership and reducing central database reliance.

Another pattern discussed is the Database-as-a-Service Interface, which exposes a dedicated read-only database endpoint to clients. This approach is beneficial for clients needing read-only access or those using tools requiring a SQL endpoint. It involves a mapping engine to sync changes from the internal database to the external one, ensuring the external database remains consistent. This pattern offers more flexibility than views but requires careful implementation to manage data synchronization and potential staleness.

Overall, the text emphasizes the importance of managing database access and schema evolution carefully, using views and wrapping services to balance flexibility and control while ensuring data integrity and performance. These strategies aim to mitigate risks associated with schema changes and improve system scalability and maintainability.



To effectively decompose a monolithic database when transitioning to microservices, it's essential to consider data ownership and synchronization. As services are extracted from the monolith, some data should be transferred to the new service's schema, while other data may remain with the monolith. This requires exposing necessary data through well-defined interfaces, such as APIs or event streams, allowing new services to access the data they need without direct database access.

**Pattern: Aggregate Exposing Monolith**

When a new microservice, like an Invoicing service, needs access to data still owned by the monolith, exposing this data through a service endpoint is crucial. This approach helps define service boundaries and can guide the extraction of future services, such as an Employee service.

**Where to Use It**

When data is still owned by the monolith, exposing it via endpoints is preferable to direct database access. If the monolith cannot be modified, alternatives like database views or change data capture patterns may be used.

**Pattern: Change Data Ownership**

When a new service should control specific data, such as invoice-related data, it must be moved from the monolith. The monolith should then treat the new service as the source of truth. This process can be complex, involving the breaking of foreign-key constraints and transactional boundaries.

**Data Synchronization**

Switching to a new service while maintaining data consistency between the monolith and the new service is challenging. One strategy is to keep data in one place temporarily, using a shared database or views, until the transition is complete. This should be a short-term measure to avoid long-term issues.

**Pattern: Synchronize Data in Application**

This pattern involves keeping two databases in sync during migration. Initially, the existing database remains the source of truth, while the application writes to both the old and new databases. Once confidence in the new system is established, it becomes the primary source of truth.

**Where to Use It**

This approach is beneficial when splitting schemas before application code, allowing for quick switching between data sources if needed. However, it becomes complicated if both the monolith and microservice write to the same data. In such cases, ensuring proper synchronization is crucial.

**Pattern: Tracer Write**

Tracer write is a variation that supports incremental data migration by maintaining two sources of truth during the transition. The new service hosts the relocated data, while the current system continues to maintain records. As functionality shifts to the new service, the old source can be retired.

In summary, transferring data ownership and ensuring synchronization are critical when decomposing a monolithic database into microservices. These patterns provide strategies for managing data transitions, maintaining consistency, and defining service boundaries effectively.



In transitioning from a monolithic architecture to microservices, managing data consistency and synchronization is crucial. A common challenge is ensuring a smooth switchover from a monolithic source of truth to a new microservice without disrupting operations. The "tracer write" pattern provides a solution by allowing phased migration, where data is incrementally synchronized between the monolith and the new microservice. This approach involves synchronizing small sets of data and gradually increasing both the data set and the number of consumers relying on the new service.

For instance, when migrating invoice-related data, basic invoice information is first synchronized. As confidence in the synchronization grows, more complex data like contact and payment information is gradually moved. This phased approach reduces the risk of errors during the transition and allows services to choose whether to source data from the monolith or the new microservice depending on their needs.

A critical aspect of this pattern is handling data inconsistency, which can arise when data is duplicated across systems. There are several methods to manage this: writing to one source and synchronizing to the other, sending writes to both sources, or allowing writes to either source with two-way synchronization. However, two-way synchronization is complex and often avoided. The goal is to achieve eventual consistency, where both sources eventually reflect the same data.

Reconciliation processes, such as SQL queries to verify data consistency, are essential to ensure synchronization is functioning correctly. Running the new source of truth without consumers for a period can help verify its reliability.

An example of this pattern in practice is Square's migration of its Order system. Initially, a single Order concept managed workflows for customers, restaurants, and delivery drivers, causing delivery contention among developers. Square created a new Fulfillments service to manage restaurant and delivery data, which became the new source of truth. A background worker was used to copy data from the existing system to the new service, controlled by a feature flag for easy rollback if issues arose.

Synchronization was one-way, with updates made to both systems for relevant data. This approach allowed Square to incrementally migrate consumers to the new service, adding functionality as needed. The eventual switch was seamless, highlighting the effectiveness of incremental migration.

Logical and physical database separation are considerations in this process. Logical separation allows independent changes and information hiding, while physical separation can enhance robustness and reduce resource contention. The decision to split databases or code first depends on specific goals and constraints.

In conclusion, the tracer write pattern and careful synchronization strategies enable effective migration from monolithic to microservice architectures, ensuring data consistency and minimizing disruption.



When considering how to decompose a monolithic system, a key decision is whether to split the database or the application code first. Splitting the database first can reveal issues with performance and transactional integrity early, but it often provides little short-term benefit. This approach is useful if there are concerns about performance or data consistency. However, it is not feasible if the monolith is a black-box system.

Tooling for database changes is limited compared to code refactoring tools. Tools like FlywayDB can help manage schema changes by allowing changes to be captured in version-controlled scripts. This is crucial for maintaining consistency across different environments.

A common practice is to use a repository per bounded context, which helps in understanding which parts of the database are used by different code segments. This separation aids in identifying service boundaries and understanding table coupling, which is essential for future decomposition.

Implementing a database per bounded context aligns with microservices' principles of independent deployability. This approach involves separating databases according to bounded contexts, which can facilitate future transitions to microservices. This pattern is recommended for new systems to allow for flexibility in potential service separation.

Alternatively, many teams split the code first, gaining short-term benefits from new services and later separating the database. This method provides an independently deployable code artifact early but can leave a shared database, posing future challenges.

The monolith can also serve as a data access layer by creating APIs within it. This pattern allows new services to access monolithic data without direct binding, useful when the monolith's data management remains centralized.

When adding new functionality, using multischema storage allows new data to be stored separately, preventing growth of the monolithic database. This pattern supports gradual migration of data into new schemas.

Splitting both code and data simultaneously is a larger step and should be approached cautiously. It’s often better to split either the schema or application tier first to better assess impacts.

Ultimately, the choice between splitting the database or code first depends on specific project concerns, such as performance, data consistency, and the ability to change the monolith. Schema separation is complex, especially with relational databases, and requires careful consideration of service boundaries and data ownership.



In the process of database decomposition, it's crucial to separate tables that are mixed into a single schema. This involves splitting data into distinct tables when they belong to different bounded contexts, as shown in the example of separating customer and finance domains. The challenge arises when multiple services update the same data, such as a customer's status, which can lead to issues with data ownership and consistency.

When splitting tables, we lose the transactional safety provided by a single database, which can lead to data inconsistency. For instance, the separation of the Catalog and Finance services requires moving foreign-key relationships from the database to the code. This transition means that the Finance service must now make service calls to the Catalog service to retrieve album data instead of performing database joins. This change can increase latency, but it can be mitigated by caching or bulk data retrieval.

Data consistency becomes a significant concern when services are separated. Without a single schema, ensuring that references in one service are valid in another becomes challenging. Options to handle this include checking for references before deletion, handling missing data gracefully, or not allowing deletions at all. The choice depends on the specific context and user needs.

When considering breaking foreign-key relationships, it's essential to ensure that you're not separating entities that should remain as a single aggregate. For example, order and order line tables should be kept together if they represent a single business entity.

Static reference data, such as country codes, often presents challenges. A common pattern is to duplicate static data across services, which can be acceptable if the data changes infrequently and is used locally within each service. Concerns about data inconsistency should be evaluated based on how the data is used within each service. If the data is part of inter-service communication, consistency becomes more critical.

Overall, decomposing a database involves careful consideration of data ownership, consistency, and the impact on service interactions. The goal is to maintain clarity and efficiency while ensuring that services can operate independently without significant performance degradation or data integrity issues.



In managing data across services, duplication can be a concern, especially when consistency is needed between systems like Warehouse and Finance. Duplication may be acceptable if it reduces coupling, though it requires a background process to keep data in sync, minimizing inconsistency. This pattern is useful for large datasets that don't require exact consistency, like postal code files.

A dedicated reference data schema can serve as a single source of truth for static data, like country codes. This schema acts as a service interface, allowing cross-schema joins if located on the same database engine. However, changes to this schema can impact multiple services.

Storing small volumes of static data, such as country codes, in a shared library is another approach. This method is used by companies like Stitch Fix for data that changes infrequently. The main drawback is that updates require redeploying all services using the library, potentially causing version discrepancies.

A static reference data service offers another option, serving data like country codes through a dedicated microservice. While some see this as overkill, it's feasible in environments with low service management overhead. The service can hold data in memory, reducing latency, and use events to notify consumers of updates.

Choosing the right approach depends on the need for data consistency and the cost of creating new services. For consistent data across services, a dedicated service is ideal. For simple, infrequent data, a shared library suffices.

When splitting databases, maintaining ACID transactions becomes challenging. ACID properties—atomicity, consistency, isolation, and durability—ensure reliable data storage. However, splitting databases reduces the scope of atomicity, complicating operations like onboarding a customer, where changes spread across multiple databases cannot be handled in a single transaction.

Overall, the choice of strategy should balance the need for consistency, the complexity of managing services, and the operational overhead involved.



In distributed systems, managing changes across multiple services while maintaining atomicity can be challenging. A common approach is using distributed transactions, specifically the two-phase commit (2PC) algorithm. This algorithm involves a voting phase, where a central coordinator asks all involved workers if a state change can occur, followed by a commit phase if all agree. However, 2PC has significant limitations, such as potential inconsistencies due to varying commit times and the complexity of managing distributed locks. These issues can lead to increased latency and system failure modes, making it unsuitable for long operations.

An alternative to distributed transactions is the use of sagas, which coordinate multiple state changes without requiring long-term locks. Sagas break down long-lived transactions (LLTs) into a series of smaller, independent transactions. This approach reduces contention by shortening the duration and scope of locks. While sagas do not provide atomicity at the saga level, they allow for atomicity within each subtransaction.

Sagas require explicit modeling of business processes, which can be beneficial. They also involve handling failures through backward or forward recovery. Backward recovery uses compensating transactions to undo changes, while forward recovery retries transactions, relying on persistent information to continue from the point of failure.

A key challenge with sagas is managing rollback scenarios, as compensating transactions cannot entirely revert a committed transaction. Instead, they perform semantic rollbacks, creating new transactions to undo the effects of the original ones. Reordering steps in a saga can reduce the need for rollbacks by addressing likely failures earlier in the process.

Implementing sagas can be done through orchestrated or choreographed approaches. Orchestrated sagas use centralized coordination and tracking, whereas choreographed sagas rely on decentralized interactions. Each method has its benefits and challenges, and the choice depends on the specific requirements and architecture of the system.

Overall, while distributed transactions like two-phase commits offer a way to maintain consistency across services, their complexity and potential for introducing latency make them less desirable. Sagas provide a more flexible and efficient solution for managing distributed state changes, especially in microservice architectures.



### Summary

In microservices architecture, **sagas** are a pattern used to manage complex transactions across multiple services. There are two primary types: **orchestrated sagas** and **choreographed sagas**.

#### Orchestrated Sagas
- **Central Coordinator**: Uses a central orchestrator to define execution order and trigger compensating actions if necessary. This approach provides visibility into the saga's progress.
- **Order Fulfillment Example**: An Order Processor acts as the orchestrator, coordinating services like payment gateways and handling failures.
- **Benefits**: Centralized modeling aids understanding and onboarding.
- **Downsides**: Increases domain coupling and risks making services anemic by absorbing too much logic into the orchestrator.
- **Avoiding Centralization**: Different services can act as orchestrators for different flows to distribute responsibilities and maintain service functionality.

#### Choreographed Sagas
- **Distributed Responsibility**: Relies on event-driven collaboration among services, promoting a loosely coupled architecture.
- **Event Handling**: Services react to broadcasted events, like an Order Placed event triggering stock reservation by the Warehouse service.
- **Benefits**: Reduces coupling as no service needs to know about others, preventing centralization of logic.
- **Challenges**: Harder to track saga progress and understand the process, requiring a mental model from individual service behaviors.
- **State Tracking**: Use correlation IDs to track saga states through emitted events, possibly with a dedicated service to present the current state.

#### Mixing Styles
- **Hybrid Approach**: Combining orchestration and choreography can suit different business process needs, but clarity in understanding the saga's progress is crucial for managing failures.

#### Orchestration vs. Choreography
- **Team Dynamics**: Orchestrated sagas are manageable within a single team, while choreographed sagas suit multiple teams due to distributed responsibility.
- **Distributed Transactions**: Sagas offer a better alternative to distributed transactions, avoiding their inherent challenges and making business processes explicit.

#### Challenges in Microservices
- **Growth Pains**: As services increase, issues like complexity, latency, and robustness emerge. The number of services is a rough indicator of when these challenges might arise.
- **Incremental Approach**: Decomposing systems incrementally helps manage growth and address emerging issues without fear.

Overall, choosing between orchestration and choreography depends on the specific needs of the business process and team structure, with a focus on maintaining clarity and minimizing coupling.



### Summary of Key Concepts

#### Ownership at Scale
As microservice architectures grow, managing ownership becomes critical. Martin Fowler's ownership models—strong, weak, and collective—apply here. Strong ownership assigns specific teams to services, requiring external changes to be approved. Weak ownership allows changes with prior communication, while collective ownership lets anyone make changes. Problems arise with collective ownership at scale, leading to a chaotic "distributed monolith," as seen in a fintech company that expanded rapidly without clear responsibilities. Strong ownership is often preferred for large-scale projects, allowing teams to focus on specific business domains and maintain expertise.

#### Breaking Changes
Microservices aim for independent deployability, necessitating careful management of changes to avoid breaking contracts with other services. Issues occur when new services disrupt existing functionalities, causing production outages. To manage breaking changes, teams should: 
1. Eliminate accidental changes through explicit schemas.
2. Avoid unnecessary changes by expanding contracts instead.
3. Allow consumers time to migrate by supporting multiple contract versions. 

Two approaches to handling changes include running multiple service versions or supporting multiple contracts within a single service. Effective communication with service consumers is essential to minimize disruptions.

#### Reporting Challenges
Microservices complicate reporting due to scattered data across isolated schemas, unlike monolithic systems with a single database. This issue often arises when decomposing monolithic schemas without considering reporting needs. Stakeholders may still require a unified database for reporting, often expecting SQL access. Solutions involve creating a separate reporting database, decoupled from microservice data storage, allowing for schema design tailored to reporting requirements.

#### Conclusion
Organizations must address ownership, breaking changes, and reporting challenges early in microservice development. Failing to manage these issues can lead to inefficiencies and hinder scalability. Strong ownership models, careful contract management, and dedicated reporting solutions are key to successful microservice architectures.



In transitioning to microservices, one critical aspect is managing data flow into a new schema. Solutions include change data capture systems, using views to project a reporting schema, programmatically copying data, or using intermediary components to populate databases by listening to upstream events. These challenges are explored in more detail in "Building Microservices."

**Monitoring and Troubleshooting:**

Microservices complicate monitoring compared to monolithic applications. With numerous services, identifying problems becomes complex. Traditional binary failure modes are replaced by nuanced issues like a single service failure. Monitoring requires constant attention and adaptation as the architecture grows.

**Potential Issues and Solutions:**

1. **Log Aggregation:** Essential for microservices, log aggregation captures logs centrally for analysis and alert generation. Tools like the ELK stack and Humio are recommended. Implementing log aggregation should be prioritized as it tests organizational readiness for microservices.

2. **Tracing:** Correlation IDs help trace call sequences between services, identifying failures and latency spikes. Distributed tracing tools like Jaeger provide insights into performance, especially for latency-sensitive applications. Service meshes can assist in tracing inbound and outbound calls.

3. **Testing in Production:** Synthetic transactions mimic user behavior to ensure functionality post-deployment. This helps catch issues before real users are affected. Care must be taken to avoid unintended consequences, like accidental real-world actions.

4. **Observability:** Traditional monitoring focuses on known issues, but as systems grow complex, the ability to ask open-ended questions becomes crucial. Tracing and logs provide data for diagnosing unexpected problems. Effective toolchains should facilitate ad hoc querying.

**Developer Experience:**

As services multiply, local development can become resource-intensive. Stubbing services or using remote setups can mitigate this. Tools like Telepresence support hybrid local/remote development for Kubernetes users. Maintaining developer productivity requires ongoing investment and feedback mechanisms.

**Managing Deployments:**

Scaling microservices increases deployment complexity. Manual processes become inefficient. Desired state management ensures the correct number and location of service instances. Kubernetes is the preferred tool, offering automation and scalability. Packaged versions like OpenShift provide additional corporate-friendly features.

In summary, transitioning to microservices involves significant changes in data management, monitoring, troubleshooting, and developer experience. Effective log aggregation, tracing, testing, and observability are crucial for managing the complexity. Tools like Kubernetes facilitate deployment and scaling, but require careful implementation and adaptation to organizational needs.



In the realm of microservice architecture, choosing the right deployment strategy is crucial. While platforms like Kubernetes are popular for managing multiple processes, they may not always be necessary, especially if you only have a few microservices. A serverless-first approach, like Function-as-a-Service (FaaS), can reduce operational overhead significantly by allowing developers to focus solely on code. This approach is particularly beneficial for teams already using public cloud services, as it avoids the complexity of container-based platforms unless needed.

End-to-end testing in microservices presents challenges due to the extensive scope required to cover multiple services. These tests can become time-consuming and difficult to manage, often leading to false negatives due to environmental issues. To mitigate this, it's advisable to limit the scope of functional tests to within teams, use consumer-driven contracts (CDCs) to define expectations, and implement automated release remediation and progressive delivery techniques. By doing so, teams can focus on reducing the impact of production issues rather than just preventing them.

Balancing local and global optimization is another challenge in microservice environments. Teams often make decisions based on local needs, which can lead to inefficiencies and duplicated efforts across an organization. To address this, organizations should foster cross-team communication and decision-making processes. This can be achieved by forming technical groups or using informal proposal systems to share and refine ideas. The goal is to find the right balance between team autonomy and organizational consistency.

Robustness and resiliency are critical in distributed systems, which are prone to network issues and service failures. As the number of services grows, so does the likelihood of encountering these problems. To enhance resiliency, it's essential to evaluate each service call and implement strategies to handle potential failures, such as cascading failures and back pressure.

In summary, the successful adoption of microservices involves careful consideration of deployment strategies, testing scopes, decision-making processes, and system resiliency. By leveraging serverless technologies, refining testing practices, fostering cross-team collaboration, and preparing for distributed system challenges, organizations can optimize their microservice architecture for both efficiency and reliability.



In the realm of microservices, understanding potential failures and having strategies for recovery are crucial. Implementing solutions like asynchronous communication, sensible time-outs, and circuit breakers can enhance system resiliency. Resiliency extends beyond patterns; it involves building an adaptive organization ready to tackle unforeseen issues. Documenting production issues is vital to avoid repeated problems. For deeper insights, resources like "Building Microservices" and "Release It!" are recommended.

A common issue with microservices is the existence of "orphaned services"—services running without clear ownership or responsibility. This can lead to challenges when changes are needed, especially if the source code is misplaced. This problem often arises in organizations with long-standing microservices where the original developers have left. Collective ownership and restricted technology choices can mitigate this issue. Additionally, creating service registries to track metadata and ownership can be beneficial.

The Financial Times' Biz Ops tool exemplifies a robust solution by collating information about microservices and calculating a System Operability Score to ensure services are operable. This tool highlights the importance of maintaining up-to-date records and assigning ownership to prevent orphaned services.

Microservices adoption should be incremental, allowing organizations to adapt and find what works best in their context. It's crucial to avoid blindly copying others and instead make informed decisions based on specific problems and contexts. Not every organization needs microservices; the key is determining if they fit your needs and how to start the journey effectively.

In summary, while microservices present challenges, they also offer opportunities for improved scalability, resilience, and autonomy. Organizations must balance addressing potential problems before they arise with focusing on issues that may never occur. By being aware of common pitfalls and solutions, organizations can better navigate the complexities of microservices architecture.


# Summary

The text provides a comprehensive exploration of strategies and patterns for migrating from monolithic applications to microservices, emphasizing the importance of incremental migration, organizational change, and domain-driven design. Key concepts include:

## Migration Strategies

1. **Incremental Migration**: Emphasizes the importance of gradually transitioning functionalities to microservices to minimize risks and disruptions.
2. **Strangler Fig Pattern**: A method for incrementally replacing parts of a monolithic system with microservices by routing calls through a proxy.
3. **Branch by Abstraction**: Involves creating an abstraction layer to allow new implementations to be developed and tested in parallel with existing ones.

## Patterns and Techniques

1. **Data Synchronization**: Techniques such as the tracer write pattern and change-data capture are used to ensure data consistency between old and new systems during migration.
2. **Database Patterns**: Includes strategies like database per bounded context, database wrapping service, and database view patterns to manage data in a microservices architecture.
3. **Event-Driven Design**: Utilizes events for reducing domain coupling and updating external databases, promoting eventual consistency.

## Organizational Change

1. **Kotter’s 8-Step Process**: Guides organizations in anchoring new approaches in the culture, establishing urgency, and creating a vision for change.
2. **Team Reorganization**: Suggests reorganizing teams to improve autonomy and align them with microservices principles, such as embedding operations within delivery teams.

## Challenges and Solutions

1. **End-to-End Testing**: Identifies issues with microservices testing and suggests solutions like consumer-driven contracts and limiting automated test scopes.
2. **Ownership and Orphaned Services**: Discusses the challenges of service ownership at scale and proposes solutions for managing orphaned services and ensuring clear ownership lines.

## Microservices Benefits and Drawbacks

1. **Advantages**: Includes improved scalability, resilience, and faster time to market.
2. **Drawbacks**: Highlights issues such as increased complexity, the potential for unclear service boundaries, and the need for effective monitoring and troubleshooting.

## Tools and Technologies

1. **DevOps and Observability**: Stresses the importance of DevOps practices and tools for monitoring, logging, and tracing in microservices environments.
2. **Database Management**: Tools like SchemaSpy and FlywayDB assist in managing database changes during the transition.

## Decision-Making and Prioritization

1. **Reversible vs. Irreversible Decisions**: Encourages careful consideration of decisions during migration, emphasizing the need for reversible strategies.
2. **Prioritizing Service Decomposition**: Uses domain models to prioritize which services to decompose first, considering both business and technical factors.

Overall, the text serves as a guide for organizations looking to transition from monolithic applications to microservices, providing strategies, patterns, and insights to navigate the complexities of such a transformation effectively.


## Summary

Sam Newman is an independent developer, architect, writer, and speaker with a focus on cloud computing, continuous delivery, and microservices. He is known for his best-selling book, *Building Microservices*, published by O’Reilly. When not working, he enjoys spending time in the East Kent countryside.

The cover of *Monolith to Microservices* features the stinging cauliflower jellyfish (*Drymonema dalmatinum*), a subtropical species found in the Central Atlantic Ocean and the Mediterranean Sea. First identified in 1880 off Croatia, sightings have been rare since WWII. A notable sighting occurred in 2014 near Italy. This jellyfish, nicknamed “the big pink” due to its brownish-pink color and large size (up to three feet in diameter), belongs to the class Scyphozoa, named for its cup-like body shape. Its subphylum, Medusozoa, references its long, snake-like tentacles.

The stinging cauliflower jellyfish reproduces both sexually and asexually. In sexual reproduction, males and females release sperm and eggs into the water, which then form polyps. These polyps reproduce asexually by budding. This jellyfish primarily feeds on other jellyfish, like the moon jellyfish, and is exclusively found in saltwater environments.

O’Reilly’s book covers often feature animals that are endangered or significant to the ecosystem. The cover illustration for this book is by Karen Montgomery, based on an image from *Medusae of the World*. The fonts used include Gilroy Semibold, Guardian Sans, Adobe Minion Pro, Adobe Myriad Condensed, and Dalton Maag’s Ubuntu Mono.
