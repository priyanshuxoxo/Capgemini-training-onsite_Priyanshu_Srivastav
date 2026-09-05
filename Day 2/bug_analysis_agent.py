from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model


bug_analysis_prompt = ChatPromptTemplate.from_template("""
You are a Senior QA Bug Analysis Agent.

Analyze the defect:

{bug_description}

Provide:
1. Expected Behavior
2. Actual Behavior
3. Gap Analysis
4. Root Cause Analysis
5. Severity
6. Priority
7. Recommendations
""")

bug_analysis_agent = bug_analysis_prompt | chat_model