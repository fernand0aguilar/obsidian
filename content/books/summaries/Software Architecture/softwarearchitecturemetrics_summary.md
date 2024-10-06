
# Software Architecture Metrics: Key Insights

**Authors and Context**  
"Software Architecture Metrics" is authored by leading software architects, including Christian Ciceri, Dave Farley, Neal Ford, and others. Published by O’Reilly Media, the book emphasizes practical application over theory, focusing on real-world experiences and case studies to improve software architecture quality.

**Purpose of Metrics**  
Software architecture metrics are crucial for maintaining software projects, ensuring high-quality architecture, and identifying architectural and technical debt. These metrics help set key performance indicators (KPIs) and measure results effectively, guiding decision-making and prioritizing architecture projects.

**Key Learnings**  
- **Measurement and Goals**: The book teaches how to measure the alignment of software architecture with project goals. It highlights the importance of choosing relevant metrics and skipping unnecessary ones.
- **Testability and Deployability**: It emphasizes guiding architecture towards testability and deployability, enhancing system quality and scalability.
- **Observability and Predictability**: Improving observability can create predictability, allowing architects to track the success of projects and processes.
- **Modularity Maturity Index (MMI)**: The MMI is introduced as a tool for assessing technical debt and modularity, helping in architecture reviews.
- **Private Builds and DevOps**: The book discusses private builds as a strategy for surviving DevOps transitions, emphasizing metrics like time to feedback and integration issues.

**Target Audience**  
The book is tailored for software architects and developers eager to explore successful case studies and improve decision-making and measurement effectiveness. It offers diverse perspectives and solutions applicable across various industries.

**Implementation and Practice**  
- **Dashboards**: Building and automating metrics dashboards are highlighted as essential for insightful analysis.
- **Fitness Functions**: These are used to ensure maintainability and guide architectural decisions, with a focus on reducing entropy and cyclic dependencies.
- **Goal-Question-Metric Approach**: This approach helps measure unknowns by creating a structured strategy for data collection and prioritizing metrics.

**Benefits of Metrics**  
Metrics allow for continuous architecture checks throughout a project's lifecycle, preventing maintenance challenges. They facilitate comparisons between architectures to select the best fit for project requirements.

**Acknowledgments**  
The book acknowledges contributions from authors, O’Reilly editors, and Apiumhub, highlighting the collaborative effort to provide valuable insights into software architecture metrics.

**Conclusion**  
"Software Architecture Metrics" serves as a practical guide for architects to implement and benefit from metrics, ultimately leading to improved software quality and project outcomes. It is a resource for setting effective KPIs and ensuring the architecture remains maintainable and aligned with business goals.

For more information, visit [O’Reilly Media](https://oreilly.com).



### Summary

The text acknowledges the contributions of various individuals and teams involved in the creation of a book focused on software architecture and delivery performance. It emphasizes the importance of collaboration and support from colleagues, family, and organizations. The main content discusses the significance of the book "Accelerate" by Dr. Nicole Forsgren, Jez Humble, and Gene Kim, which introduces four key metrics to enhance software delivery performance: deployment frequency, lead time for changes, change failure rate, and time to restore service.

These metrics are crucial for understanding and improving software architecture by focusing on high-quality, loosely coupled, testable, observable, and maintainable systems. The text outlines how these metrics can be used to foster conversations among team members, encouraging continuous improvement and tracking progress.

The mental model behind the four key metrics is a pipeline of activities starting from code changes in version control to deployment in a running system. The metrics measure development throughput (deployment frequency and lead time for changes) and service stability (change failure rate and time to restore service). The combination of these metrics helps ensure balanced improvements in software delivery.

The text describes the importance of defining these metrics based on specific organizational contexts. It discusses the role of Continuous Integration (CI) pipelines in capturing the necessary data points for these metrics, such as commit and deployment timestamps. Different pipeline models are explored, including simple end-to-end pipelines, multiple end-to-end pipelines for microservices, and more complex multistage fan-in pipelines.

Instrumentation points for capturing the four metrics are outlined, emphasizing the need for accurate data collection. The text highlights potential complexities in measuring these metrics, especially in multistage and fan-in pipeline scenarios. It stresses the importance of consistent scope when considering changes across software and services.

Ultimately, the text encourages using the four key metrics to drive meaningful transformations in software architecture and delivery processes, promoting long-term sustainable benefits and a positive impact across the board.


# Summary

The text discusses the implementation and monitoring of four key metrics in software development: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. These metrics are essential for evaluating and improving software delivery performance.

## Data Capture and Pipeline Runs

- Only successful pipeline runs should be measured to avoid skewed lead times.
- Monitoring should be tied to ticket creation for accuracy, though manual tickets are a starting point for many.

## Defining Service Failures

- Service failures are defined as anything preventing users from completing tasks, excluding cosmetic issues.
- Failures should be recorded using "change failure" tickets, with start and end times marked for each ticket.

## Capturing Metrics

- **Deployment Frequency**: Calculated by summing successful deployments over a set period, usually 31 days, to provide a stable average.
- **Lead Time for Changes**: Measures the time from change initiation to deployment. Averages over a longer period prevent fluctuation.
- **Change Failure Rate**: The proportion of failed deployments to total deployments, calculated over 31 days. Only resolved failures are considered.
- **Time to Restore Service**: The time taken to close a failure ticket, using mean or median calculations over 120 days.

## Data Transparency and Engagement

- Data collection and calculations should be transparent, with raw data and definitions accessible to all stakeholders.
- A minimal viable dashboard (MVD) can be created to display current and historical metric values, fostering team engagement.

## Visualization

- Metrics are often visualized using graphs, such as bar graphs for deployment frequency and lead time.
- Visualization helps teams quickly assess performance and identify trends or issues.

## Audience and Accessibility

- The primary audience for these metrics is the software delivery teams, who need easy access to data for improvement.
- Secondary audiences include management, who should have read-only access for oversight.

## Tools and Automation

- While manual data collection is a starting point, automating the process is recommended for efficiency.
- Tools like Google's Four Keys or Thoughtworks' Metrik can be used, though bespoke solutions may also be viable.

## Conclusion

The four key metrics provide a comprehensive framework for assessing software delivery performance. By ensuring transparency and accessibility, teams can leverage these metrics to drive improvements and achieve higher levels of efficiency in their processes.


# Summary

In software architecture, the integration of key metrics and fitness functions is crucial for enhancing system performance and team collaboration. The use of PowerBI dashboards to visualize metrics such as deployment frequency and lead time allows teams to access real-time data, fostering discussions and ownership of the software development process. This approach encourages paradigm shifts within teams, enabling them to self-serve data, identify issues, and drive improvements.

The concept of fitness functions, borrowed from evolutionary computing, is used to define and measure software system metrics. These functions output discrete values representing target metrics, which can be tailored to the system’s context. Fitness functions are flexible, allowing integration with typical metrics like cyclomatic complexity. They help in defining, prioritizing, and balancing metrics to measure progress toward objectives.

Examples of fitness functions include maintaining unit test coverage above a threshold or ensuring integration tests handle network latency effectively. These functions define a target metric, context, and additional information needed for verification. The implementation of architectural tests, often automated, is crucial for creating and verifying these metrics. Automated tests are recommended for efficiency, but manual execution may be necessary for certain cases.

Fitness functions span various categories, guiding developers in defining metrics. Mandatory categories include feedback type (atomic or holistic), execution trigger (manual, automated, or continual), test location (test system, production, or CI/CD pipeline), metric type (boolean or numeric), and automation level. Optional categories may provide additional insights but are not always necessary.

By leveraging fitness functions and key metrics, teams can transition from traditional, architect-driven approaches to collaborative, team-driven solutions. This shift leads to more testable, decoupled, and fault-tolerant architectures. The ultimate goal is to achieve a runnable and observable architecture that aligns with modern cloud-native practices.

In conclusion, the integration of fitness functions and key metrics is a powerful strategy for improving software architecture. It empowers teams to take ownership, drive change, and collaboratively deliver high-quality systems. The process involves continuous adaptation and learning, revealing architectural issues and enabling effective solutions. This collaborative approach ensures that the architecture evolves to meet the system's needs and deliver optimal performance.



### Summary

In software architecture, defining quality attributes is crucial as they determine how well a system performs. These attributes, also known as quality goals, are essential drivers alongside functional requirements and constraints. Quality goals outline the qualitative requirements of a system, such as adaptability and ease of use, and are vital for developing software architectures. The International Organization for Standardization (ISO) norm 25010 provides a catalog of quality attributes, including functional suitability, performance efficiency, compatibility, usability, reliability, security, maintainability, and portability.

Quality goals should guide the creation of fitness functions and metrics, which assess how well a system meets its objectives. Fitness functions can be categorized as temporary or permanent, static or dynamic, and can be tailored for specific audiences or technologies. They can be applied to various system components and are crucial in large-scale software development.

The concept of the Testing Pyramid helps classify automated tests into three layers: unit tests at the base, service and integration tests in the middle, and end-to-end tests at the top. This structure balances execution time, maintenance costs, and confidence in the system's functionality. The Fitness Function Testing Pyramid applies a similar concept to architectural tests, promoting a balanced set of tests that provide confidence while managing costs.

In the Fitness Function Testing Pyramid, tests are categorized by breadth of feedback (atomic vs. holistic) and execution trigger (triggered vs. continuous). The top layer includes holistic tests that provide sophisticated feedback but are complex and costly to maintain. The middle layer consists of triggered holistic or continuous atomic tests, while the bottom layer contains triggered atomic tests, which are simpler and cheaper to implement.

The top-layer tests, such as chaos engineering, provide real-world feedback on system resilience but are challenging to build. Middle-layer tests offer broad feedback on system health and are triggered by specific actions, such as integration test builds. Bottom-layer tests include metrics like code coverage and static analysis, forming the foundation of testing efforts.

The pyramid model suggests having more tests at the base and fewer at the top, but this can vary based on context and goals. Fitness functions can be tailored to specific needs, and the pyramid helps in achieving a balanced approach to testing and architectural verification.

Overall, the focus should be on aligning quality goals with stakeholders and creating relevant fitness functions that provide valuable insights into system performance and maintainability.



# Summary of Fitness Functions and Evolutionary Architecture

## Fitness Functions

Fitness functions are critical in maintaining software reliability and performance. They can be categorized as either atomic or holistic, depending on their scope and impact on the system. A fitness function's execution is typically automated and integrated into CI/CD workflows, ensuring nightly evaluations. The primary goal is to uphold system reliability and performance efficiency, even when interfacing with slow third-party systems.

### Example Breakdown

1. **Example 2-4**: This fitness function focuses on maintaining reliability by ensuring all tests pass, classified as a binary metric (0/1). It is executed automatically in the test environment and is static, as the metrics are predefined.

2. **Example 2-5**: Measures an online shop's revenue per minute, categorized as holistic since it evaluates the entire system's performance. It operates continually in the production environment with a dynamic metric type, requiring automation to verify multiple quality attributes like reliability and usability.

3. **Example 2-6**: Ensures system reliability during deployment by running regression tests, measuring both performance (response time < 100ms) and availability. It is holistic, executed nightly in production, and static, focusing on reliability and performance efficiency.

## Developing Fitness Functions

Developing effective fitness functions begins with defining quality goals aligned with stakeholder expectations. The process involves:

1. **Identifying Quality Attributes**: Collaborate with stakeholders to set architectural goals that add value to the system.
   
2. **Drafting Fitness Functions**: Formulate initial fitness functions and metrics, documenting them in a shared list for team visibility.

3. **Prioritizing and Selecting**: Focus on feasible and impactful fitness functions, ensuring a balanced portfolio of tests across pyramid layers.

4. **Automating Tests**: Develop automated tests to produce metrics, verifying these often to ensure they align with target goals.

5. **Visualizing Results**: Use dashboards to share results with the team and stakeholders.

6. **Iterating Regularly**: Adjust or decommission tests as necessary to maintain relevance and efficiency.

## Evolutionary Architecture

Software architecture is crucial yet adaptable. It must accommodate changing demands and ensure systems remain scalable, performant, and resilient. Architects should embrace an evolutionary approach, focusing on learning and discovery.

### Key Attributes for Sustainable Change

1. **Modularity**: Allow parts of the system to change independently.
2. **Cohesion**: Keep related code together.
3. **Separation of Concerns**: Ensure each part addresses a specific problem.
4. **Abstraction**: Create clear interfaces between system components.
5. **Coupling**: Minimize dependencies between system parts.

These attributes enhance a system's adaptability, making it easier to implement changes based on new insights.

### Testability

Testability is vital for high-quality systems. Automated testing is preferred over manual testing due to its efficiency and reliability. Ensuring code is testable involves designing systems with clear separations and minimal dependencies, allowing for easy verification of functionality and changes.

By focusing on these principles, architects can create systems that are robust, flexible, and capable of evolving with user needs and technological advancements.



### Summary

The text discusses the importance of testability and deployability in software architecture, emphasizing the need for modular, cohesive, and loosely coupled systems. These characteristics facilitate easier testing and maintenance by allowing control over variables and focusing on specific behaviors. Testability is enhanced by using tests to guide code design, ensuring that systems are always in a testable state, which improves design quality and developer efficiency.

Deployability is crucial for maintaining systems in a releasable state, achieved through continuous delivery and deployment pipelines. These pipelines automate release processes, ensuring that software is ready for production if it passes all evaluations. The scope of a deployment pipeline should cover independently deployable units, like microservices, to ensure reliable and deterministic evaluations.

The text highlights the balance between focusing on architectural properties like security and scalability and avoiding overengineering. An evolutionary approach to architecture, driven by testability and deployability, allows systems to adapt to current needs and future changes, enhancing software quality and innovation.

The concept of technical debt is introduced, describing it as the result of suboptimal technical decisions that increase maintenance costs over time. The Modularity Maturity Index (MMI) is presented as a tool to measure technical debt, guiding decisions on refactoring or replacing systems. Technical debt can arise from implementation issues, like code smells, or design and architecture inconsistencies.

Continuous architecture improvement is essential to manage technical debt, preventing architectural erosion, which makes maintenance costly and error-prone. The text outlines strategies to address technical debt, such as refactoring or replacing legacy systems.

Modularity, a principle introduced by David Parnas, emphasizes encapsulating design decisions within coherent units. Modular systems with high cohesion and low coupling reduce unnecessary complexity and technical debt. Evaluating modularity involves qualitative assessments supported by measurements, such as cohesion, naming conventions, and balanced proportions of program units.

Overall, the text advocates for designing systems with testability and deployability in mind, managing technical debt effectively, and ensuring modularity to maintain high-quality, adaptable software architectures.



### Summary of Modularity Maturity Index (MMI) and Architecture Review

#### Hierarchies and Cycles

Hierarchies are crucial for understanding complex structures and are naturally supported in programming through contain-being relationships, such as classes within packages. However, use and inherit relationships can create non-hierarchical, intertwined structures, leading to class and package cycles. These cycles can complicate architecture, as seen in systems with extensive class dependencies. Early refactoring can prevent these issues, ensuring a more manageable architecture.

#### Pattern Consistency

Schemas help humans process complex relationships efficiently. In software, design patterns leverage this by providing recognizable structures. Consistent use of patterns aids in understanding and managing code complexity. Patterns typically form hierarchical structures, and deviations can indicate architectural issues. Ensuring pattern consistency is vital for maintaining a clear and efficient architecture.

#### Calculating the Modularity Maturity Index (MMI)

The MMI evaluates a system's technical debt based on modularity, hierarchy, and pattern consistency. Modularity, accounting for 45% of the MMI, is foundational and involves domain and technical modularization, internal interfaces, and code proportions. Hierarchy (30%) focuses on technical and domain layering and cycle presence. Pattern consistency (25%) assesses pattern allocation and relationship integrity. The MMI is calculated by scoring criteria, with a score between 0 and 10 indicating the system's health.

#### Architecture Review Process

Architecture reviews identify technical debt and deviations from planned architecture. Tools like Lattix and Sonargraph help compare actual and target architectures. Reviews involve parsing source code, modeling target architecture, identifying technical debts, and suggesting refactorings. The goal is to align the actual architecture with the target, reducing technical debt through planned refactorings.

#### Conclusion

The MMI provides insight into a system's technical debt, guiding decisions on refactoring or replacement. Systems scoring below 4 may require replacement, while those between 4 and 8 benefit from targeted refactorings. Systems scoring above 8 are well-maintained, reflecting effective architectural practices. Regular reviews and refactorings ensure systems remain manageable and efficient.

#### DevOps and Metrics

Effective software architecture relies on measurable metrics. In DevOps transitions, aligning KPIs with organizational goals is crucial. Despite challenges in achieving ideal metrics, continuous improvement and adherence to best practices can enhance system performance and decision-making.




This chapter discusses practices and metrics essential for navigating the transition to DevOps and maintaining productivity. It addresses common challenges like disconnects between DevOps and QA teams, unproductive feedback loops, overreliance on automation, and loss of ownership in validations and automation. The chapter emphasizes the importance of metrics and private builds in overcoming these issues.

**Key Concepts:**

- **Agile and Automation:** Agile practices, particularly eXtreme programming (XP), focus on automating tasks that are time-consuming to gain feedback and practice. Martin Fowler advocates for continuous integration (CI), where team members frequently integrate their work, verified by automated builds to detect errors quickly.

- **CI/CD:** Continuous integration and continuous delivery (CI/CD) involve maintaining code in a deliverable state and integrating the whole toolchain. CD extends CI by involving stakeholders and technical teams like ops and QA, emphasizing automation in the delivery pipeline.

- **DevOps Culture:** DevOps aims to eliminate silos between development and operations, integrating SysAdmins into the development team. It emphasizes consistent working practices, shared tools, and automation. The focus is on culture, with tools and automations following suit.

- **Ownership Shift:** Ideally, teams own their pipelines, but often, DevOps becomes a structured automation team, leading to a disconnect where development teams lack knowledge of deployments. This results in silos and inefficiencies.

- **Empowering Local Environments:** The chapter suggests shifting validation to local environments where problems arise. This involves using private builds, as introduced by Duvall et al., to emulate integration builds locally before committing code to the mainline.

**Case Study: The Unstable Trunk**

A company with a multidisciplinary team faces frequent software breakages. A root-cause analysis identifies several bugs:

1. **Bug A1:** A frontend issue due to testing against a stable API, resolved by teaching team members to manage the backend environment locally.

2. **Bug A2:** A backend issue from missing API contract tests, addressed by setting up manual tests in local environments.

3. **Bug A3:** Integration issues with real data, resolved by DBAs running manual tests locally and communicating with backend developers to fix incompatibilities.

4. **Bug A4:** Integration bugs caught through manual private builds, allowing QA to focus on functional checks and managing application versions.

The case study highlights the value of private builds and local environment testing in maintaining a stable development process, reducing the reliance on uncontrolled automation, and improving deployment stability.

In summary, the chapter advocates for a DevOps culture that empowers local environments through private builds and metrics, ensuring efficient and stable software development and delivery.



## Summary

This text explores the challenges and solutions in software development, particularly focusing on private builds and metrics to enhance DevOps practices.

### Case Studies

**Case Study: The Unstable Trunk**
- Teams often introduce issues into the system, which can be mitigated by running private builds locally before merging code to the main branch. This ensures individual parts of a feature work without destabilizing the entire system.

**Case Study: The Blocked Consultant**
- A consultancy firm faced issues with Company B’s unstable automated delivery pipeline. Problems included changed test data, off database migrations, and unstable backend containers.
- The consultancy team struggled to deliver functional increments due to these issues and requested a dedicated testing environment, which was delayed by internal bureaucracy.
- To overcome integration and functional edge case bugs, the team decided to execute API tests manually and build fake replicas of unreliable external services, thereby improving speed and effectiveness.

### Importance of Local Environments

- Local environments empower QA members to conduct proactive activities and write end-to-end test automations.
- They allow teams to manage blockers and focus on automating validations, leading to faster and more reliable development cycles.

### Metrics for Evaluating Development Flow

1. **Time to Feedback**
   - Measures the time and effort needed to receive feedback on new features. It highlights inefficiencies in feedback cycles but doesn’t pinpoint root causes.

2. **Evitable Integration Issues**
   - Quantifies avoidable issues found in each iteration that could have been detected with private builds. A low number indicates a mature process.

3. **Time Spent Restoring Trunk Stability**
   - Directly measures the time spent fixing issues that disrupt the main codebase. It reflects the effectiveness of regression in local builds.

### Cost and Benefits of Private Builds

- Though private builds may seem to reduce productivity due to increased local environment management, they ultimately save time and cost by preventing defects from entering the main codebase.
- Manual testing should be temporary, with a focus on automating repetitive tasks.

### Practical Interpretation of Metrics

- **High Time to Feedback and Evitable Integration Issues**: Indicates a need for better local validations and disciplined private builds.
- **Low Time to Feedback and High Evitable Integration Issues**: Suggests inefficiencies masked by an efficient QA team.
- **High Time to Feedback with Low Integration Issues**: May point to bureaucratic delays despite stable processes.

### Conclusion

- Software organizations often lack optimal practices due to misunderstandings or incomplete adoption of best practices.
- Private builds are essential for maintaining trunk stability and quality assurance, especially when automation is disconnected from development.
- Empowering local environments shifts responsibility back to the development team, fostering a faster, cheaper, and higher-quality development process.

This chapter emphasizes the critical role of private builds and metrics in navigating DevOps transitions, ensuring efficient and quality software delivery even in less-than-ideal circumstances.



### Summary

Anna, a senior software engineer at YourFinFreedom, a fintech scale-up, faces challenges as the company transitions from a monolithic to a microservices architecture. The company aims to expand across Europe by leveraging open-banking legislation, but is struggling with service availability and scalability issues. The shift to microservices, led by Keisha, the head of Product Engineering, aims to address these issues, but Anna observes that the new architecture isn't meeting business needs and may be costing market opportunities.

The transition from a monolith to microservices introduces complexities, often leading to what is known as a "distributed big ball of mud." This occurs when over-engineered systems exceed the cognitive capacity of teams, making it difficult to manage and evolve the architecture. Anna notes issues like release orchestration challenges, overlapping functionalities, and shifting priorities, which demotivate teams and hinder productivity.

To address these challenges, Anna proposes implementing metrics and clear architectural boundaries. She is promoted to Solutions Architect, with the responsibility to align the software architecture with the company's mission and KPIs. Anna engages with various departments to understand their challenges and discovers a new company KPI—monthly active users (MAU)—which aligns with the mission to make financial services accessible.

Anna employs EventStorming, a collaborative workshop format, to explore and map the business processes, software components, and their ownership. This exercise reveals a mismatch between the current architecture and business processes, highlighting the high cognitive load on teams. By mapping KPIs to domains, the organization gains insights into the architecture's constraints and opportunities for improvement.

The EventStorming workshop fosters cross-functional understanding and identifies areas for architectural and workflow enhancements. It underscores the importance of intentional architectural decisions, aligning software components with business goals, and reducing accidental complexity. Anna's leadership facilitates a shift from a "best-effort" to an "intentional effort" approach, guiding YourFinFreedom towards a more coherent and effective software architecture.




The text discusses the importance of intentional software architecture, particularly in the context of adapting to new Brexit rules and aligning with organizational KPIs. Anna, a key figure in the narrative, uses workshops and techniques like Process Modeling EventStorming to gain deeper insights into operational value streams, such as the "request travel insurance quote" process. This approach helps identify mismatches and hotspots between processes and software architecture, enabling better alignment with business goals.

Anna emphasizes the need for detailed visualization of processes, as many organizations lack up-to-date diagrams. By mapping KPIs and hotspots, Anna aims to understand daily challenges and how current solutions impact users. This understanding is crucial for aligning software architecture with the company's mission and improving value delivery to customers.

The narrative highlights the significance of KPIs and metrics in guiding architectural decisions. Anna organizes workshops to refine KPI definitions and align business operations with product engineering. The story underscores the importance of understanding the business model and ensuring software architecture facilitates value creation.

Anna leads a domain decomposition exercise to break down goals into metrics, providing clarity on interrelated work and guiding software architecture improvements. The text introduces the concept of fitness functions to assess architectural integrity objectively. Anna and her team plan experiments to create a self-contained service for managing travel insurance policies, aiming to increase deployment frequency and decrease change fail rates.

The KPI Value Tree is introduced as a tool to visualize the connection between organizational and domain KPIs, offering a comprehensive overview from mission to engineering initiatives. This visualization helps in understanding the broader impact of architectural changes and aligning them with business objectives.

The narrative also touches on the challenges of scaling an organization and the need for continuous adaptation of KPIs and metrics. It warns against using KPIs as targets, citing Goodhart’s Law, and advocates for using them as guides. The text references the DORA metrics, emphasizing their role as leading indicators of velocity and stability, and cautions against comparing team performance across different contexts.

Finally, the text discusses managing expectations and communication during changes. Anna communicates the potential decrease in feature delivery capacity during experiments, ensuring stakeholders understand the intended outcomes and contributions to the organization's goals. This open communication is crucial for maintaining stakeholder support and achieving long-term success in aligning software architecture with business objectives.



Anna’s story illustrates the central role of software architecture in organizational growth and efficiency. At YourFinFreedom, Anna led the product engineering team to run successful experiments that redefined the software architecture boundaries in the Travel Insurance domain. This initiative improved KPIs and eliminated the need for release orchestration, garnering stakeholder support for similar approaches across other domains.

As the company grew, the current metrics were reassessed. Anna proposed updating the software architecture to reduce manual work in creating travel insurance quotes. This involved introducing a decision-support system that streamlined processes for insurance analysts, saving time and resources. Maintaining a well-aligned KPI Value Tree was emphasized as crucial for adapting to business changes.

Anna identified misaligned software architecture boundaries across various domains, leading to complexity and high cognitive load on teams. She proposed breaking down central services into domain-specific components and rethinking software ownership to reduce complexity and improve focus. This approach impressed department leaders and sharpened the organization’s focus.

The narrative underscores the importance of using context-specific metrics to guide architectural evolution. Metrics should not only measure current performance but also reveal trends that indicate underlying issues, such as increased complexity affecting employee engagement. Combining metrics like change fail rate with employee satisfaction scores can provide insights into the social impact of architectural decisions.

Anna’s journey highlights the need for software architects to possess skills beyond technical expertise. They should understand group dynamics and contribute to business strategy, ensuring that architectural decisions support organizational goals. This sociotechnical approach fosters innovation and stability, benefiting both the technical and social aspects of the company.

The text concludes with the notion that software architecture is a continuous process, evolving with the organization. Effective communication and collaboration across functions are essential to align metrics with business needs, creating a feedback loop that drives strategic planning and innovation. Anna’s success story exemplifies the potential of sociotechnical architecture to transform organizations and achieve business growth.

In summary, the integration of measurement into software architecture is crucial for informed decision-making and organizational success. Continuous measurement throughout the delivery cycle allows for prioritizing tasks and adapting to changes effectively. By focusing on relevant metrics and understanding their implications, organizations can enhance their software architecture and align it with strategic objectives.



### Summary

In software architecture, measuring system performance and qualities is crucial for predicting and addressing potential issues. Key measurement types include logs, traces, and metrics. Logs provide timestamped event records, traces capture end-to-end scenarios, and metrics offer numerical data on system characteristics like CPU usage. While infrastructure often has built-in measurement tools, application-specific measurements require additional implementation but offer valuable insights into business-relevant metrics.

**Measurement Approaches:**

1. **Runtime Measurement:** Logs, traces, and metrics can be collected from both infrastructure and applications. Infrastructure measurements are often easier due to existing tools, while application measurements need custom implementation.

2. **Software and Design Analysis:** Static code analysis helps identify programming mistakes and assess maintainability. Design analysis allows predictive measurements before code is written, aiding in estimating scalability and compliance.

3. **Estimates and Models:** Predictive models based on previous experiences and benchmarks guide early architecture work. They are effective for qualities like scalability but challenging for security.

4. **Fitness Functions:** Proposed by Neil Ford and others, fitness functions use measurements to monitor system quality attributes. They define acceptable values and ensure system compliance, ideally through automation.

**Measuring System Qualities:**

- **Performance:** Measured by latency (time to complete work) and throughput (workload processed in a set time). Performance is directly measurable and can be modeled. It involves understanding response time distribution and cost trade-offs.

- **Scalability:** Focuses on system response to increasing workload. It involves measuring workload capacity against resource availability, aiming for linear scalability. Testing scalability helps identify bottlenecks and nonlinear behaviors.

- **Availability:** Measured by mean time between failures (MTBF) and mean time to recover (MTTR). MTTR is often more critical and can be designed for and tested. Recovery point objective (RPO) and recovery time objective (RTO) further define data loss tolerance and recovery time.

**Challenges:**

- **Performance Measurement:** Difficulties include creating realistic test environments, generating accurate workloads, and managing logging effectively.

- **Scalability Measurement:** Challenges include unexpected bottlenecks, nonlinear behaviors, and resource combination complexities.

- **Availability Measurement:** While MTTR, RPO, and RTO can be modeled and tested, MTBF is harder to estimate and requires real-world data.

Overall, these measurement approaches and considerations help in understanding and improving system qualities, ensuring systems meet stakeholder needs and operational demands.



## Summary

In software architecture, estimating system reliability, such as Mean Time Between Failures (MTBF), is challenging. It's often based on reliability models or real failure data, which are not ideal. To address this, failure information from similar systems can be used as a proxy. Real systems have multiple components with varying failure modes, necessitating a comprehensive approach to metrics like MTTR, MTBF, RPO, and RTO.

### Availability and "The Nines"

The traditional focus on availability percentages, like "four nines" (99.99%), is overly simplistic. It doesn't account for the failure mode and timing, which greatly impact the system. Instead, failure scenarios should be used to understand business needs and estimate critical availability metrics.

### Security

Security is complex and difficult to measure, often revealing vulnerabilities only when exploited. Proxy measurements, such as static code analysis, dynamic analysis, and infrastructure scanning, help assess security. These should be weighted by risk and used to track security improvements. Consistency in testing environments, avoiding false positives, and adjusting for risk are crucial. Knowing when to stop testing is challenging; expert judgment is needed.

### Incorporating Measurement

Measurement is essential in the software delivery cycle to assess and guide architecture work. The approach varies based on the environment and system characteristics. Key guidelines include:

- **Start Small**: Begin with specific, impactful measurements rather than measuring everything.
- **Measure What Matters**: Focus on metrics that provide insight and guide work.
- **Act on Measurements**: Use insights to drive action and prioritize quality attributes.
- **Start Early**: Integrate measurement early in the process for continuous value.
- **Make Measurement Visible**: Share measurement activities and results to demonstrate value.
- **Make Measurement Continuous**: Integrate measurement into the delivery cycle to build useful mechanisms.

### Hypothetical Case Study: Civis Platform

A fictional example, Civis, demonstrates introducing measurement in a project. This platform uses Java services on a cloud platform with a managed database. Initial measurements focus on database size, code quality, and security. Static analysis and performance metrics are integrated into the pipeline, with fitness functions to alert on issues. As the system runs in production, operational metrics like database growth and availability are monitored to guide improvements.

### Common Pitfalls

- **Focusing on Mechanisms Over Measurements**: Start simple and add complexity as needed.
- **Choosing Easy Measurements**: Measure what's important, not just what's easy.
- **Focusing on Technical Over Business Measurements**: Include business-related metrics for stakeholder value.
- **Not Taking Action**: Use measurement insights to prioritize and act.
- **Prioritizing Accuracy Over Usefulness**: Balance accuracy with decision-making needs.
- **Measuring Too Much**: Regularly review and refine measurements to avoid data overload.

### Conclusion

Measurement is crucial in software architecture to evaluate effectiveness, prioritize work, and make informed decisions. It requires a balanced, systematic approach to be truly valuable and sustainable.



### Summary

Understanding and measuring quality attributes in software architecture is crucial for aligning system requirements with stakeholder expectations. Quality attributes, also known as nonfunctional requirements, include performance, scalability, and reliability. These attributes must be objectively measured to validate if they meet the desired specifications. Various measurement techniques focus on different aspects of the system, both internal and external. Once established, these measurements can be integrated into a continuous architecture cycle, allowing for real-time feedback and adjustments.

The concept of architecture fitness functions, as discussed in "Building Evolutionary Architectures," provides a structured approach to evaluating architecture characteristics. Fitness functions offer objective criteria for assessing attributes like performance and scalability. They unify validation processes that were previously ad hoc, such as build-time checks and production monitoring, under a single framework. This approach ensures that architecture characteristics are consistently measured and validated.

Fitness functions can be automated and integrated into continuous integration/deployment pipelines. This automation transforms metrics into engineering practices, ensuring that governance checks are applied consistently and efficiently. For example, tools like ArchUnit in Java can detect component cycles, a common code-level metric, by running tests regularly. This proactive approach prevents problematic code from entering the repository.

Automation is a key force in optimizing engineering processes. Continuous integration, a practice developed by Kent Beck and others, illustrates the power of automation by reducing merge conflicts and improving code quality. The same principles apply to architecture validation through fitness functions. By automating governance checks, architects can ensure compliance without manual intervention, allowing for more efficient and reliable development processes.

Case studies demonstrate the application of fitness functions in different scenarios. For example, in a layered architecture, tools like ArchUnit can validate structural integrity by ensuring proper layer interactions. In microservices architectures, custom fitness functions can be created to ensure that domain services communicate only through designated orchestrators. These functions, though sometimes requiring bespoke solutions, are essential for maintaining architectural integrity across diverse platforms.

Overall, the integration of fitness functions into automated pipelines represents a significant advancement in software engineering, enabling architects to maintain system integrity and quality attributes effectively. This approach not only supports better governance but also aligns with modern development practices that prioritize automation and continuous improvement.



In 2017, Equifax experienced a data breach due to delayed application of a critical patch. This highlights the importance of having a deployment pipeline for all projects, even inactive ones, allowing automated governance and rapid response to security threats. Deployment pipelines can help automate governance tasks and integrate security checks, such as identifying zero-day vulnerabilities. Architects benefit from fitness functions—code that serves as an executable specification of architecture—allowing them to stay connected with the system's evolution.

GitHub's case study exemplifies the benefits of aggressive Agile practices like continuous deployment, which, contrary to increasing risk, can mitigate it. GitHub uses a tool called Scientist to safely experiment with new code without exposing users to bugs. Scientist operates by running both old and new code for a small percentage of requests, comparing results, and recording exceptions without affecting users. This approach allows for safe testing and deployment of new features, exemplified by GitHub's successful transition to a new in-memory merge functionality.

Fitness functions act as a checklist to ensure adherence to important architectural principles, preventing technical debt. They automate quality checks, ensuring that developers do not skip critical steps due to pressure. This approach aligns with Atul Gawande's concept of checklists in professional settings, which prevent oversight and ensure consistency.

The integration of metrics and engineering practices elevates software development, transforming it into a more disciplined engineering field. Metrics like code coupling, architectural erosion, and code complexity are essential for maintaining software quality and reducing maintenance costs. A metrics-based feedback loop helps track and improve software quality, ensuring maintainability and lowering project risks.

Structural erosion, or entropy, is a significant challenge in software development, leading to tightly coupled systems known as "big balls of mud." Cyclic dependencies hinder testing and understanding of code, making modularization difficult. Breaking these cycles is crucial for maintaining a clean architecture. Techniques such as the dependency inversion principle can help eliminate cycles, improving code maintainability and reusability.

Metrics can prevent structural erosion by monitoring dependency structures and limiting the size of cycle groups. Setting thresholds for cyclic dependencies can prevent them from growing into unmanageable groups. Breaking cycles early ensures that software systems avoid becoming big balls of mud, a fate common to many large codebases.

In conclusion, using metrics and fitness functions enhances software architecture governance, ensuring quality and maintainability. By preventing structural erosion and leveraging automated governance, software development can achieve higher standards and efficiency.



### Summary

The text discusses the importance and challenges of using software metrics to maintain code quality, focusing on the need for tools to manage cyclic dependencies and structural erosion. It highlights the Spring framework as a well-structured example, emphasizing the necessity of limiting cyclic dependencies to avoid structural decay.

#### Challenges in Using Metrics

1. **Lack of Awareness**: Many developers and architects are unfamiliar with metrics due to limited academic exposure.
2. **Tool Availability**: While tools like Sonargraph-Explorer exist, they are not widely known and primarily support mainstream languages like Java and C#.
3. **Contextual Understanding**: Effective use of metrics requires context and expertise. Misapplication can harm the codebase.
4. **Overuse of Metrics**: Excessive metric rules can frustrate developers and slow progress. A balanced approach with five or six rules is recommended.
5. **Technical Debt**: High technical debt levels in organizations often hinder process improvements.
6. **Automation Requirement**: Metrics-based rules are only effective if violations trigger automated actions, necessitating time for implementation.

#### Tools for Gathering Metrics

The text lists several tools for gathering metrics, such as Understand, NDepend, Source Monitor, SonarQube, and Sonargraph-Explorer, each with varying capabilities and language support. It stresses the importance of choosing tools that integrate with automated builds to check metric thresholds.

#### Useful Metrics

The text categorizes metrics into several types:

- **Coupling and Structural Erosion**: Metrics like Average Component Dependency (ACD) and Propagation Cost (PC) measure system coupling. High PC values indicate high coupling, which is concerning, especially in larger systems.
  
- **Cyclicity and Relative Cyclicity**: These metrics assess cyclic dependencies. A well-designed system should have minimal component cycles, ideally not spanning more than one namespace or package. Relative Cyclicity helps gauge the severity of cyclic dependencies.

- **Structural Debt Index (SDI)**: SDI evaluates the effort required to break cycle groups by calculating the minimal set of dependencies to cut. This metric helps prioritize which cycles to address first.

Overall, the text underscores the importance of using metrics judiciously to enhance software maintainability, recommending a strategic approach to selecting and applying metrics to avoid overwhelming developers and to effectively manage technical debt.



### Summary

In the pursuit of creating a new metric for code maintainability, the concept of "Maintainability Level" (ML) was developed. This metric aims to measure the quality of software design by tracking dependencies and ensuring horizontal and vertical layering within a system. The goal is to maintain a clear hierarchy to avoid cyclic dependencies, which negatively impact maintainability.

#### Verticalization and Dependency Management

Verticalization refers to organizing software into functional components within silos, minimizing cyclic dependencies. A levelized dependency graph helps identify and consolidate cyclic groups into single nodes, ensuring a clear dependency hierarchy. The metric values are used as a warning system in nightly builds to signal when refactoring is necessary.

#### Calculating Maintainability Level

The ML metric is calculated using a formula that considers the size of logical nodes and the number of influenced components. The initial metric (ML1) is refined to account for cyclic dependencies by introducing penalties for cycle groups with more than five nodes. The second version (ML2) incorporates this penalty, providing a more accurate maintainability assessment.

#### Adjustments for Small Systems

Small systems often yield misleading ML values due to their size. A sliding minimum value adjustment (ML3) ensures that smaller systems don’t appear disproportionately unmaintainable. Additionally, an alternative value based on Relative Cyclicity for package dependencies (MLalt) is computed to address discrepancies in package structure.

#### Tool Support and Comparisons

Sonargraph is the only tool currently implementing this experimental metric. The development of ML was inspired by another metric, Decoupling Level (DL), though DL's algorithm is patent-protected, preventing direct replication.

#### Metrics for Size and Complexity

Metrics such as Lines of Code (LoC) and Cyclomatic Complexity help manage code size and complexity. LoC measures code length, while Cyclomatic Complexity assesses the number of execution paths, with a recommended threshold of 15 to avoid high error rates. Indentation levels also indicate complexity, with a recommended maximum of four levels.

#### Change History Metrics

Version-control systems provide valuable data on code changes. Metrics like Number of Changes, Code Churn, and Number of Authors highlight frequently changing files, code rewrite rates, and knowledge monopolies. Analyzing these metrics helps identify candidates for refactoring, addressing structural erosion and improving system stability.

Overall, these metrics and strategies aim to enhance code maintainability by promoting clear design, managing complexity, and leveraging version-control insights to guide refactoring efforts.



### Summary

The text discusses the use of software metrics and visualizations to improve code maintainability and architecture. It highlights the concept of "bottleneck classes," which have numerous dependencies, and introduces innovative visualizations like the "software city" to represent metrics visually. Each building in this visualization represents a source file, with its size, height, and color indicating different metrics like lines of code, complexity, and change frequency. This aids in identifying refactoring candidates.

The text also covers useful metrics beyond coupling and complexity, such as Component Rank, which is based on Google's Page Rank algorithm. This metric helps identify "popular" classes in a system, guiding new developers on where to start understanding a codebase. Another metric, LCOM4, measures the cohesion of methods within a class to check if it violates the single-responsibility principle.

Architectural fitness functions are introduced as a way to assess architectural characteristics like stability and scalability. These functions help prioritize architectural goals and measure how well they are achieved. The text suggests using metrics to ensure maintainability, such as limiting complex files and maintaining a low percentage of complex code.

To track metrics over time, the text recommends automated daily metrics gathering and visualization to detect harmful trends early. Tools like SonarQube and Jenkins with Sonargraph-Explorer are suggested for tracking and visualizing metrics.

The text provides golden rules for better software, emphasizing the importance of a formal architectural model, avoiding circular dependencies, limiting code duplication, and setting thresholds for source file size and complexity. These rules can be enforced through CI builds to improve code quality and developer productivity.

Finally, the Goal-Question-Metric (GQM) approach is introduced as a method for defining metrics to tackle challenging software development problems. GQM involves setting a goal, forming questions to evaluate progress, and identifying metrics to answer those questions. This structured approach helps teams focus on why they are measuring, leading to better outcomes and informed decisions.

Overall, the text underscores the importance of using metrics and structured approaches to maintain software quality and guide architectural decisions.



## Summary

The text discusses the Goal-Question-Metric (GQM) approach, a structured method for evaluating and improving systems by defining goals, generating questions to assess those goals, and establishing metrics to answer the questions. The process involves three main steps: identifying a goal, enumerating questions to evaluate the goal, and defining metrics to answer these questions. Metrics can be diverse, including Boolean values, statistical inferences, and complex equations, and may require precise definitions.

### GQM Implementation

1. **Prioritizing Metrics**: Not all metrics provide strong signals or are cost-effective to compute. It’s crucial to focus on metrics that are both significant and inexpensive. Metrics that answer multiple questions or provide both positive and negative insights should be prioritized.

2. **Data Collection Strategy**: After defining metrics, a data collection strategy is necessary. Data can come from various sources, such as code instrumentation, surveys, or static-analysis tools. The aim is to collect data that feeds high-value metrics and is easy to obtain.

3. **Concrete Planning**: With enough information, a plan for data collection and metric computation can be formed. This includes deciding on necessary work, such as data recording and dashboard building. The plan should be shared with the team and stakeholders.

### Case Study: Predicting Service Disruptions

A development team faced service disruptions due to API rate limits with a third-party service. Using GQM, they identified metrics to improve operational visibility and architectural changes. These metrics allowed them to foresee potential issues and mitigate them before affecting users.

- **Incident #1**: A failure in storage led to excessive API requests, causing a service disruption. The team used GQM to identify failure indicators and improve system visibility.

- **Operational Improvements**: The team added a heartbeat component to check service availability and clarified architecture by assigning failure handling to work queues. They created alerts and runbooks for monitoring and response.

- **Incident #2**: A similar issue occurred later, but the team was prepared. They detected the problem early, informed users, and the system self-corrected once the service was restored.

### GQM Workshop

The text outlines how to run a GQM workshop to build consensus on metrics and data collection. The workshop involves:

- **Participants**: Both technical and non-technical stakeholders should participate, depending on the goal.
- **Preparation**: A draft goal statement and necessary materials (like whiteboards or virtual tools) are required.
- **Outcomes**: By the end, participants should have a clear goal, questions, prioritized metrics, metric definitions, and a data list for computation.

Overall, the GQM approach helps teams anticipate and address potential system failures, enhancing operational visibility and response strategies. It encourages collaboration and structured analysis, leading to more effective system design and incident management.


# Summary of GQM Workshop and Metrics

The Goal-Question-Metric (GQM) approach is a structured method for defining and evaluating metrics in software projects. It begins with setting a clear goal, formulating questions to assess the achievement of this goal, and identifying metrics to answer these questions. This method is particularly useful in situations where there is uncertainty about what needs to be measured.

## GQM Workshop Steps

1. **Introduction and Ground Rules**: Start by introducing the workshop's purpose and establishing a respectful environment.
   
2. **Goal Statement**: Clearly write the goal statement for all to see, allowing space for questions and metrics.

3. **Question Generation**: Encourage participants to ask questions that need answers to determine if the goal is met. Gather questions until time runs out or ideas stall.

4. **Brainstorm Metrics**: For each question, brainstorm metrics that could provide answers. Encourage creativity without concern for data collection methods at this stage.

5. **Sanity Check**: Review if the metrics align with the goal. Adjust the goal statement if necessary.

6. **Data Identification**: Determine the data required for metric computation, and refine metrics as needed.

7. **Prioritization**: Use techniques like dot voting or value/effort analysis to prioritize metrics.

8. **Reflection and Observations**: Discuss any surprises or consensus regarding important metrics. Identify any problematic or costly metrics.

9. **Documentation**: Record the workshop outcomes and share them with participants. Prepare a detailed report if necessary.

## Facilitation Guidelines

- Use sticky notes for brainstorming questions and metrics.
- Encourage "out-of-the-box" thinking to avoid getting stuck on data collection concerns.
- Look for opportunities to reuse metrics across different questions.
- Involve someone knowledgeable about system architecture to assess data collection costs.
- Capture a visual representation of the GQM tree for easy sharing.

## Example and Application

A GQM tree example involved identifying analytics for fraud investigation. The process was messy initially, but post-workshop refinement led to a precise definition of metrics and prioritization by stakeholders. This informed architecture design and project scope, highlighting the importance of GQM in providing context for metrics.

## Conclusion

The GQM approach is a versatile tool for software architects and teams, aiding in strategic planning, product launches, and system quality assessments. It emphasizes starting with a clear goal, asking pertinent questions, and developing metrics to answer those questions. This approach is particularly valuable for measuring unknown or complex aspects of a project.

Metrics are crucial for understanding and improving software projects, but they must be used within the right context. The GQM method helps navigate the challenges of measuring what is not fully understood, providing a structured framework for meaningful data collection and analysis.


# Summary of Software Architecture Metrics

## Key Concepts and Principles

### Software Architecture Metrics
Software architecture metrics are essential for evaluating the quality and effectiveness of software systems. They help in assessing maintainability, scalability, performance, and security. The use of metrics is context-dependent, and they should be tailored to fit specific project needs.

### Importance of Modularity
Modularity is crucial in software design, helping reduce technical debt and improve testability. The Modularity Maturity Index (MMI) is a tool used to assess the technical debt associated with modularity, guiding refactoring efforts and ensuring sustainable architecture.

### Dependency Management
Managing dependencies is vital for maintaining clean architecture. The Dependency Inversion Principle and strategies to avoid cyclic dependencies are critical to prevent structural erosion and ensure system stability.

### Continuous Architecture
Continuous architecture emphasizes the importance of ongoing measurement and adjustment. This approach includes runtime measurement and the use of fitness functions to ensure that software systems evolve effectively over time.

## Measurement and Metrics

### Types of Metrics
Metrics can include size and complexity, coupling, and structural erosion. Tools like Sonargraph and NDepend aid in collecting and visualizing these metrics. Metrics should be tracked over time to understand trends and guide architectural evolution.

### Key Performance Indicators (KPIs)
KPIs such as Mean Time Between Failures (MTBF), Mean Time to Recover (MTTR), and Mean Time to Restore Service are crucial for assessing system reliability and service stability. These metrics help in understanding the operational value stream and guiding improvements.

### Automation and Tools
Automation is essential for operationalizing metrics. Tools like Microsoft Azure DevOps, PowerBI, and Thoughtworks Metrik facilitate data collection and visualization, enabling the creation of minimal viable dashboards for real-time insights.

## Case Studies and Practical Applications

### Transitioning to Microservices
The transition from monolith to microservices involves addressing challenges like the "big ball of mud" and implementing distributed architecture. Metrics play a crucial role in guiding this transition, ensuring that the architecture remains manageable and efficient.

### Security and Scalability
Security measurement includes zero-day security checks, while scalability involves understanding performance trade-offs. Both require careful consideration of measurement challenges and the use of appropriate metrics to ensure robust and scalable systems.

### DevOps and Continuous Delivery
DevOps practices, including continuous delivery and trunk-based development, benefit from metrics that track deployment pipelines, build stability, and test coverage. These metrics support a culture of continuous improvement and rapid iteration.

## Authors and Contributions

The book brings together insights from experts like Christian Ciceri, Dave Farley, Neal Ford, and others. Their collective experience spans various domains, including Agile methodologies, domain-driven design, and software architecture. Their contributions provide a comprehensive guide to implementing effective software architecture metrics.

## Conclusion

Software architecture metrics are indispensable tools for guiding the evolution and improvement of software systems. By focusing on key areas such as modularity, dependency management, and continuous architecture, organizations can create systems that are maintainable, scalable, and resilient. The use of automation and tools further enhances the ability to track and visualize metrics, supporting informed decision-making and strategic planning.
