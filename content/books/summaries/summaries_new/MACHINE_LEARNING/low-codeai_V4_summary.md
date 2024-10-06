
**Low-Code AI: A Practical Project-Driven Introduction to Machine Learning** by Gwendolyn Stripling and Michael Abel is a comprehensive guide aimed at making machine learning (ML) accessible through low-code and no-code solutions. The book emphasizes a data-first approach and is designed for business analysts, data analysts, and aspiring citizen data scientists who wish to integrate ML into their work without extensive coding experience.

The book covers three main methodologies for implementing ML: AutoML for no-code solutions, BigQuery ML for low-code solutions, and custom code using Python libraries like scikit-learn and Keras. Each approach is explored through real-world datasets and practical use cases, such as retail pricing, healthcare diagnostics, financial fraud detection, energy production, and telecommunications customer churn prediction.

Key concepts include:

- **Data Processing**: Understanding the distinctions between structured, unstructured, and semistructured data, and the challenges they present. The book guides readers through data preprocessing, analysis, and transformation, essential steps before feeding data into ML models.

- **ML Model Types**: The text differentiates between regression and classification models, providing insights into model selection, training, evaluation, and deployment. It also covers the use of AutoML for automated model training and evaluation.

- **Tools and Frameworks**: The book introduces various tools such as GitHub for data management, Google Colab for ML projects, and BigQuery ML for SQL-based model training. It also discusses the use of Jupyter Notebooks for interactive data analysis.

- **Practical Applications**: Readers learn to apply ML in specific business contexts, with step-by-step instructions for building models, evaluating their performance, and deploying them in production environments. The book includes projects like predicting advertising media channel sales and detecting fraudulent transactions using AutoML.

- **Advanced Topics**: The book touches on neural networks, explainable AI, and ML operations (MLOps), providing a foundation for further exploration into these areas.

The authors, both experts in ML and AI at Google Cloud, emphasize the democratization of ML tools, enabling individuals with varying levels of expertise to leverage ML for data-driven decision-making. The book is praised for its balance of practical solutions and in-depth explanations, making it a valuable resource for those looking to start their journey in AI and ML.

Overall, "Low-Code AI" serves as a practical introduction to ML, providing readers with the knowledge and tools needed to build and deploy ML models effectively, even with minimal coding experience.



This book serves as an introductory guide for aspiring machine learning (ML) practitioners, focusing on practical applications rather than in-depth theoretical knowledge. It emphasizes structured data use cases, which are prevalent in business and industry, while providing a brief overview of unstructured data applications, such as AI-powered chatbots and image generation.

Key tools and technologies covered include Python packages like NumPy, Seaborn, Pandas, scikit-learn, and TensorFlow, and the use of Jupyter Notebooks, specifically via Google Colab. The book also explores Google Cloud tools such as Vertex AI AutoML and BigQuery for no-code ML model training and SQL data analysis. Readers are encouraged to explore similar services offered by other cloud providers like Microsoft Azure and AWS.

The book employs specific typographical conventions to enhance clarity: italics for new terms and URLs, constant width for program elements, and bold for commands. Code examples are available for download, and users are permitted to use them in their programs without needing permission, as long as they do not reproduce significant portions for commercial purposes.

A crucial aspect of the book is its focus on data's role in decision-making within ML workflows. It outlines the importance of defining a business problem before data collection, emphasizing that understanding the problem guides the data gathering process. Examples of business goals include increasing patient engagement, reducing customer churn, and improving customer retention.

The ML workflow is presented as a series of steps, starting with defining the business objective, followed by data collection and preprocessing. Data collection has evolved from relying on local servers to utilizing cloud storage for cost efficiency and scalability. Cloud storage allows for easy data collection and supports both structured and unstructured data. GitHub is suggested for storing data files, especially for collaborative projects, though it has file size limitations.

Data preprocessing involves cleaning data by addressing missing values, duplicates, and formatting issues. This step is essential for preparing data for ML model training.

Overall, the book aims to equip readers with the foundational skills to start working on ML projects, providing references for those interested in deeper exploration. It acknowledges the contributions of various individuals and teams who supported the book's development and offers contact information for further inquiries.




In the realm of machine learning (ML), data preprocessing is crucial for handling inconsistencies and assumptions, such as the assumption of normal distribution. Real-world data often contains outliers, which can skew predictions. Normalization, such as min-max scaling, can help standardize data but may be detrimental if outliers are present. Exploratory Data Analysis (EDA) is essential for identifying trends and correlations, leading to feature selection and engineering, where new features are created from existing data to improve model accuracy.

Data transformation and feature selection are key steps in the ML workflow. Feature engineering involves creating new features, while feature selection identifies the most relevant ones for the ML model. This process is followed by model selection, where AutoML can automate the choice, training, and evaluation of models, handling about 80% of ML problems. However, a deeper understanding of ML algorithms is beneficial for customized solutions.

Model training, evaluation, and tuning are critical for ensuring the model's performance aligns with business goals. This involves splitting data into training, validation, and testing datasets to measure and improve model accuracy and prevent overfitting. Testing the model with unseen data assesses its generalization capabilities.

Deployment involves integrating the trained model into a production environment, often via an API, for real-time or batch processing. Post-deployment, models require ongoing monitoring to address data drift and staleness, ensuring continued alignment with business objectives.

The ML workflow consists of decision-making, data processing, modeling, and deployment phases. AutoML and low-code solutions facilitate these processes, offering quick prototyping and production capabilities. The book emphasizes a project-based approach to ML, using real-world datasets across various sectors like healthcare, retail, and finance, to teach data preprocessing, EDA, and model training.

For instance, use cases include product pricing in retail, heart disease analysis in healthcare, energy consumption in utilities, media channel sales prediction in insurance, and fraud detection in finance. Each project utilizes different coding levels, from no-code AutoML to low-code solutions, providing flexibility based on the user's expertise.

Overall, ML workflows are data-driven, requiring careful decision-making and implementation to solve real-world problems. The book provides practical insights into data collection, preprocessing, and model deployment, with hands-on exercises using Python and Jupyter Notebooks to reinforce learning and application.



The text outlines various machine learning (ML) projects across different industries, focusing on fraud detection, energy prediction, customer churn prediction, and automotive pricing. For fraud detection in mobile payments, AutoML is used due to the lack of programming expertise. The dataset simulates user behavior and fraud instances. In energy prediction, the goal is to forecast hourly electrical output of a power plant using weather data, employing Google’s BigQuery ML. The data lacks timestamp details, preventing time-series analysis.

In telecommunications, predicting customer churn involves using scikit-learn and Keras for more control over the model. The dataset includes both numeric and categorical variables. For automotive pricing, improving a linear regression model from scikit-learn to predict auction prices of used cars involves exploring tools like Keras and BigQuery ML. Datasets provided are cleaned and in CSV format.

The text also explains data types: quantitative data is numeric and measurable, while qualitative data is descriptive and non-numeric. Structured data is well-organized in defined models, unstructured data lacks specific formatting, and semistructured data combines elements of both, often using tags or markers. Examples include customer records (structured), social media posts (unstructured), and CSV files (semistructured).

Data file types range from text (.txt, .csv) and spreadsheets (.xls, .xlsx) to images (.jpg, .png), audio (.mp3, .wav), and video (.mp4, .avi). Data processing modes include batch processing (intermittent) and real-time processing (continuous), with streaming data processed as received. GitHub and Google Colab are recommended for project collaboration. GitHub serves as a repository for storing code and data, offering features like version control and pull requests. Google Colab provides a browser-based environment for running Python code, facilitating easy access and collaboration without installation.

Colab is particularly useful for low-code AI projects, offering a Jupyter Notebook interface integrated with Google Drive. Users can import libraries like Pandas for data analysis and share notebooks for collaborative work. This setup simplifies the learning and execution of Python-based ML projects, making it accessible to users with varying levels of expertise.



In data analysis with Python, the Pandas library is often imported with the alias `pd` for convenience. This text guides users through importing a dataset titled "Heart Disease Mortality Data Among US Adults" using Google Colab. The dataset can be imported directly from a URL into a Pandas DataFrame, a two-dimensional data structure similar to a spreadsheet. The `head()` function is used to display the first five rows, providing an initial look at the data.

To understand the dataset's structure, the `info()` method reveals details like the number of columns, data types, and memory usage. The dataset comprises 15 qualitative string columns and 4 quantitative numeric columns. Data validation is crucial; downloading the CSV file to compare with the URL-imported data ensures consistency. Uploading files to Colab is temporary, and files must be renamed and paths copied for accurate referencing in code.

The text highlights data quality issues such as missing values and incorrect data types. Missing values can be addressed through deletion or imputation techniques like mean, median, mode, or regression imputation. The Year column is incorrectly typed as an integer and should be categorical, requiring transformation for machine learning (ML) use. Categorical data, like string objects, need encoding, such as one-hot encoding, for ML models.

Exploratory data analysis (EDA) is demonstrated using Seaborn's violin plot to visualize the distribution of the `Stratification2` feature. Violin plots offer a view of data distribution and density, unlike box plots that show only summary statistics. The `Data_Value` feature represents heart disease counts by region and group.

The text also touches on saving work in Colab to GitHub, emphasizing the importance of version control and collaborative work. In subsequent chapters, readers will delve into machine learning frameworks, including AutoML, which allows building and training models without extensive coding. AutoML frameworks like Google’s Vertex AI streamline tasks such as feature selection and model deployment.

For a practical use case, a business analyst without coding experience can use AutoML to predict energy consumption based on variables like zip code and customer class. AutoML frameworks, such as Google AutoML, Microsoft Azure AutoML, and AWS SageMaker AutoML, provide no-code solutions with graphical interfaces. These frameworks automatically handle data cleaning and transformation, such as changing numeric zip codes to categorical features.

Training models in AutoML involves selecting parameters and understanding the data profile, which highlights common features like frequently occurring zip codes. This information can be leveraged for targeted marketing campaigns. Overall, AutoML simplifies the ML workflow, making it accessible to users with varying levels of coding expertise.



AutoML (Automated Machine Learning) simplifies the machine learning workflow by automating complex tasks such as data preprocessing, feature engineering, model training, and hyperparameter tuning. It allows users to build ML models without coding, making it accessible to non-experts. AutoML is particularly beneficial for businesses in telecom, manufacturing, retail, and healthcare, improving operations like customer churn prediction, product quality optimization, and personalized treatment plans.

### Key Features of AutoML

- **No-Code Implementation**: AutoML platforms like Google’s Vertex AI, Microsoft’s Azure ML Studio, and Amazon’s SageMaker allow users to select datasets and training parameters without needing to code. This reduces the complexity involved in setting up environments, installing libraries, or understanding ML algorithms and neural networks.

- **Automated Feature Engineering**: AutoML handles tasks such as one-hot encoding for categorical variables and selecting target features, which are crucial for preparing data for model training.

- **Model Training and Evaluation**: AutoML optimizes model weights and architecture, presenting results with metrics like root mean squared error (RMSE). It also provides model feature attribution using methods like Shapley values to understand feature impact.

- **Machine Learning as a Service (MLaaS)**: Cloud providers offer MLaaS platforms that include infrastructure (IaaS), platforms (PaaS), and software (SaaS) layers. These platforms support the entire ML workflow, from data extraction and visualization to model deployment and monitoring.

### Benefits of AutoML

- **Improved Accuracy**: AutoML experiments with a wide range of algorithms and hyperparameters, often achieving higher accuracy than manual efforts.
  
- **Democratized ML**: By providing a user-friendly interface, AutoML enables non-experts to build and deploy models, making ML more accessible.

- **Reduced Time to Market**: Automating data cleaning, feature engineering, and model training accelerates the deployment of ML models.

- **Reduced Risk**: AutoML helps mitigate biases and inaccuracies through automated model validation and testing.

### Low-Code ML Frameworks

Low-code frameworks require some knowledge of Python or SQL and provide an abstraction layer over existing ML frameworks. Examples include:

- **Google BigQuery ML**: Allows building models within the data warehouse using SQL, reducing data latency.
  
- **Amazon Aurora and Redshift ML**: Integrates with Amazon SageMaker for ML predictions using SQL commands.

- **Open Source Libraries**: Frameworks like AutoKeras, Auto-sklearn, and Auto-PyTorch offer additional abstraction layers over libraries like Keras and scikit-learn, enabling model building with minimal coding.

These frameworks support typical use cases like fraud detection and product recommendations by leveraging existing SQL skills for ML projects.

### Conclusion

AutoML and low-code frameworks significantly lower the barrier to entry for machine learning, enabling faster and more accurate model development across various industries. As technology advances, expect broader applications and increased adoption of these tools. 



Auto-PyTorch, developed by the Freiburg-Hannover AutoML group, is a framework focused on deep learning and rapid prototyping, supporting distributed training. AutoML frameworks streamline the development process for business analysts, data analysts, data scientists, software developers, and ML engineers by automating model experimentation and optimization. Users load a dataset with a target variable and input features, generate data profiles, and select parameters for training. AutoML experiments with multiple models, optimizing them and presenting results with feature attribution.

Cloud vendors offer MLaaS to automate ML workflows, integrate models into applications, and deploy them into production. Low-code AutoML requires library configuration and basic SQL or Python knowledge, while open-source frameworks like AutoKeras, Auto-sklearn, and Auto-PyTorch add abstraction layers over existing libraries.

In a practical example, a media planner at a solar energy company uses AutoML to predict sales based on advertising budgets across digital, TV, radio, and newspaper channels. This regression problem involves understanding the impact of advertising budgets on sales to optimize spending. The planner, with no coding experience, uses AutoML to build a predictive model, addressing business questions about sales volume prediction, advertising budget relationships, and media channel contributions to sales.

The project workflow involves data extraction, analysis, and uploading to the AutoML platform. The advertising dataset, sourced from "An Introduction to Statistical Learning," includes updated digital variables and expanded market data, comprising 1,200 markets and advertising budgets for four media channels.

Data exploration using Pandas, Matplotlib, and Seaborn involves loading data into a DataFrame, performing descriptive analysis, and exploratory data analysis (EDA). The dataset, free of missing values, is analyzed for data types, summary statistics, and null values. Heat maps and scatterplots reveal correlations and relationships between variables, with TV showing a strong correlation with sales (0.78), followed by radio (0.58), while newspaper has a weaker correlation (0.23).

Scatterplots illustrate relationships between features and sales, with TV showing a strong linear relationship with sales. Histograms depict the distribution of sales and other features, revealing that sales have a slightly left-skewed distribution, while other features like digital, TV, radio, and newspaper show varied distributions. Standardizing these features could enhance model performance.

Overall, the chapter provides insights into using AutoML for predictive modeling in marketing, emphasizing data exploration and the importance of understanding relationships between advertising budgets and sales outcomes.



The text outlines a process for using AutoML to predict advertising media channel sales, focusing on Google’s Vertex AI platform. It begins by detailing how to prepare and export a dataset for AutoML processing. The dataset is saved as a CSV file and verified before being uploaded into the AutoML framework.

Using Vertex AI, the text describes creating a managed dataset, selecting a model objective (regression/classification), and setting up a linear regression model. Regression is explained as a supervised machine learning process for predicting continuous values, with linear regression specifically modeling the relationship between a target variable and predictive features.

Key steps in the AutoML workflow include enabling APIs, creating datasets, and selecting data sources. The process involves uploading the dataset, storing it in a cloud storage bucket, and generating data statistics to ensure data quality. The AutoML framework can automatically handle data transformations and cleaning tasks.

The training process involves configuring model details, selecting a target column, and setting compute and pricing options. Early stopping is discussed as a method to end training once no further improvements are detected. Training time is influenced by data size and complexity, and AutoML’s computational expense is noted due to the numerous models and hyperparameters it evaluates.

Evaluation metrics for the model include R-squared, adjusted R-squared, mean squared error (MSE), root mean squared error (RMSE), and mean absolute error (MAE). These metrics help assess the model's fit and accuracy. The text explains the importance of understanding the purpose of the model, data characteristics, and practitioner preferences when selecting evaluation metrics.

Model feature importance is analyzed to determine the impact of each feature on model training. The text highlights that radio, digital, and TV advertising significantly contribute to sales predictions, whereas newspaper advertising has minimal effect.

Finally, the text describes deploying the trained model for inference, which involves defining endpoints and configuring model settings. This enables the model to make predictions on new data, although model monitoring and objectives are optional and can incur additional charges.

Overall, the process emphasizes the ease and efficiency of using AutoML for building predictive models, while highlighting the importance of data preparation, model evaluation, and deployment considerations.



In machine learning (ML), an endpoint is a service exposing a model for online prediction, typically accessed via an HTTPS path. Deployment involves making a model available as an endpoint, allowing real-time predictions, such as assessing ad click likelihood or loan default risks. Deployment extends model availability to broader audiences, like customers or employees, through environments like production.

Deploying a model involves several steps: defining the endpoint, adding the model, and configuring traffic splits. Traffic splits in Vertex AI allow distribution between multiple models at a single endpoint, facilitating A/B testing, canary deployments, and gradual rollouts. Compute resources for serving predictions must be chosen based on model size, prediction volume, latency requirements, and cost. Options include CPUs, GPUs, and TPUs, each varying in power and cost.

Logging and explainability settings are configurable, with some incurring additional charges. After deployment, predictions can be tested through a model registry. The prediction interval, a key concept in regression analysis, estimates a range for future observations, accounting for individual prediction uncertainty. This interval helps in decision-making, like budget allocations for media channels.

In a practical project, an AutoML model was used to predict advertising media channel sales. Data exploration involved tools like Pandas, Matplotlib, and Seaborn, leading to model training and deployment on Google’s Vertex AI. The model demonstrated a positive relationship between advertising spend and sales, with TV contributing most to sales. The model's predictions, including intervals, guide future business decisions.

For fraud detection, a similar AutoML process was used to classify financial transactions as fraudulent or legitimate. The dataset, simulated via PaySim, mirrors real-world transaction distributions. The workflow involves data extraction, analysis, AutoML model creation, evaluation, and deployment. The goal is to enhance fraud detection, despite dataset imbalance challenges, by leveraging classification models and metrics.

The dataset features transaction data with attributes like transaction type, amount, and balances, with fraud indicators. Data exploration in Google Colab with Pandas, Matplotlib, and Seaborn helps understand feature significance for model input. The process of loading data into a Pandas DataFrame is essential for analysis, providing insights into feature distributions and aiding in model feature selection.

Overall, these processes illustrate the deployment and application of ML models for both sales prediction and fraud detection, highlighting the importance of endpoints, compute resource selection, and data exploration in achieving accurate and effective predictions.



The text discusses using AutoML to detect fraudulent transactions, focusing on data exploration and feature analysis. The dataset contains 6,362,620 transaction records with 11 columns, including transaction type, amount, and fraud indicators. A key observation is the imbalance in the dataset, with only 0.129% of transactions being fraudulent, posing challenges for classification models.

Initial data exploration reveals patterns, such as zero balances for PAYMENT and TRANSFER types, and potential redundancy in the `isFlaggedFraud` column, which represents predictions from a previous model. This column should not be used for training new models as it may not be available at prediction time. Instead, it serves as a benchmark for evaluating new models.

Descriptive analysis using Pandas shows no null values, with a wide range in transaction amounts and balances. The `isFraud` column indicates a highly unbalanced dataset, which could affect model performance. The `isFlaggedFraud` column flags more transactions as fraudulent than actually are, which might be acceptable if it helps catch genuine fraud.

The text emphasizes the importance of understanding data before using AutoML, as data quality directly impacts model performance. Descriptive statistics for categorical features, such as `type`, `nameOrig`, and `nameDest`, reveal that `nameOrig` is nearly unique for each transaction, which could hinder model learning.

Exploratory analysis involves creating new features and visualizations. A new column, `isCorrect`, measures the accuracy of the previous model, showing it correctly flagged 99.87% of transactions but only identified 0.19% of fraudulent ones, highlighting poor recall.

Visualization techniques, such as bar charts and scatter plots, help identify patterns. For instance, only CASH_OUT and TRANSFER types have fraudulent transactions, suggesting these features are significant for model training. Bucketization of numeric features like transaction amounts reveals that higher amounts correlate with higher fraud likelihood.

Further exploration includes scatter plots for CASH_OUT transactions, showing regions with higher fraud likelihood. This analysis highlights the need for continuous monitoring and retraining of models to adapt to new fraud patterns.

Overall, the text underscores the importance of thorough data exploration and feature engineering in building effective fraud detection models using AutoML. It also highlights the limitations of relying solely on accuracy metrics and the necessity of considering recall and other evaluation metrics.



In fraud detection, feature crossing is a technique used to create synthetic features by combining existing categorical features, which can reveal relationships between variables. After exploring data, it's crucial to export it in formats usable by tools like Vertex AI AutoML. This involves converting data into CSV files and ensuring the data integrity post-export.

Classification models predict categorical outcomes and are evaluated using metrics such as accuracy, recall, and precision. Accuracy alone can be misleading, especially in unbalanced datasets like fraud detection, where fraudulent transactions are rare. Recall measures the percentage of actual fraud cases correctly identified, while precision indicates the percentage of predicted fraud cases that are accurate. Balancing precision and recall depends on business priorities, often requiring trade-offs.

The F1-score, the harmonic mean of precision and recall, helps balance these metrics. It emphasizes not sacrificing one metric for the other. Metrics like ROC AUC and PR AUC evaluate model performance independent of thresholds. ROC AUC measures the probability that a model ranks a positive instance higher than a negative one, while PR AUC focuses on precision and recall, making it suitable for unbalanced datasets.

Using AutoML involves creating a managed dataset in Vertex AI, selecting the model objective, and training the model. The process includes specifying data sources, generating dataset statistics, and ensuring data types align with expectations. Training involves selecting features, setting training budgets, and utilizing early stopping to optimize resource use.

After training, model evaluation in Vertex AI Model Registry involves analyzing metrics like precision and recall for different confidence thresholds. Adjusting thresholds helps balance false positives and negatives based on business needs. This comprehensive approach ensures effective fraud detection while managing resource costs. 



In fraud detection models, setting the appropriate confidence threshold is crucial for balancing precision and recall. For instance, a threshold of 0.06 corresponds to 50% precision and 95.2% recall, meaning only 1 in 20 fraudulent transactions might be missed. The optimal threshold varies based on business needs. Feature importances, such as oldbalanceOrg and newbalanceOrig, help understand model predictions and identify potential anomalies. If unexpected patterns arise, it may indicate the need for further data exploration.

Deploying a model involves defining an endpoint, selecting machine types, enabling feature attributions, and deciding on model monitoring. Once deployed, testing with specific transaction values can reveal predicted fraud probabilities and feature importances. For example, a CASH_OUT transaction with a $1,000,000 balance might show a 91% fraud probability, highlighting oldbalanceOrg as a significant feature. It's essential to undeploy models when not in use to avoid unnecessary costs.

In BigQuery ML, you can load datasets and explore them using SQL. For a power plant dataset, it's important to check for null values using SQL functions like `IF` and `SUM`. If nulls are present, you might choose to omit rows or use imputation strategies. The dataset for a combined cycle power plant (CCPP) includes variables like temperature, pressure, humidity, and energy production. Understanding these variables is key to building accurate ML models.

BigQuery allows for efficient data management without server provisioning. It offers a free tier for certain activities, making it accessible for initial explorations. Loading data into BigQuery involves creating a dataset, specifying data sources, and defining schema settings. Once data is loaded, you can use SQL to clean and explore it, ensuring quality before model training. This process is crucial as the quality of data directly impacts model performance.

Overall, understanding feature importances, setting appropriate thresholds, and ensuring data quality are fundamental for effective machine learning model deployment and evaluation.



To ensure data integrity in the dataset, it's crucial to verify that all values fall within expected ranges using SQL aggregate functions like `MIN` and `MAX`. These functions can quickly identify the minimum and maximum values within a column, helping detect anomalies such as magic numbers or default values, which may indicate missing or incorrect data. For instance, a minimum ambient pressure of 0.0 or energy production of -1.0 are suspicious and likely placeholders for missing data.

Cleaning the dataset involves filtering out these unrealistic values using SQL queries in BigQuery. You can save the cleaned data using a Data Definition Language (DDL) statement with the `CREATE TABLE` syntax to create a new table. This helps preserve the cleaned dataset for future use, such as training a machine learning model. The `BETWEEN` operator can simplify filtering queries by specifying acceptable value ranges.

After cleaning, the dataset can be reduced, as seen with the `ccpp_cleaned` table having fewer rows than the original `ccpp_raw` table. This reduction is minimal but necessary to improve model accuracy by removing outliers.

Once the data is clean, the next step is to select features for training a model. In this case, a linear regression model is used to predict energy production based on variables like temperature, ambient pressure, relative humidity, and exhaust vacuum pressure. Linear regression seeks to find the best-fit line through the data by minimizing the root mean squared error (RMSE).

Feature selection is guided by criteria such as relevance to the problem, availability at prediction time, and numeric nature. These criteria ensure that the selected features are appropriate for the model type and objective. Numeric features are essential since machine learning models are mathematical functions that require numeric inputs.

To determine the best weights for a linear regression model, two common approaches are used: the normal equation and gradient descent. The normal equation provides an exact solution but can be computationally intensive with large datasets. Gradient descent, on the other hand, is a more flexible approach that most machine learning frameworks support.

Feature selection also involves understanding the relationship between features and the target variable, which can be assessed using statistical methods like correlation or through domain expertise. Leveraging domain knowledge can guide the selection of meaningful features, enhancing the model's performance.

In conclusion, cleaning the dataset, selecting appropriate features, and choosing a suitable model are critical steps in building an effective machine learning solution. These processes ensure that the model is trained on accurate and relevant data, leading to more reliable predictions.



Feature engineering is crucial for enhancing model performance, often surpassing improvements gained from data quality and quantity. In linear models, Pearson correlation is a key tool to assess the linear relationship between features. The coefficient ranges from -1 to 1, indicating the strength and direction of the relationship. For instance, a coefficient of 0.844 between Temp and Exhaust_Vacuum suggests a moderate to strong positive correlation, reflecting physical phenomena like pressure increase with temperature.

To efficiently compute correlations, BigQuery's CORR function can be utilized, though it becomes cumbersome with many columns. Google Colab offers an alternative by visualizing correlation matrices and performing exploratory data analysis (EDA) using Python. Data from BigQuery can be loaded into Colab, enabling visualization through libraries like Matplotlib and Seaborn. This approach allows for examining feature correlations and visualizing relationships with the target variable, Energy_Production.

Understanding feature relationships is vital, especially when dealing with multicollinearity, where predictors are highly correlated, complicating the determination of individual variable impacts. Visualizations, such as scatterplots, help identify strong, moderate, or weak correlations with the target, guiding feature selection decisions.

BigQuery ML facilitates model creation with the `CREATE MODEL` statement. This process involves specifying model type and label columns, followed by training and evaluation. Evaluation metrics, accessible via the Evaluation tab or ML.EVALUATE function, provide insights into model performance. Explained variance, a key metric, assesses how much of the label's variance the model captures.

For predictions, BigQuery ML's ML.PREDICT function serves predictions efficiently. It supports both single predictions and batch processing, making it versatile for various use cases. This function requires data available to BigQuery and allows for integrating predictions into result tables.

Explainable AI (XAI) is gaining traction, aiming to elucidate model behavior in understandable terms. This understanding aids in improving model performance, identifying issues, and ensuring compliance with ethical standards. XAI is particularly relevant with complex models, offering insights into model decisions and potential biases.

In summary, effective feature engineering, correlation analysis, and leveraging tools like BigQuery ML and Google Colab are essential for building robust linear regression models. Understanding feature relationships and employing explainable AI techniques further enhance model transparency and reliability.



In BigQuery ML, Explainable AI (XAI) is crucial for understanding model predictions, categorized into local and global explanations. Local explanations address specific instances, answering "Why did my model give this prediction for this example?" Global explanations evaluate the model's behavior across a dataset, identifying features that significantly influence predictions. Post hoc methods, used after model training, compute these explanations. While some models like linear regression are intrinsically explainable, complex models such as deep neural networks require post hoc methods for interpretability.

BigQuery ML leverages Google Cloud’s Explainable AI service to provide feature attributions, highlighting important input features for overall model performance and specific predictions. To enable global explanations, modify the CREATE MODEL query by adding `enable_global_explain=TRUE`. This allows aggregation of feature attributions over the dataset, indicating feature influence on model predictions. Local explanations can be computed without global enablement, using the ML.EXPLAIN_PREDICT function to obtain feature attributions for specific predictions.

For implementation, modify the CREATE MODEL statement to include `enable_global_explain=TRUE`, and use the ML.GLOBAL_EXPLAIN function to retrieve global feature attributions. This function aggregates the mean absolute attribution for each feature across the evaluation dataset. For local explanations, replace ML.PREDICT with ML.EXPLAIN_PREDICT, specifying `STRUCT(3 AS top_k_features)` to limit output to the top three features. This provides a detailed breakdown of feature contributions to a specific prediction, using Shapley values to compute attributions.

Neural networks in BigQuery ML are introduced as another model type, popular for their flexibility and transfer learning capabilities. Neural networks, like linear regression, are mathematical functions but can model more complex relationships through hidden layers and nonlinear activation functions. Activation functions, such as ReLU, introduce nonlinearity, allowing neural networks to capture intricate patterns beyond linear models.

To train a neural network in BigQuery ML, use the `dnn_regressor` model type and specify hidden units to define the network's architecture. This process involves exporting data to Vertex AI for training, which is more complex and time-consuming than linear regression due to the model's intricacy.

In summary, BigQuery ML provides robust tools for model explainability and neural network training, enabling users to understand and optimize model performance effectively. By utilizing global and local explanations, practitioners can gain insights into feature importance and model behavior, while neural networks offer advanced capabilities for capturing nonlinear relationships in data.



In the context of deep neural networks for regression models, the term "deep" refers to the presence of multiple hidden layers. The configuration of these layers is specified using the `hidden_units` argument, which expects an array of integers representing the number of neurons in each layer. For example, `[32,16,8]` indicates a neural network with three hidden layers containing 32, 16, and 8 neurons respectively. Visualization of such a network can be complex, but the structure is crucial for understanding model architecture.

When evaluating neural networks, the mean squared error (MSE) and root mean squared error (RMSE) are key metrics. A neural network model may perform worse than a linear regression model if it overfits, capturing noise rather than the underlying data trend. Overfitting occurs when a model is too complex, while underfitting happens when a model is too simple to capture data trends. To prevent overfitting, techniques such as altering model architecture, early stopping, and regularization are used. Hyperparameters, like the number of hidden layers and neurons, play a critical role and are set before training. Chapter 8 delves into hyperparameter optimization methods in BigQuery ML and other frameworks.

Exercises involve experimenting with neural network size to observe performance changes and using explainability functions to identify influential features. Cloud Shell in Google Cloud offers a command-line interface for interacting with Google Cloud resources, enabling tasks like previewing files in Cloud Storage without downloading them. Commands like `gcloud storage cat` allow for viewing file contents, while `wc -l` can count lines in a file, providing insights into data size.

The book discusses using SQL and Python to analyze power plant production data, building linear regression and deep neural network models in BigQuery ML. It emphasizes explainability and neural network mathematics. While the book focuses on no-code and low-code solutions, it also introduces custom code solutions in Python using scikit-learn and Keras for more flexibility. These libraries are suitable for building classification models, such as predicting customer churn using the IBM Telco Customer Churn dataset.

Customer churn prediction involves understanding customer attrition rates. The dataset includes 21 columns with various data types. Some features may require cleaning or transformation for effective model training. The choice between no-code, low-code, and custom code solutions depends on factors like expertise, dataset constraints, and desired flexibility. No-code solutions are ideal for rapid prototyping and when ML expertise is limited. Low-code solutions offer customization within specific constraints, while custom code solutions provide maximum flexibility for complex requirements.

The book aims to provide foundational knowledge of Python and ML frameworks, encouraging further exploration through resources like "Introducing Python" by Bill Lubanovic and "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow" by Aurélien Géron. Understanding and preparing data for ML involves using tools like Pandas, Matplotlib, and Seaborn for dataset exploration, following a structured workflow to ensure data readiness for model building.



The text outlines the process of preparing and training machine learning (ML) models in a Jupyter Notebook environment, specifically using Google Colab. It emphasizes the importance of data preparation over model training. The steps include loading data into a Pandas DataFrame, exploring, cleaning, and transforming the data. The example uses a customer churn dataset.

**Loading Data:**
- Open a Google Colab notebook and import necessary packages: `matplotlib`, `numpy`, `pandas`, `seaborn`, `sklearn`, and `tensorflow`.
- Use Pandas to directly import a CSV file from a URL into a DataFrame without downloading it first.

**Data Exploration and Cleaning:**
- Use `df_raw.head()` to view the first few rows of the DataFrame.
- Check data types with `df_raw.dtypes` to ensure they match expectations.
- Identify and address issues, such as the `TotalCharges` column being imported as a string due to blank values.

**Handling Missing Data:**
- Use `describe()` to get high-level statistics of columns, identifying that `TotalCharges` contains blank values.
- Create a mask to filter rows where `TotalCharges` is blank and discover these correspond to customers with `tenure` of 0, indicating they haven't been charged yet.
- Replace blank `TotalCharges` with 0.0 using `df.replace()`.

**Data Type Conversion:**
- Convert `TotalCharges` to a float using `astype()` to ensure Pandas recognizes it as numeric.

**Summary Statistics:**
- Use `df_2.describe()` to view statistics for numeric columns, identifying potential insights such as the percentage of senior citizens.
- For categorical features, use `df_2.describe(include='object')` to get counts, unique values, and frequencies.

**Observations:**
- Gender and Partner columns are balanced; most customers have phone service but not multiple lines.
- The dataset is slightly unbalanced with more 'No' than 'Yes' values in the `Churn` column.

**Exploring Feature Interactions:**
- Use `value_counts()` to examine combinations of categorical features, such as `PhoneService` and `MultipleLines`, confirming logical dependencies (e.g., no multiple lines without phone service).

The text provides a comprehensive guide to data preparation in ML, highlighting the importance of cleaning and understanding data before model training. It uses practical examples and code snippets to illustrate the process, making it accessible for those familiar with Python and ML concepts.



The analysis examines unique value combinations in the dataset, particularly focusing on features such as `PhoneService` and `MultipleLines`. It's noted that `MultipleLines` contains all information from `PhoneService`, making the latter redundant. Similar redundancy is explored among other features like `InternetService`, `OnlineSecurity`, `OnlineBackup`, `StreamingTV`, and `StreamingMovies`, where `InternetService` being "No" results in "No internet service" for others.

Techniques like the chi-square test and Cramer's V coefficient are suggested for understanding correlations between categorical features. The relationship between categorical features and the `Churn` label is explored, with a focus on the `Contract` feature. Visualizing this relationship using a stacked bar chart reveals that month-to-month contracts have a higher churn rate compared to one-year and two-year contracts.

Further analysis of categorical features shows that senior citizens have a higher churn rate, while gender, `StreamingTV`, and `StreamingMovies` don't affect churn. Larger households have lower churn rates, and multiple phone lines increase churn. Internet service type also impacts churn, with fiber optic having a higher rate. Add-ons like `OnlineSecurity` reduce churn, while `PaperlessBilling` increases it. The `PaymentMethod` feature shows that electronic checks have a higher churn rate.

For numeric features, the relationship between `tenure`, `MonthlyCharges`, and `TotalCharges` is examined. A new column, `DiffCharges`, captures the difference between current and average monthly charges. Observations indicate that a larger difference correlates with higher churn. The technique of bucketization is used to convert numeric features into categorical ones, revealing that as `MonthlyCharges` increase, so does churn.

Feature selection involves removing non-predictive or redundant features such as `gender`, `StreamingTV`, `StreamingMovies`, and `PhoneService` to avoid collinearity, which can lead to unreliable regression estimates. The `TotalCharges` feature is also removed due to its high correlation with `tenure`. The `customerID` column is dropped as it doesn't provide predictive value.

In summary, the analysis focuses on identifying redundant features, understanding correlations, and selecting relevant features for machine learning models. This involves using visualization, statistical tests, and feature transformations to enhance model training and prediction accuracy.



In preparing a dataset for machine learning, it's essential to handle categorical features by encoding them into numeric values. This is often done using one-hot encoding, especially for categorical data with multiple possible values. For binary features, encoding can be simplified to 0 and 1. In the example provided, features such as `SeniorCitizen`, `Partner`, and `Dependents` are encoded directly, while other features like `InternetService` require one-hot encoding due to having more than two categories (e.g., No, DSL, Fiber Optic).

The process involves using scikit-learn's `OneHotEncoder`. First, separate the dataset into numeric and categorical columns. The `fit_transform` method of `OneHotEncoder` is used to transform categorical features into a numeric format. This transformation is reversible, allowing the original values to be retrieved using `inverse_transform`.

After encoding, combine the numeric and one-hot encoded categorical features into a single dataset using NumPy's `concatenate` function. This prepares the data for model training by ensuring all features are numeric.

Splitting the dataset into training and test sets is crucial for evaluating the model's performance. This is done using `train_test_split` from scikit-learn, specifying the test size and ensuring reproducibility with a `random_state`.

Logistic regression is a common model for binary classification tasks. It predicts the probability of membership in one of two classes. The model uses a logistic function to map predicted values to probabilities, which are then interpreted for classification. The cross-entropy loss function is used for training, measuring the difference between predicted and actual distributions.

Training a logistic regression model in scikit-learn involves creating a model instance and fitting it to the training data. During training, convergence issues may arise if feature ranges vary significantly. This can be addressed by normalizing features using `MinMaxScaler`, which scales values to a standard range, improving the efficiency of gradient descent during training.

Once trained, a model's performance is evaluated using the `score` method, which calculates the mean accuracy on the test dataset. This provides a straightforward measure of how well the model generalizes to unseen data.

Overall, the process involves careful preparation of the dataset, encoding categorical variables, splitting data, training the model, and evaluating its performance, ensuring each step is optimized for accuracy and efficiency.



The text discusses issues related to training and evaluating machine learning models, specifically focusing on the importance of consistent data preprocessing. Initially, a model trained with features scaled between 0 and 1 was tested without scaling the test dataset, leading to poor performance (48% accuracy). Correctly scaling the test data improved accuracy to 80%, highlighting the issue of training-serving skew. This underscores the necessity of applying identical transformations at both training and evaluation stages.

Accuracy, while commonly used, can be misleading. For instance, a model predicting no customer churn achieves 73.5% accuracy but lacks business value. Metrics like recall and precision provide a clearer performance picture. Recall measures the true positive rate, crucial for identifying potential churners, while precision indicates the proportion of correctly predicted churners. Balancing these metrics is vital, as contacting non-churners incurs costs.

The confusion matrix helps compute precision and recall. For the given model, precision was 65.6%, and recall was 50.3%, demonstrating its ability to identify churners better than a model predicting no churn.

When serving predictions, training-serving skew can occur if the prediction data format differs from the training data. Consistent preprocessing is crucial, and tools like `json.loads()` can parse incoming JSON data for prediction. The text provides a code example to transform and predict churn for a customer, emphasizing using the same preprocessing steps as during training.

To streamline preprocessing, scikit-learn's `Pipeline` can be used. It sequences transformers and models, ensuring consistent transformations. The `FunctionTransformer` allows incorporating custom functions into the pipeline, handling transformations not directly supported by scikit-learn. The `ColumnTransformer` applies different transformations to categorical and numeric data, facilitating one-hot encoding and scaling.

A pipeline simplifies model deployment, ensuring all transformations are applied consistently before prediction. It enhances code clarity and portability, allowing the entire preprocessing and prediction process to be encapsulated in a single object. This approach prevents training-serving skew and ensures accurate, reliable predictions across different environments.



In machine learning, pipelines can be exported using libraries like pickle or joblib after running the fit method. This includes both the trained model and fit transformers, ensuring consistency when serving predictions. An exercise involves rewriting model code to use a pipeline, training the model, and evaluating its accuracy, precision, and recall.

Keras, part of TensorFlow, simplifies building neural networks. Neural networks consist of layers with neurons and activation functions. For classification, the sigmoid function converts outputs into probabilities. TensorFlow, introduced in 2015, uses tensors and computation graphs for optimized computation across devices. TensorFlow 2.0 made Keras its high-level interface, facilitating neural network creation with minimal code.

To train a neural network classifier with Keras, data prepared using scikit-learn and Pandas can be quickly utilized. The Dataset API in TensorFlow is used for creating data pipelines, allowing data to stream in batches, which can be distributed across machines. This is advantageous for large datasets. The `from_tensor_slices` method helps create Dataset objects from NumPy arrays, treating each row as an example.

The `keras.Sequential` API constructs models by listing desired layers. Dense layers connect neurons fully between layers, forming weighted sums. Layers are defined with arguments like units (neurons), input_shape (shape of incoming examples), and activation functions (ReLU for hidden layers, sigmoid for output in binary classification). The model is compiled with loss functions like `BinaryCrossentropy` and metrics such as accuracy, precision, and recall. The Adam optimizer is a default choice for training.

Training involves using the `fit()` method, specifying datasets and epochs. Epochs represent full passes through the dataset. Monitoring training and evaluation metrics helps determine when training has converged or overfitting occurs. Callbacks like `EarlyStopping` can halt training if performance stalls, restoring the best weights.

After training, models can be evaluated using `model.evaluate()`, producing metrics like loss, accuracy, precision, and recall. If performance is suboptimal, further tuning and feature engineering may be needed.

For large datasets, Vertex AI allows custom model training in a containerized environment. Prebuilt containers are available for frameworks like TensorFlow and scikit-learn. Steps for using Vertex AI include ensuring dataset availability in Google Cloud, gathering Python code, updating it to save results in Cloud Storage, and creating a source code distribution.



In this text, the process of building and training a custom ML model using Vertex AI is outlined, including data preparation, model training, and packaging for deployment. The workflow begins by organizing the Python code into a package structure using Colab's `%%writefile` magic command to create necessary files, such as `trainer.py`, `__init__.py`, and `setup.py`. The `setup.py` file uses `setuptools` to define package metadata and dependencies, ensuring proper installation during training.

A key aspect is saving the trained model to Google Cloud Storage using `joblib.dump()` for persistence beyond the temporary resources allocated by Vertex AI. The storage path is specified using the format `'gcs/<YOUR-BUCKET-NAME>/sklearn_model/'`.

The next steps involve packaging the Python code into a source distribution using `!python ./setup.py sdist --formats=gztar`, which creates a compressed tar.gz file. This package is then uploaded to Google Cloud Storage using the `gcloud storage cp` command after authenticating Colab with Google Cloud.

Training the model on Vertex AI requires navigating to the Google Cloud Console, selecting Vertex AI, and configuring a new training job. The configuration includes selecting a pre-built container for the scikit-learn framework, specifying the package location, and choosing appropriate compute resources.

Once the job is submitted, the training pipeline runs, and the logs can be accessed to review performance metrics. This process, while potentially overkill for small datasets, is advantageous for larger datasets due to scalable resources.

The text also briefly touches on improving model performance through feature engineering and hyperparameter tuning using scikit-learn, Keras, and BigQuery ML. It emphasizes the importance of not relying solely on available features like the Manheim Market Report (MMR) for predictions, as future access might be uncertain.

Finally, the text suggests using TensorFlow's `model.save()` for saving models when working with Keras, highlighting the need to adapt the workflow for different ML frameworks and dataset sizes. The overarching goal is to improve model performance, such as reducing RMSE for predicting used car auction prices, by leveraging advanced ML techniques and cloud-based resources.



When loading data into DataFrames using the `wget` command, ensure the file location begins with `./`, indicating the current directory. After loading datasets into DataFrames, verify the data with the `head()` method. An unexpected column, `Unnamed: 0`, often appears due to previous indexing and should be dropped during preprocessing. You can use Pandas to read directly from Google Cloud Storage, but `wget` provides a local copy, which may be more advantageous depending on your workflow.

In this project, three datasets are used: training, validation, and test. The training dataset is for model training, the validation dataset for model evaluation, and the test dataset for final performance verification. The final model is chosen based on validation performance but must be tested on an independent test dataset to ensure unbiased results. Data distributions across these datasets should be similar to avoid performance discrepancies.

The Scikit-Learn pipeline involves data preparation, model training, and evaluation. The data processing includes splitting the DataFrame into labels and features, dropping unnecessary columns like `Unnamed: 0` and `mmr`, and transforming data using `ColumnTransformer` with `OneHotEncoder` for categorical columns and `MinMaxScaler` for numeric columns. The model used is linear regression, structured in a pipeline to streamline preprocessing and training.

Evaluate the model using metrics like R2, RMSE, and MAE. An R2 score of 0.876 indicates that features explain 87.6% of label variability, but the RMSE of 3,384.60 exceeds the business goal of less than $2,000. Consistent data splits and training processes are crucial to avoid randomness affecting model comparisons.

Feature engineering can significantly improve model performance. Addressing issues like null values and unrelated features can enhance results. For instance, the `condition` column had a -1.0 value, likely a placeholder, which can be handled by creating a binary feature or bucketizing values. The `KBinsDiscretizer` can be used for this, transforming `condition` into one-hot encoded buckets.

Warnings about unknown categories, such as in `trim` and `body`, suggest discrepancies between training and validation datasets. The `OneHotEncoder` parameter `handle_unknown='infrequent_if_exist'` helps manage unknown categories by assigning them to an infrequent category, adjustable with `min_frequency`.

Feature crosses, such as combining `model` and `trim`, can provide more meaningful insights. For example, identifying a car requires both features, as trims like "LX" and "EX-L" can exist across different models. This approach enhances feature representation and model accuracy.

Overall, focusing on preprocessing, feature engineering, and careful data management can lead to improved model performance, even when using simple models like linear regression.



In machine learning, feature crosses are synthetic features created by combining two or more features to capture interactions between them. This is useful when using one-hot encoding, which treats each feature independently. For example, combining "model" and "trim" into a "model_trim" feature allows a model to consider both values simultaneously. This approach can improve model performance, as demonstrated by reducing RMSE by 2% in a linear regression model.

Hyperparameter tuning is another strategy for model improvement, involving adjusting parameters that define model architecture and training processes. Common strategies include grid search, random search, and Bayesian search. Grid search tries all combinations within a specified range, ensuring the best parameters within that range but can be computationally expensive. Random search selects a subset of combinations, offering faster results but potentially missing the optimal parameters. Bayesian search uses initial model evaluations to guide subsequent selections, making it more efficient than random search.

In scikit-learn, hyperparameter tuning can be implemented using grid search or random search. An example involves tuning parameters like the number of buckets for features and the minimum frequency for one-hot encoding. Halving grid search, an efficient variant, trains models on small data subsets, retaining only the best-performing ones for further training. This balances computational efficiency with the risk of missing optimal models.

The process of hyperparameter tuning in scikit-learn involves defining candidate ranges for parameters and using cross-validation to evaluate models. The best model's performance is then assessed on a validation dataset, with significant improvements noted through feature engineering and hyperparameter tuning.

Keras offers preprocessing layers similar to scikit-learn transformers, allowing data preprocessing to be integrated into the model architecture. This streamlines the pipeline and facilitates model deployment. Keras Tuner, a package for hyperparameter tuning, supports Bayesian optimization for efficient model improvement.

Overall, combining feature engineering with systematic hyperparameter tuning can significantly enhance machine learning model performance, as demonstrated by the reduction in RMSE from over 3,300 to 2,915.02 in the discussed example. Further exploration of new features and hyperparameters can lead to additional improvements. However, evaluating the final model on a test dataset is crucial before deployment, ensuring its effectiveness in real-world applications. The text also hints at exploring new model architectures using Keras for further enhancements.



In Chapter 8, the focus is on improving custom model performance in Keras by re-creating preprocessing pipelines from scikit-learn. Key transformations include one-hot encoding categorical features, bucketizing numeric features using the `Discretization` layer, and creating feature crosses with the `HashedCrossing` layer. The `Discretization` layer in Keras can adapt to data using the `adapt()` method, similar to `KBinsDiscretizer` in scikit-learn. For categorical columns, the `StringLookup` layer is used for encoding, with options for one-hot encoding or integer encoding.

For feature crossing, Keras offers the `HashedCrossing` layer, which automates the process by hashing categorical features into bins. This approach is efficient but requires careful consideration of the number of bins to balance model complexity and performance.

The Functional API in Keras is recommended for models with diverse preprocessing needs. It allows for defining multiple input layers for different feature types. Inputs are categorized into numeric and categorical, with appropriate data types set using `tf.keras.Input`. Preprocessing layers are then created for each feature, one-hot encoding categorical columns and bucketizing numeric columns.

Feature engineering is further enhanced with feature crosses using `HashedCrossing` layers. This process involves hashing combinations of features into a specified number of bins, which can be adjusted for optimal performance. The number of bins is a potential hyperparameter for tuning.

Once preprocessing layers are defined, they are concatenated into a single input layer for the neural network. The model architecture is constructed using dense layers with ReLU activation, culminating in a single output neuron for regression tasks. The model is compiled with the Adam optimizer and mean squared error (MSE) loss function.

Training involves creating `tf.data.Dataset` objects for training and validation, with specified batch sizes. The model is trained using the `fit()` method, and performance is assessed based on MSE and RMSE metrics. Initial results may vary due to randomness in model initialization, but performance is comparable to scikit-learn models pre-tuning.

For hyperparameter tuning, the Keras Tuner package is utilized. After installing the package, a `build_model` function is created to define a model with hyperparameters for tuning. This function uses `hp.Int` for defining integer hyperparameters, allowing for a range of neuron counts in hidden layers. The function returns a compiled model based on the hyperparameters.

The tuning process is managed by a `BayesianOptimization` tuner, which aims to minimize validation loss. The tuner explores different hyperparameter configurations, training each candidate model for a specified number of epochs. This approach identifies promising architectures without exhaustive search, leveraging Bayesian optimization for efficiency.

Overall, the chapter emphasizes the integration of preprocessing and model building in Keras, highlighting the flexibility of the Functional API and the potential for performance gains through hyperparameter tuning.



The text discusses hyperparameter tuning and model improvement using Keras Tuner and BigQuery ML. It begins with an example of tuning a model with Keras Tuner, highlighting the variability of results due to randomness. The process involves retrieving the best hyperparameters and using Keras Tuner's `hypermodel.build()` method to recreate the model. Early stopping is employed to prevent overfitting, and further training reduces the validation RMSE to below 2,000, meeting initial goals.

The importance of using a test dataset, which is unseen during training, is emphasized for final model verification. If the model performs well on the test dataset, it's ready for deployment; otherwise, a new data split might be necessary.

The text shifts to BigQuery ML, revisiting a model initially created with scikit-learn and Keras. It outlines loading car auction data into BigQuery, creating datasets and tables, and performing feature engineering. BigQuery ML automatically handles one-hot encoding for string columns and provides functions like `ML.BUCKETIZE` and `ML.QUANTILE_BUCKETIZE` for bucketizing numeric features. Feature crosses are implemented using `ML.FEATURE_CROSS`.

To train a linear regression model in BigQuery ML, the `TRANSFORM` clause is used to integrate data transformations into the model, ensuring consistency during prediction. The `CREATE MODEL` statement includes the transformation SQL and model options. Overfitting is identified as a challenge due to the large number of features from feature crosses, leading to a high RMSE on the validation dataset.

The text explains regularization techniques to address overfitting, focusing on dropout and L1 regularization. Regularization reduces model complexity, balancing the original loss function with a penalty term based on weight values. L1 regularization uses the sum of absolute weights, while L2 uses the sum of squares. Elastic net regularization combines both.

Hyperparameter tuning in BigQuery ML involves setting the `num_trials` option and tuning specific hyperparameters like `dropout`, `l1_reg`, and `hidden_units`. The text encourages exploring other hyperparameters and provides guidance on configuring tuning jobs, including setting `num_parallel_trials` for parallel execution.

Overall, the text provides a detailed walkthrough of improving model performance through hyperparameter tuning and regularization, leveraging tools like Keras Tuner and BigQuery ML for efficient model development and evaluation.



The text discusses techniques for improving custom model performance, focusing on regularization, dropout, and hyperparameter tuning in BigQuery ML. L1 and L2 regularization are used to control model complexity, with L2 pushing weights to smaller values and L1 setting non-influential weights to zero. Dropout, applied during training, turns off a percentage of neurons to prevent overfitting, though it can also be used at prediction time to represent model uncertainty.

Hyperparameter tuning in BigQuery ML is illustrated with a SQL example for a neural network model. The `CREATE MODEL` statement includes options for model type, optimizer, and hyperparameter candidates, such as hidden units and dropout rates. The tuning process involves multiple trials to find the optimal model configuration based on objectives like mean squared error.

The text also covers tools for handling large models and datasets, highlighting cloud services like Vertex AI, Amazon SageMaker, and Azure Machine Learning for efficient training and tuning. These platforms offer hyperparameter tuning services using techniques like Bayesian optimization.

The text then transitions to a broader discussion on data science and machine learning (ML), emphasizing the importance of structured and unstructured data. It introduces generative AI, which creates data like images and text, and explores the complexity of understanding large models. Examples include image classification with the MNIST dataset and text data processing using one-hot encoding and n-grams.

For image data, pixel values are used as numeric inputs for ML models. The MNIST dataset is a classic example for handwritten digit recognition, illustrating multiclass classification. For text data, converting words to numeric data can be done with one-hot encoding or n-grams, which capture sequences of words to improve model understanding.

Overall, the text provides insights into enhancing model performance and navigating the evolving landscape of ML tools and techniques, encouraging further exploration of topics like unstructured data and generative AI.



The text explores various advanced concepts in data science and machine learning, focusing on techniques for handling text data, generative AI, explainable AI, and ML operations.

**Text Data Processing:**
- **N-grams and Word Embeddings:** N-grams capture context by combining words (e.g., "won the lottery"). Word embeddings represent words in multi-dimensional space, capturing semantic relationships (e.g., "dog" and "puppy" are close).
- **BERT:** A popular method for converting text into numeric input for models, useful in processing text data.

**Generative AI:**
- **Discriminative vs. Generative Models:** Discriminative models classify data, while generative models create data from labels (e.g., generating images from text prompts).
- **Applications and Tools:** Generative AI powers chatbots like ChatGPT and Bard, utilizing large language models (LLMs) with vast datasets and parameters.
- **Ethical Considerations:** There are ongoing discussions about the ethical use of generative AI, with resources like ChatGPT 101 available for further learning.

**Explainable AI (XAI):**
- **Intrinsic vs. Post Hoc Techniques:** Intrinsic techniques use model structure for explanations (e.g., linear models), while post hoc techniques analyze model predictions.
- **Local and Global Techniques:** Local techniques explain individual predictions, and global techniques explain model behavior over datasets.
- **Model-Agnostic and Model-Specific Techniques:** Model-agnostic methods like permutation feature importance (PFI) alter data to understand predictions, while model-specific methods like integrated gradients explain neural network decisions.

**ML Operations (MLOps):**
- **Production Challenges:** Beyond model training, MLOps involves managing infrastructure, deployment, and monitoring.
- **Collaboration and Communication:** Sharing information about tools, data sources, and preprocessing is crucial for effective collaboration in ML projects.
- **Continuous Training and Evaluation:** Models must be retrained and evaluated regularly to handle data and concept drift, ensuring they remain effective over time.

**Key Concepts:**
- **Data Drift:** Changes in data distribution can affect model performance.
- **Concept Drift:** Changes in the relationship between features and labels over time.
- **Continuous Training:** Regular retraining of models based on time or performance criteria.
- **Continuous Evaluation:** Monitoring model performance with new data to decide when retraining is necessary.

These concepts provide a comprehensive understanding of advanced data science techniques, emphasizing the importance of context, ethical considerations, and operational management in deploying machine learning models effectively.



The text provides an extensive overview of various machine learning (ML) concepts, techniques, and tools, focusing on model building, evaluation, and deployment. It covers the use of different ML frameworks such as BigQuery ML, Keras, and scikit-learn, emphasizing hyperparameter tuning and feature engineering. Key ML concepts like data preprocessing, feature selection, and model evaluation metrics (e.g., precision, recall, F1-score) are highlighted, along with the importance of exploratory data analysis (EDA) and data transformation.

The document discusses the use of Vertex AI for building custom ML models, detailing processes like data loading, cleaning, and feature transformation using Pandas and scikit-learn. It also explores the application of neural networks and logistic regression for tasks such as customer churn prediction and fraud detection, showcasing the use of AutoML and low-code/no-code ML solutions.

Data types and structures, including structured, unstructured, and semistructured data, are defined, with emphasis on their role in decision-making and model training. The text also touches on advanced topics like explainable AI (XAI), generative AI, and the integration of ML models into business processes.

Various ML use cases are presented, such as advertising media channel sales, fraud detection, and power plant production prediction. The importance of identifying business goals and use cases for ML projects is stressed, along with the significance of choosing the right ML approach—be it no-code, low-code, or custom code.

The text further explains essential ML workflow stages, including model selection, training, evaluation, and deployment, while also addressing the challenges of data drift and model staleness. The role of cloud-based platforms, such as Google Cloud's Vertex AI and Microsoft Azure ML, in facilitating ML model development and deployment is discussed.

Overall, the document serves as a comprehensive guide for ML practitioners, providing insights into various tools, techniques, and methodologies essential for successful ML implementation in diverse business scenarios.
