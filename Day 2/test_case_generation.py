from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model




test_case_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a Senior QA Automation Engineer.

Generate comprehensive test cases from the given requirement and analysis.

For every test case provide:

1. Test Case ID
2. Test Scenario
3. Preconditions
4. Test Steps
5. Test Data
6. Expected Result
7. Priority (High/Medium/Low)
8. Test Type

Include:

- Positive Test Cases
- Negative Test Cases
- Boundary Test Cases
- Validation Test Cases

Ensure complete requirement coverage.

Do not assume unsupported functionality.
"""
    ),
    (
        "human",
        """
Requirement:

{requirement}

Requirement Analysis:

{analysis}
"""
    )
])


# Create the LangChain runnable
test_case_generation = test_case_prompt | chat_model