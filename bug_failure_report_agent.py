
from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

bug_report_prompt = ChatPromptTemplate.from_template("""
You are a QA Defect Reporting Agent.

Using the bug analysis below:

{bug_analysis}

Generate:

1. Defect ID
2. Title
3. Module
4. Severity
5. Priority
6. Preconditions
7. Steps to Reproduce
8. Expected Result
9. Actual Result
10. Business Impact
11. Recommendation
""")

bug_failure_report_agent = bug_report_prompt | chat_model