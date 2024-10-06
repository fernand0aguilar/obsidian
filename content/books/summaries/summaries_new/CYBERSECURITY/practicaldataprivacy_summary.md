
**Practical Data Privacy** by Katharine Jarmul is an essential guide that addresses the increasing complexity and importance of data privacy in the face of regulations like GDPR and CCPA, along with the risk of data breaches. The book provides a comprehensive overview of modern privacy-enhancing technologies such as differential privacy, federated learning, and encrypted computation, and offers practical advice for integrating these technologies into data systems.

Key topics include:

- **Data Governance and Privacy Approaches**: The text explains data governance, identifying sensitive data, and implementing basic privacy measures like pseudonymization. It emphasizes the importance of documenting data and tracking its lineage to ensure privacy by design.

- **Anonymization and Differential Privacy**: Jarmul discusses anonymization techniques and differential privacy, detailing mechanisms like the Laplace and Gaussian noise methods. The book highlights the practical application of differential privacy, such as its use in anonymizing the US Census.

- **Building Privacy into Data Pipelines**: The book outlines strategies for integrating privacy into data workflows, including the use of differential privacy libraries and ensuring data collection is anonymous. It stresses the importance of collaboration between data engineering teams and leadership to make privacy a core value.

- **Privacy Attacks and Security**: Jarmul analyzes common privacy attack vectors like linkage attacks and model-stealing attacks. The text advises on data security measures, access control, and threat modeling to mitigate risks.

- **Privacy-Aware Machine Learning**: The book explores privacy-preserving techniques in machine learning, including differentially private stochastic gradient descent and the use of open-source libraries for privacy-preserving machine learning (PPML).

- **Federated Learning**: Jarmul explains federated learning, its history, and its application in distributed data analysis. The section covers the architecture of federated systems and the security threats involved.

- **Encrypted Computation**: The text introduces encrypted computation methods, including secure multiparty computation and homomorphic encryption, discussing when and how to use these techniques.

- **Legal Considerations**: The book provides an overview of GDPR and other privacy regulations, emphasizing the importance of applying privacy-enhancing technologies to comply with legal requirements. It also covers internal policies and working with legal professionals.

- **Practicality and Future Considerations**: Jarmul discusses managing privacy and security risks, using practical privacy technologies, and embracing future challenges through research and collaboration.

The book is praised for its balance of technical depth and accessible language, making it a valuable resource for data scientists, engineers, and anyone involved in data privacy. It includes examples, code snippets, and practical guidance to help practitioners implement privacy in their workflows effectively.



The text explores the complex landscape of data privacy in the digital age, emphasizing the challenges and importance of maintaining privacy amidst widespread data collection. It highlights the pervasive nature of surveillance capitalism, where personal data is collected and used for profiling by apps and algorithms, impacting access to financial products, insurance, and more. The text underscores the need for privacy in digital interactions, drawing parallels to being constantly monitored in real life.

The book "Practical Data Privacy" by Ms. Jarmul is introduced as a guide to building privacy into digital systems, offering techniques to design systems that prioritize user privacy. It stresses the importance of privacy by design and the role of data scientists and machine learning engineers in creating ethical and responsible systems. The book aims to equip readers with skills to navigate privacy regulations and implement privacy-centric solutions in fields like cybersecurity, healthcare, and finance.

Data privacy is defined as a multifaceted concept encompassing legal, technical, social, cultural, and individual aspects. Legal definitions involve regulations and policies that dictate data privacy requirements, which are ever-evolving. The technical aspects focus on implementing privacy technologies and making informed decisions about privacy in data systems. Social and cultural perspectives, as highlighted by danah boyd, emphasize understanding social situations and context in privacy design, advocating for systems that respect users' control over their data.

The text discusses the shift from physical to digital interactions, complicating users' ability to perceive privacy contexts. It references Helen Nissenbaum's work on contextual integrity, which examines how technology alters the transparency of privacy boundaries. The book aims to provide practical guidance for integrating social understandings of privacy into system design, offering users better navigation of digital privacy contexts.

The intended audience includes data scientists seeking to specialize in data privacy, those transitioning to regulated industries, researchers handling sensitive data, and data science freelancers or consultants. The book also targets managers designing privacy-focused products and anyone interested in the intersection of privacy and technology. Familiarity with Python, Jupyter notebooks, math, and statistics is beneficial for readers, though the book can be understood without delving into technical details.

Overall, the text advocates for a proactive approach to data privacy, urging the integration of privacy into digital systems to foster trust and accountability. It highlights the growing demand for privacy skills as companies recognize the value of secure data management, not only to avoid incidents but also to build a trusted brand and culture. The text serves as a call to action for those in the tech industry to prioritize privacy in their work, ensuring ethical and responsible use of data.



This book serves as a comprehensive guide to integrating data privacy into data science, offering a mix of theory, exercises, and practical applications. It begins with simple privacy solutions and progresses to more complex, unsolved challenges. Privacy engineering is highlighted as a growing field, combining data science with engineering to build privacy into products and systems.

Key chapters cover data governance, anonymization, privacy in data pipelines, and privacy-aware machine learning. Methods like pseudonymization, anonymization, encrypted computation, and federated learning are discussed. The book also addresses privacy attacks, legal regulations like GDPR and CCPA, and practical considerations for designing secure systems.

Privacy engineers are distinct from traditional data scientists or engineers, focusing on implementing privacy techniques in data processes. They work across organizational teams and are crucial as the reliance on sensitive data increases.

The book is designed for data scientists and technologists, providing strategies and quick references for managing data privacy challenges. It aims to simplify the learning curve and inspire further exploration in the field. Resources and code examples are available online, supporting the practical application of concepts.

Acknowledgments highlight the author's journey and contributions from peers and mentors, emphasizing the collaborative effort in creating the book.



Data governance and privacy are crucial in data science, involving the management and protection of data throughout its lifecycle. Data governance encompasses the processes, policies, and technologies that ensure data is handled responsibly, focusing on data lineage, reliability, privacy, and security. It involves understanding data origin, access rights, and compliance with laws and internal policies.

Privacy by Design, developed by Ann Cavoukian, is a key principle that integrates privacy into system design from the start. This approach is essential for managing sensitive data, which includes personally identifiable information (PII) and person-related data. PII can be anything that uniquely identifies an individual, such as names, email addresses, and social security numbers. Person-related data includes interests, beliefs, and behaviors, which, when combined, can identify individuals.

Organizations must identify and document sensitive data to protect it effectively. This involves recognizing PII and other sensitive data types, understanding their potential for identification, and implementing appropriate privacy technologies. Tools for PII discovery in unstructured data, such as text files and logs, are crucial, and can include regular expressions and deep learning models.

Data governance also involves ensuring data privacy and security through policies and controls. This includes managing access to sensitive data, monitoring for breaches, and ensuring compliance with regulations like GDPR. Effective governance requires documenting data flows, understanding data quality issues, and addressing privacy concerns throughout the data lifecycle.

Sensitive data is not limited to PII but also includes proprietary and confidential business data. Protecting such data involves understanding the range of what can be considered sensitive, including contextual and social privacy aspects. Regulations provide individuals with choices regarding their privacy preferences, and organizations must respect these through transparent policies and consent mechanisms.

In summary, data governance and privacy are intertwined fields that require careful planning and execution. By identifying sensitive data and implementing robust governance frameworks, organizations can protect individual privacy and comply with regulatory requirements, ultimately fostering trust and integrity in their data practices.



Data governance and privacy approaches are critical for organizations handling sensitive data, such as Personally Identifiable Information (PII). It's essential to work with risk teams to understand that PII discovery is never perfect. Human-input data should be treated as extremely sensitive, and risks must be identified and tested if using such data without PII protections. Open-source tools like Microsoft’s Presidio can help in PII discovery and pseudonymization.

Effective data governance requires comprehensive documentation practices. This involves tracking data from collection to processing, ensuring that data is labeled and managed throughout its lifecycle. Documentation should include data collection details, quality assessments, security measures, privacy considerations, and data definitions. Proper documentation facilitates data experiments, cross-department collaboration, and compliance, while reducing security risks.

Data documentation should be user-friendly, allowing stakeholders to access and understand data easily. It should include standardized descriptive statistics and data definitions to help users make informed decisions. Documentation also plays a role in integrating data with identity management systems, ensuring that data access is controlled and compliant with privacy regulations.

Organizations should address the issue of undocumented data, which often poses privacy and security risks. A structured process for investigating and documenting unknown data is necessary. This includes determining data provenance, assessing sensitivity, and deciding whether to delete, archive, or maintain the data. Proper documentation and collaboration with data teams can prevent data from becoming unknown or unused.

In summary, a robust data governance strategy involves treating all human-input data as sensitive, implementing comprehensive documentation practices, and addressing undocumented data. This ensures data security, compliance, and effective data utilization across the organization.



The text emphasizes the importance of addressing undocumented data sources, often resulting from shadow IT practices where sensitive data is copied to multiple locations due to access restrictions. These practices pose security and auditing risks. Data privacy professionals should replace shadow IT with transparent, documented, and privacy-preserving systems. Resistance may occur, but educating stakeholders on the risks of data hoarding is crucial. Spreadsheets with sensitive information should be managed by security teams or deleted to prevent threats.

Data lineage, or provenance, is essential for data governance, tracking data's origin, processing, and consent. It helps data scientists assess data quality and utility, and is crucial for maintaining real-time systems. Many companies lack lineage tracking due to initial infrastructure limitations. However, documenting lineage can be initiated using tools like Apache Spark, Kafka, or Airflow. A data catalog, which indexes data sources and documentation, is also vital for governance.

Tools like DBT, CKAN, AWS Glue, and Tableau aid in data documentation and lineage tracking. Great Expectations can test data midstream to detect changes. Lineage tracking supports data sovereignty laws, ensuring compliance by keeping data within specific jurisdictions. It adds overhead but streamlines debugging and access.

Data version control, akin to software version control, is crucial for monitoring changes in datasets. It allows for snapshots of data at specific times, aiding in diagnosing issues and ensuring privacy compliance. Versioning helps understand data behavior over time and supports privacy and AI practices. It involves evaluating tools based on snapshot management, memory efficiency, integration with workflows, and compatibility with data lineage efforts.

Pseudonymization is a basic privacy technique, using pseudonyms instead of real data. Approaches include masking, tokenization, hashing, and format-preserving encryption. Each varies in privacy and data quality impact. Masking can either obscure or expose data, tokenization requires scalable solutions, and encryption retains linkability but can be adjusted by changing keys.

Overall, the text underscores the need for robust data governance practices, emphasizing documentation, lineage, and version control to enhance data privacy, compliance, and utility.



Pseudonymization is a privacy technique that allows data to be linked while protecting personal identifiers. It retains the ability to connect datasets using sensitive columns but is not equivalent to anonymization, as re-identification through linkage attacks remains a threat. Benefits include format-preserving utility, useful for understanding data structure, and alignment with Privacy by Design principles. However, pseudonymization can create a false sense of security, leading to misconceptions that data is anonymized.

Internal use cases for pseudonymization include scenarios where data is used by a small group with privileged access, such as internal sales or customer support teams. It is also used in testing environments to mimic production data without exposing raw data, although this practice carries risks due to weak protection in test environments.

Several tools support pseudonymization, such as Hashicorp Vault, which manages secrets and can apply format-preserving encryption. Open source libraries like KIProtect’s Kodex, Mysto’s Format-Preserving Encryption, Microsoft’s Presidio, and PIMO offer various pseudonymization methods.

Anonymization aims to remove identifying information to prevent tracing back to individuals. Traditional methods like suppression and aggregation have been debunked due to potential re-identification risks. Cynthia Dwork's work on differential privacy highlights that data release may still lead to privacy loss, emphasizing the challenge of estimating auxiliary information attackers might possess.

Differential privacy provides a way to measure privacy loss by defining limits on information release. It focuses on the process rather than the result, offering a dynamic approach to maintaining privacy over time. The core idea is to ensure that an attacker cannot determine if a particular individual is in a dataset, even with auxiliary information.

Differential privacy algorithms aim to balance information release with privacy protection, using mechanisms to add noise to data queries. The goal is to provide meaningful data analysis while ensuring individual privacy. Understanding and implementing differential privacy requires careful consideration of query support and potential outliers.

Overall, pseudonymization and differential privacy are crucial components of data governance and privacy strategies, offering different levels of protection and utility. They help navigate the balance between data utility and privacy, guiding decisions on appropriate techniques based on specific use cases and risk assessments.



Differential privacy is a method to protect individual privacy in datasets by adding noise to the data, ensuring that the information leakage is within a defined bound, ε (epsilon). Epsilon defines the privacy loss, quantifying how much information an attacker can gain. It is crucial in balancing privacy and information utility. A smaller epsilon provides better privacy guarantees, making it difficult for attackers to infer specific data points.

Bayesian inference, using Bayes’ rule, helps understand privacy loss by updating prior suspicions with new information. Differential privacy can be reframed from an attacker’s perspective, where the attacker tries to determine if a dataset is D1 or D2 based on query responses. The choice of epsilon defines the bounds of information gain, making it a critical decision in implementing differential privacy.

Differential privacy guarantees are probabilistic, offering a way to bound information gain and provide plausible deniability to individuals. It allows data to be analyzed while maintaining privacy, but it is not a universal solution for all privacy risks. It is particularly effective in scenarios where group information could be inferred, offering participants a way to deny specific inferences about them.

The US Census Bureau implemented differential privacy for the 2020 Census to prevent re-identification attacks, which previously allowed attackers to reconstruct individual identities with significant accuracy. By adding noise to census data, they aimed to balance privacy with the utility of the data for critical tasks. This approach uses a top-down strategy, adding noise to aggregated data and ensuring consistent statistics across different levels.

The Laplace mechanism is commonly used in differential privacy to add noise. It samples noise from the Laplace distribution, which has properties suitable for privacy guarantees. The distribution allows for minimal noise addition while meeting privacy requirements, providing high probability for low noise addition but also ensuring plausible deniability through its tails.

Working with legal professionals is essential when discussing data anonymization, as privacy regulations are dynamic and often become stricter. Differential privacy is viewed as a "gold standard" by many legal experts, but it requires careful implementation to ensure legal and technical confidence in data release decisions.

Overall, differential privacy offers a robust framework for protecting individual privacy in data analysis while allowing for meaningful insights. It requires thoughtful consideration of privacy parameters, potential impacts on underrepresented groups, and collaboration with legal professionals to navigate the complexities of privacy regulations.



The text discusses differential privacy, focusing on the Laplace mechanism and its application in protecting individual data privacy. The Laplace mechanism adds noise to query results to ensure privacy. A naive implementation using Python demonstrates how Laplace noise is applied, with `epsilon` (ε) determining privacy guarantees. The function `np.random.laplace` uses `value` as the location (μ) and `1/epsilon` as the scale, but this naive approach is insecure and should not be used in real systems.

The concept of sensitivity is crucial in differential privacy, measuring the maximum change in query results when an individual's data is added or removed. For example, adding an 81-year-old to a dataset changes the average age calculation significantly, highlighting the need for sensitivity consideration. Some queries, like sums, can have unbounded sensitivity, leading to privacy risks. To mitigate this, bounds can be introduced to limit possible values, reducing sensitivity.

The text explains the importance of privacy budgets and composition. Differential privacy allows tracking privacy loss through the `epsilon` value, which is composable across multiple queries. This means you can allocate a privacy budget over several queries, balancing information gain and privacy loss. For instance, calculating an average age requires differentially private sums and counts, each with its own sensitivity and `epsilon` allocation.

The implementation of differential privacy involves updating mechanisms to incorporate sensitivity, adjusting the scale of noise added (`sensitivity/epsilon`). This ensures that queries with higher sensitivity have more noise, protecting privacy. The text provides code examples to illustrate these concepts, emphasizing the importance of understanding error and sensitivity.

The discussion extends to exploring other noise mechanisms, such as Gaussian noise, which requires a relaxed definition of differential privacy by introducing a small delta (δ). This delta accounts for improbable outcomes and allows for the use of the Gaussian distribution, which may be more familiar to data scientists.

Overall, the text emphasizes the complexity and importance of correctly implementing differential privacy mechanisms, encouraging the use of established libraries to avoid common pitfalls. It highlights the need for careful consideration of sensitivity, privacy budgets, and error management to ensure robust privacy guarantees while allowing meaningful data analysis.



The Gaussian mechanism for differential privacy is typically used when epsilon (ε) is less than 1, adding more noise than necessary. The recommended approach is the analytic Gaussian noise, as described by Balle and Wang (2018). This mechanism uses a more advanced formula but is simplified here for initial understanding. A Gaussian mechanism is (ε, δ) differentially private if it meets specific criteria, with the noise added following a Gaussian distribution centered at zero. Unlike Laplace noise, which satisfies (ε, 0) differential privacy, Gaussian requires accounting for delta (δ), ideally "cryptographically small" (≤2^-30). A practical choice for δ might be 10^-5, balancing guarantees and practicality.

When comparing Laplace and Gaussian noise, sensitivity is key. Sensitivity measures how much a single individual's data can affect results. For Gaussian noise, sensitivity is defined in terms of the Euclidean distance (L2 norm), while Laplace uses Manhattan distance (L1 norm). Gaussian noise scales with the square root of the number of statistics a person can influence, making it preferable when sensitivity is high.

In practice, adding Gaussian noise to datasets like age and salary involves calculating mean values with the noise applied. The Gaussian mechanism introduces more noise than Laplace for similar privacy levels, but it is more efficient in scenarios with high sensitivity. Implementations should use well-audited libraries to avoid vulnerabilities.

Differential privacy introduces higher error rates, necessitating intelligent use of results. Techniques like denoising, Bayesian reasoning, and leveraging normal distribution properties can help manage this error. Gaussian noise aligns well with scientific assumptions of normally distributed errors, making it suitable for linear algebra and machine learning applications.

Sensitivity and privacy units can be adapted based on context. For example, when multiple users share a device, privacy units might be device-based. Over time, privacy budgets can be managed by setting intervals or focusing on specific actions.

K-anonymity, an older anonymization method, groups individuals with similar attributes but can be vulnerable to linkage attacks. Enhancements like l-diversity attempt to add variance to sensitive attributes but can skew data, reducing its utility for analysis. These limitations highlight the need for more robust privacy mechanisms like differential privacy.

Overall, differential privacy mechanisms, particularly Gaussian noise, provide a framework for balancing privacy and data utility, although ongoing research continues to refine these methods.



In the context of data anonymization, traditional methods like k-anonymity, l-diversity, and t-closeness present challenges in maintaining data utility while ensuring privacy. These methods often require significant computational resources and can introduce bias without providing quantifiable privacy guarantees. Differential privacy emerges as a more robust solution, offering provable privacy assurances by adding noise to data in a controlled manner. It balances the trade-off between data utility and privacy protection, making it the preferred method for anonymization today.

Building privacy into data pipelines involves integrating privacy-preserving techniques directly into data workflows. This requires a clear understanding of data governance, sensitivity, and the specific use cases for data collection and processing. Privacy methods such as masking, pseudonymization, or differential privacy should be chosen based on the data's sensitivity and intended use. The goal is to maximize privacy without compromising the data's utility for its intended purpose.

To effectively incorporate privacy measures into data pipelines, organizations should follow several steps:

1. **Define Purpose and Use Case**: Clearly outline the purpose of data collection and its intended use. Engage with stakeholders to ensure data collection aligns with genuine needs, minimizing unnecessary data accumulation.

2. **Maximize Privacy**: Experiment with different privacy technologies to achieve the highest possible privacy level while maintaining data utility. Start with high privacy measures like field removal or differential privacy and adjust based on feedback.

3. **Expand Use Cases**: Once a privacy-utility balance is achieved, apply similar measures to other data tasks or use cases. Use an agile approach to adapt and refine privacy measures across different scenarios.

4. **Experiment, Learn, and Adjust**: Continuously explore new privacy technologies and integrate them into workflows. Stay updated with privacy policy changes and collaborate on new implementations to ensure ongoing compliance and effectiveness.

5. **Meet Users Where They Are**: Understand the needs of data consumers and tailor privacy measures to fit their requirements. Regularly check in with users to ensure privacy measures meet their expectations and adjust as necessary.

6. **Engineer Privacy In**: Embed privacy automation into systems rather than relying on ad-hoc solutions. Use existing tools and libraries, such as Apache Beam or Tumult Analytics, to streamline privacy integration.

7. **Test and Verify**: Regularly test data pipelines to ensure privacy measures are functioning as intended. Use tools like Great Expectations to validate data processing and detect issues early.

To illustrate these principles, consider a scenario at a sustainable chocolate company where marketing needs to analyze user purchase data. The workflow involves removing personal identifiers, hashing user IDs, retaining campaign information, and aggregating order data while bounding outliers. This ensures privacy while allowing marketing to assess campaign effectiveness.

By embedding privacy into data pipelines, organizations can protect user data, comply with regulations, and maintain data utility for business needs. Continuous learning and adaptation are key to staying ahead in the evolving field of data privacy.



The text focuses on integrating privacy and data governance into data pipelines, emphasizing secure data handling, testing, and privacy-aware consent collection.

### Data Processing and Security
- **Data Merging and Encryption**: Data frames are merged using secure keys, which are destroyed post-investigation. User IDs are encrypted during processing.
- **Data Aggregation**: Data is grouped by order ID, aggregating fields like campaign URI, user ID, city, state, total, and number of items. Outliers in the total are removed before exporting.

### Testing with Great Expectations
- **Integration**: Great Expectations library is used to ensure data quality by setting expectations and testing them.
- **Expectation Suite**: Expectations are defined, saved to a JSON file, and integrated into the pipeline for continuous testing.
- **Monitoring**: Regular check-ins with data consumers are recommended to ensure analysis integrity, with alerts set up for errors.

### Privacy and Consent
- **Consent Collection**: Emphasizes the importance of collecting consent data, including privacy policy version, retention period, and processing purposes.
- **Designing Interfaces**: Suggests privacy-first defaults in user interfaces, with options for users to manage consent settings.
- **Schema Validation**: Uses Apache Avro for schema validation to ensure proper consent data collection.

### Differential Privacy in Pipelines
- **Library Integration**: Recommends using libraries like Tumult Analytics for differential privacy, which provides privacy accounting and features.
- **Querying with Privacy**: Demonstrates using Tumult Analytics to run differentially private queries, emphasizing the importance of planning and understanding data before querying.
- **Privacy Budget Management**: Highlights the need to manage privacy budgets effectively to ensure queries remain within privacy constraints.

### Data Access Strategies
- **Access Restrictions**: Suggests differentially private access paths for data, with varying privacy guarantees for internal and third-party access.
- **Experimentation**: Encourages experimenting with privacy mechanisms to balance data protection and accessibility.

### Anonymization and Collection
- **Open Source Libraries**: Encourages using open source differential privacy libraries for data anonymization and collection.
- **Continuous Learning**: Recommends continuous experimentation and learning to improve privacy practices in data science workflows.

The text underscores the importance of integrating privacy and data governance into data pipelines, using secure practices, and leveraging modern tools to ensure data protection and compliance.



Apple's implementation of local differential privacy (LDP) for emoji data collection on iOS devices exemplifies a privacy-centric approach to data collection. By applying a differential privacy mechanism on the device before data is centralized, Apple ensures user data remains anonymous. The process involves adding noise to data on the device, sending it to Apple servers, and then stripping IP and origin information to maintain privacy. This method allows Apple to aggregate data for insights without compromising individual privacy, highlighting the importance of trust boundaries in data workflows.

A trust boundary is crucial in data security, marking the point where security measures change. For instance, when data moves from a secure environment to a less secure one, or when data crosses from external to internal systems, it crosses a trust boundary. These boundaries help determine where to apply privacy controls and are essential for maintaining data integrity and privacy.

While Apple successfully uses LDP, Google's RAPPOR, an early differential privacy deployment, faced challenges. RAPPOR utilized randomized response techniques to collect data anonymously from Chrome browsers. However, the high relative error of this method, along with the need for large data volumes to achieve accurate results, led to its discontinuation. This highlights the complexity of balancing data accuracy and privacy, especially in local differential privacy models where error scales with user numbers.

Google later developed Prochlo, a method combining local and central differential privacy with encryption to ensure privacy at scale. This approach requires robust infrastructure and trust boundaries, emphasizing the need for a clear understanding of data goals before implementing privacy solutions.

Effective privacy systems require collaboration between data science and engineering teams. Data privacy methods are most successful when leadership and data teams understand and support privacy standards. Communication across departments is vital, and integrating privacy into data governance can help maintain data quality and interoperability.

Documentation plays a key role in privacy workflows. By incorporating privacy documentation into repositories and sharing knowledge through internal talks, organizations can foster a culture of privacy. This culture not only enhances trust with consumers but also aligns with business-to-business (B2B) values by respecting internal data privacy.

Building a privacy-centric culture is a long-term endeavor, similar to developing a security-focused environment. By engaging team members and promoting privacy as a core value, organizations can create a positive brand image and attract talent interested in privacy-conscious workplaces. The journey involves continuous learning and adaptation, ensuring privacy is an integral part of data management and organizational strategy.



Incorporating security and privacy into an organization's culture involves engaging security experts to integrate privacy advocacy into educational efforts. This ensures multiple perspectives are considered, preventing privacy oversights in data deployment. Automating privacy in data pipelines requires analyzing system privacy needs and integrating privacy measures throughout the workflow. Implementing differential privacy technologies and fostering cross-team collaboration enhances privacy awareness.

Understanding privacy attacks involves thinking like both a security analyst and an attacker, envisioning potential threats, and iterating on protections as threats evolve. Key attack vectors include linkage and singling out attacks, which exploit auxiliary data sources to re-identify individuals. The Netflix Prize attack exemplifies this, where researchers linked anonymized Netflix data with IMDB profiles to identify users.

Linkage attacks succeed when auxiliary data sources connect easily with other datasets. Evaluating potential linkage involves assessing public and private datasets that could be exploited. Employing state-of-the-art privacy protections, like differential privacy, is crucial for datasets shared externally. Cardinality analysis, such as Google’s KHyperLogLog, helps identify unique data points that could be re-identified, enabling better privacy risk management.

Singling out attacks involve isolating an individual in a dataset to gather more information. For instance, querying a database with minimal security can reveal sensitive data about a unique individual. Another example is the NYC taxi dataset, where a scientist deduced null values and reversed the hashing mechanism, linking taxi data to celebrity sightings.

The Strava heat map incident highlights the risks of aggregated data releases. Strava's global activity map inadvertently exposed secret military bases due to low user density in certain regions, illustrating how even anonymized data can reveal sensitive information.

Overall, effective privacy protection involves proactive measures, continuous learning, and robust privacy technologies to mitigate evolving threats and protect user data across various scenarios.



The release of Strava's global heat map inadvertently exposed sensitive information about military bases, highlighting privacy risks when individual data leaks group information. This incident underscores the challenge of balancing individual and group privacy. While differential privacy can help protect individual data, group privacy remains complex, particularly when data is voluntarily disclosed without strong privacy guarantees.

The Strava case exemplifies how data concentration at sensitive locations can reveal confidential information. Similarly, a Google lawsuit revealed salary disparities by aggregating consensual data, demonstrating both the potential and risks of using data to identify inequalities. Privacy by Design principles, such as opt-in consent, can mitigate such risks.

Membership inference attacks, discovered by Reza Shokri, illustrate another privacy threat. These attacks determine if an individual's data was part of a model's training set, potentially revealing sensitive personal attributes. Attackers use shadow models and discriminators to infer membership, posing significant risks for models trained on small datasets or those with poor generalization. These attacks have been successful against major cloud services and show the importance of robust privacy measures in model training.

Attribute privacy attacks extend membership inference by revealing group characteristics from training data. This can expose sensitive attributes like sexual orientation or political affiliation. Such risks highlight the need to treat all human data as potentially sensitive, as seemingly innocuous data can leak private information.

Model memorization is another concern, where large models inadvertently store sensitive data, especially outliers. This issue, demonstrated by Carlini et al., shows that larger models are prone to memorization, leading to privacy breaches. Synthetic GANs have also been found to trace back to original datasets, raising ethical concerns about data use without consent.

Model-stealing attacks pose threats to proprietary information. Attackers can replicate models by querying public APIs, creating valuable assets for malicious use. Protecting models in production systems is crucial to prevent such thefts.

Overall, these privacy challenges underscore the importance of implementing strong privacy protections, understanding the potential for data leakage, and ensuring ethical data use in machine learning and data science.



The text discusses various privacy and security challenges related to machine learning models and data management. Key points include:

1. **Privacy Attacks on Models**: When models are deployed on devices, they become vulnerable to reverse engineering. Techniques such as differential privacy, transfer learning, and federated learning can help protect models, but the field is still evolving. Model inversion attacks, for instance, can exploit models to extract sensitive information like images from facial recognition systems.

2. **Attacks on Privacy Protocols**: Differential privacy mechanisms can be attacked, as demonstrated by Ilya Mironov's 2012 attack on a Laplace distribution. Timing attacks are another threat, where attackers use response times to infer information about noise distributions. Effective countermeasures require robust post-processing and peer-reviewed methods.

3. **Data Security Fundamentals**: Data security is intertwined with privacy and governance, focusing on the CIA triad—Confidentiality, Integrity, and Availability. These principles guide the protection against malicious activities and data breaches.

4. **Access Control and Data Loss Prevention**: Access control systems manage who can access data and how, using tools like Microsoft Active Directory and AWS IAM. Data loss prevention technologies monitor data flows to prevent unauthorized data exfiltration, often utilizing machine learning to detect anomalies.

5. **Additional Security Controls**: Organizations implement various security measures, such as encryption and network restrictions, to safeguard data. While these can be cumbersome, they are essential for protecting valuable data assets.

6. **Threat Modeling and Incident Response**: Security teams use threat modeling to anticipate and mitigate potential attacks. Incident response plans are crucial for managing security breaches, emphasizing the importance of preparedness and collaboration with security professionals.

7. **Probabilistic Reasoning in Security**: Security measures are evaluated based on the likelihood and impact of threats. While the concept of an "average attacker" is flawed, understanding typical attack patterns can inform security strategies.

Overall, the text highlights the complexity of securing machine learning models and data, advocating for continuous research, collaboration with security experts, and the adoption of advanced privacy-preserving technologies.



In threat modeling, identifying and sorting potential attack vectors by value and likelihood is crucial. However, expert assessments of risk can vary over time, indicating that current risk classification methods are malleable. Probabilistic reasoning helps in understanding privacy and security risks without averaging them, which could otherwise overexpose vulnerable populations. Traditional risk matrices often fail due to inconsistent inputs, so data scientists can reduce uncertainty through observation and experimentation, utilizing historical data to build probabilistic models.

In security, quantifiable risk scenarios are gaining traction, where data scientists can model complex problems by identifying dependent and independent variables. Modeling experiments, like the Rowhammer research, have shown that data-driven security experiments can validate threats effectively. Key risks in data science include data access, infrastructure, and models. Mitigations involve applying web security basics, such as protecting API endpoints and implementing access controls, which are essential for securing model APIs.

Protecting machine learning models involves securing the entire technological supply chain, including data workflows. Automation and proper design for privacy and security are vital. Important considerations include understanding data flow, regulatory compliance, testing, and documentation. Version control and self-documenting lineage enhance data governance, aiding in security and privacy efforts.

Staying informed about new attacks is critical. Engaging with communities and resources like DEFCON's AI Village and OpenMined can help professionals stay updated. Newsletters and blogs also provide valuable insights. Building connections with infosec coworkers ensures awareness of emerging threats.

Privacy-preserving machine learning (PPML) integrates privacy-enhancing technologies into workflows. Techniques like differential privacy can improve model generalization by preventing overfitting. In exploratory data analysis (EDA), determining the data needed for model training while ensuring privacy is essential. Differential privacy mechanisms can be applied to data types like integers, floats, and strings, enabling safe data analysis.

For broader data accessibility, differential privacy or redaction of sensitive fields is recommended initially. If these methods are inadequate, perturbation or rounding can be considered, though they lack the security guarantees of differential privacy. When sensitive attributes correlate with target variables, it's crucial to assess the implications to avoid unjust models.

Overall, integrating privacy-preserving techniques into machine learning and data science workflows enhances security while maintaining data utility. Continuous learning and adaptation to new threats are necessary for effective privacy and security management.



In privacy-aware machine learning, differential privacy is crucial for protecting sensitive information during model training. When using text data, methods such as differential privacy and libraries for removing potential PII are essential, though not foolproof. Techniques like tokenization, masking, and format-preserving encryption (e.g., Microsoft’s Presidio, Google’s Data Loss Prevention) help manage privacy in large data systems. Removing outliers is recommended to prevent privacy leaks, except when critical for analysis, like anomaly detection.

During feature engineering, robust privacy mechanisms should be employed, especially if features are shared across teams or projects. GDPR compliance necessitates data expiry documentation and proper anonymization, ensuring user data can be deleted as required. Differential privacy and data minimization future-proof models against changing legal interpretations.

Privacy-preserving machine learning (PPML) has gained traction, with architectures like Nicolas Papernot’s PATE demonstrating scalable implementation. PATE separates sensitive data into non-overlapping groups, training multiple models (teachers) whose aggregated outputs train a single student model with differential privacy ensured via Laplace noise.

Differentially Private Stochastic Gradient Descent (DP-SGD) is a significant advancement, adding noise during training. It measures sensitivity via L2 distance and adds Gaussian noise, with gradient clipping to control individual contributions. Proper sensitivity calculation ensures privacy during multiple training iterations.

Open source libraries like Opacus facilitate adding differential privacy to PyTorch models. Opacus tracks privacy loss using epsilon and delta values, applying noise at the layer level. It uses Rényi differential privacy with Gaussian noise for layer weight updates, requiring conversion of BatchNorm to GroupNorm for compatibility.

Monitoring training with tools like TensorBoard helps manage noise effects. Fine-tuning models with publicly available data and adding noise to higher layers reduces noise addition. This approach is common in computer vision and language models, leveraging public models for specific use cases.



The text discusses privacy-preserving machine learning (PPML) techniques, focusing on differential privacy (DP) and its challenges, especially when using libraries like PyTorch's Opacus and TensorFlow Privacy. It highlights the issue of high epsilon values in DP-SGD, which may lead to inaccurate privacy assumptions. Experts recommend considering overfitting mechanisms and alternative methods to enhance privacy.

For those not using TensorFlow or PyTorch, the text suggests building differentially private features by anonymizing data during training. This involves creating aggregate features, using differential privacy in feature engineering, and minimizing personal data usage. Local differential privacy is discouraged due to scalability issues, and centralized models or federated learning are preferred.

Key steps for implementing differential privacy include determining feature sensitivity, tracking epsilon, using libraries for private tensors, and experimenting with different models to assess accuracy. Collaboration is essential for long-term implementation success.

The text also explores simpler privacy methods when differential privacy isn't feasible, such as redaction, pseudonymization, and format-preserving encryption. It emphasizes aligning business goals with privacy needs, avoiding sensitive attributes, and using generalization to protect privacy.

Documentation is crucial for data governance, with model cards proposed for documenting machine learning models' privacy aspects. These cards should include data lineage, retention policies, privacy risks, applied techniques, and approved usage.

The text underscores the importance of visualizing privacy information for different stakeholders and suggests creating a centralized data governance platform. Establishing a community of practice around privacy in machine learning can foster better understanding and inspire new initiatives.

Finally, it addresses concerns like membership inference attacks, recommending adversarial regularization, normalization, and regularization to protect against information leakage. Diverse data sampling and API security measures are also advised to enhance privacy protection.



In machine learning, fairness and privacy are critical concerns, particularly when models learn from data that may inadvertently discriminate against specific groups. Differential privacy offers a solution by transforming data to ensure statistical parity, as posited by Cynthia Dwork et al. in "Fairness through Awareness." This involves mapping individuals to a new vector space where private attributes like gender or race are removed, enhancing privacy and fairness.

Researchers have demonstrated the viability of this approach using datasets like the UCI Adult dataset, showing that fair representations improve both privacy and group treatment. The process involves mapping the initial dataset (X) to a transformed representation (Z) while retaining essential information and ensuring statistical parity, ultimately learning a target (y) close to the desired function (f).

The integration of privacy into machine learning requires a comprehensive approach, considering the architecture, deployment, and maintenance of systems. Data governance is crucial, involving lineage, consent, and provenance details to ensure data is suitable for use while respecting privacy constraints.

Privacy in machine learning extends beyond training, involving data management, consent, and governance integrated into platforms. Organizations should evaluate and approve libraries for privacy workflows, recognizing that privacy is an ongoing consideration with no silver bullet solution.

Monitoring privacy involves tracking outliers and ensuring logging systems do not leak sensitive information. Differential privacy can be applied to statistics, or sensitive data can be redacted or encrypted. Errors and anomalies should be logged and addressed, with privacy practices integrated into DevOps and infrastructure.

Federated learning offers an alternative by keeping data decentralized, processed at the edge, such as on devices or separate cloud architectures. This method avoids central data collection, enhancing privacy and enabling analysis across distributed datasets.

Overall, implementing privacy in machine learning requires thoughtful integration of privacy technologies, continuous monitoring, and a multidisciplinary approach to address ethical and fairness concerns. This ensures that models are both performant and fair, while respecting user privacy.



This chapter explores the concept of distributed data analysis, emphasizing its impact on privacy, data collection, and data science practices. By utilizing data at the edge rather than pulling it into centralized systems, the approach aligns with the principle of "Datensparsamkeit" or data minimization, crucial for privacy legislation and frameworks like Privacy by Design. The idea is to only collect essential data, reducing risk and storage vulnerabilities, especially in sensitive environments where data movement is restricted.

Federated analysis is a key method in distributed data, where processing occurs in secure centers rather than transferring data to less secure environments. This is particularly beneficial for large datasets across multiple centers, as it reduces computation and cloud costs. Legal challenges, such as transatlantic data flows and data sovereignty, further necessitate this approach. Privacy activists like Max Schrems have highlighted the importance of data remaining within its origin country, influencing multinational companies to adapt.

Distributed data analysis involves using tools like Hadoop, Spark, EMR, or Kubeflow, which manage distributed compute nodes. These systems abstract data processing across multiple storage locations, optimizing queries into plans that run on separate machines. The analysis is performed locally on devices like smartphones or IoT devices, sending only results back to central aggregators. This method preserves privacy by avoiding centralized data storage.

However, challenges exist, such as varying device capabilities and potential data tampering. Consistency in software versions across devices is crucial. Another issue is non-IID data, where data inconsistency can skew results. For example, in an object recognition task, if users have different types of photos, results may not accurately represent the population.

Privacy risks include attacks on aggregators to log IP addresses or analyze results before and after a user's data is included. Differential privacy mechanisms, like bounding user contributions, can mitigate these risks. Secure aggregators with encrypted communication and computation ensure privacy, as seen in systems like Apple's local differential privacy.

Federated learning extends this concept to machine learning, where models are trained on local data without centralizing it. Google pioneered this with GBoard, using federated learning to improve keyboard suggestions without collecting user data. This method maintains strong privacy and security guarantees compared to centralized systems.

Overall, distributed data analysis and federated learning offer robust solutions for privacy-preserving data processing, aligning with legal, security, and computational efficiency needs.



Federated learning is a decentralized approach where devices perform local model training and send gradient updates to an aggregator, which averages them and sends back an aggregate update. This process repeats for multiple rounds. Initially, federated learning did not address privacy concerns, but now differential privacy is often implemented to protect data. Federated learning is suitable for scenarios where central data collection is not feasible, such as with sensitive, IoT, or on-premise data.

Key benefits include enhanced privacy and reduced infrastructure costs, while challenges involve data standardization on devices and managing non-IID data. The non-IID data problem remains a significant challenge, requiring careful device selection and data analysis. Federated learning allows for diverse data collection, potentially reducing model bias, but it complicates debugging and model training due to limited data visibility.

Architecting federated systems involves setting up communication channels, aggregators, and device software. There are different architectures: centralized, clustered, and fully distributed, each with varying degrees of decentralization and complexity. Device selection criteria are crucial, considering connectivity, system load, power, software compatibility, and data distribution.

Federated learning offers privacy benefits by keeping data on devices, but implementation must address privacy risks, such as gradient leakage. Debugging in federated systems is challenging due to privacy constraints; it requires developing error metrics and pushing debugging tasks to devices while maintaining privacy standards.

Overall, federated learning is promising but complex, requiring collaboration with infrastructure and DevOps teams to address deployment and scalability challenges. It is essential to develop robust CI/CD pipelines and testing environments to ensure successful implementation. The field is evolving, with ongoing research into new architectures like split learning and meta-learning, which may enhance federated learning capabilities in the future.



Federated learning offers a decentralized approach to machine learning, allowing computation to occur on edge devices rather than central servers. This method enhances privacy and security, as it avoids transferring large datasets to a central location. However, it introduces challenges such as security threats, including reverse engineering and data poisoning attacks. To mitigate these, techniques like split learning and evolved selection criteria can be employed.

Federated learning is particularly useful in scenarios where centralized data collection is impractical due to connectivity and memory constraints. It enables new use cases, such as predictive maintenance and cross-silo learning, where different parts of an organization can collaborate without sharing raw data. This approach aligns with privacy expectations by allowing users to retain control over their data, fostering trust and transparency.

Deploying federated learning requires careful consideration of architecture and infrastructure. Semi-centralized solutions are often more feasible, involving coordination with DevOps and infrastructure teams. Key considerations include deployment capabilities, edge device connectivity, and secure log collection. Open source libraries like TensorFlow Federated and Flower offer tools for implementing federated learning, supporting multiple machine learning backends and providing simulation modules for testing.

Flower, for example, provides a unified interface for federated learning across various platforms, including TensorFlow, PyTorch, and Hugging Face. It allows for strategy customization, such as federated averaging, and supports simulations to debug and optimize deployments. Ensuring secure server setup and robust client integration is crucial for successful implementation.

The future of federated learning lies in its potential to address real-world problems through distributed data science. Applications range from agriculture management to public health monitoring and climate emergency responses. By enabling local data analysis, federated learning empowers communities to collaboratively solve problems without centralizing data ownership.

Overall, federated learning represents a shift towards privacy-preserving, decentralized data science, opening new possibilities for collective data management and analysis. It challenges traditional constraints, offering a path towards more equitable and sustainable data use.



Federated learning and distributed data analysis are transforming data management by enabling computation on encrypted data, enhancing privacy and security. Encrypted computation, a cryptography subfield, allows operations on encrypted data without decryption, using methods like homomorphic encryption (HE), secure multiparty computation (MPC), and garbled circuits. These protocols ensure data remains secure during computation, crucial for environments with varying trust levels.

Encrypted computation is ideal for insecure cloud environments, computing with third parties, handling sensitive data, and comparing datasets across parties without revealing plain-text values. It supports zero-trust architecture by encrypting and decentralizing data storage, enhancing security. This approach also reduces legal and security liabilities by demonstrating a "best effort" to protect data.

Privacy and secrecy are key considerations. Privacy ensures individual information is not leaked without consent, while secrecy guarantees data remains hidden as long as it's encrypted. Decisions on encryption and decryption impact both privacy and secrecy, with differential privacy potentially applied to ensure privacy.

Threat modeling is essential to determine when and how to use encrypted computation. It involves assessing the trust and relationship between parties and evaluating security models like semi-honest and malicious. Security guarantees—information-theoretic, statistical, and computational—define the level of protection against potential attackers.

Secure multiparty computation (MPC) involves multiple parties computing together on encrypted data. Initially developed for fair online games, MPC has expanded to practical applications like voting, auctions, and private data sharing. It requires parties to encrypt their inputs, share encrypted data, and cooperate until the final result is decrypted.

Homomorphic encryption (HE) allows computations directly on encrypted data, maintaining data confidentiality throughout the process. It supports operations like addition and multiplication, making it suitable for scenarios requiring complex computations without revealing underlying data.

In summary, encrypted computation provides robust security and privacy, enabling secure data analysis in untrusted environments. It requires careful consideration of privacy, secrecy, threat models, and security guarantees to ensure effective implementation.



**Multiparty Computation (MPC): Key Concepts and Protocols**

MPC is designed to allow parties to compute a function over their inputs while keeping those inputs private. The protocols ensure that intermediary steps do not reveal input information, and results are decrypted only when a certain threshold of parties is ready. This ensures accuracy and resilience, with protocols providing the same results as computations on plaintext inputs. MPC is an active research area with numerous protocols available, such as those in the MP-SPDZ and SCALE libraries.

**Secret Sharing**

Secret sharing involves dividing a secret value into shares that must be combined to decrypt the result. This method distributes trust among participants, requiring collaboration to reveal the secret. A basic approach is additive secret sharing, where encrypted shares can be combined to compute sums, averages, and counts. To prevent information leakage, operations are performed in a finite field, which uses a modulo operation to wrap numbers around, hiding their size.

**Multiplying Secret Shares**

To multiply two secret values without revealing them, shares are distributed among parties, and computations are performed collaboratively. Each participant calculates part of the result, and random elements are added to prevent information leakage. The final result is obtained by combining all computations, ensuring no extra information is revealed.

**Security Models in MPC**

MPC can operate under different security models. The semi-honest model assumes parties follow the protocol without malicious actions. For active security, Verifiable Secret Sharing (VSS) can be used, allowing detection and correction of cheating. Protocols like Shamir’s secret sharing enable threshold-based reconstruction of secrets, allowing computations to continue even if some parties exit.

**Factors in Using MPC**

When implementing MPC, consider performance, architecture, and trust factors. Protocol choice depends on the desired computations, with some operations being more complex than others. Libraries should optimize these operations, acting like compilers to translate high-level code into efficient machine instructions. Trade-offs between usability and performance are common, and evaluating different frameworks is crucial for effective deployment.

**Optimizing Encrypted Computation**

Optimizations in MPC can involve networking, computing power, algorithm design, and encryption schemes. Precision handling is important, especially when dealing with mixed data types, requiring conversion to fixed-point arithmetic. The role of a crypto provider can enhance efficiency by preparing offline computations. For further reading on advanced protocols and optimizations, resources like Dahl’s MP-SPDZ blog and the OverDrive paper on SPDZ improvements are recommended.



The text discusses the optimization and implementation of Multi-Party Computation (MPC) and Homomorphic Encryption (HE) protocols. MPC involves multiple parties computing a function without revealing their inputs, relying heavily on parallelization and timing optimizations to reduce waiting times for intermediary results. Server-aided MPC can enhance robustness by using servers as intermediaries, akin to federated learning. Libraries like Moose and MP-SPDZ provide benchmarks for practical applications, emphasizing the importance of using well-reviewed, open-source libraries for security.

Secret sharing, a key MPC scheme, allows operations like addition and multiplication across parties with minimal cost. However, it requires significant interaction, which is becoming less costly with advancements in cloud computing and networking.

Homomorphic Encryption (HE) allows computations on encrypted data without decryption, preserving data privacy. HE is computationally intensive but suitable for scenarios involving a single data owner and processor. It supports operations through cryptosystems that maintain homomorphic properties, enabling arithmetic operations on ciphertexts. HE is categorized into Partially Homomorphic Encryption (PHE) and Fully Homomorphic Encryption (FHE), with the latter supporting arbitrary operations.

The breakthrough in HE came with Gentry's bootstrapping method, which reduces randomness in ciphertexts, allowing for more complex operations. Paillier encryption exemplifies additive homomorphic encryption, where encrypted values can be manipulated to produce encrypted results of operations like addition and subtraction.

Learning with Errors (LWE) is a lattice-based cryptosystem that supports HE by using lattice properties for quantum-safe encryption. It involves generating encryption keys with randomness, creating a secure method for encoding messages. LWE-based systems like Ring-LWE and TFHE offer fully homomorphic operations with optimizations for efficiency, crucial for post-quantum computing.

The text highlights the importance of specialized hardware, such as FPGAs, to accelerate HE processing. Trade-offs in performance and accuracy can be managed by protocols like CKKS, which allow some randomness to remain, speeding up computations by bypassing bootstrapping steps.

For practical use, staying updated with the latest research and library developments in encrypted computation is crucial. Libraries like Zama's Concrete and Microsoft's SEAL offer tools for implementing HE, emphasizing the potential for encrypted computation to become central to everyday computing.

The text briefly mentions other encrypted computation techniques like garbled circuits and oblivious transfer, which can optimize specific operations within broader frameworks.



### Validating HE Computations via Zero-Knowledge Proofs

Homomorphic encryption (HE) computations lack straightforward validation methods for detecting cheating, unlike secret sharing or multi-party computation (MPC). Zero-knowledge proofs (ZKPs) can address this by allowing a prover to demonstrate knowledge of information without revealing it. ZKPs can be interactive or non-interactive and are useful in various scenarios, such as validating personal data or ensuring computations on encrypted data remain unaltered. In machine learning, zk-ml uses ZKPs to validate model training and results, providing an audit trail similar to signed software binaries.

### Real-World Encrypted Computation

#### Private Set Intersection (PSI)

PSI allows parties to determine data overlap without revealing individual datasets. Using protocols like Diffie-Hellman, parties can securely compute intersections by exchanging public-private key pairs and hashing data. However, PSI's security is limited to semi-honest settings, as parties could manipulate datasets to extract information.

#### Private Join and Compute

Google's Private Join and Compute extends PSI by computing sums on intersected data, enhancing user privacy. It uses a modified Diffie-Hellman protocol and homomorphic encryption to aggregate user spending data without revealing individual transactions, balancing privacy with utility.

#### Secure Aggregation

In federated learning, secure aggregation uses MPC or HE to protect model updates. Devices encrypt updates, which are aggregated with differential privacy noise, ensuring minimal information leakage even if an aggregator is compromised. This method enhances privacy while maintaining accurate model updates, and it requires careful engineering to handle dropout and randomness.

### Encrypted Machine Learning

Encrypted machine learning enables training on encrypted data, maintaining data privacy throughout the process. Microsoft Research's CryptoNets demonstrated training using homomorphic encryption, with subsequent optimizations for batch predictions. The tf-encrypted library, developed by Dropout Labs, uses MPC to provide secure machine learning operations like encrypted tensor computations. It incorporates protocols such as SPDZ and ABY3 to optimize machine learning tasks, with a secure runtime for verifying computations.

### Moose and Secure Runtime

Moose, a secure runtime, compiles high-level computational graphs into MPC protocols for execution. It allows data scientists to create encrypted dataflows without needing cryptographic expertise. Moose supports auditing and optimization, facilitating secure, distributed computations.




To securely compare purchase data between two companies without revealing sensitive information, a combination of homomorphic encryption and Multi-Party Computation (MPC) is used. The process begins with Facebook Research’s Private ID library, which allows two parties to find a private join between their datasets using a common identifier, like an email address. Each party runs a Private ID server to encrypt and match identifiers, ensuring privacy by not revealing actual spending data.

After establishing the encrypted matches, data is prepared for computation using Moose, a library that supports encrypted computations similar to NumPy. Participants in the computation are defined using placements, representing each party involved. The computation is structured using a decorator to ensure transparency and clarity about each participant's role.

The example computation involves filtering datasets to include only matched records, calculating total spending per category, and determining the percentage of spending per category for shared customers. The results are encrypted, and only Alice receives the final output, which can be adjusted to include other parties if needed.

Running the computation involves setting up local executors and defining a runtime environment with Moose, which compiles Python code into a low-level representation for execution. The computation runs as separate processes for testing, but in production, it requires strategic placement of hosts to minimize latency and data transfer costs.

Encrypted computation, particularly MPC, allows secure data science with accurate results while maintaining confidentiality. It offers new possibilities for collaborative data use without the risks associated with sharing plain-text data. This approach supports secure data processing, reducing reliance on legal agreements and enhancing privacy.

Moose's compiler optimizes computations for privacy and performance, and future developments may further enhance these capabilities. The chapter concludes by emphasizing the transformative potential of encrypted computation in data sharing and privacy, encouraging exploration of these technologies to enhance data security and collaboration.



The General Data Protection Regulation (GDPR), finalized in 2016, serves as a significant global standard for privacy and data rights, influencing legislation worldwide, such as Brazil's LGPD and various US state laws. GDPR enforces eight fundamental data rights for EU residents: the right to be informed, access, rectification, deletion, restrict processing, data portability, objection, and opting out of automated decision-making. These rights apply to EU residents globally, although enforcement is more straightforward within the EU.

Organizations face varying degrees of compliance, with some opting for minimal implementation due to the financial risks of non-compliance, which can reach up to 4% of global revenue. Local enforcement varies across the EU, with countries like Germany and France known for stricter interpretations.

GDPR outlines two primary roles: data controllers, who have direct relationships with individuals and bear most compliance responsibilities, and data processors, who handle data on behalf of controllers. Controllers are liable for compliance, while processors must ensure they meet GDPR standards through due diligence and adherence to data processing agreements.

Privacy-enhancing technologies (PETs) like pseudonymization and differential privacy are recommended for GDPR compliance. Pseudonymization helps mitigate accidental data exposure, while differential privacy is considered a "gold standard" for anonymization. Legal interpretations of anonymization evolve with technological advancements, and organizations must collaborate with legal teams to ensure compliance.

Data controllers and processors must understand their roles and responsibilities, ensuring compliance through proper data management and privacy by design. Organizations should determine data retention needs, focusing on valuable data and employing anonymization techniques to minimize privacy risks. Regular analysis and artifact creation using differential privacy mechanisms can help maintain compliance and retain valuable insights even after data removal requests.

Ultimately, GDPR compliance requires organizations to adapt their data infrastructure, policies, and processes to uphold data rights and mitigate risks, ensuring a privacy-first approach in their operations.



Federated learning and secure computation are key privacy technologies that enable data usage without compromising privacy. These technologies, combined with differential privacy, help build compliant systems. Evaluating GDPR compliance involves collaboration between software, data, infrastructure, and legal teams, guided by Data Protection Impact Assessments (DPIA). DPIAs identify and mitigate potential harms from data use, involving risk assessment similar to security practices. This process includes defining, identifying, and evaluating risks, with an emphasis on risk empathy and team collaboration.

Once risks are evaluated, decisions are made to accept or mitigate them. Mitigation strategies include using less data and implementing accessible technologies. Communication of risks and mitigations is crucial for effective implementation. Regular monitoring and iterative assessments ensure systems remain compliant and adapt to evolving legal landscapes.

GDPR's "right to an explanation" for automated decisions poses challenges in machine learning, where model transparency must balance interpretability and privacy. This right aims to provide transparency, although it can potentially leak private information, especially for outliers.

The California Consumer Privacy Act (CCPA) provides rights similar to GDPR, such as data deletion and opting out of data sales, but lacks GDPR's enforcement strength. The California Privacy Rights Act (CPRA) enhances CCPA by expanding sensitive data definitions and enforcement mechanisms.

CCPA's de-identification requirements differ from GDPR's anonymization, focusing on preventing re-identification through technical safeguards and business processes. Despite being less stringent than GDPR, CCPA's evolving case law may strengthen its privacy standards over time.

Beyond GDPR and CCPA, other regulations like HIPAA (US Health Insurance Portability and Accountability Act) govern data privacy globally. Understanding these laws helps apply privacy-enhancing technologies (PETs) effectively. Organizations should anticipate changes in legislation and adapt their privacy measures accordingly, ensuring compliance and protecting consumer data. Regular risk assessments, automated compliance measures, and proactive adaptation to new laws are essential for robust data privacy management.



The text discusses various data privacy laws and regulations, emphasizing the differences in approaches and requirements for data anonymization and compliance. Under HIPAA, health data can be released through "Safe Harbor" de-identification or an expert determination test, both of which have limitations in preventing data re-identification. The text contrasts HIPAA's leniency with stricter regulations like the GDPR and Brazil's LGPD, which are modeled closely after GDPR principles, emphasizing data rights and compliance.

China's Personal Information Protection Law (PIPL) sets a high standard for anonymization, requiring irreversible de-identification of personal information. The global landscape for data privacy is rapidly evolving, with new regulations and case law emerging. Organizations must stay informed by consulting resources like the International Association of Privacy Professionals (IAPP) and working closely with legal teams.

Internal policies and contracts are crucial for understanding and implementing privacy initiatives. These documents often blend legal, business, and technical advice, making them complex to interpret. They guide compliance with regulatory requirements and reflect organizational privacy and security needs. Contracts, especially those involving government work, may impose additional obligations.

Reading privacy policies and terms of service can reveal an organization's stance on privacy and user data handling. GDPR has improved the readability of these documents, promoting clearer privacy expectations and user-friendly controls. Privacy policies should outline data collection, sharing, and user rights. Terms of service often include legal protections for the company and describe acceptable service use.

Data processing agreements (DPAs) under GDPR define the roles and responsibilities of data controllers and processors. These agreements specify data processing details, security controls, and compliance measures. Smaller companies typically have limited influence over DPAs offered by service providers.

Internal privacy principles or guidelines help employees understand privacy implementation within an organization. These documents summarize data protection requirements and provide a baseline for privacy practices. For technical guidance, employees should consult the infosec team.

Collaboration with legal professionals is essential in data governance. Legal staff focus on risk assessment and compliance with laws, serving as referees in the data privacy domain. Building a productive relationship with legal experts involves understanding their language and perspectives, facilitating better communication and problem-solving.

Overall, the text underscores the importance of understanding both external regulations and internal policies to effectively manage data privacy and security in an organization.



In privacy engineering, a "no" from legal professionals should be seen as an opportunity to learn and collaborate. Understanding their concerns about privacy risks can help turn restrictions into possibilities by using alternative services or data preparation techniques. Privacy engineers play a crucial role in ensuring compliance with privacy initiatives, working alongside legal teams to align governance policies with organizational capabilities.

Legal professionals face challenges in data management, particularly with adhering to contractual agreements and interpreting data protection regulations. Contracts often govern data sharing, with strict clauses on data use. Data scientists must understand these rules to avoid violations. Legal experts specializing in data protection are invaluable, staying updated on privacy issues and ensuring compliance with regulations like GDPR. The Schrems II ruling, for instance, reshaped data flows between the EU and the US, requiring new contracts and compliance measures.

Building relationships with legal teams involves proactive communication. Engaging with privacy professionals, asking for advice, and understanding their perspectives can foster collaboration. Legal teams often have glossaries of terms like PII and personal data, which can guide data processing decisions. Sharing technical knowledge with legal teams can help them better understand data risks and solutions, making future collaborations smoother.

Data Governance 2.0 suggests a shift towards agile, federated governance. This approach involves decentralized governance across domains, allowing for experimentation with privacy technologies. Successful experiments can inform company-wide practices, aligning governance with technological advancements and business goals. Federated governance encourages expert-led assessments and team-driven initiatives, fostering a proactive and agile environment.

For federated governance to work, organizations must embrace a culture of experimentation. This involves understanding and addressing emotional responses to change, building psychological safety, and fostering empathetic communication. By creating an environment open to experimentation, organizations can better adapt to evolving privacy landscapes and regulatory requirements.

Overall, the text emphasizes the importance of collaboration between technologists and legal professionals, the need for adaptive governance models, and the value of fostering a culture that supports experimentation and innovation in privacy engineering.



The text discusses the importance of fostering a culture of experimentation and compromise in data governance, emphasizing the need for privacy enhancing technologies (PETs) as integral to Governance 2.0. It highlights the necessity of embedding PETs into software and data systems to make them easily usable without requiring deep technical knowledge. Building self-documenting systems and integrating data lineage and policy enforcement directly into workflows are also crucial.

The text underscores the role of organizational leadership in setting agendas that prioritize these initiatives, while also encouraging individuals at all levels to incorporate privacy considerations into their work. It stresses the importance of practical approaches to managing privacy risks, recognizing that not all risks can be mitigated but should be communicated transparently.

The discussion extends to the necessity of understanding organizational risk appetite, particularly in regulated industries, and collaborating with legal, compliance, and security stakeholders. It advises on managing privacy risks by tailoring communication to align with stakeholders' priorities and using technologies like encrypted computation to address specific concerns.

The text also explores the challenges of introducing new privacy technologies, which may be perceived as experimental, and emphasizes the importance of documenting privacy risks and maintaining ongoing conversations about potential mitigations. It suggests that privacy is a continuum and encourages reaching compromises and revisiting risks as systems evolve.

Finally, the text advocates for proactive approaches to privacy and security, incorporating regular threat modeling and risk assessments to anticipate and mitigate potential issues. It highlights the business benefits of embracing privacy, using Apple as an example of a company that has successfully differentiated itself through privacy-focused strategies.

Overall, the text provides a comprehensive overview of transitioning to a privacy-conscious organizational culture, emphasizing the integration of PETs, collaborative risk management, and proactive security measures to enhance data governance and privacy protections.



In the context of evolving privacy technologies, organizations should lead technological shifts by incorporating privacy considerations into their culture and operations. Agile methodologies advocate for "thin slices," small, usable pieces that function like MVPs, enabling quick feedback and collaboration. This approach is crucial for testing privacy technologies and enhancing familiarity with them.

**Practical Privacy Technology: Use-Case Analysis**

The application of privacy technology is ongoing, requiring real-world use cases to identify opportunities. For instance, marketing departments, often impacted by regulations like GDPR, can benefit from privacy technology. A case study involves two companies wanting to combine marketing efforts without direct data exchange due to GDPR constraints. A trusted execution environment using secure enclaves is the current solution. However, this approach is costly and complex.

A privacy-first solution could use encrypted computation, such as homomorphic encryption or secure multiparty computation, to perform private set intersections. This method is cloud- and hardware-agnostic, providing better auditability and privacy guarantees compared to enclaves. It allows for federated analytics, where analysis is done locally and results are shared with differential privacy, enhancing privacy without compromising utility.

**Public-Private Partnerships: Sharing Data for Public Health**

In public health, data sharing between private companies and authorities is essential for planning and research. The current solution uses a privacy-aware hashing algorithm, but it may leak information and add unnecessary noise. A better solution involves secure multiparty computation (MPC) or a federated system. MPC allows parties to compute overall costs without sharing individual data, while federated analytics enables local data analysis with aggregated results sent to the government. Both approaches enhance privacy and confidentiality.

**Anonymized Machine Learning: GDPR Compliance**

GDPR compliance challenges organizations to adjust data processing mechanisms. Anonymization can exempt data from GDPR, allowing longer retention. A retail enterprise, for instance, must adapt its machine learning models trained on purchase data to comply with GDPR. Proper anonymization ensures data is outside GDPR’s reach, facilitating compliance and operational continuity.

Organizations must explore privacy technologies to balance privacy and utility. This involves experimentation, cross-disciplinary collaboration, and iterative development. By understanding and implementing privacy-first solutions, organizations can navigate regulatory landscapes and technological advancements effectively.



The text discusses the use of privacy technologies in machine learning to comply with GDPR while maintaining model performance. Initially, k-anonymity is used to anonymize data, but it lacks rigorous privacy guarantees. Differential privacy is suggested as a more future-proof solution, though it requires significant changes to machine learning operations and is costly to implement.

For businesses that handle sensitive data, privacy technologies can mitigate long waits or blocks for data access. Companies often refrain from using data to maintain privacy, which can hinder competitiveness. Federated learning and secure computation are proposed as solutions to allow data use while maintaining privacy.

Integrating privacy into machine learning involves incorporating privacy considerations from the start of a project. This includes iterative discovery, where privacy is considered early in the data science workflow, and documenting privacy requirements as part of project planning. Regular privacy risk assessments help shift privacy from a nice-to-have to a must-have.

Evaluating and combining privacy technologies requires a knowledgeable team and multidisciplinary input. Creating evaluation criteria and estimating effort helps determine if privacy solutions are worth the investment. As privacy technologies become more integrated, they may become part of the standard data science toolbox.

A step-by-step approach to evaluating privacy-enhancing technologies (PETs) includes assessing use case criteria, gathering external team input, performing threat modeling, identifying technical privacy requirements, and determining feasible technologies. This process helps ensure privacy is effectively integrated into data science and machine learning workflows.



In the evolving landscape of machine learning and data science, integrating privacy technologies requires careful planning and collaboration. Organizations must balance the flexibility to experiment with new technologies against the need to implement solutions rapidly, particularly when timelines are tight. Engaging with stakeholders such as product managers, data privacy experts, and customers is crucial to ensure that privacy solutions align with business needs and constraints.

Automation has become a significant trend in data science, with mature organizations often having automated data pipelines and workflows. For those leveraging cloud services, integrating privacy technologies can be achieved by utilizing built-in cloud options or incorporating open-source libraries. As automation becomes more prevalent, privacy considerations must be embedded into all data workflows.

Normalizing privacy within an organization involves widespread practice and understanding of its benefits. This requires educating stakeholders about the value privacy technologies bring to products and reputation. Demonstrating privacy as a core business value can facilitate its acceptance and integration.

Collaboration with research teams, both internal and external, is essential for advancing privacy technologies. Engaging with researchers allows organizations to incorporate cutting-edge solutions tailored to specific risk models. Open communication and contribution to open-source projects can enhance these collaborations.

Internal research teams can be pivotal in driving privacy innovation. By aligning their work with organizational priorities, these teams can contribute to privacy-focused solutions. Building strong relationships with research teams ensures that their findings are effectively utilized to meet company goals.

Quantum security remains a complex topic, with many current protocols not being quantum-safe. While some cryptographic methods are believed to be quantum-secure, the transition to quantum-safe protocols is a broader internet-wide challenge. In the meantime, organizations should focus on immediate privacy concerns and advancements.

Enclaves, or trusted execution environments, provide specific security guarantees by protecting data and processes from unauthorized access. However, their effectiveness is often overstated, and they primarily protect against threats from cloud providers and shared hardware environments.

In summary, the integration of privacy technologies in data science requires strategic planning, stakeholder engagement, and collaboration with research communities. As the field evolves, staying informed and adaptable is key to successfully implementing privacy solutions.



The text discusses various approaches to secure data processing and privacy, focusing on technologies like Trusted Execution Environments (TEEs), secure enclaves, and encrypted computation. TEEs offer isolation for computations if hardware or cloud providers are untrusted, but they have vulnerabilities and require shifting trust to enclave providers. Encrypted computation, developed through extensive research, provides better secrecy and is not proprietary, making it a preferred choice for secure data processing.

Private Information Retrieval (PIR) and oblivious transfer are protocols that protect the privacy of query senders, allowing encrypted requests to be processed without revealing the content. These technologies are useful in scenarios requiring confidentiality, such as accessing sensitive personal data or in high-security environments. Future developments may combine these with distributed identity services for anonymous data querying.

Clean rooms and remote data access are compared to confidential computing but have significant privacy issues. Clean rooms allow data scientists to access data in a controlled environment, but they can see the data in plaintext. Remote data access allows manipulation of data without full visibility, but it does not provide strong privacy guarantees. Both approaches lack the secrecy of encrypted computation and are vulnerable to data exfiltration.

The concept of perfect privacy is explored, highlighting that while it is an ideal goal, it is rarely attainable. Practical data privacy involves using theories and best practices to protect data. Perfect privacy requires considering factors like background knowledge and computational power, but it often necessitates dedicated resources to achieve.

Encrypted computation involves multiple parties and requires careful evaluation of privacy and security needs. Open-source, peer-reviewed tools are recommended to ensure robust security. Mapping data flow and testing computations with dummy data help ensure correctness. Proper documentation and sharing of insights enhance team understanding and competence.

Key management is crucial in encrypted computation, with regular rotation recommended for business-critical data. Some methods, like secret sharing, do not use traditional keys, eliminating the need for rotation. Homomorphic encryption uses keys but allows computation-specific rotation. End-to-end encryption should be default, avoiding key storage on servers.

Google's Privacy Sandbox aims to replace third-party cookies with privacy-friendly methods like federated learning and pseudonymization, but it does not employ encrypted computation. The approach focuses on group-based advertising and is subject to ongoing development and critique.

Lastly, the text critiques k-anonymity, an older anonymization method, for its limitations. It relies on grouping individuals to obscure identities, but attackers can still infer information based on common attributes. Differential privacy offers a more robust approach by statistically measuring potential information gain, reducing the risk of data breaches.

Overall, the text emphasizes the importance of using well-researched, open-source solutions for secure data processing and the limitations of traditional privacy measures like k-anonymity. It advocates for practical approaches to data privacy, balancing perfection with feasibility. 



Differential privacy is a critical concept that shifts focus from data to algorithmic processes, providing privacy guarantees by measuring algorithmic outcomes rather than individual data points. It is particularly useful when privacy loss and anonymization are paramount. However, it may not be suitable for identifying outliers, maintaining individual records, or when small changes significantly impact outcomes. If differential privacy isn't applicable, reevaluating the problem or exploring alternative privacy solutions is advisable.

Synthetic data, gaining traction since 2018, offers privacy benefits by simulating realistic datasets using statistical properties or machine learning. However, without differential privacy, synthetic data can be riskier than real data, potentially leading to privacy breaches. Careful consideration of privacy guarantees and potential trade-offs is essential when using synthetic data.

Ethical data sharing trends have emerged, emphasizing user-oriented data management. Data trusts and cooperatives allow individuals to control how their data is used, promoting democratic decision-making and self-determination. These structures contrast with traditional data selling, offering users more control over their data.

Identifying and protecting private information begins with defining what data is considered private, such as PII and sensitive data. Tools like Microsoft’s Presidio can automate PII identification, but manual categorization and governance are crucial for comprehensive protection. Simply removing identifiers does not ensure privacy, as information leakage can still occur.

For past data releases without differential privacy, it's challenging to assess information leakage. Transitioning to differential privacy and tracking future data releases can enhance protection. Libraries like Tumult Analytics help measure privacy loss and optimize privacy budgets, balancing data quality and privacy.

In data visualization, privacy-friendly practices involve using differential privacy for public data and ensuring coarse granularity to prevent singling out individuals. Engaging users to determine necessary data and integrating privacy technologies into data access mechanisms are vital.

Privacy engineering decisions often fall under data governance, requiring a multidisciplinary approach considering business needs, regulations, and risks. Privacy engineering should be agile, adapting to evolving privacy risks and technological advancements. Advocacy and stakeholder engagement are key to integrating privacy engineering into organizations.

Privacy engineering is a nascent field, typically requiring expertise in cryptography, differential privacy, or distributed systems. However, the field is expanding, and staying informed through communities and conferences can open new pathways for those interested in privacy engineering roles.



The evolving field of privacy engineering requires professionals who can effectively use existing technologies without creating them from scratch. This includes data engineers, data scientists, and software engineers who expand their skill sets to apply privacy technologies to real-world problems. The field currently lacks well-defined roles and expectations, but early involvement can lead to new opportunities and broaden the definitions of privacy engineering roles.

Continuous learning and specialization are crucial. Focusing on specific areas of interest, engaging with literature, and applying knowledge to practical use cases can help individuals grow their expertise. Mistakes are part of the learning process, and over time, professionals will find themselves more adept at solving problems and teaching others.

The text also discusses privacy technologies and regulations, such as GDPR. Differential privacy is often recommended for anonymization under GDPR, but other techniques like k-anonymity may also be used. It's essential to consult privacy lawyers when choosing methods to ensure compliance with evolving regulations.

The concept of "legitimate interest" under GDPR allows the use of personal data without explicit consent, provided it meets specific criteria. The ICO outlines a three-part test to determine legitimate interest: purpose, necessity, and balancing tests. However, this can be contentious, as seen in legal cases against companies like Experian and Clearview AI.

Schrems II, a European court ruling, challenges transatlantic data flows, emphasizing the need for future-proof solutions to prevent US government snooping. Technologies like federated data analysis and distributed encrypted computations could help meet stringent data protection standards.

For personal privacy, individuals should carefully choose email providers, browsers, and applications. Important factors include data collection, storage, retention, sharing, and encryption practices. Using privacy-friendly services and regularly reviewing privacy policies can enhance personal data protection.

Navigating privacy concerns with friends and family requires empathy and clear communication. When discussing automated home assistants, it's important to express personal boundaries respectfully and seek compromises to ensure comfort and privacy.

Overall, the text emphasizes the importance of continuous learning, collaboration with legal professionals, and active participation in privacy discussions to adapt to the dynamic landscape of privacy technologies and regulations.



The text discusses the importance of privacy in the digital age, emphasizing the need for open conversations about privacy concerns with friends and family. It highlights the impact of online and technology choices on privacy, especially when applications access personal contacts. The responsibility for privacy should ideally lie with service providers, not individuals.

The text addresses common arguments against privacy, such as the belief that privacy is obsolete or only needed by those with something to hide. It suggests using empathy and examples like revenge porn or targeted misinformation to illustrate the importance of privacy for everyone. Privacy issues often involve power imbalances and can lead to oppression, as seen in police surveillance or price gouging through personalized ads.

The privacy versus security debate is ongoing, with some believing privacy undermines security. However, privacy advocates argue that privacy violations harm individuals and communities. The text encourages continued advocacy for privacy rights with empathy and compassion.

The possibility of selling personal data is explored, but the author is skeptical due to potential exacerbation of privacy issues and algorithmic bias. Instead, the concept of locally controlled data, where users can manage access, is highlighted as a promising alternative. This approach, combined with technologies like federated learning and differential privacy, could lead to better outcomes.

Personalized advertising is critiqued for its potential harm, such as targeting vulnerable groups with misleading ads. Alternatives like session-based recommendations, which focus on user intentions rather than personal data, are suggested as more ethical solutions.

The text also addresses concerns about applications listening to users. While it's unlikely that apps are actively listening without consent, the vast amount of data they collect can create the illusion of eavesdropping. Users are advised to review app privacy policies and consider privacy-friendly alternatives.

The concept of surveillance capitalism is introduced, where personal data is treated as capital. This economic model is driven by data collection through free services, raising ethical concerns about its impact on society. The rise of gig workers exemplifies how surveillance capitalism affects labor markets, with workers often subjected to extensive data monitoring.

Overall, the text advocates for a future where privacy is a default setting, and data use is consensual and respectful, regardless of an individual's financial means. It encourages individuals to engage with privacy issues critically and to support privacy-first technologies and policies.



The gig economy, initially promising flexibility for workers, has instead led to part-time shift work without benefits like healthcare or paid vacations. Gig workers, classified as independent contractors, face algorithmic management that pressures them to work longer hours during high demand and reduces margins during low demand. This constant surveillance, often through digital cameras, extends beyond gig workers to factory and shift workers, creating a stressful environment akin to dystopian narratives.

Surveillance systems, marketed as security enhancements, are prevalent globally, from CCTV in the UK to extensive monitoring in China and South Africa. These systems raise questions about their effectiveness in crime reduction and often reinforce biased policing through feedback loops, particularly affecting marginalized communities. Surveillance extends to monitoring political dissent, with technologies like China’s Great Firewall and tools used by governments to scrutinize internet activity.

Luxury surveillance involves individuals paying for conveniences while being monitored by private companies. Devices like smart home appliances and self-driving cars collect data, raising concerns about privacy and the potential misuse of personal information. This data collection, often without consent, can lead to a loss of control over personal information, affecting those in less privileged positions disproportionately.

Generative machine learning, exemplified by models like DALL-E and GPT-3, poses privacy challenges as they are trained on vast datasets scraped from the internet without regard for copyright or consent. This process, likened to data laundering, strips data of its context and attribution, potentially leading to unethical uses and the erosion of privacy and consent rights.

Disinformation and misinformation are exacerbated by algorithms optimized for engagement, leading to the spread of polarized content. This manipulation, evident in scandals like Cambridge Analytica, can influence voting behaviors and erode trust in social and political systems. The financial incentives for producing engaging content further fuel this cycle, posing a threat to democratic values.

Efforts to combat these issues include advocating for privacy and data ownership, with initiatives like Driver’s Seat empowering gig workers with their data. Collectivizing data could shift power dynamics, allowing communities to optimize resources and make informed decisions. Regulatory actions are increasingly imposing fines on companies for privacy violations, signaling a growing intolerance for data misuse. As privacy laws evolve, these regulations are expected to have a long-lasting impact on data practices.

The text highlights the importance of continued research and activism in privacy, urging collaboration and innovation to address these challenges. Privacy technology, while not a complete solution, plays a crucial role in protecting individual rights and shaping a more equitable data landscape.


The text discusses the growing concerns and legal actions surrounding data ownership and consent in the context of generative models like DALL-E and GitHub Copilot. These models often use vast amounts of data without explicit consent, leading to lawsuits that could redefine data rights for creators such as musicians, authors, and coders. The GitHub Copilot lawsuit, if successful, may empower data owners to protect their data from misuse by generative algorithms.

Community involvement is emphasized as a crucial step towards addressing data collection and surveillance issues. By engaging with affected communities, individuals can learn and contribute to efforts against unfair practices. Examples include movements like Stop LAPD Spying, which counters police surveillance and advocates for an abolitionist future.

The text encourages readers to become privacy champions in their professional and personal lives, using the skills acquired from the book to challenge data collection norms. This involves understanding privacy engineering, data science, and machine learning, and applying technologies like differential privacy and federated learning to enhance data protection.

The EU's AI Act and Trustworthy AI Guidelines are highlighted as frameworks aiming to ensure AI systems are ethical, robust, and transparent. Privacy and data governance are integral to these guidelines, aligning with principles taught in the book, such as building transparency and accountability into data systems.

Privacy by Design principles, established by Ann Cavoukian, advocate for proactive privacy measures integrated into technology systems. These principles aim to protect user data by default and ensure privacy is a fundamental aspect of system architecture. The text underscores the importance of embedding privacy into all stages of data handling, from collection to destruction.

The relationship between privacy and power is explored, noting that privacy can be a tool for liberation by challenging systems of oppression. Historically, privacy rights have been used by powerful individuals to maintain control, but equitable access to privacy can empower marginalized groups and promote social justice.

The book encourages readers to use their knowledge to create privacy-aware systems, advocating for collective action to shift current data practices towards a more equitable and privacy-conscious future. This involves recognizing and dismantling oppressive systems and leveraging privacy as a means to achieve societal change.

Overall, the text calls for a fundamental shift in how data is handled, promoting privacy as a core value in the development and implementation of technology systems. By doing so, it aims to foster a more democratic and human rights-oriented data landscape.


The text provides a comprehensive overview of privacy, data governance, and security practices, focusing on differential privacy, confidential computing, and privacy-preserving technologies. Differential privacy is emphasized as a method for anonymizing data, with applications in machine learning and compliance with regulations like GDPR. It involves adding noise to data queries to protect individual privacy, with the Laplace and Gaussian mechanisms being commonly used. The text also highlights the limitations of k-anonymity and the need for robust privacy measures.

Confidential computing is discussed as a way to protect data in use through hardware-based secure enclaves, differentiating it from clean rooms and remote data access. The Google Privacy Sandbox is mentioned as an initiative to enhance privacy in web environments. Encrypted computation, including homomorphic encryption and secure multiparty computation (SMPC), is explored as a means to perform computations on encrypted data without revealing the data itself.

Data governance is crucial for managing privacy and security, involving practices like data documentation, tracking data lineage, and implementing data retention policies. The text underscores the importance of adding provenance and consent information to data collection processes and the role of data processing agreements (DPAs) in ensuring compliance with data protection laws.

The text addresses privacy attacks, including linkage and membership inference attacks, and the need for data security measures like access control systems and threat modeling. Privacy-preserving machine learning (PPML) is highlighted as a way to integrate privacy into machine learning workflows, using techniques like differentially private stochastic gradient descent (DP-SGD).

Legal and regulatory frameworks, such as the GDPR and California Privacy Rights Act (CPRA), are discussed in the context of data protection and privacy rights, including the right to be forgotten and the right to an explanation. The text also explores the role of legal professionals in navigating compliance and the impact of regulatory pressure on organizational culture.

Privacy-enhancing technologies (PETs) are identified as essential tools for maintaining privacy, with synthetic data and privacy-friendly services being potential solutions. The text emphasizes the importance of privacy as a core value proposition for businesses and the need for a culture of experimentation and ethical data sharing.

Finally, the text touches on the social and cultural aspects of privacy, discussing surveillance capitalism, the empowerment of gig workers through data collectivization, and the broader implications of privacy on power dynamics and oppression. The role of privacy champions in advocating for trustworthy machine learning systems and privacy by design is also highlighted.



The text provides a comprehensive overview of various topics related to data privacy, security, and technology. Key concepts include server-aided MPC, stochastic gradient descent (SGD), and Shamir's secret sharing (SSS), which are crucial in secure data handling and machine learning. The role of social media in spreading misinformation is highlighted, alongside privacy concerns such as leaked information through apps and personalized ads. The societal impact of extensive data collection and surveillance capitalism, affecting gig workers and leading to luxury surveillance, is discussed.

Technical aspects like federated learning, secure aggregation, and trusted execution environments (TEEs) are essential for enhancing data security. The importance of psychological safety in teams and collaboration between data engineering and leadership is emphasized. Legal professionals are advised on technical guidance, and the significance of privacy as a value proposition is noted.

Tools and frameworks such as TensorFlow, TensorBoard, and the tf-encrypted library are mentioned for their roles in secure machine learning. The text also covers threat modeling, timing attacks, and the protection of training data. Verifiable Secret Sharing (VSS) and zero-knowledge proofs are highlighted for their security benefits.

The author, Katharine Jarmul, is noted for her expertise in privacy and security within data science workflows. The colophon provides details about the book's design and the cover illustration featuring a morid cod, emphasizing the importance of biodiversity.

Overall, the text underscores the critical intersection of data science, privacy, and security, offering insights into current practices and future directions.
