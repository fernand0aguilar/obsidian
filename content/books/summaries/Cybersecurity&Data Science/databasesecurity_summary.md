
# Database Security Summary

## License and Disclaimer

The book "Database Security Problems and Solutions" by Christopher Diaz, Ph.D., published by Mercury Learning and Information, provides a license for use but not ownership of its contents. Duplication or distribution requires permission from the publisher. The book is sold "as is" without warranties, and neither the author nor publisher is liable for any damages arising from its use.

## Introduction to Security Concepts

### Information Security

Information security aims to protect data in various forms, focusing on digital data. It encompasses three primary principles: confidentiality, integrity, and availability, collectively known as the CIA Triad.

- **Confidentiality**: Protects information from unauthorized access, ensuring only authorized agents can access sensitive data.
  
- **Integrity**: Ensures information is accurate and unmodified, preventing unauthorized changes that could lead to inconsistencies.
  
- **Availability**: Ensures timely access to information for authorized users, preventing disruptions caused by hardware failures, system outages, or attacks.

### Security Threats, Controls, and Requirements

Security threats include malicious users or programs attempting to compromise confidentiality, integrity, or availability. These threats can be external, originating from entities outside the organization.

## Database Security

Database security is a specialized area within information security, focusing on protecting databases using specific controls and measures.

### Key Topics Covered

1. **Data Confidentiality**: Techniques to manage access and ensure only authorized users can access sensitive data.
   
2. **Data Integrity**: Methods like normalization, transactions, and constraints to maintain data accuracy and consistency.
   
3. **Data Availability**: Strategies to ensure databases remain accessible to authorized users, including backup and recovery methods.

### Database Management and Administration

- **Backup and Recovery**: Essential for maintaining data availability, involving strategies for restoring databases and specific tables.
  
- **User Account Security**: Configurations like password expiration and account management to secure database access.

### Database Privileges and Roles

- **Privileges**: Managing who can access and modify data, with techniques for granting, listing, and removing privileges.
  
- **Roles**: Grouping privileges to streamline user management and ensure security policies are consistently applied.

### Security Controls for Confidentiality

- **Views**: Creating views to limit data access and maintain confidentiality.
  
- **Encryption and Hashing**: Techniques to protect data from unauthorized access and ensure confidentiality.

### Transactions and Data Integrity

- **Transactions**: Mechanisms like commits and rollbacks to maintain data integrity during concurrent access and updates.

### Concurrent Access and Locking

- **Locking Mechanisms**: Table-level and row-level locking to manage data integrity during concurrent access.

## Audience and Purpose

The textbook is intended for professionals, self-learners, and educational settings, offering hands-on exercises to reinforce learning. It focuses on typical database security concepts, excluding broader application security topics like SQL injection.

## Conclusion

The book provides a comprehensive overview of database security principles, emphasizing practical techniques for ensuring confidentiality, integrity, and availability in database systems.



**Introduction to Information Security**

Information security involves protecting data from unauthorized access, both externally and internally. Internal threats are particularly challenging due to the insider's familiarity with the environment and potential authorized access to certain information. Access control applies to users and agents like programs or services.

**Security Controls**

Security principles are enforced through mechanisms or controls, varying by environment, needs, and policies. For confidentiality, encryption is common, requiring a key to access data. Integrity controls include checksums or hashes to detect data modifications. Availability controls involve backups and redundancy, such as RAID configurations, to ensure data accessibility despite device failures. System outages are mitigated with UPSs, backup generators, and redundancy. DOS and DDOS attacks are countered with anti-malware, intrusion detection, and firewalls.

**Security Requirements**

Requirements for confidentiality, integrity, and availability differ by application or system. For example, financial institutions may demand higher confidentiality levels than advertising agencies. Integrity requirements depend on data verification needs, while availability requirements depend on the criticality of timely data access. Security solutions must align with organizational policies and be tested regularly to adapt to evolving data and environments.

**Data Security**

Data security shares goals with information security, focusing on data at rest. It emphasizes specific solutions, such as monitoring data access to identify potential threats like unexpected data modifications.

**Database Security**

Database security aims to maintain confidentiality, integrity, and availability within databases. Controls include privileges and encryption for confidentiality. Integrity is maintained through design, normalization, and concurrency controls. Entity integrity ensures unique identification of each database entry through primary keys. Referential integrity maintains relationships between tables, ensuring foreign keys correspond to existing primary keys.

**Entity Integrity**

Entity integrity in databases requires each instance (row) to have a unique primary key. This ensures data uniqueness and non-null values. For example, an Employee table uses EmployeeId as a primary key to uniquely identify employees.

**Referential Integrity**

Referential integrity involves relationships across tables, requiring foreign keys to correspond to existing primary keys. For instance, an Employee table might relate to a Department table through a DeptID foreign key, ensuring data consistency across related tables.

**Conclusion**

Security requirements and controls must be tailored to specific organizational needs and environments, with ongoing testing to ensure effectiveness. Database security focuses on maintaining data integrity and confidentiality through structured design and access controls.



In database design, foreign keys can remain undefined if they are not part of a composite primary key, allowing for future updates when data becomes available. For instance, a department without an administrative assistant can have a null value for `AdminAsstEmpId` until an employee is appointed. Entity integrity necessitates non-null values for foreign keys that are part of a primary key, ensuring valid project assignments in tables like `ProjectAssignment`.

Domain integrity ensures data values are stored in the correct form and are present when required. Constraints like `NOT NULL` and data types help enforce this, preventing errors during data insertion. For example, a column storing monetary values can be defined to ensure proper formatting, and constraints can ensure values fall within a specified range.

User-defined integrity allows for custom business rules to be applied, such as minimum order quantities or department size requirements. Violating these rules breaches organizational data integrity.

Data availability is crucial for database security, relying on backups and redundancy to prevent data loss. High availability systems use redundant hardware like RAID and multiple servers to maintain operations despite failures. Security measures include UPSs, firewalls, and secure code design to protect against attacks that compromise availability.

Database security involves managing user accounts, ensuring proper access, and disabling unused accounts to prevent unauthorized access. Database design impacts security, especially when data is altered validly but inconsistently due to duplication. Normalization addresses these issues by eliminating insert, update, or delete anomalies, maintaining data integrity.

Normalization, particularly Boyce-Codd Normal Form (BCNF), uses functional dependencies to reduce data duplication and inconsistencies. It involves splitting tables to ensure that attributes on the left side of a functional dependency are part of a primary or candidate key. This process helps maintain database integrity by ensuring consistent data retrieval and reducing redundancy.

The text illustrates normalization with a real estate agency example, showing how duplicated data, like realtor information, can lead to inconsistencies. By applying BCNF, tables are restructured to eliminate these issues, ensuring that changes to data are consistently reflected across the database. This approach highlights the importance of thoughtful database design in maintaining data integrity and security.



## Summary of Database Normalization and Integrity

### Normalization to BCNF

The process of normalizing a database to Boyce-Codd Normal Form (BCNF) involves examining functional dependencies to decide whether to split tables. The steps include:

1. **Creating a New Table**: If the left side of a functional dependency (FD) is not a candidate key, a new table is created with attributes from both sides of the FD.
2. **Setting Primary Key**: The primary key of the new table is set using the attributes on the left side of the FD.
3. **Modifying Existing Table**: In the existing table, attributes on the right side of the FD are removed if they are not part of the primary key, and the left side attributes become a foreign key linking to the new table.

For example, the table `Listing` was split into `Realtor` and `Property` tables based on functional dependencies. This process eliminated data duplication and reduced inconsistencies.

### Surrogate Keys and Data Integrity

Normalization reduced data duplication but didn't eliminate integrity issues due to natural keys, which have meaningful values. For instance, changing a phone number in the `Realtor` table could affect multiple locations where it appears as a foreign key.

To address this, surrogate keys are introduced:

- **RealtorID** and **PropID** are surrogate keys that replace natural keys, simplifying primary keys and reducing integrity issues.
- Surrogate keys prevent data duplication and inconsistencies, as changes need to be made only once, in the primary table.

### Access Restrictions and Security

Normalization not only improves data integrity but also aids in managing access. By splitting data into separate tables, access can be controlled more precisely. For instance, access to property data can be restricted to signed realtors, allowing public access only to non-sensitive data.

Further splitting, such as creating `PropertyPublic` and `PropertyPrivate` tables, can isolate sensitive data, enhancing security by controlling access based on user roles.

### Database Management and Administration

Database design is crucial for security management. Backup and recovery are essential tasks to ensure data availability, protecting against data loss due to hardware failures, unauthorized alterations, or deletions. Backups allow restoration to a previous state, maintaining data accessibility and integrity.

### Conclusion

Normalization and the use of surrogate keys are effective strategies in database design to reduce duplication, enforce integrity, and enhance security. These practices, combined with proper access control and backup strategies, form the foundation of a robust database management system.




Database management involves critical tasks such as backing up data to ensure availability and integrity. Backups create restore points, which are crucial in the event of data loss or corruption. It's important to decide what data to back up, and how frequently, to maintain these restore points. The most recent backup is typically restored unless there's suspicion of data corruption.

Backups can be stored in various formats, with SQL statement files being a common choice. These files can recreate database structures and data on compatible database management systems (DBMS). Tools like `mysqldump` in MySQL, Oracle, and MariaDB facilitate backing up databases, tables, and other components, allowing for easy restoration.

In single-session DBMS environments, backups can be created using `mysqldump` to generate SQL files that include tables, views, and data. When restoring, the `mysql` command is used to apply these SQL statements to the DBMS. Two main approaches for restoration include initiating a new session or using an existing session to execute the restore operation with the `SOURCE` command.

For multiple databases, the `--databases` option in `mysqldump` allows backing up several databases at once. Restoring these backups follows similar procedures as single database restorations. Specific tables within a database can also be backed up by specifying the table names in the `mysqldump` command.

Additionally, backups can include user accounts, privileges, and other DBMS components using the `--all-databases` option. This ensures comprehensive data protection, including stored procedures and functions, with the `--routines` option.

Deciding on what to back up depends on several factors, such as the size of the DBMS and the need to share data with third parties. A full DBMS backup ensures all components are included, reducing risks associated with missing critical elements like user accounts. However, partial backups may be preferred for efficiency or confidentiality reasons.

Finally, user account security configurations, such as password expiration, are vital for maintaining database security. These controls help manage user access and protect sensitive data from unauthorized access.




Password expiration is a critical security measure to protect user accounts from unauthorized access. It limits the time an attacker can use a compromised password. By setting expiration intervals, such as 120 days, users are required to change their passwords, reducing the risk of brute force attacks over extended periods.

Database Management Systems (DBMS) like MySQL, MariaDB, and Oracle offer options to manage password expiration. Each user can have a unique expiration value, initially set to the system default, which can be modified without affecting others. To view or change a user's password expiration in MySQL or MariaDB, SQL statements like `SELECT password_lifetime` and `UPDATE mysql.user SET password_lifetime` are used. The default expiration can be configured via the `default_password_lifetime` variable.

Oracle typically defaults to a 180-day expiration. Changes to the default can be made using an `ALTER` statement. Setting no expiration poses a confidentiality risk, so it's generally discouraged.

Immediate password expiration can be enforced if there's suspicion of compromise, prompting users to reset their passwords. This is done using the `ALTER USER` statement in MySQL, MariaDB, and Oracle.

User accounts can also be disabled to prevent access while maintaining data integrity. This is useful in cases of suspected compromise or when a user leaves an organization. Disabling and re-enabling accounts is managed using `ALTER USER` statements.

Database user management includes creating and removing accounts, typically done through SQL for uniformity across DBMSs. Usernames are often based on unique identifiers like last names, with passwords for authentication. The `CREATE USER` statement establishes accounts, and `ALTER USER` manages passwords.

Security controls extend to host-restricted access, limiting the systems from which a user can access the DBMS. This chapter emphasizes the importance of maintaining security objectives like availability and confidentiality through administrative tasks such as backups, restores, password management, and account control.

Overall, understanding and implementing these security measures is essential for protecting database integrity and preventing unauthorized access.



### Database User Account Management and Security

Database user accounts are essential for managing access to a DBMS. A common security measure is password-based control, where each account is protected by a password. In Oracle, after creating an account, you must grant session creation privileges, unlike MySQL and MariaDB, which do not require this step.

#### Logging In with Passwords

When logging into a database account, passwords can be specified directly in the command, but this poses a security risk as they may be visible in system process listings. A safer method is to use the `-p` option without specifying the password, prompting the DBMS to request it securely. This prevents exposure in command listings and protects against shoulder-surfing.

#### Creating and Managing User Accounts

User accounts can be created with a password in a single command using `CREATE USER` followed by `IDENTIFIED BY`. Accounts can also be removed with the `DROP` command. Listing existing accounts is done using SQL `SELECT` statements, which vary by DBMS. In MySQL, accounts without host restrictions can be accessed from any system, while Oracle can list accounts without showing system accounts.

#### Host-Restricted Accounts

For enhanced security, accounts can be restricted to specific hosts. This involves combining the username with a hostname using an `@` symbol. If no host is specified, access is allowed from any system. Hostnames with special characters must be enclosed in quotes. Multiple accounts can be created for different host access, each with its own password, reducing the risk of widespread access if one password is compromised.

#### Using Wildcards for Host Access

SQL wildcards can specify ranges of IP addresses or hostnames, minimizing account creation. Single character wildcards (`_`) represent one varying character, while multiple character wildcards (`%`) match any number of characters. This allows for flexible access control, such as permitting access from an entire network.

#### Security Considerations

Using the same password for multiple accounts is convenient but risky. Different passwords for each account enhance security, limiting access if one password is compromised. Wildcards allow for efficient management of access from multiple systems, reducing the need for numerous individual accounts.

#### Database Privileges

Privileges manage what data users can access and how. They define who can view, modify, or have no access to data. This granular control enhances security by ensuring only authorized users can perform specific actions on the data.

In summary, effective database security involves careful management of user accounts, passwords, and host restrictions, along with the strategic use of SQL wildcards and privileges to control access and protect sensitive information.



### Overview of Database Privileges

Database security involves managing user access at various levels of granularity: database-level, table-level, column-level, and row-level. The database-level is the broadest, while column and row levels offer more specific control. By default, most DBMSs (Database Management Systems) are "default secure," meaning users cannot access databases without explicit permissions.

### Granting Database Access

To allow access, privileges must be granted using the SQL `GRANT` statement. Common privileges include `SELECT`, `UPDATE`, `INSERT`, `DELETE`, `CREATE`, and `DROP`. The syntax for granting privileges involves specifying the privileges, the database/table, and the user. For example, granting all privileges to user `roberts` for the `BusinessTLS` database would allow full control over the data and tables.

### Managing Privileges

Privileges can be managed by the database root or an administrative account. The `WITH GRANT OPTION` clause allows users to grant privileges to others. This capability can be restricted to specific hosts for security, ensuring users like `sanford` can only manage privileges when logged in from a designated system.

### Listing Privileges

Users can view their own privileges using the `SHOW GRANTS` statement. Administrative accounts can view privileges for any user. This helps in auditing and ensuring appropriate access levels are maintained.

### Removing Privileges

Privileges can be revoked using the SQL `REVOKE` statement, adhering to the principle of least privilege, which suggests users should only have the access necessary for their tasks. For instance, if `roberts` was given excessive privileges, they could be reduced to read-only access by revoking all previous privileges and granting only `SELECT`.

### Security Considerations

Granting broad access can pose security risks, especially in operational environments. It's crucial to carefully manage who has access to what, ensuring that users only have the necessary permissions to perform their roles. Administrative access should be limited and monitored, with multiple accounts created for users accessing from different hosts.

### Conclusion

Effective database security involves a balance between accessibility and protection. By utilizing SQL statements to grant, view, and revoke privileges, organizations can maintain secure databases while allowing necessary access for users. Regular audits and adherence to security principles like least privilege are essential for maintaining robust database security.



In managing database privileges, it is crucial to adhere to the principle of least privilege, ensuring users have only the necessary access to perform their tasks. Privileges can be granted or revoked using SQL statements, with care taken to avoid inadvertently leaving users with excessive permissions. When revoking privileges, especially if initially granted using the SQL keyword `ALL`, it is essential to ensure that all unnecessary privileges are removed to prevent security vulnerabilities.

For effective privilege management, it is often safer to revoke all privileges and then grant only the desired ones, particularly when dealing with complex privilege sets. This approach minimizes the risk of overlooking any privileges and helps maintain a secure database environment.

In a business scenario, access to tables within a database can be controlled according to user roles. For instance, all employees might have read access to an Employee table, while only human resources personnel have read and write access. This is managed using SQL `GRANT` statements at the table level, allowing for precise control over user permissions.

Table-level privileges can be mapped from high-level access requirements to specific SQL privileges. For example, read-only access corresponds to the `SELECT` privilege, while read-write access includes `SELECT` and `UPDATE` but not `INSERT` or `DELETE`. This distinction is important for compliance with security standards, ensuring users can modify data without the ability to create or delete records.

When assigning privileges, it is important to consider the user's access from different systems. For example, a user might have different privileges when accessing the database from a local machine versus a remote network. This flexibility allows for tailored access control based on the user's location or role.

To ensure the security of new database tables, privileges should be assigned individually rather than using database-level wildcards, which apply to all current and future tables. This practice prevents users from gaining unintended access to new tables, maintaining a secure default state.

Testing and verification of assigned privileges are critical. Users should be tested for both allowed and denied operations to confirm that privileges are correctly configured and that no unauthorized access is possible. This thorough assessment helps identify and rectify any security gaps.

Overall, careful management of database privileges, with attention to detail in granting and revoking access, plays a vital role in maintaining database security and protecting sensitive information.



In database security management, table-level security (TLS) is a common approach where privileges are granted at the table level. However, TLS may not meet all security requirements, especially when dealing with sensitive data such as Personally Identifiable Information (PII) or Personal Information (PI). To enhance security, a table can be split into multiple tables, separating sensitive data from non-sensitive data. For example, in a company database, non-sensitive employee data (e.g., names, titles) can remain in the main Employee table, while sensitive data (e.g., addresses, SSNs) is moved to a separate HR table. This separation allows for different access controls: general employees can access non-sensitive data, while only authorized HR personnel can access sensitive data.

The BusinessTLSSplitHR database exemplifies this approach, with two tables: Employee and HR. The Employee table contains non-sensitive data, accessible by all employees in read-only mode. The HR table, containing sensitive data, is restricted to HR personnel, who have read-write access. This setup ensures that PII and PI are protected from unauthorized access.

User access is defined through precise privilege assignments. For instance, 'sanford'@'localhost' is granted administrative privileges to manage access without viewing data, achieved by using the USAGE privilege with the GRANT OPTION clause. This configuration allows for secure management of privileges while maintaining data confidentiality.

An alternative to TLS is Column-Level Security (CLS), which provides fine-grained control by assigning privileges at the column level. This is beneficial in scenarios where different columns within a table have varying security requirements. For example, in the original Employee table, CLS can be used to restrict access to sensitive columns while allowing access to non-sensitive columns. This approach avoids the need to split tables and offers flexibility in managing data security.

In CLS, privileges such as read or write can be specified for individual columns, ensuring that users only access data they are authorized to view. The BusinessCLS database demonstrates this, where column-level privileges are defined for users, allowing HR personnel full access while restricting others to non-sensitive data.

Testing and validation of access controls are crucial. Attempts to access unauthorized data should be denied, as demonstrated by unsuccessful retrievals of PI and PII data by non-HR personnel. This ensures that security requirements are enforced and sensitive data remains confidential.

Ultimately, the choice between TLS and CLS depends on the specific security needs and complexity of the database. TLS is simpler to implement but may require table splitting, while CLS offers detailed control at the cost of increased complexity. Both methods aim to uphold the principle of least privilege, ensuring users have only the access necessary to perform their roles.




In managing database security, column-level security (CLS) is crucial for assigning precise access privileges. Although granting table-level privileges might seem efficient, it can introduce vulnerabilities. For example, if a new column with different security needs is added, users with table-level privileges will automatically gain access, which might not be desirable. Therefore, specifying column-level privileges by name ensures default security, as new columns require explicit access assignments.

For instance, in the Employee table, granting 'chu'@'localhost' column-level privileges prevents automatic access to future columns. Similarly, in the Budget table, while all employees have read-only access, the CEO and CFO have read-write privileges. This approach ensures that any new columns, like a confidential Notes column, remain inaccessible until privileges are explicitly granted.

Testing access, such as 'chu'@'localhost' adding or removing employee data, confirms the privileges are correctly applied. Listing privileges, as shown for user roberts, helps verify the specific column-level assignments, ensuring no unintended access.

Over time, data access needs may evolve, requiring adjustments. For example, the CEO and CFO might need access to salary data, which can be granted by adding privileges for the Salary column. Similarly, allowing employees to view address data can be managed by adding SELECT privileges for the Address column. These changes can be easily implemented without altering existing privileges.

In cases where new data, such as the Notes column in the Budget table, is introduced, careful privilege management is essential to maintain security. Assigning column-level privileges ensures that only designated users, like the CEO and CFO, can access this data, adhering to the principle of least privilege.

While column-level privileges offer detailed security management, table-level privileges can simplify scenarios where all columns share the same security requirements. However, this requires caution to avoid compromising confidentiality, integrity, or availability by omitting or incorrectly defining privileges.

Row-level security (RLS) is another dimension, managing access by rows rather than columns. RLS is not natively supported by most DBMSs and often requires views, encryption, or applications to implement.

In summary, managing database security involves carefully assigning and testing privileges at various levels—column, table, and row. These controls form the foundation of database security, ensuring only authorized access to sensitive data. Upcoming chapters will explore roles as a means to streamline security management by grouping users with similar access needs, reducing repetitive privilege assignments.



Database roles streamline privilege management by grouping users and assigning privileges to roles rather than individual users. This approach enhances security by minimizing errors in privilege assignment and maintaining the principle of least privilege. Roles allow for easy adjustments when user responsibilities change, ensuring privileges are updated accordingly.

To implement roles, define which users belong to each role and their data access requirements. Create roles, assign privileges, and add users. While adding users before privileges may be less secure, roles can be adjusted as data access needs evolve.

In the BusinessRole database scenario, roles are defined for all employees, the CEO, CFO, HR, and CIO. Users are assigned to roles based on their responsibilities, with privileges specified at both table-level security (TLS) and column-level security (CLS).

For TLS, all employees have USAGE privileges on Employee and Budget tables. Additional privileges are granted based on role requirements, such as INSERT and DELETE capabilities for the CFO on the Budget table. The CIO role includes privileges to manage user permissions.

Roles with identical requirements can be consolidated to simplify management. For example, the AllEmployees and CEO roles share TLS requirements, allowing for potential consolidation. However, distinct roles are maintained for clarity if consolidation causes confusion, such as merging CEO and CFO roles into a new Financial role.

CLS requirements specify data access at the column level. For the Employee table, all employees have read-only access to nonconfidential data, while HR has read-write access. Similar consolidations apply to CLS requirements in the Budget table, where roles with identical access can be combined.

Creating roles involves using SQL statements like `CREATE ROLE`. Assigning privileges to roles uses the `GRANT` statement, specifying privileges for each role. For instance, the AllEmployees role receives USAGE privileges, while the CFO role gains additional INSERT and DELETE privileges for specific tables.

The CIO role is granted management privileges using the `WITH GRANT OPTION`. CLS privileges are assigned similarly, ensuring roles have appropriate access to specific columns.

By consolidating roles where possible and carefully defining privileges, the system maintains security and efficiency. This method reduces complexity and potential security vulnerabilities, adhering to the principle of least privilege and ensuring consistent privilege management across the database environment.



### Database Role Management and Privileges

In database security, managing roles and assigning privileges is crucial for maintaining data integrity and security. This document outlines the process of assigning column-level privileges, adding users to roles, and managing user roles within a database system.

#### Assigning Column-Level Privileges

Roles are assigned specific privileges to access database tables. For example, the **AllEmployees** role receives read-only access to all columns in the Budget table, while the **CEO** and **CFO** roles are granted read-write access. Regular review of these privileges is essential to correct any errors and ensure security.

#### Role Privileges Overview

- **AllEmployees**: Has USAGE and SELECT privileges for non-confidential data.
- **CEO and CFO**: Both have USAGE, SELECT, and UPDATE privileges, with the CFO also having INSERT and DELETE privileges.
- **HR**: Can read, write, add, and remove data in the Employee table.
- **CIO**: Similar to AllEmployees but can manage user privileges with the WITH GRANT OPTION.

#### Adding and Removing Users from Roles

Users are added to roles using the **GRANT** statement. For example, adding 'roberts' to the CEO role involves specifying the user and role. The **WITH ADMIN OPTION** allows a user to manage roles for other users. To remove a user from a role, the **REVOKE** statement is used.

#### Setting User Roles

Before a user can access data, they must activate their role using the **SET ROLE** statement. This can specify one or more roles, ALL roles, or NONE. For security, users should only activate roles as needed to adhere to the principle of least privilege.

#### Default Role

A default role can be set using the **SET DEFAULT ROLE** statement. This role becomes active upon user login, providing a baseline set of privileges. For example, setting the **AllEmployees** role as default allows immediate access to its privileges.

#### Reviewing Roles and Privileges

Users and administrators can review assigned roles and privileges using the **SHOW GRANTS** statement. This command helps identify active roles and their associated privileges, ensuring users have the correct access levels.

#### Security Best Practices

Activating roles only when necessary minimizes security risks by adhering to the principle of least privilege. This approach reduces vulnerabilities by limiting access to sensitive operations unless explicitly required.

In summary, managing database roles and privileges involves careful assignment, regular review, and strategic activation of roles. This ensures data security while allowing necessary access for users to perform their roles effectively.



In managing database security, roles and privileges play a crucial role in controlling user access. The extended `SHOW GRANTS` command, with a `USING` clause, allows for a comprehensive listing of a user's privileges across multiple roles. This approach provides clarity on directly and indirectly assigned privileges, as seen in examples with roles like `AllEmployees` and `CEO`. It is essential to verify that users have appropriate access without overextending privileges, ensuring non-confidential data is accessible to non-HR employees, while HR employees can access confidential data. Similarly, only specific roles like CEO and CFO should have read-write access to sensitive data like the budget.

The evolution of roles in an organization includes hiring new employees, changing responsibilities, and offboarding. Directly assigning privileges can be tedious and error-prone, whereas using roles simplifies management. For instance, when a new HR employee is hired, assigning them to `AllEmployees` and `HR` roles is more efficient than granting individual privileges. Similarly, when an employee takes on new responsibilities, roles can be added or removed as needed, such as adding the `CFO` role for additional duties.

Offboarding involves removing users from roles using the `REVOKE` statement. It's crucial to ensure all roles and privileges are correctly removed to maintain security. If necessary, user accounts can be deleted with the `DROP` statement, but care must be taken to avoid disrupting access to managed data.

The chapter emphasizes the principle of least privilege, ensuring users have only the necessary access. Moving forward, security mechanisms for confidentiality, such as database views, are explored. Views allow for controlled data access by creating aggregated data representations, maintaining confidentiality and anonymity. For example, in educational or medical scenarios, views can provide aggregated data like average scores or vaccination statuses without revealing individual details.

Creating a view involves using the `CREATE VIEW` statement, specifying the data to be accessed. This approach enables restrictions at the row level, such as only displaying data for adult patients. Views offer flexibility beyond table-, column-, and row-level privileges, enhancing data security by processing and portraying data in aggregated forms. This helps protect personally identifiable information (PII) and personal health information (PHI), ensuring confidentiality and anonymity are maintained.

Overall, roles and views are integral to efficient and secure database management, allowing organizations to adapt to changes while safeguarding sensitive information.



### Database Views and Security

#### Creating and Managing Views
- **View Creation**: Views can be created with the `CREATE [OR REPLACE] VIEW view_name [(column_list)] AS select_statement` syntax. This allows for renaming columns to provide context or clarity.
- **Listing Views**: Use `SHOW CREATE` to view definitions and `SHOW FULL TABLES` to list views in a database.

#### Access and Privileges
- **Views as Relations**: Views and tables are treated as relations in a relational database, allowing similar access methods.
- **Assigning Privileges**: User privileges can be assigned to views, similar to tables. For example, a user can be granted `SELECT` privileges on a specific view without accessing the underlying table.

#### Security Considerations
- **Wildcard Risks**: Using `*` in view definitions can inadvertently expose new columns added to the table, compromising confidentiality. It’s safer to specify columns explicitly.
- **Availability Issues**: Removing columns included via wildcard in view definitions can lead to errors and availability issues, as the view tries to access non-existent columns.

#### Best Practices
- **Explicit Column Lists**: Define views with specific column names to avoid security vulnerabilities related to confidentiality and availability.
- **Redefining Views**: Use `CREATE OR REPLACE VIEW` to update view definitions without deleting them. This ensures security by maintaining control over accessible columns.

#### Multiple Data Access Requirements
- **Using Views for Different Needs**: Views can fulfill various data access requirements without compromising security. For instance, one view can provide patient names, while another calculates vaccination percentages, each with different access levels.

#### Views vs. Privileges
- **Complementary Roles**: Views supplement user and role privileges by refining access options. They allow for context-specific data access that privileges alone cannot achieve.

### Encryption, Decryption, and Hashing
- **Confidential Data Storage**: Sensitive data, like credit card numbers, should not be stored in plaintext. Instead, encryption ensures that even if access is gained, the data remains secure.
- **Security Measures**: Relying solely on user or role privileges is insufficient for sensitive data. Encryption protects against compromised accounts or unauthorized access.

By adhering to these practices, databases can maintain security, confidentiality, and integrity while providing flexible data access through views.



### Summary of Database Security Techniques

In database security, storing sensitive information like credit card numbers requires confidentiality measures to prevent unauthorized access. Encryption is a common solution, transforming plaintext into ciphertext, which is undecipherable without proper credentials. There are two main types of encryption: symmetric and asymmetric. Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses a pair of keys—one for encryption and another for decryption.

**Symmetric Key Encryption:**
- Utilizes the same key for encryption and decryption.
- AES (Advanced Encryption Standard) is widely used due to its strong security.
- The `AES_ENCRYPT` function encrypts data, and `AES_DECRYPT` decrypts it.

**Asymmetric Key Encryption:**
- Involves a key pair: one public and one private.
- The public key encrypts, and the private key decrypts.

**Hashing:**
- Hashing secures passwords by converting them into a fixed-length, scrambled representation.
- Unlike encryption, hashing is one-way and cannot be reversed.
- SHA (Secure Hash Algorithm) is a popular hashing method, with SHA-256 being highly secure.

**Database Storage:**
- Encrypted data should be stored in binary data types like VARBINARY or BLOB.
- The size of the storage should align with the encryption method used (e.g., AES).

**Password Security:**
- Storing passwords in plaintext is insecure; hashing is preferred.
- To authenticate, hash the provided password and compare it with the stored hash.
- Salting enhances security by adding a unique value to each password before hashing, making it resistant to attacks like rainbow tables.

**Salting:**
- Involves adding a unique, random value to each password.
- Ensures that even identical passwords have different hash values.
- Typically generated using a secure method, such as hashing the system clock.

By implementing encryption, hashing, and salting, databases can protect sensitive information effectively, ensuring confidentiality and integrity against unauthorized access and attacks.



The text discusses database security measures focusing on password-based authentication and stored routines. It highlights the use of salt values and hashing to secure passwords. Salt values are generated using the system clock, providing microsecond resolution, and stored as 32-byte text strings. These are concatenated with plaintext passwords, hashed using SHA2, and stored in a database, ensuring different hash results even for identical passwords due to unique salt values. This method enhances security by preventing attackers from easily deciphering passwords.

The text also explores the limitations of views in database security. Views can restrict data access but may still expose sensitive information, such as personally identifiable information (PII), through indirect correlations. For instance, a view showing a patient’s date of birth and vaccination status can compromise confidentiality if a user correlates the data to identify individuals. To address this, stored routines—stored functions and procedures—are recommended.

Stored functions return a single value and can enforce data access limitations. They are defined with specific parameters and return types. Functions are marked as deterministic if they produce consistent results with the same inputs. The text provides an example of a stored function calculating the percentage of fully vaccinated individuals within an age range. It uses alternative delimiters to manage SQL statement processing and ensures security by returning only the necessary data.

Stored procedures, unlike functions, do not return values via the procedure name but can return multiple values through parameters. They are defined with IN, OUT, or INOUT keywords to indicate data flow direction. An example procedure calculates vaccination percentages for a specified age range, returning the result via an OUT parameter. To execute these routines, appropriate user privileges must be granted using GRANT statements.

The text emphasizes the importance of removing direct access to sensitive views, ensuring users access data only through controlled functions or procedures. This approach maintains confidentiality by preventing unauthorized data access while allowing necessary calculations. Overall, the text underscores the significance of combining authentication mechanisms and stored routines to enhance database security and protect sensitive information.




### Summary

The text discusses database security and transaction management, focusing on password authentication and transaction integrity. 

#### Password Authentication

A stored function named `PasswordAuthenticated` is introduced for password verification. It takes a user ID and password, returning "true" if the password matches the stored hash and "false" otherwise. The function retrieves hashed passwords and salts from the `PatientCredentials` table, compares them with the provided input, and returns the result. This method enhances security by limiting data access through stored procedures.

#### Database Transactions

The text covers handling multiple database operations within a single task, such as financial transactions. It explains the necessity of atomic transactions, ensuring that either all operations are completed successfully or none are, to maintain data integrity. This is crucial in scenarios like transferring funds between accounts, where partial updates can lead to inconsistencies.

#### COMMIT and ROLLBACK

Two approaches for managing transactions are detailed:

1. **Disabling Autocommit:**
   - Autocommit is disabled, allowing explicit control over when changes are committed or rolled back.
   - A transaction begins with a COMMIT or ROLLBACK statement and ends with another, ensuring atomicity.
   - Example: Transferring funds between accounts involves disabling autocommit, updating balances, checking validity, and committing or rolling back based on the outcome.

2. **Using START TRANSACTION:**
   - Automatically disables autocommit temporarily.
   - Initiates a transaction, followed by data operations, and concludes with a COMMIT or ROLLBACK.
   - This approach simplifies transaction management by eliminating the need to manually disable or enable autocommit.

#### Key Concepts

- **Atomic Transactions:** Ensures all operations in a transaction are completed or none are, maintaining data consistency.
- **Autocommit:** Automatically commits changes unless explicitly disabled, affecting transaction visibility and permanence.
- **Security Considerations:** Using stored procedures and functions to limit direct data access enhances security by reducing exposure to potential attacks.

Overall, the text emphasizes the importance of structured transaction management and secure data handling to maintain database integrity and confidentiality.



### Database Transactions and Data Integrity

In database management, transactions are crucial for maintaining data integrity. A transaction begins with a `START TRANSACTION` statement and concludes with either a `COMMIT` or `ROLLBACK`. The `COMMIT` saves changes, while `ROLLBACK` undoes them. Using `START TRANSACTION` helps clearly define the transaction's start point, independent of automatic commit settings.

#### Conditional COMMIT or ROLLBACK

Traditional examples often illustrate transactions with explicit `COMMIT` or `ROLLBACK` statements, but these lack automated decision-making. A more robust approach involves using variables to store transaction-specific data, such as account identifiers and transfer amounts. This method checks if the source account balance is nonnegative before issuing a `COMMIT`. If negative, a `ROLLBACK` is executed to undo changes, ensuring data integrity.

#### Exception-Based ROLLBACK

An alternative approach uses exceptions to handle errors automatically. By incorporating check constraints, exceptions are raised if data integrity is violated, such as when an account balance becomes negative. Stored procedures can catch these exceptions, triggering a `ROLLBACK` without user intervention. This method allows for seamless error handling and maintains data consistency.

#### Logging and Error Handling

Exception handlers can also log errors by inserting records into a log table, providing a history of exceptions for future reference. This dual approach ensures both automated error correction and documentation of issues.

#### E-commerce Transaction Example

In an e-commerce setting, transactions manage the purchase process. When a customer places an order, the system updates the order and item tables. If an error occurs, such as insufficient stock, the transaction is rolled back. This allows the customer to adjust their order and retry, ensuring the database reflects only valid transactions.

In conclusion, using transactions with conditional logic or exception handling enhances data integrity and error management in databases, crucial for applications like e-commerce where data accuracy is vital.



The text discusses the process of managing order transactions in a database system, focusing on maintaining data integrity and handling potential errors during transactions. Each order involves multiple operations, such as updating customer orders, order items, and item availability. If any operation fails, the system must roll back the entire transaction to maintain consistency, allowing the customer to modify and retry the order.

Errors can arise from resource limits, constraint violations, or business rule checks, such as when an item's availability becomes negative. The system uses SQL transactions with `COMMIT` and `ROLLBACK` to manage these operations. A successful transaction ends with a `COMMIT`, indicated by a result of 0, while failures trigger a `ROLLBACK`, resulting in a -1.

The text illustrates this with an example of a customer order, using a stored procedure `PlaceOrder` that executes SQL `INSERT` and `UPDATE` statements. If all operations succeed, the transaction is committed, and the data is updated. If any operation fails, such as when an item's availability would become negative, an exception handler rolls back the transaction, reverting all changes.

The document also covers the importance of data integrity in concurrent database access. In environments with multiple active sessions, concurrent access can lead to integrity issues, especially during backups. To prevent inconsistencies, the database can be locked during backups, ensuring a consistent snapshot of the data. This lock prevents any changes to the database components or data during the backup process.

The text provides examples of potential integrity issues, such as inconsistent backups due to concurrent data definition language (DDL) or data manipulation language (DML) operations. To address these issues, locks can be applied at various levels, ensuring that backups capture a consistent state of the database.

Overall, the text emphasizes the need for careful transaction management and data integrity controls in database systems to ensure reliable and accurate operations, particularly in environments with concurrent access and complex transactions.



### Summary

In database management, efficient backup and data integrity are crucial. To ensure data safety during backups, it's advisable to lock only the specific tables needed, using the `FLUSH TABLES` statement with a read lock. This prevents unnecessary locking of the entire database. For instance, to back up the `Patient` table in the `MedicalCaseStudy` database, you can lock only that table, perform the backup, and then unlock it.

In environments with high concurrency, serial task execution can lead to inefficiencies. Allowing concurrent access can optimize database utilization and reduce task turnaround times. However, concurrency can introduce data integrity issues, such as the lost update problem, where concurrent operations on shared data lead to inconsistent results.

The lost update problem occurs when multiple sessions read and modify shared data simultaneously without proper coordination. For example, if two transfers are processed concurrently on the same account, the final balance may be incorrect due to overlapping read and write operations. To prevent such issues, mutual exclusion is employed, ensuring only one session accesses shared data at a time.

Locks are a common solution for mutual exclusion. A session must hold a lock to access shared data, preventing concurrent modifications. Locks can be applied at different levels, including the entire DBMS, tables, rows, or even columns. Table-level locking is straightforward: a session locks a table before accessing it, performs its operations, and then releases the lock. This ensures data integrity by preventing concurrent access to the table.

For example, using SQL, a session can lock a table with `LOCK TABLES table_name WRITE`, perform necessary operations, and then release the lock with `UNLOCK TABLES`. If another session requests a lock while one is held, it must wait until the lock is released.

In summary, managing concurrent access and backups in databases requires careful use of locks to maintain data integrity and optimize performance. By strategically locking tables or data segments, databases can handle multiple tasks efficiently without compromising data consistency.



In database systems, maintaining data integrity during concurrent transactions is crucial. This is achieved through locking mechanisms, which prevent data inconsistencies such as lost updates. Table-level locking is a common approach where the entire table is locked before accessing data, ensuring mutual exclusion and preventing data integrity issues. Even though serial access doesn’t inherently cause integrity problems, locks are used as a precautionary measure to handle potential concurrent access scenarios.

When two transfers, TransferA and TransferB, access the same table, they both lock the AccountCC table to coordinate access and prevent inconsistencies. This scenario is illustrated through figures showing the locking sequences. If TransferA locks the table first, TransferB must wait, demonstrating how locks ensure safe access but can degrade performance by serializing access.

To mitigate performance issues, two approaches are suggested: using table-level READ locks or employing row-level locking. A READ lock allows concurrent read access but prevents data modification, thus maintaining data integrity during tasks like audits. This approach ensures that data remains unchanged during the audit period while allowing read-only access, enhancing performance through concurrency.

Row-level locking offers a more granular approach, locking individual rows rather than the entire table. This allows multiple sessions to access different rows concurrently, preserving performance benefits. For instance, in an account transfer scenario, only the rows related to the accounts involved in the transfer are locked, freeing other rows for concurrent access by different sessions.

Row-level locks can be either UPDATE or SHARE locks. UPDATE locks are similar to table-level WRITE locks, permitting only the lock holder to modify data, while others must wait. SHARE locks, on the other hand, allow multiple sessions to read data concurrently but prevent any modifications, ensuring data consistency.

The document also highlights the potential for a session to time out if a lock isn't acquired within a specified period, necessitating a retry for the transaction. Overall, the document emphasizes the balance between data integrity and performance, advocating for the strategic use of locking mechanisms to optimize both.




In this chapter, we explored the intricacies of database locking mechanisms to ensure data integrity during concurrent access. The text illustrates the use of SHARE, UPDATE, and other locks in managing concurrent database sessions, emphasizing the balance between data integrity and performance. 

Three concurrent sessions are described: the first performs an audit by summing balances, the second inquires about a balance, and the third attempts a transfer. Both the first and second sessions use SHARE locks for read-only access, allowing concurrent read access without interference. However, when the third session requests an UPDATE lock, it must wait if the required rows are already locked by a SHARE lock, demonstrating the coordination needed for concurrent operations.

The text highlights the overhead associated with row-level locking, where multiple locks are needed compared to a single table-level lock. This can lead to increased mutual exclusion overhead, potentially reducing performance benefits. In some cases, table-level locking may be more efficient due to lower overhead, despite reduced concurrency.

Deadlocks are introduced as a significant risk to data availability. A deadlock occurs when multiple sessions hold some but not all necessary locks, causing them to wait indefinitely. An example is given with two transfers attempting to lock the same accounts in different orders, resulting in a deadlock. A common solution is to enforce a sequence in lock requests, ensuring that sessions request locks in a consistent order to prevent deadlocks.

The chapter concludes by summarizing the risks to data integrity with concurrent access and the solutions to mitigate these risks. It covers the use of DBMS locking, table and row locking, and the importance of synchronization overhead considerations. Additionally, it explains the concept of deadlock and solutions to prevent it, emphasizing the importance of maintaining data availability and integrity in concurrent database operations.

Overall, the text provides a comprehensive overview of the challenges and solutions related to database concurrency, locking mechanisms, and deadlock prevention, highlighting the delicate balance between performance and data integrity.



# Summary

This text covers a range of topics related to database management, security, and SQL operations. Here is a breakdown of the key points:

## Database Views and Security

1. **Creating Views:**
   - SQL statements are provided for creating views such as `PatientNames`, `PatientsFullyVaccinated`, `PatientUnder21`, and `Patient21OrOver`.
   - Access control is emphasized, allowing specific users to access certain views, like `PatientsFullyVaccinated`.

2. **Encryption and Hashing:**
   - Differences between plaintext and ciphertext, symmetric and asymmetric encryption are explained.
   - SQL statements for encrypting and decrypting messages are included.
   - The importance of hashing, especially for password security, is discussed, highlighting SHA2 hash length and the risks of storing passwords in plaintext.

3. **Stored Functions:**
   - Definitions for functions like `NumUnvaccinated` and `Num21OrOver` are given.
   - Differences between stored functions and procedures are outlined.

## Database Transactions

1. **Importance of Transactions:**
   - Transactions ensure data integrity, with explanations on `COMMIT` and `ROLLBACK` operations.
   - The necessity of disabling automatic commits before using transactions is noted.

2. **SQL Operations:**
   - Examples of SQL statements for valid and invalid data transfers with `COMMIT` and `ROLLBACK` are provided.
   - The creation of an `ExamGrades` table with constraints is illustrated.

3. **User Permissions:**
   - SQL commands for granting various levels of access to users in an Ecommerce database are detailed.

## Data Integrity and Security

1. **Locking Mechanisms:**
   - The text explains table and row-level locking, and scenarios where each is efficient.
   - It describes READ and WRITE locks, and the implications of concurrent access on data integrity.

2. **Backup and Recovery:**
   - Techniques for database backup and recovery, including locking for backups, are discussed.

3. **Concurrency Issues:**
   - The challenges of concurrent data access are highlighted, with examples of potential data integrity issues.

## Advanced Database Concepts

1. **Normalization:**
   - Concepts like BCNF normalization, functional dependency, and surrogate keys are explained.

2. **Security Measures:**
   - Database security concepts, including confidentiality, integrity, and availability, are covered.
   - The text discusses the use of roles, privileges, and security protocols like TLS.

3. **Stored Routines:**
   - The use of stored routines in enhancing security and functionality within databases is explored.

## Summary of Key Concepts

- **Database Security:** Ensures data protection through encryption, hashing, and access control.
- **Transactions and Integrity:** Maintain consistent and reliable data through proper transaction management.
- **Concurrency and Locking:** Manage data access to prevent integrity issues and improve performance.
- **Normalization and Design:** Optimize database structure for efficiency and consistency.

This comprehensive overview covers essential aspects of database management, emphasizing security, data integrity, and efficient operations.
