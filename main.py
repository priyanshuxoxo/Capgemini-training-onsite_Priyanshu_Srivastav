
from requirement_analysis_agent import requirement_analysis_agent
from test_case_generation import test_case_generation
from bug_analysis_agent import bug_analysis_agent
from bug_failure_report_agent import bug_failure_report_agent


requirement = """
We have a food delivery online application.

A customer should be able to:
- Login into the application
- Search for a restaurant
- Add food items to the cart
- Apply a coupon
- Select a delivery address
- Make payment
- Place an order

The application should support:
- UPI
- Credit cards
- Debit cards
- Cash on Delivery

Coupon Rules:
- SAVE20 coupon provides 20% discount
- Applicable only for orders above ₹500
- Maximum discount is ₹150

Payment Rules:
- If payment fails, order should not be created
- If payment succeeds, customer should receive an order confirmation with an order ID
"""

bug_description=""" 
A customer adds food worth ₹600 to the cart and applies SAVE20. Instead of giving ₹120 discount, the system gives ₹200 discount.
order was got failed still system generated order id.
"""
# ==========================================
# AGENT 1 - REQUIREMENT ANALYSIS
# ==========================================

print("\n" + "=" * 70)
print("AGENT 1 - REQUIREMENT ANALYSIS")
print("=" * 70)

analysis_response = requirement_analysis_agent.invoke({
    "requirement": requirement
})

analysis = analysis_response.content

print(analysis)


# ==========================================
# AGENT 2 - TEST CASE GENERATION
# ==========================================

print("\n" + "=" * 70)
print("AGENT 2 - TEST CASE GENERATION")
print("=" * 70)

test_case_response = test_case_generation.invoke({
    "requirement": requirement,
    "analysis": analysis
})

test_case_generation = test_case_response.content

print(test_case_generation)

print("\nFULL RESPONSE:")
print(test_case_response)

print("\nCONTENT:")
print(test_case_response.content)


# ==========================================
# AGENT 3 - BUGG ANALYSIS AGENT
# ==========================================

print("\n" + "=" * 70)
print("AGENT 3 - BUG ANALYSIS")
print("=" * 70)

bug_analysis_response = bug_analysis_agent.invoke({
    "bug_description":bug_description
})

bug_analysis_data = bug_analysis_response.content

print(bug_analysis_data)

print("\nFULL RESPONSE:")
print(bug_analysis_response)

print("\nCONTENT:")
print(bug_analysis_data)


# ==========================================
# AGENT 4 - BUGG FAILURE REPORT
# ==========================================

print("\n" + "=" * 70)
print("AGENT 4 - BUG FAILURE REPORT")
print("=" * 70)

bug_failure_response = bug_failure_report_agent.invoke({
    "bug_analysis": bug_analysis_data,
})

review = bug_failure_response.content

print(review)

print("\nFULL RESPONSE:")
print(bug_failure_response)

print("\nCONTENT:")
print(bug_failure_response.content)