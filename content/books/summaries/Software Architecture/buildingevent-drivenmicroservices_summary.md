
# Summary of "Building Event-Driven Microservices" by Adam Bellemare

## Introduction
Adam Bellemare's book, "Building Event-Driven Microservices," explores the architecture and implementation of microservices that leverage organizational data at scale. The book is a guide for those looking to understand the intricacies of event-driven systems, offering insights into both theoretical and practical aspects.

## Key Concepts

### Event-Driven Microservices
Event-driven microservices are designed to handle events as the primary means of communication between services. This architecture aligns closely with Domain-Driven Design, emphasizing bounded contexts and domain models to ensure services meet business requirements effectively.

### Communication Structures
The book delves into various communication structures, including synchronous and asynchronous methods. Asynchronous event-driven microservices are highlighted for their ability to improve data communication and support business changes.

### Event Streams
Events serve as the basis of communication, with event streams providing a single source of truth. Consumers model and query data independently, enhancing data accessibility across the organization.

## Fundamentals

### Building Topologies
Microservice and business topologies are discussed, focusing on the structure and content of events. The book outlines different event types, such as unkeyed, entity, and keyed events, and explains how to materialize state from these events.

### Event Brokers
Event brokers power microservices by storing and serving events. The distinction between event brokers and message brokers is made clear, emphasizing the importance of consuming from immutable logs to maintain a single source of truth.

## Integration and Processing

### Data Liberation
Integrating event-driven architectures with existing systems involves data liberation, converting data to events. Various patterns and frameworks are explored, such as change-data capture logs and outbox tables.

### Stateless and Stateful Processing
The book covers stateless topologies, transformations, and partition strategies. It also addresses deterministic stream processing, including timestamp synchronization and handling out-of-order events.

## Advanced Topics

### Workflow Patterns
Choreography and orchestration patterns are examined for building workflows with microservices. The saga pattern is introduced for managing distributed transactions.

### Function-as-a-Service (FaaS)
Designing microservices using FaaS involves ensuring strict membership to bounded contexts and managing state through event-driven or direct-call patterns.

### Testing and Deployment
Testing strategies for event-driven microservices include unit testing, integration testing, and schema evolution testing. Deployment patterns such as rolling updates and blue-green deployments are discussed to ensure smooth transitions.

## Conclusion
The book concludes by reinforcing the importance of communication layers, business domains, and bounded contexts. It emphasizes the significance of shareable tools, infrastructure, and schematized events in achieving a single source of truth. Overall, Bellemare provides a comprehensive guide to building and deploying event-driven microservices, aiming to fill gaps left by other resources in the field.

### Final Words
Bellemare's work is a culmination of personal experiences and extensive research, offering a deep dive into the world of event-driven microservices, making it a valuable resource for practitioners in the field.



### Summary

Event-driven microservice architectures represent a significant evolution in system design, offering more than just asynchronous messaging between systems. Enabled by recent technological advancements, these architectures leverage distributed, fault-tolerant, high-capacity event brokers, and the convergence of big data with near-real-time processing needs. The ease of containerization and resource management has facilitated the deployment of microservices, reshaping business operations and communication.

#### Key Concepts

- **Event-Driven Microservices**: These systems communicate by issuing and consuming events, allowing for persistent data that can be accessed multiple times. This differs from traditional message-passing systems where messages are destroyed upon consumption.

- **Domain-Driven Design (DDD)**: This approach is crucial for building event-driven microservices, focusing on aligning microservices with business requirements rather than technological needs. Key concepts include:
  - **Domain**: The problem space a business addresses.
  - **Subdomain**: Specific components of the main domain, often reflecting organizational structure.
  - **Domain Model**: An abstraction of the domain for business purposes.
  - **Bounded Context**: Logical boundaries within subdomains that define inputs, outputs, and data models.

- **Microservice Architecture**: Microservices are small, purpose-built services that fulfill business goals. They consume input event streams, apply business logic, and may emit output events. The architecture forms an interconnected graph of activities across an organization.

#### Implementation Strategies

- **Aligning with Business Requirements**: Bounded contexts should be built around business requirements to enable teams to implement solutions autonomously, reducing interdependencies and fostering agility. This approach contrasts with aligning on technical requirements, which can create complex dependencies and hinder flexibility.

- **Communication Structures**: Effective communication within an organization is essential. Business communication structures dictate interactions between teams and departments, driven by their respective goals and responsibilities.

#### Challenges and Considerations

- **Trade-offs**: While aligning on business requirements reduces dependencies, it may lead to code duplication and similar data access patterns. However, the benefits of reduced coupling often outweigh these drawbacks.

- **Team Expertise**: Vertical teams may need full-stack expertise, necessitating operational support for common requirements and cross-team collaboration for specialized skills.

#### Conclusion

Event-driven microservices offer a transformative approach to system architecture, allowing businesses to adapt quickly to changing requirements. By focusing on domain-driven design and aligning microservices with business needs, organizations can achieve greater flexibility and efficiency.

For further exploration of these concepts, O’Reilly Media provides extensive resources, including books and online learning platforms, to support companies in adopting these innovative architectures.



### Summary

The text explores the relationship between communication structures and software engineering, focusing on how they impact system design and business operations. It introduces key concepts such as implementation communication structures, data communication structures, and the influence of Conway's Law on system design.

#### Implementation Communication Structures
Implementation communication structures formalize business processes and system design. They often require iterative modifications to meet evolving business requirements, typically resulting in monolithic applications where business logic is communicated internally. This structure supports its own bounded context but struggles with providing access to domain data across different contexts due to weak data communication capabilities.

#### Data Communication Structures
Data communication structures facilitate data exchange within a business. Traditionally, these structures have been neglected in software implementations, often leading to ad hoc solutions. This can result in issues like data consistency problems, strong coupling between implementations, and difficulties in scaling and maintaining systems. Organizations may attempt to mitigate these issues with shared databases or batch processes, but these solutions have their own drawbacks.

#### Conway’s Law
Conway’s Law suggests that organizations design systems that mirror their communication structures. This law highlights the challenges of accessing domain data across different organizational contexts, often discouraging the creation of new products and encouraging monolithic designs.

#### Challenges in Traditional Computing
In traditional computing, accessing data from other systems is challenging, especially at scale. Teams often face decisions about whether to integrate new functionalities into existing services or create new ones. Each option has its pros and cons, with monolithic architectures offering ease of integration but leading to tight coupling and reduced modularity. The lack of a robust data communication structure exacerbates these issues, creating technical dependencies and data inconsistencies.

#### Event-Driven Communication Structures
The text advocates for event-driven communication structures as an alternative. These structures decouple data production and ownership from access, using event streams as the basis for communication. Events serve as both data storage and communication means, providing a single source of truth. This model shifts data access and modeling responsibilities to consumers, allowing for improved data communication across an organization.

#### Benefits of Event-Driven Structures
Event-driven structures enhance data accessibility and support business communication changes. They allow new services to access necessary data from canonical event streams without relying on point-to-point connections, fostering loose coupling and high cohesion. This approach enables organizations to leverage their data more effectively, supporting dynamic business needs and reducing technical dependencies.

In summary, the text highlights the limitations of traditional communication structures in software engineering and proposes event-driven architectures as a solution to improve data accessibility and system design flexibility.



Event-driven microservices offer significant advantages, including flexibility, scalability, and technological adaptability. They align neatly with bounded contexts, allowing for easy rewriting and scaling of individual services. This architecture supports continuous delivery and high testability due to fewer dependencies compared to monolithic structures.

Event-driven microservices communicate asynchronously, decoupling services from specific implementations and facilitating data schema management. This enables businesses to quickly adapt to changing requirements without being hindered by data access barriers.

A practical example involves a team adapting to new business requirements by spinning up a new microservice that ingests data from event streams. This approach minimizes technical issues like data sourcing and API implementation, allowing teams to reorganize ownership and reduce cross-team dependencies.

In contrast, synchronous microservices, common in service-oriented architectures, face challenges such as point-to-point couplings, dependent scaling, and complex service failure handling. These issues can lead to excessive connections and difficulties in tracing business logic fulfillment.

Despite these challenges, synchronous microservices have benefits, such as favorable data access patterns for direct request-response couplings and easier operation tracing. They are often used in web and mobile experiences, where timely responses are crucial. However, hybrid architectures, combining synchronous and asynchronous solutions, are typically more effective.

Event-driven microservices rely on event brokers for communication, with services acting as consumers or producers of event streams. These services can be stateless or stateful and may include synchronous APIs. The structure of an event, typically in a key/value format, is crucial for accurately describing business occurrences.

Events can be unkeyed, entity-based, or keyed. Entity events, which describe the properties and state of an entity at a given time, are vital for materializing state within microservices. This process involves upserting events into a key/value table to maintain the most recent state, illustrating the table-stream duality fundamental to event-driven architectures.

Overall, event-driven microservices provide a robust framework for modern software development, enabling organizations to harness events effectively and adapt to evolving business landscapes.



Event-driven microservices utilize a pattern where data changes are logged as events in an immutable append-only log. This log can be replayed to reconstruct the state of a system, allowing microservices to communicate state changes through events without direct coupling. Events in the log can be inserted, updated, or deleted, with deletions represented by tombstones—keyed events with null values. To manage log size, event brokers perform compaction, retaining only the most recent event for each key.

Event-driven architectures require stateful processing, as business logic often depends on historical data. For example, retail businesses need to track inventory and customer interactions. Event data definitions and schemas are crucial for consistent communication between services, with tools like Apache Avro and Protobuf facilitating schema evolution and data conversion.

Each event stream is produced by a single microservice, ensuring a clear source of truth and enabling data lineage tracing. Event brokers are central to these architectures, providing scalable, durable, and high-performance platforms for event production and consumption. They support partitioning for parallel processing, strict ordering, immutability, indexing, infinite retention, and replayability.

Choosing an event broker involves considering support tools, hosted services, client libraries, community support, and storage options. Event brokers differ from message brokers in that they provide a single source of truth through an immutable log, whereas message brokers handle transient messages.

Consumers access events via an append-only log, using offsets to track their position. They can consume data as streams or queues, depending on the broker's capabilities. Event brokers serve as the single source of truth, requiring cultural shifts in organizations to adopt event-driven practices.

Microservices management at scale involves containerization and virtualization, with Docker popularizing container use. Containers offer isolation with minimal overhead, leveraging host OS resources. This setup simplifies deployment and management across diverse environments.

Overall, event-driven microservices facilitate scalable, decoupled systems that rely on event brokers for state management and communication, with careful selection and management of infrastructure components being key to successful implementation.



### Summary

**Containerization and Security**  
Containers share access to the host machine's OS, raising security concerns, especially with shared tenancy models in cloud computing. Vulnerabilities in the kernel can affect all containers on a host.

**Virtual Machines (VMs) and Microservices**  
VMs offer full isolation with a self-contained OS, providing higher security than containers but at a higher cost. Efforts to make VMs more efficient include technologies like Google’s gVisor, Amazon’s Firecracker, and Kata Containers. These advancements may make VMs a competitive alternative for security-focused microservices.

**Managing Containers and VMs**  
Container management systems (CMSes) like Kubernetes, Docker Engine, and Amazon ECS manage container deployment and resource allocation. Microservices should support vertical and horizontal scaling. Kubernetes' pod concept allows for coordinated deployment of multiple containers. VM management is supported but more limited compared to containers.

**Microservice Tax**  
The microservice tax includes costs associated with managing and operating microservice architecture tools. These costs can be centralized for efficiency or managed independently by teams, which can lead to overhead and fragmented tooling. Open source and hosted services are reducing these costs.

**Event-Driven Microservices**  
Event brokers provide real-time event streams for microservices. The chapter discusses managing state in a distributed event-driven environment.

**Communication and Data Contracts**  
Effective communication requires a common understanding between message producers and consumers. In event-driven systems, events are messages that must be accurately described. Data contracts define the data format and logic, ensuring consistency and usability across systems.

**Schema Definition and Evolution**  
Explicit schemas define data contracts, providing stability and preventing uncontrolled changes. Schema evolution allows for updates without disrupting services. Compatibility types include forward, backward, and full compatibility, enabling independent updates for producers and consumers.

**Code Generator Support**  
Code generators convert event schemas into class definitions, ensuring data type adherence and reducing the risk of data mishandling. This supports consistent data quality across services.

**Handling Breaking Schema Changes**  
Breaking changes require early communication and coordination with consumers. Options include managing both old and new schemas or migrating entities to a new schema format. The goal is to minimize complexity and ensure consistent data processing.



In event-driven architectures, managing schema definitions is crucial. The producer should handle divergent schemas to maintain consistency, requiring reprocessing of source data to align old and new business entities. This approach ensures clarity across the organization and aids in forensic investigations. 

For breaking schema changes, create a new event stream for new events, notifying consumers to adapt. Avoid mixing incompatible event types within a stream to maintain clear definitions. Over time, old streams can be purged once consumers catch up.

Selecting an event format is vital. Strongly defined formats like Avro or Protobuf are recommended over JSON, which lacks full schema evolution support. These formats support controlled schema evolution, essential for maintaining isolation between microservices and reducing interteam communication.

Best practices for event design include:

1. **Truthful Event Definitions**: Events should fully describe the occurrence, serving as the single source of truth without needing external data consultation.

2. **Singular Event Definition per Stream**: Each stream should represent a single logical event to avoid schema validation issues.

3. **Narrow Data Types**: Use specific data types to prevent ambiguity and reduce errors. Avoid using strings for numeric values or enums, and integers for booleans.

4. **Single-Purpose Events**: Avoid adding type fields that overload event meanings. This increases complexity and makes schema evolution difficult. Events should focus on a single business action.

5. **Minimize Event Size**: Keep events small and relevant. Large events should only contain necessary data, and pointers to external data should be used sparingly to avoid multiple sources of truth.

6. **Involve Consumers in Design**: Collaborate with prospective consumers to clarify requirements and ensure the data contract meets business needs.

7. **Avoid Events as Semaphores**: Events should not merely signal occurrences but provide complete results to prevent consistency issues.

High-quality events have explicit, evolvable schemas and clear triggering logic. Implicit schemas can lead to failures and misinterpretations, especially as organizations grow. Events should be narrowly focused, representing specific business occurrences to support scalable, event-driven architectures.



Transitioning to an event-driven architecture involves integrating existing systems, often including monolithic relational databases and point-to-point connections. This shift is crucial for businesses with legacy systems, as it allows for data liberation—making necessary domain data available in event streams for consumption by various systems. Data liberation creates a single source of truth and reduces direct coupling between systems, enabling microservices to consume data without relying on legacy data stores.

**Data Liberation:**

Data liberation involves identifying and publishing cross-domain data sets to event streams, facilitating a migration strategy for event-driven architectures. This process ensures that data required by multiple subdomains is accessible from a central location, allowing for standardized data access across the organization and eliminating direct dependencies on underlying data systems.

**Challenges and Compromises:**

Maintaining synchronization between data sets and their event streams is essential, though eventual consistency is often acceptable due to event propagation latency. Legacy systems may not rebuild data from event streams and often maintain their own backup mechanisms. Refactoring legacy systems can be challenging due to limited developer support, high costs, and potential risks. However, data liberation patterns can extract necessary data, creating unidirectional event-driven architectures where legacy systems do not consume event streams.

**Data Liberation Patterns:**

1. **Query-based:** Extracts data by querying the underlying state store. Suitable for any data store, this method involves bulk loading for historical data and incremental updates for changes.

2. **Log-based:** Follows an append-only log for changes, applicable to data stores that maintain modification logs.

3. **Table-based:** Utilizes a table as an output queue, with data pushed and then emitted to event streams.

Each pattern should produce events in sorted timestamp order, reflecting the actual occurrence of events.

**Frameworks and Anti-patterns:**

Centralized frameworks like Kafka Connect, Apache Gobblin, and Apache NiFi facilitate data extraction into event streams. However, they may inadvertently expose internal data models, increasing system coupling. It's crucial to ensure internal data models remain isolated and to use explicit schemas for liberated data to prevent downstream incompatibilities.

**Query-Based Updating:**

This method offers customizability and allows for different polling periods, providing isolation from internal data models via views. However, it requires an updated-at timestamp for incremental updates and may miss hard deletions. Changes in data set schemas can lead to brittle dependencies with output event schemas.

In summary, transitioning to an event-driven architecture requires careful integration of legacy systems, focusing on data liberation to create a cohesive, standardized data ecosystem. This approach supports scalability and flexibility, allowing businesses to evolve their domain models and meet new requirements without disrupting existing operations.



### Summary

**Challenges with Query-Based Data Liberation:**
- Querying system resources can cause delays; read-only replicas can help but increase costs and complexity.
- Variable query performance due to data changes can lead to race conditions.

**Change-Data Capture (CDC) Logs:**
- CDC logs, such as MySQL's binary logs and PostgreSQL's write-ahead logs, track data changes over time.
- Not all data stores support immutable logging or have connectors for data extraction.
- CDC is suitable for relational databases with comprehensive change logs.
- Tools like Debezium and Maxwell can read binary logs and produce records for systems like Apache Kafka.

**Benefits of Using CDC Logs:**
- Hard deletions can be tracked directly.
- Minimal impact on data store performance.
- Low-latency updates as changes are quickly propagated.

**Drawbacks of CDC Logs:**
- Internal data models are exposed in changelogs.
- Denormalization may need to occur outside the data store, complicating data handling.
- Schema changes in the data store may not align with event schema evolution rules.

**Outbox Tables:**
- Outbox tables store notable data changes, ensuring consistency between internal tables and event streams.
- Changes are bundled into a single transaction to prevent divergence.
- Outbox pattern requires modifications to the data store or application layer.

**Built-in Change-Data Tables:**
- Some databases offer CDC tables for auditing, which can be queried to produce event streams.

**Performance Considerations:**
- Outbox tables add load to the data store; the impact varies based on data store size and load.

**Isolating Internal Data Models:**
- Outbox tables can isolate internal data models from downstream consumers, reducing operational overhead.
- Eventification can convert normalized data into single event updates.

**Schema Compatibility:**
- Schema serialization can be done before or after writing to the outbox table.
- Pre-serialization ensures data consistency but may impact performance.
- Post-serialization can lead to incompatible data in the outbox, requiring manual intervention.

**Benefits of Outbox Tables:**
- Supports multilanguage environments.
- Allows schema validation before insertion.
- Isolates internal data models and enables denormalization.

**Drawbacks of Outbox Tables:**
- Requires application code changes.
- Can impact business process performance.
- May affect data store performance.



Data liberation is crucial for creating a mature data communication layer in organizations, enabling decoupled products and services. Legacy systems often hold core business models, requiring strategies to extract and transform this data efficiently. Common approaches include using change-data capture (CDC) methods like triggers, outbox tables, and centralized frameworks.

**Triggers** are a traditional method for capturing change-data in relational databases. They automatically execute on specific conditions, capturing row-level changes to audit tables. While triggers are supported by most databases and customizable, they can introduce significant performance overhead, complexity in change management, and scaling issues. Triggers execute inline with database actions, consuming resources and potentially leading to unpublishable events if schema compatibility is not maintained.

**Outbox tables** and **CDC logs** offer alternative strategies. Outbox tables store events separately, reducing coupling with internal data models. However, they require careful schema management to ensure compatibility with output event streams. CDC logs capture data definition changes post-factum, which can impact downstream consumers if not managed properly.

**Data definition changes** pose challenges in a data liberation framework. Alterations like adding or removing columns can disrupt schema compatibility, necessitating agreement on new data contracts between producers and consumers. Integrating these changes depends on the CDC pattern used, with some patterns detecting changes only after implementation.

**Event sinking** involves consuming event data and inserting it into data stores, useful for integrating non-event-driven applications. This process can be managed through centralized frameworks like Kafka Connect or standalone microservices. Centralized frameworks offer low-overhead processes, but they can create dependencies between teams, complicating management as changes scale.

**Centralized frameworks** can lead to reliance on connectors, hindering the transition to event-driven architectures. It's crucial to minimize CDC framework usage and encourage teams to implement their own change-data capture methods. This fosters an "event-first" mindset, promoting active participation in the event-driven ecosystem and reducing cross-team dependencies.

Ultimately, moving to an event-driven architecture requires investment in the data communication layer, ensuring data quality and reliability. Organizations must shift their thinking to consider the impact of liberated data, establishing clear service-level agreements on schemas, data models, and event correctness. By doing so, they can effectively utilize the communication layer for developing new products and services, leveraging the full potential of their data assets.



### Event Stream as a Source of Truth

Event streams serve as a central source of truth, requiring producers to collaborate with consumers to maintain high-quality, schema-compatible data streams. Reactive strategies, where data owners have little control over data production, often lead to broken schemas and unsustainable practices. Organizational culture plays a crucial role in the success of event-driven architectures, emphasizing the importance of clean and reliable event streams.

### Event-Driven Microservices

Event-driven microservices typically follow a three-step process: consume an event, process it, and produce output events. These microservices register with consumer groups and continuously poll for new events. The core processing involves applying business logic and determining which events to emit.

### Stateless Topologies

Microservice topologies consist of sequential operations like filters, routers, and transformations. Transformations handle business logic by processing single events and emitting output. Common transformations include filtering, mapping, and custom logic applications.

### Branching, Merging, and Repartitioning Streams

Branching involves routing events to new streams based on properties, while merging combines multiple streams into one. Repartitioning adjusts event streams for parallelism or data locality, ensuring events with the same key are processed together.

### Copartitioning

Copartitioning aligns event streams with the same partition count and logic, crucial for stateful processing like streaming joins. This ensures events for a given key are processed together, maintaining data locality.

### Partition Assignment

Partitions are assigned to consumer instances using strategies like round-robin, static, or custom assignments. Round-robin distributes partitions evenly, while static assignments avoid rebalancing for stateful data. Partition assignors ensure balanced distribution and copartitioning compliance.

### Handling Failures

Stateless processing failures are managed by adding new instances to consumer groups without state restoration. This allows immediate resumption of event processing.

### Deterministic Stream Processing

Microservices process events from multiple streams, handling out-of-order and late arrivals. Deterministic processing ensures consistent results, crucial for reprocessing due to bugs or logic changes. Techniques like timestamps, event scheduling, and watermarks aid in managing event order and timing.

### Conclusion

Event-driven microservices involve consuming, processing, and emitting events with a focus on maintaining data quality and schema compatibility. Strategies for branching, merging, and repartitioning streams ensure efficient processing, while deterministic processing addresses challenges like out-of-order events. Understanding these concepts is vital for building robust event-driven architectures.



### Summary of Event-Driven Microservices and Deterministic Processing

**Deterministic Processing in Microservices:**
Event-driven microservices operate in two main states: processing events in near-real time or catching up on past events. The aim of deterministic processing is to ensure that a microservice produces the same output regardless of the processing time. However, workflows involving current wall-clock time or querying external services may introduce nondeterminism.

**Achieving Determinism:**
To strive for deterministic processing, several components are crucial: consistent timestamps, well-selected event keys, partition assignments, event scheduling, and strategies for handling late-arriving events.

**Importance of Timestamps:**
Timestamps are essential for maintaining order across distributed systems. They help compare events and ensure correct processing order. Key timestamp types include:

- **Event time:** The local timestamp assigned by the producer.
- **Broker ingestion time:** The timestamp assigned by the event broker.
- **Consumer ingestion time:** The time when the event is ingested by the consumer.
- **Processing time:** The wall-clock time when the event is processed.

**Synchronizing Timestamps:**
Synchronization is achieved using Network Time Protocol (NTP) servers, which can provide accurate local system clocks. However, synchronization across the internet may introduce larger skews, and NTP is prone to failures.

**Processing with Timestamped Events:**
Events must be processed in a consistent temporal order. Using offsets for comparison works only within a single event stream partition. For accurate processing, timestamps should be based on local event time or broker ingestion time if the former is unreliable.

**Event Scheduling:**
Event scheduling ensures that events are processed in the correct order. It involves selecting the next events to process from multiple input partitions based on timestamps. Custom event schedulers can be implemented in some frameworks, but care must be taken to avoid nondeterminism.

**Request-Response Calls:**
Non-event-driven requests to external systems can introduce nondeterministic results. The impact of this depends on the specific business requirements.

**Watermarks:**
Watermarks track event time progress and declare that all data of a given event time has been processed. They are used in frameworks like Apache Spark and Flink to coordinate event time across nodes.

**Stream Time:**
Stream time, used by Apache Kafka Streams, maintains the highest timestamp of processed events. It ensures events are processed in a depth-first manner, with each subtopology maintaining its own stream time.

**Parallel Processing:**
In parallel processing, watermarks and stream time help coordinate event time across multiple consumer instances. Repartitioning events uses internal event streams to ensure all events of the same key are processed together.

This summary highlights the key aspects of achieving deterministic processing in event-driven microservices, emphasizing the importance of timestamps, synchronization, and scheduling in maintaining order and consistency.



### Summary

In deterministic stream processing, handling out-of-order and late-arriving events is crucial. The text discusses how events in real-world scenarios often arrive out of order due to various factors such as network latency, multiple producers, and repartitioning of event streams. For instance, in a bank account application, processing a deposit followed by a withdrawal in the wrong order could lead to incorrect overdraft charges.

**Repartitioning and Subtopologies:**
Repartitioning is a logical reshuffling of event data, allowing parallel processing across subtopologies. Each subtopology maintains its own stream time, and watermarks can be used to manage out-of-order events.

**Handling Out-of-Order Events:**
Out-of-order events occur when their timestamps are not in sequence. This can happen due to sourcing from out-of-order data or multiple producers writing to multiple partitions, leading to time skew and unbalanced partition sizes. Developers must decide whether to prioritize latency or determinism based on business requirements.

**Late Events:**
An event is late if it arrives after the consumer's deadline. Handling late events involves strategies like dropping the event, waiting for a grace period, or updating aggregations upon late arrival. The choice depends on business priorities and the importance of the data.

**Windowing Functions:**
Windowing helps group events by time for analysis. There are three main types: 
- **Tumbling Windows:** Fixed-size, non-overlapping.
- **Sliding Windows:** Fixed-size with incremental steps.
- **Session Windows:** Dynamic size, ending with inactivity.

Each window type must handle out-of-order events, deciding how long to wait before considering them too late.

**Reprocessing vs. Near-Real-Time Processing:**
Reprocessing involves replaying events from a specific point in time, crucial for stateful consumers using event time. It requires careful planning of consumer offsets and consideration of data volume and processing time. Reprocessing should be designed to avoid unwanted actions, such as redundant user notifications.

**Intermittent Failures:**
Connectivity issues between producers and brokers can delay event publication, causing late events in near-real-time processing. Robust late-event handling logic or a predetermined wait time can mitigate this.

In conclusion, achieving full determinism in unbounded streams is challenging due to inherent unpredictabilities. A balance between latency and correctness, tailored to business needs, provides the best tradeoff. Developers must ensure their microservices handle out-of-order and late events effectively, considering business impacts and technical constraints.



# Summary of Stateful Streaming in Event-Driven Microservices

Stateful streaming is essential for event-driven microservices, which often require maintaining some degree of state for processing. This involves understanding how to build, manage, and utilize state effectively.

## Key Concepts

- **Materialized State**: A projection of events from an immutable source event stream.
- **State Store**: A mutable storage where a service’s business state is kept.

Both concepts are crucial in stateful microservices, enabling the use of business entities and storing business state and intermediate computations.

## Storage Options

Microservices can store state internally or externally:

- **Internal State Storage**: Data is stored within the same container as the processor, either in memory or on disk. This method ties the state store to the microservice instance and allows for the use of high-performance key/value stores like RocksDB.

- **External State Storage**: Data is stored outside the processor’s container, often across a network. This approach is suitable for larger datasets and allows for shared technology and resources.

## Changelog Event Streams

A changelog is a record of all changes made to the state store, allowing for state rebuilding and checkpointing event processing progress. Changelogs can be compacted to store only the most recent key/value pairs, optimizing performance, especially for internal state stores.

## Materializing State

- **Internal State Stores**: Coexist with the microservice’s business logic, allowing for efficient state management and recovery. High-performance options like SSDs are used to handle large data sets.

- **Global State Stores**: Provide a complete copy of event data to each microservice instance, useful for common data sets but not suitable for driving event-driven logic due to potential duplicate outputs.

## Advantages of Internal State

- **Scalability**: Offloads scalability requirements to event brokers and compute resources, allowing developers to focus on application logic.
- **Performance**: Local disk and memory provide high throughput and reduce data-access bottlenecks.

## Disadvantages of Internal State

- **Limited to Runtime-Defined Disk**: Changes to disk size or quantity require service downtime.
- **Wasted Disk Space**: Cyclical data patterns can lead to unused reserved disk space.

## Scaling and Recovery

- **Changelogs**: Allow for quick state recovery by reloading from the changelog topic.
- **Hot Replicas**: Provide high availability and enable zero downtime during instance failures.

## External State Stores

- **Advantages**: Offer full data locality and leverage familiar technology, reducing development time.
- **Drawbacks**: Require independent management and can suffer from performance loss due to network latency.

In conclusion, stateful streaming in microservices involves careful consideration of storage options, changelog management, and the trade-offs between internal and external state stores. Proper implementation ensures efficient processing, scalability, and recovery in event-driven architectures.



External data stores often incur higher financial costs than internal ones due to charges based on transactions, data size, and retention periods. On-demand pricing models can mitigate some costs but must meet performance needs. Full data locality, while beneficial, can present challenges like race conditions and nondeterministic behavior due to independent stream processing by microservices.

Scaling and recovery with external state stores involve adding instances with credentials, while scaling the state store depends on the chosen technology. Strategies for building state include rebuilding from source streams, using changelogs, and creating snapshots. Rebuilding from source streams involves consuming events from the beginning, which is time-consuming but reproducible. Changelogs can repopulate external stores, although network latency can be an issue. Snapshots offer a simpler backup and restoration process, with idempotent states allowing for more flexible consumer offsets.

Rebuilding state stores is common for updating microservices' internal states, ensuring alignment with new business logic. It involves stopping the service, resetting input stream offsets, and rebuilding the state. This process is time-consuming but essential for disaster recovery testing. Migrating state stores can be quicker but riskier, especially with complex data changes. Strict testing is crucial to avoid inconsistencies.

Effectively once processing ensures consistent updates despite failures, often equated with exactly once processing. Idempotent writes, supported by brokers like Apache Kafka, prevent duplicate events. Transactions in Kafka allow atomic writing of multiple events, accommodating complex business requirements. In the absence of transactions, deduplication strategies involve generating unique IDs for events to identify duplicates.

The stock accounting service example illustrates effectively once processing, where events like sales and returns adjust stock levels. Transactions ensure atomic updates to state and offsets, preventing errors from duplicate processing. Without transactions, deduplication requires unique IDs based on event data, crucial for scenarios like bank transfers or ecommerce orders.

For non-transactional environments, idempotent writes are preferable to post-fact deduplication, which is costly and hard to scale. Duplicate events arise from producer failures or retries, necessitating careful management to ensure consistency across microservices.



### Summary

In event-driven architectures, managing duplicate events is crucial. Events should be produced with a key to ensure partition locality and use idempotent writes to prevent duplicates. Consumers must either discard duplicates, perform idempotent operations, or consume from idempotent producers. Deduplication can be expensive, requiring a state store of processed IDs, typically managed within a specific time-window to control size and cost.

Microservices can leverage transactional capabilities for consistent state management. By moving offset management to a data service, microservices can maintain a consistent state even in failures, allowing for effectively once processing. However, this doesn’t guarantee effectively once event production, which requires additional strategies.

Choreographed architectures involve microservices reacting independently to events, allowing for decoupled systems. This is beneficial for loosely coupled systems but can be challenging when modifying workflows, as changes might require extensive updates across services. Monitoring requires careful attention to event streams to track progress and failures.

Orchestration, in contrast, uses a central orchestrator to manage workflow logic, issuing commands to worker services. This allows for easier modification of workflows as the logic is centralized. The orchestrator tracks progress and results, ensuring the workflow follows the defined logic. This pattern separates workflow logic from business logic, maintaining clear boundaries.

In summary, both choreography and orchestration have their advantages and challenges. Choreography offers flexibility and decoupling, while orchestration provides centralized control and easier workflow management. Choosing between them depends on the specific needs and complexity of the system.



### Summary

In microservices architecture, orchestration can be implemented via direct-call or event-driven patterns. Direct-call orchestration involves synchronous API calls, providing faster responses suitable for real-time operations but requiring management of connectivity issues. Event-driven orchestration, while slower, offers durability and robust handling of intermittent failures by isolating services through an event broker.

Orchestration workflows should focus on orchestrating business processes, avoiding the anti-pattern of a "God" service that micromanages worker services. The orchestrator should delegate responsibilities to worker services to maintain encapsulation and scalability.

**Monitoring and Transactions:**
Monitoring orchestration workflows involves querying materialized states to track progress and detect failures. Distributed transactions, spanning multiple microservices, are complex and best avoided unless necessary. These transactions, known as sagas, can follow choreographed or orchestrated patterns. Choreographed transactions are suitable for simple workflows with strict ordering, but they can be brittle and challenging to monitor. Orchestrated transactions offer better visibility and flexibility, allowing for centralized control and rollback capabilities.

**Compensation Workflows:**
Not all workflows require strict transactional integrity. Compensation workflows handle failures by offering remedies post-factum, such as restocking or offering customer discounts, which can enhance customer satisfaction without technical rollbacks.

**Function-as-a-Service (FaaS):**
FaaS solutions enable serverless microservice implementations, executing code based on trigger events. These solutions scale dynamically and are suitable for event-driven systems. FaaS should maintain strict adherence to bounded contexts, ensuring functions and data are clearly owned and managed. Offsets in FaaS should be committed after processing to ensure reliable event handling, aligning with traditional microservice practices.

In summary, orchestration and choreography provide different benefits and challenges in microservice workflows. Orchestrated workflows offer better monitoring and adaptability, while choreographed workflows suit simpler, static processes. Compensation workflows provide non-technical solutions to failures, and FaaS offers scalable, event-driven microservice implementations.



### Function-as-a-Service (FaaS) Frameworks in Microservices

#### Event Processing and Data Loss
FaaS frameworks often use retries and alerting to handle event processing failures. However, committing offsets before processing is complete can lead to data loss if retries fail. Sensitive microservices should avoid this strategy.

#### Function Reuse and Fragmentation
FaaS frameworks enable the reuse of functions across services, but this can cause fragmentation and unclear ownership. Versioning can help but may lead to conflicts when multiple products need different function versions. It's generally better to use fewer functions to simplify testing and management.

#### Choosing a FaaS Provider
FaaS solutions can be open-source or from third-party cloud providers like AWS, GCP, and Azure. Open-source options like OpenWhisk and OpenFaaS integrate with container management systems. Cloud providers offer proprietary FaaS frameworks with limited event broker retention. Organizations already using cloud services can easily experiment with these frameworks.

#### Components of FaaS Solutions
Key components include the function, input event stream, triggering logic, and error/scaling policies. Functions are triggered by new events in subscribed streams and managed through a function-trigger map. The FaaS framework handles event processing, and each microservice needs an independent consumer group.

#### Cold and Warm Starts
Functions start in a cold state, initiating connections and loading code. Once stable, they enter a warm state, ready to process events. FaaS frameworks often reuse terminated functions to minimize startup overhead.

#### Triggering Functions
Functions can be triggered by:
- **New Events:** Using an event-stream listener that isolates event consumption.
- **Consumer Group Lag:** Monitoring lag to trigger functions based on backlog size.
- **Schedules:** Starting functions at specific intervals.
- **Webhooks and Resource Events:** Direct invocation or changes in resources.

#### Business Logic and State Management
FaaS is ideal for stateless, on-demand processing. Stateful solutions need external state services, as functions have short lifespans. Some frameworks, like Azure's Durable Functions, offer durable state support, simplifying stateful workflows.

#### Functions Calling Other Functions
Functions can execute other functions in choreographed or orchestrated workflows, using asynchronous events or request-response calls. Ensuring processing order is crucial to avoid out-of-order issues.

FaaS frameworks continue to evolve, adding features like state management to enhance functionality and usability in microservice architectures.



The text discusses Function-as-a-Service (FaaS) within microservices, highlighting event-driven architectures and their benefits. A bounded context in FaaS may contain multiple functions and event streams, each with unique triggering and scaling logic. Functions operate independently, consuming events, performing tasks, and producing outputs. This setup resembles non-FaaS microservices, allowing functions to manage consumer offsets and ensuring no data loss during failures due to durable event storage.

**Direct-Call Pattern**: Functions can invoke others directly, either asynchronously (fire-and-forget) or synchronously (awaiting results). Asynchronous calls lead to choreography-based solutions, where functions invoke the next based on business logic. However, this can cause issues like out-of-order processing and lack of feedback between functions. Synchronous calls allow for orchestration, ensuring strict sequential execution and maintaining event order.

**Orchestration**: Involves invoking functions in a sequence and awaiting results, as shown in the orchestration function code example. This ensures complete processing of each event before moving to the next, maintaining offset order. Queue-triggered processing can trigger orchestration functions for each event, with the ability to commit processing confirmations back to the queue.

**Termination and Shutdown**: Functions terminate after completing tasks or reaching lifespan limits, entering hibernation. Handling connections and resource assignments is crucial to avoid processing delays. For frequently online functions, minimal shutdown procedures are needed, while intermittent functions should close connections to reduce resource load.

**Tuning and Scaling**: Allocating appropriate CPU and memory resources is vital to avoid crashes or excessive costs. Functions must process events within execution time limits, adjusting batch sizes or execution time as needed. Scaling FaaS solutions involves parallelization, with considerations for partition assignments and consumer group rebalancing to avoid deadlocks.

**Basic Producer and Consumer Microservices**: These microservices handle event ingestion, transformation, and emission without complex scheduling or state management. They integrate well with legacy systems, often using a sidecar pattern to enable event-driven functionality without altering existing codebases. This setup allows legacy systems to produce and consume data from event streams, facilitating their integration into modern architectures.

Overall, FaaS offers flexible, scalable solutions for handling stateless and simple stateful problems, with orchestration allowing for orderly function execution. As FaaS frameworks evolve, staying updated with new features is crucial for leveraging their full potential.



The Basic Producer and Consumer (BPC) pattern allows adding new functionality to a system without significant changes to the legacy codebase. It is effective for stateful business logic that doesn't depend on the order of event arrival but requires all necessary events to occur. An example is book publishing, where contents, cover art, and pricing must be completed before sending a book to the printer. The BPC pattern efficiently handles such gating processes.

BPCs are suitable when the data layer performs most business logic, such as with geospatial data stores or machine learning applications. They enable independent scaling of processing and data layers, adjusting to varying event volumes, such as user engagement profiles based on sleep/wake cycles. This allows for cost-effective scaling, with service providers offering scalable pay-per-use data stores.

Hybrid BPC applications can leverage external stream-processing systems, combining BPC microservices with frameworks for complex operations like joining event streams. This approach enhances capabilities but increases complexity in testing and debugging. It requires careful integration of external frameworks and managing hybrid deployments.

Heavyweight frameworks, like Apache Spark and Flink, provide mechanisms for handling data streams, requiring independent clusters for operations. These frameworks offer robust solutions for processing large data volumes and are widely used in analytics. However, they involve managing additional clustered frameworks, which can be complex and resource-intensive.

These frameworks evolved from batch-processing predecessors like Apache Hadoop, catering to the need for faster, near-real-time processing of large data sets. While powerful, they were not originally designed for microservice-style deployment, requiring dedicated resources and complex management. Despite this, they are valuable for analytical tasks such as ETL, session analysis, and pattern detection.

In summary, the BPC pattern is versatile, supporting both stateless and stateful event-driven microservices. It integrates well with data storage layers and external systems to enhance functionality. Heavyweight frameworks, though complex, provide significant analytical capabilities, evolving to meet the demands of big data and real-time processing.



### Summary

Heavyweight frameworks for stream processing present several challenges, including complexity in managing applications at scale, language limitations due to JVM dependency, and lack of support for materializing entity streams into indefinitely retained tables. These frameworks often emphasize time-based aggregations, with limited documentation on custom join features necessary for handling event streams.

Technological advancements and common APIs like Apache Beam are evolving the heavyweight framework domain. There are various cluster setup options: 

1. **Hosted Services**: Providers like Amazon, Google, and Microsoft offer managed services, reducing operational overhead but potentially lacking features of independent clusters.

2. **Build Your Own Cluster**: This traditional method involves setting up dedicated scalable resource clusters, suitable for large-scale operations.

3. **CMS Integration**: Deploying clusters with container management systems (CMS) like Kubernetes offers benefits such as monitoring, logging, and resource management. This method allows for scalable application deployment, similar to microservices, but may not support all frameworks.

Applications can be submitted in two modes:

- **Driver Mode**: A local application coordinates execution within cluster resources, terminating the driver halts the application.
- **Cluster Mode**: The entire application is managed by the cluster, identified by a unique ID for control via the cluster's API.

Handling state involves using checkpoints to persist internal state, ensuring data durability and recovery from failures. Checkpoints store operator and key states, crucial for maintaining processing accuracy during failures or scaling.

Scaling applications involves strategies like:

- **Running Scaling**: Allows dynamic instance adjustments without stopping the application, using external shuffle services (ESS) to manage data flow.
- **Restart Scaling**: Involves pausing streams, checkpointing, and restarting with adjusted resources.

Autoscaling automatically adjusts resources based on metrics like latency and CPU usage, while frameworks like Google Dataflow and Spark offer built-in autoscaling functionalities.

Heavyweight frameworks are designed for fault tolerance, ensuring continuity despite node failures. Ongoing improvements, such as Spark's dynamic scaling, illustrate the integration of these frameworks with CMSs, enhancing their adaptability and efficiency.




### Summary

Heavyweight stream processing frameworks like Spark, Flink, Storm, and Beam are highly scalable systems that manage streams using centralized resource clusters. They handle tasks such as monitoring, scaling, and resource allocation but require significant operational overhead. In case of worker node failures, tasks are reassigned, and internal states are reloaded from checkpoints. Master node failures are mitigated using high-availability modes like Zookeeper, though they may prevent deploying new jobs during outages. Multitenancy issues arise as more applications run on a cluster, necessitating strategies like running multiple smaller clusters or using namespaces to allocate resources effectively.

Heavyweight frameworks predominantly use JVM languages like Java and Scala, with Python also popular among data scientists. They support MapReduce-style APIs and SQL-like languages for expressing data transformations. When selecting a framework, consider operational overhead, language support, and framework popularity. Spark is widely used, while Flink, Storm, and Beam have niche applications. Ensure the framework aligns with your microservices' needs, as they might not suit all event-driven patterns.

For example, a session windowing application aggregates user interactions into session windows, emitting them after inactivity periods. This involves grouping events by user, aggregating them, and emitting results after a 30-minute gap. Frameworks like Apache Flink facilitate this through a topology that processes events using MapReduce-style APIs.

Lightweight frameworks, unlike heavyweight ones, leverage event brokers and container management systems (CMS) for horizontal scaling, state management, and failure recovery. They deploy applications as individual microservices, with parallelism controlled by consumer groups. Benefits include easy stream-to-table materialization and integration with event brokers for state management via changelogs. However, options for lightweight frameworks are limited.

Lightweight frameworks process events by shuffling data through internal event streams, avoiding direct instance communication. They rely on event brokers for durable storage and CMS for scaling and failure management. Scaling involves rebalancing partitions and restoring state from changelogs. Event shuffling is straightforward, with internal streams acting as shuffle services. State assignments are reloaded from changelogs before processing new events, ensuring deterministic results.

Hot replicas provide standby state store copies, enabling high availability during scaling and failures. They allow seamless processing continuation by leveraging pre-materialized state stores.

In summary, heavyweight frameworks offer robust stream processing capabilities but with significant operational demands, while lightweight frameworks provide similar functionalities with less overhead by integrating tightly with event brokers and CMS. Choose frameworks based on your specific needs, considering factors like language support, operational overhead, and application requirements.



### Summary

Lightweight frameworks like Apache Kafka Streams and Apache Samza are designed to handle stream processing by integrating with event brokers, such as Apache Kafka. These frameworks allow for scalable, stateful microservices that can handle complex data processing tasks like joins without external state stores, reducing cognitive overhead.

#### Kafka Streams
- **Integration**: Deeply integrated with Kafka, enabling seamless stream processing within JVM-based applications.
- **Features**: Supports indefinitely retained materialized streams, primary-key joins, and foreign-key joins.
- **Deployment**: Embedded within applications, simplifying deployment and leveraging Kafka's capabilities.

#### Apache Samza
- **Deployment**: Offers an embedded mode similar to Kafka Streams, allowing integration within individual applications without a heavyweight cluster.
- **Coordination**: Uses Apache Zookeeper by default but can be configured to use other systems like Kubernetes.
- **Comparison**: Lags behind Kafka Streams in some independent deployment features but provides similar stream processing capabilities.

#### Lightweight Frameworks
- **Advantages**: Suitable for long-running, independent microservices that require stateful processing.
- **Limitations**: Heavily reliant on the event broker, limiting portability across different technologies.
- **Languages**: Primarily Java-based, using a MapReduce-like syntax.

#### Stream-Table-Table Join: Enrichment Pattern
- **Example Use Case**: An advertising company processes session data to determine conversion events by joining streams and tables.
- **Stages**:
  1. **Parallelization**: Distributes processing across multiple instances based on partition count.
  2. **Event Consumption**: Processes events to generate conversion sums.
  3. **Aggregation**: Aggregates conversion events into a materialized table for record-keeping.
  4. **Joining**: Joins aggregated data with advertisement entity streams to enrich data for billing purposes.

#### Integration with Request-Response Microservices
- **Complementary Use**: Event-driven patterns are integrated with request-response services to leverage real-time data processing.
- **External Events**: Typically handled via request-response APIs due to security and access concerns.
- **Types of Events**:
  - **Autonomously Generated**: Sent from clients, like cell phone apps, providing metrics or user activity data.
  - **Reactively Generated**: Generated in response to service requests, important for business operations like payment processing.

#### Handling External Events
- **Analytical Events**: Sent to request-response APIs and routed to appropriate event streams.
- **Schema Usage**: Essential for encoding events to ensure clarity and version control.
- **Version Management**: Plan for multiple event versions, especially for applications on user devices.

Lightweight frameworks provide a robust solution for scalable, stateful microservices, while integration with request-response services ensures comprehensive data handling across different business needs.



### Summary

Event-driven microservices often interact with third-party APIs using request-response protocols. This pattern treats requests and responses as remote function calls, integrating them into the event-driven workflow. The microservice processes events, generates requests, and waits for responses. Upon receiving a response, it parses and applies business logic, then writes results to an output stream. Benefits include mixing event processing with APIs and enabling parallel processing through non-blocking requests. However, drawbacks include nondeterministic elements and potential failures due to external API changes or high request frequencies.

Microservices can also serve stateful data using internal or external state stores. Internal state stores involve consuming events to materialize state within the microservice, while external state stores allow all instances to access the complete state, avoiding the need for request forwarding. Using a smart load balancer can optimize request routing based on partition assignments, but it may increase complexity and latency.

Serving state from external stores provides seamless scaling and eliminates downtime issues associated with internal stores. It allows microservices to handle requests independently of event processing, using separate APIs. This approach offers flexibility in implementation but requires careful management to avoid tight coupling and ensure consistent deployments.

Handling requests within an event-driven workflow involves converting requests into events or processing them directly. Converting requests into events provides a durable record but may introduce latency. Applications should balance synchronous and asynchronous processing to manage user expectations effectively.

User interfaces (UI) in event-driven systems must support asynchronous operations. Proper UI design is crucial to prepare users for delayed responses, especially when processing user input as events. Implementing best practices for asynchronous UIs is essential to maintain a seamless user experience.



Asynchronous UI techniques can manage user expectations by indicating that a request has been sent and discouraging further actions until completion. Common examples include "please wait" messages with spinning wheels, informing users that backend processing is ongoing. It's crucial to decide when to update the UI based on the service's event processing progress and business rules. Key considerations include the impact of user decisions based on stale data and the performance impact of pushing updates.

Handling duplicate events is essential, especially during intermittent network failures, ensuring consumers can process them idempotently. Converting requests to events before processing offers benefits, as illustrated in a newspaper publishing workflow. This involves managing layout templates and placing articles and ads according to business logic, with editors and advertisers approving the final layout.

The workflow includes separate bounded contexts for design and approval, mirrored by two microservices: a newspaper populator and an approval service. The populator microservice handles layout tasks and compiles the newspaper into a PDF, producing a populated newspaper event. The approval service involves editor and advertiser approvals, each with distinct responsibilities and event streams.

Editors ensure cohesive layout and approve or reject designs, while advertisers approve ad placement without leaking sensitive information. The aggregated approval events form a canonical narrative for auditing submissions and approvals. Writing directly to events allows using stream processing libraries like Apache Kafka to materialize state directly from event streams.

Separating editor and advertiser approval services aligns with business requirements, maintaining distinct business contexts. Editor approval focuses on layout and design, while advertiser approval manages ad-specific tasks and security concerns. The design includes editor-approved and ad-approval summary event streams, each serving as a source of truth for different workflow stages.

Micro-frontends in request-response applications offer three primary approaches: monolithic backends, microservice backends, and microfrontends. Monolithic backends involve separate frontend and backend teams, potentially leading to high coordination costs. Microservice backends offer independent, product-focused services but depend on an aggregation layer that can introduce business logic issues.

Microfrontends align implementations with business concerns, providing modularity, separation of concerns, and deployment independence. They pair well with event-driven backends, allowing flexible composition of services. However, challenges include ensuring consistent UI elements and managing duplicated code. A strong style guide and common UI element libraries can help maintain visual consistency.

Overall, microfrontends enable business-aligned development, allowing easy integration and removal of experimental products. Despite operational challenges, they offer significant benefits in terms of modularity and alignment with business requirements.



Microfrontends, as part of a composite framework, can face challenges such as varying load times and failures. To address these, proper UI design is crucial, though details are beyond this text's scope. An example application, connecting vacationers with local experiences, initially used a monolithic frontend. The second version splits the application into microfrontends, each handling distinct business logic like search and reviews, allowing for geolocation search functionality and improved modularity.

The transition to microfrontends involves creating separate services for search and reviews, enabling independent updates and maintenance. This separation aligns with event-driven microservices, where core business data is external, facilitating easier service separation without complex data synchronization. The search service now supports geolocation, improving functionality while remaining independent of the review service's requirements.

Microfrontends paired with event-driven backends allow for flexible frontend options and clear data usage, enhancing architectural evolution. They provide an architecture for full-stack development, where user interfaces are not monolithic but composed of purpose-built microfrontends. This mirrors backend microservices' autonomy, offering flexible options for user experiences and segmentations.

Supportive tooling is essential for managing event-driven microservices at scale. Tools like a microservice-to-team assignment system track ownership, ensuring proper DevOps permissions. Event stream creation and modification are crucial, with microservices having control over properties like partition count and retention policy. Metadata tagging aids in assigning ownership and managing sensitive data like PII and financial information.

Schema registries provide a framework for modeling events, allowing producers to register schemas and reducing bandwidth usage. They enable data discovery and streamline event serialization and deserialization processes. Schema creation and modification notifications alert consumers of schema changes, preventing potential issues and aiding in data insight.

Overall, microfrontends and event-driven microservices offer a compositional architecture that supports flexibility, scalability, and clear data management, enhancing both backend and frontend development processes.



### Summary

In event-driven microservices, managing consumer offsets is crucial. Offsets may need adjustment for various reasons, such as reprocessing events from a specific point or consuming only the latest data. Strategies for offset management include resetting to the beginning of a stream, advancing to the latest offset, or specifying a specific time. This is particularly relevant in multicluster failovers to ensure no messages are missed.

### Permissions and Access Control

Access control is vital for security and enforcing the single writer principle. Permissions (READ, WRITE, CREATE, DELETE, MODIFY, DESCRIBE) should be granted by the team owning the producing microservice. Access Control Lists (ACLs) rely on identifying consumers and producers, ideally from the start. ACLs help enforce bounded contexts, ensuring microservices do not couple on internal streams of others. Permissions are typically structured as follows:

- **Input event streams:** READ
- **Output event streams:** CREATE, WRITE (and maybe READ)
- **Internal and changelog streams:** CREATE, WRITE, READ

Teams can request consumer access for specific microservices, with permissions changes logged for auditing.

### State Management and Application Reset

Resetting an application's state is common when changing implementations. This involves deleting and recreating data structures in internal and changelog streams and potentially resetting external state stores. Only the owning team or admin should perform resets, ensuring security.

### Consumer Offset Lag Monitoring

Consumer lag indicates when a microservice needs scaling. Lag is measured as the difference between the most recent and last processed event. Tools like Burrow for Apache Kafka can account for historical offset lag, helping manage large event volumes. Scaling logic should include hysteresis to avoid constant scaling adjustments.

### Streamlined Microservice Creation

Automating microservice creation saves time and ensures integration with common tools. The process includes creating a repository, configuring integrations, assigning team ownership, registering permissions, and applying templates. This ensures new projects use the latest supported code and tools.

### Container Management

Container management services (CMS) allow teams to manage DevOps capabilities, like setting environment variables, choosing clusters, and managing resources. Autoscaling can be based on metrics like CPU, memory, and lag.

### Cluster Creation and Management

As companies scale, managing multiple clusters becomes necessary for technical and legal reasons. This may involve international data restrictions or redundancy needs. Multicluster management is complex and requires careful strategy.

### Programmatic Bringup of Event Brokers and Compute Resources

Tooling for creating and managing event broker clusters is essential. Cloud providers offer on-demand services like AWS's Apache Kafka clusters. Compute resources should be brought up independently, often using hosted services. This ensures processing is distributed and compliant with regional requirements.

### Cross-Cluster Event Data Replication

Replicating data between clusters supports scaling and redundancy. Key considerations include automatic replication of new streams, handling of deleted streams, replication accuracy, latency, and performance scalability.

### Dependency Tracking and Topology Visualization

Tracking microservice dependencies enhances organizational insight. Permissions structures help map dependencies, enabling data lineage tracing, team boundary overlaying, and data source discovery. This tool aids in aligning microservices with business requirements, measuring interconnectedness, and ensuring implementation aligns with business goals.



### Summary

In managing microservices, aligning technical teams with business communication is crucial. A topology map with 25 microservices, divided among four teams, illustrates the dependencies and interconnectedness of services. For example, microservice 3 consumes data from microservice 4. Team 2 owns microservices 2 and 7, which have dependencies on other teams, increasing their exposure. Reassigning microservices, such as moving microservice 7 to team 1 or 3, and microservice 2 to team 4, can reduce cross-team dependencies, as shown in updated topology maps and interconnectedness measures.

Reducing cross-boundary connections optimizes microservice assignments but requires considering team size, expertise, and business function alignment. Business goals evolve, so microservices must align with overarching objectives. Tools help manage service properties, reducing ambiguity and fostering autonomy. Schemas streamline understanding and change notifications.

Testing event-driven microservices involves unit, integration, and performance testing. Microservices’ modularity simplifies testing, with input from event streams and output to state stores. Unit tests ensure code works as expected, particularly for transformation and aggregation functions. Stateless functions are easier to test, while stateful functions require persistent state availability.

Topology testing exercises the entire system, using frameworks like Kafka Streams’ TopologyTestDriver to test without setting up a full event broker. Integration testing involves local and remote environments. Local testing provides control over systems, enabling scenarios like event ordering and broker failures. Components like event brokers, schema registries, and data stores can be manipulated to test functionality and recovery.

Local integration testing allows testing of both event-driven and request-response logic, controlling event injection and request timing. Key components include:

- **Event Broker:** Manage streams, induce failures.
- **Schema Registry:** Test schema compatibility.
- **Data Stores:** Test schema changes and recovery.
- **Processing Framework:** Ensure copartitioning and checkpoint recovery.
- **Application:** Test scaling and instance management.

Overall, managing and testing microservices requires careful consideration of dependencies, team alignment, and robust testing strategies to ensure alignment with business goals and system reliability.



Testing microservices involves ensuring they function correctly under various conditions. There are two primary methods for local integration testing: embedding testing libraries within the code and creating a local environment with necessary components.

### Local Integration Testing

1. **Embedded Testing Libraries**: This method involves integrating testing libraries directly into your code. It is limited to environments where the client, broker, and framework are compatible, typically JVM-based applications. The test code initiates components like Kafka brokers and schema registries within the same executable as the application, allowing control over various processes and failure modes.

2. **Local Environment Setup**: This approach involves installing and configuring required systems locally. It can be costly if each team member sets up their environment independently. A more efficient method is using a single container with all necessary components, allowing easy distribution and consistent testing across teams.

### Hosted Services and Emulation

Testing microservices that rely on hosted services can be challenging due to proprietary systems like Microsoft’s Event Hubs, Google’s PubSub, and Amazon’s Kinesis. These services may not have local alternatives, necessitating the use of emulators or open-source options. For instance, Google’s PubSub has an emulator, and LocalStack provides an open-source version of Kinesis.

### Full Remote Integration Testing

This testing method aims to replicate the production environment as closely as possible for comprehensive testing, including performance and load testing. There are three main strategies:

1. **Temporary Integration Environments**: These are programmatically created and discarded after testing. They require setting up event streams and populating them with either production data, curated data, or programmatically generated mock events. Each method has its advantages and disadvantages, such as the risk of affecting production performance or the need for careful data curation.

2. **Shared Testing Environments**: A single environment with shared event streams can be used, but this can lead to issues like data staleness, lack of isolation, and management overhead.

3. **Production Environment Testing**: Testing directly in production is risky but offers complete access to production events. It requires careful management to avoid affecting production capacity and should not be used for load testing.

### Considerations

When setting up testing environments, coordination with infrastructure teams is essential to manage resources and security. The choice of testing strategy should consider the availability of local options for services and the potential impact on production systems. Over time, more local options are expected to become available as service providers work towards supporting development and testing needs.

In conclusion, selecting the appropriate testing strategy requires balancing the need for realistic testing environments with the practical constraints of resource management and service availability.



# Summary of Event-Driven Microservices Testing and Deployment

## Testing Strategies

Event-driven microservices rely on event streams for input data, which can be created and populated by copying production data, curating specific datasets, or generating events based on schema. Effective testing requires supportive tooling to manage these streams. A collaborative testing environment benefits the entire organization, and investing in tooling can streamline processes.

### Testing Environments

- **Shared Testing Environment**: Common when tooling investment is low, but managing event data and ownership can be challenging.
- **Disposable Environments**: Preferred for service isolation, reducing multi-tenancy issues, and preparing for disaster recovery. Requires more tooling investment but saves time long-term.

## Deployment Principles

Deploying microservices requires standardized processes, especially as the number of services grows. Key principles include:

- **Autonomy**: Teams should manage their own testing and deployment.
- **Standardization**: Consistent deployment processes across services, often using continuous integration frameworks.
- **Supportive Tooling**: Tools for resetting consumer group offsets, purging state stores, and managing schemas are essential.
- **SLAs and Dependencies**: Ensure service-level agreements are honored, minimize dependent service changes, and negotiate breaking changes with downstream consumers.

## Architectural Components

### Continuous Integration, Delivery, and Deployment

- **Continuous Integration (CI)**: Automates code integration, reducing time between code changes and production deployment.
- **Continuous Delivery**: Keeps code deployable, requiring manual deployment intervention.
- **Continuous Deployment**: Automates deployment, enabling quick production entry for committed changes.

### Container Management Systems

- **Container Management**: Manages, deploys, and controls resources for containerized applications. Integration with CI pipelines is crucial.
- **Commodity Hardware**: Used for deployment due to cost-effectiveness and reliability, enabling horizontal scaling.

## Deployment Patterns

### Basic Full-Stop Deployment

1. **Commit Code**: Merges code into the main branch, triggering the CI pipeline.
2. **Automated Tests**: Executes unit and integration tests.
3. **Predeployment Validation**: Ensures event stream and schema validation.
4. **Deployment**: Stops current instances, deploys new ones, and performs post-deployment validation.

### Rolling Update Pattern

- Updates individual instances one at a time to maintain service availability, avoiding downtime. Suitable for non-breaking changes.

### Breaking Schema Change Pattern

- Involves renegotiating schema definitions, communicating with stakeholders, and coordinating migration plans. Requires re-creating entity streams under new schemas, which may involve deploying new producers.

In summary, deploying and testing event-driven microservices involves strategic use of environments, autonomy, standardization, and supportive tooling. Continuous integration and container management systems are integral to streamlined processes, while deployment patterns like rolling updates and breaking schema changes address specific scenarios and challenges.



## Summary

### Breaking Schema Change Patterns

**Nonentity Events**: These may not need reprocessing as event streaming applications don't typically rematerialize entity streams. Consumers can handle both old and new event definitions until old events expire.

**Migration Options**:
1. **Eventual Migration**: Involves maintaining two streams (old and new). Producers write events in both formats. Consumers gradually migrate to the new stream. Risks include indefinite usage of both streams and new services mistakenly registering on the old stream.
2. **Synchronized Migration**: Producers update to the new format only, ceasing updates to the old stream. This requires intensive communication and integration testing to ensure smooth transitions. This method is rare due to its complexity and risk.

### Blue-Green Deployment Pattern

This pattern aims for zero downtime during deployments. It involves running a new service instance (blue) parallel to the old one (green). Traffic is gradually rerouted to the blue instance. If issues arise, traffic can be redirected back to the green instance. This method is effective for microservices consuming event streams but not for those producing output streams.

### Deployment of Microservices

Organizations must invest in deployment systems, known as the "microservice tax." Deployment responsibilities should be delegated to microservice-owning teams with supportive tooling. Continuous integration pipelines are crucial for testing and deployment. Various deployment patterns exist, with the simplest being a full stop and redeploy, though it may cause downtime.

### Event-Driven Microservices

**Communication Layers**: Event brokers facilitate universal access to business events, decoupling data ownership from access. This separation allows services to remain independent, even during failures.

**Business Domains**: Solutions align with bounded contexts, incorporating inputs, outputs, events, and data models. This alignment ensures flexibility and adaptability to business changes.

**Infrastructure**: Essential tools include event brokers, schema registries, container management, and monitoring services. Organizations may outsource these to reduce overhead.

**Schematized Events**: Strongly typed schemas ensure producers and consumers handle data accurately. Schema evolution allows for changes without disrupting consumers, enabling independent upgrades.

**Data Liberation**: Essential for decoupling systems and moving towards an event-driven architecture. It involves extracting critical data into event streams for service composition.

**Microservice Implementation**: Microservices should align with business requirements, avoiding technical boundaries. Larger services may be used initially, with gradual adoption of fine-grained services.

**Testing**: Event-driven architectures support comprehensive integration and unit testing. Events as inputs allow for thorough test coverage, with local testing including dynamic creation of dependencies.

Overall, event-driven microservices offer a robust, flexible approach to solving business problems, with a focus on clear communication, alignment with business domains, and effective deployment strategies.



### Summary

Event-driven microservices (EDMs) are a modern architecture designed to handle large and diverse data sets by rethinking how data is accessed and used. They leverage event streams to provide flexibility and decoupling between services, allowing business units to focus on their specific goals without the constraints of traditional data storage methods.

#### Testing and Deployment

- **Testing**: EDMs support robust testing environments where temporary broker clusters can simulate various conditions. This allows for production integration testing, smoke tests, and performance evaluations. Once testing is complete, these environments can be discarded.
  
- **Deployment**: Microservice deployment at scale requires autonomy for teams, enabling quick deployment and rollback without bottlenecks. Continuous integration, delivery, and deployment pipelines facilitate this process. Deployment must consider service-level agreements (SLAs), state rebuilding, and event stream reconsumption. Strategies like blue-green deployments and thin serving layers help manage these challenges.

#### Architecture and Design

- **Data Communication**: EDMs use a well-defined data communication layer to manage growing data volumes, freeing services to focus on business functionality. This layer enhances data accessibility across services, reducing complexity.

- **Event Streams**: Events are central to EDMs, serving as the basis for communication. They are immutable and durable, providing a single source of truth. Event streams can be partitioned and processed to materialize states, allowing services to maintain their own data views without reliance on centralized databases.

- **Microservice Design**: Microservices in an EDM architecture are designed to operate independently, using event streams to communicate. This autonomy allows for the decoupling of services, enabling more flexible and scalable system designs.

#### Integration and Evolution

- **Integration with Existing Systems**: EDMs can integrate with legacy systems through data liberation strategies, such as change data capture (CDC) and outbox tables, transforming existing data into event streams.

- **Schema Evolution**: Managing data contracts and schema evolution is crucial. EDMs support backward and forward compatibility, ensuring that changes do not disrupt downstream consumers.

#### Challenges and Considerations

- **Performance and Scaling**: EDMs require careful consideration of performance impacts, especially during state rebuilding and deployment. Quotas and strategic design choices help mitigate these issues.

- **Data Management**: As data grows, EDMs require robust data management practices, including partitioning, indexing, and retention strategies to ensure efficient processing and storage.

#### Conclusion

EDMs represent an evolution in handling large data sets, offering unparalleled flexibility and decoupling. By focusing on event-driven communication, organizations can extend the power of their data across services, eliminating access barriers and reducing complexity. This architecture is well-suited to modern business needs, allowing for scalable and efficient service design.



# Summary

This text explores the intricacies of building event-driven microservices, focusing on various frameworks, architectures, and tools used in their development and management.

## Cloud Computing and Frameworks

- **Cloud Computing**: The text references cloud computing services like Microsoft Azure and its Event Hub, highlighting their role in managing event streams and microservices.
- **Frameworks**: Heavyweight and lightweight frameworks are discussed, with the former involving complex cluster setups and the latter focusing on streamlined processes.

## Event Streams and Processing

- **Event Streams**: The importance of event streams in microservices is emphasized, covering concepts like partitioning, replication, and merging. Key terms include MapReduce, Map transformations, and state management.
- **Deterministic Processing**: Techniques for deterministic event processing are detailed, including handling out-of-order events and ensuring strict ordering within partitions.

## State Management

- **State Stores**: The text covers internal and external state stores, discussing their roles in maintaining materialized state from event streams. It also touches on scaling and recovery processes.
- **Effectively Once Processing**: Strategies for ensuring consistent state updates and handling duplicate events are outlined, emphasizing the importance of maintaining state integrity.

## Microservices and Architectures

- **Microservices**: The mapping of business requirements to microservices is explored, along with the concept of microservice tax and team assignments.
- **Architectures**: Service-oriented architectures (SOAs) and reactive architectures are mentioned, with a focus on choreography and orchestration design patterns.

## Testing and Validation

- **Testing Frameworks**: Nonfunctional testing, schema validation, and integration testing are discussed, highlighting the use of shared environments and schema registries.
- **Mocking and Simulation**: Options for mocking events and using simulators for hosted services are provided, aiding in robust testing processes.

## Tools and Technologies

- **Tools**: The text references various tools like Kafka, Spark, and Mesos for managing data platforms and event-driven systems.
- **Languages and Protocols**: Languages such as Scala and Python are mentioned, along with protocols like Protobuf for event serialization.

## Challenges and Solutions

- **Migration and Refactoring**: Challenges in migrating state stores and refactoring legacy systems are addressed, with solutions like synchronized migration and rebuilding state stores.
- **Data Liberation**: Strategies for data liberation, including query-based and table-based methods, are explored to facilitate seamless data flow and integration.

## Author Background

- **Adam Bellemare**: The author is a staff engineer at Shopify with extensive experience in event-driven systems, having worked with technologies like Kafka, Spark, and Kubernetes.

This summary captures the core themes and technical details of building and managing event-driven microservices, providing insights into frameworks, state management, testing, and more.
