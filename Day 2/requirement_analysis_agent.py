from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

requirement="we have an food delivering online application , a customer should be able to login into the application, can search for an restraunt, add food items to the cart, apply a coupan, select a delivery address, make payment and can place the order." \
"the application should support payment option such as UPI,credit/debit cards, also cash on delivery option ,in coupan application , SAVE20 coupan on applying should give discount of 20 percent off on orders only above 500 rs, with the maximum discount upto 150." \
"if any payment fails the order should not be created, if the payment suceeds the customer should recieve an order confirmation with an order id."

requirement_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a software testing expert.

Analyze the requirement and provide:

1. Functional Requirements
2. Business Rules
3. Positive Test Scenarios
4. Negative Test Scenarios
5. Boundary Conditions
6. Validation Requirements
7. Assumptions
"""
    ),
    (
        "human",
        """
Requirement:

{requirement}
"""
    )
])

requirement_agent = requirement_prompt | chat_model